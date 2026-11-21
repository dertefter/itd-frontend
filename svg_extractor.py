"""SVG Extractor module.

Extracts SVG icons and graphics from minified React/JSX JavaScript bundles.
Handles React createElement / jsx calls, fragments, ternaries, and conditional expressions
without hanging on complex ASTs.
"""

from re import compile as re_compile
import re

_SVG_TAGS = {
    'svg', 'path', 'circle', 'rect', 'g', 'line', 'polyline', 'polygon',
    'ellipse', 'defs', 'clipPath', 'use', 'mask', 'symbol',
    'linearGradient', 'radialGradient', 'stop', 'text', 'tspan',
}

_ATTR_MAP = {
    'strokeWidth': 'stroke-width',
    'strokeLinecap': 'stroke-linecap',
    'strokeLinejoin': 'stroke-linejoin',
    'strokeDasharray': 'stroke-dasharray',
    'strokeDashoffset': 'stroke-dashoffset',
    'strokeMiterlimit': 'stroke-miterlimit',
    'strokeOpacity': 'stroke-opacity',
    'fillRule': 'fill-rule',
    'fillOpacity': 'fill-opacity',
    'clipPath': 'clip-path',
    'clipRule': 'clip-rule',
    'className': 'class',
    'fontSize': 'font-size',
    'fontFamily': 'font-family',
    'dominantBaseline': 'dominant-baseline',
    'textAnchor': 'text-anchor',
}

_KEEP_CAMEL = {
    'viewBox', 'preserveAspectRatio', 'gradientUnits', 'gradientTransform',
    'patternUnits', 'patternTransform', 'clipPathUnits',
    'markerWidth', 'markerHeight', 'refX', 'refY', 'xmlns',
}

_RE_SVG_CALL = re_compile(r'(?<!["\w])\w{1,3}\("svg",')


def _svg_attr(name: str) -> str:
    """Map camelCase JSX attribute names to standard SVG kebab-case."""
    if name in _KEEP_CAMEL or name.startswith('xmlns') or '-' in name:
        return name
    return _ATTR_MAP.get(name, name)


def _skip_balanced(text: str, pos: int, op: str, cl: str) -> int:
    """Return position immediately following the matching closing delimiter."""
    depth = 0
    i = pos
    n = len(text)
    while i < n:
        c = text[i]
        if c in ('"', "'", '`'):
            q = c
            i += 1
            while i < n:
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == q:
                    i += 1
                    break
                i += 1
            continue
        if c == op:
            depth += 1
        elif c == cl:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return n


def _read_str(text: str, pos: int) -> tuple[str, int]:
    """Read a quoted string literal (supports ', \", and `)."""
    q = text[pos]
    i = pos + 1
    buf = []
    n = len(text)
    while i < n:
        c = text[i]
        if c == '\\' and i + 1 < n:
            nc = text[i + 1]
            buf.append({'n': '\n', 't': '\t', 'r': '\r'}.get(nc, nc))
            i += 2
        elif c == q:
            return ''.join(buf), i + 1
        else:
            buf.append(c)
            i += 1
    return ''.join(buf), i


def _parse_val(text: str, pos: int):
    """Parse a JavaScript literal, object, array, or expression value."""
    n = len(text)
    while pos < n and text[pos] in ' \t\n\r':
        pos += 1
    if pos >= n:
        return None, pos

    c = text[pos]
    if c in ('"', "'", '`'):
        return _read_str(text, pos)
    if c == '{':
        end = _skip_balanced(text, pos, '{', '}')
        return _parse_obj(text, pos)[0], end
    if c == '[':
        end = _skip_balanced(text, pos, '[', ']')
        items = _parse_arr(text[pos + 1:end - 1])
        return ('_arr', items), end
    if c == 'n' and text[pos:pos + 4] == 'null':
        return None, pos + 4
    if c == 't' and text[pos:pos + 4] == 'true':
        return True, pos + 4
    if c == 'f' and text[pos:pos + 5] == 'false':
        return False, pos + 5
    if c.isdigit() or (c == '-' and pos + 1 < n and text[pos + 1].isdigit()):
        j = pos + (1 if c == '-' else 0)
        while j < n and (text[j].isdigit() or text[j] == '.'):
            j += 1
        return text[pos:j], j

    # Check for direct element creation call e.g. c("path", ...) or jsx(...)
    m = re.match(r'([!\w]+)\(', text[pos:])
    if m:
        full_match = m.group(1)
        fn_match = re.search(r'\w+$', full_match)
        if fn_match:
            fn = fn_match.group(0)
            paren = pos + len(full_match)
            end = _skip_balanced(text, paren, '(', ')')
            return ('_el', fn, text[paren + 1:end - 1]), end

    # Plain expression / variable / identifier — read up to outer delimiter
    j = pos
    paren_depth = 0
    while j < n:
        cj = text[j]
        if cj in ('"', "'", '`'):
            j = _skip_balanced(text, j, cj, cj)
            continue
        if cj in '([{':
            paren_depth += 1
        elif cj in ')]}':
            if paren_depth > 0:
                paren_depth -= 1
            else:
                break
        elif cj == ',' and paren_depth == 0:
            break
        j += 1

    if j <= pos:
        j = pos + 1

    expr = text[pos:j].strip()
    return ('_var', expr), j


def _parse_obj(text: str, pos: int):
    """Parse a JS object literal { key: value, ... }."""
    result = {}
    i = pos + 1  # skip '{'
    n = len(text)
    while i < n:
        while i < n and text[i] in ' \t\n\r,':
            i += 1
        if i >= n or text[i] == '}':
            return result, i + 1

        start_i = i
        if text[i] in ('"', "'", '`'):
            key, i = _read_str(text, i)
        else:
            j = i
            while j < n and text[j] not in ':} \t\n':
                j += 1
            key = text[i:j]
            i = j

        while i < n and text[i] in ' \t':
            i += 1
        if i >= n or text[i] != ':':
            # Skip invalid entry to avoid stalling
            if i <= start_i:
                i = start_i + 1
            continue

        i += 1  # skip ':'
        while i < n and text[i] in ' \t':
            i += 1

        val_start = i
        val, i = _parse_val(text, i)
        if i <= val_start:
            i = val_start + 1

        result[key] = val

    return result, i + 1


def _parse_arr(inner: str):
    """Parse elements of a JS array [ item1, item2, ... ]."""
    items = []
    pos = 0
    n = len(inner)
    while pos < n:
        while pos < n and inner[pos] in ' \t\n\r,':
            pos += 1
        if pos >= n:
            break

        start_pos = pos
        val, pos = _parse_val(inner, pos)
        items.append(val)
        if pos <= start_pos:
            pos = start_pos + 1

    return items


def _find_elements_in_val(val):
    """Recursively yield all ('_el', fn, args) in a value (arrays, fragments, ternaries, etc.)."""
    if isinstance(val, tuple):
        if val[0] == '_el':
            yield val
        elif val[0] == '_arr':
            for item in val[1]:
                yield from _find_elements_in_val(item)
        elif val[0] == '_var':
            # Handle nested calls in complex expressions e.g. s ? c(...) : c(...)
            expr_text = val[1]
            for m in re.finditer(r'(?:^|[^"\w])(\w+)\(', expr_text):
                fn = m.group(1)
                paren = m.end() - 1
                end = _skip_balanced(expr_text, paren, '(', ')')
                args = expr_text[paren + 1:end - 1]
                yield ('_el', fn, args)
    elif isinstance(val, list):
        for item in val:
            yield from _find_elements_in_val(item)


def _el_to_xml(args_str: str, indent: int = 0) -> str | None:
    """Convert React createElement arguments to an XML string."""
    pos = 0
    n = len(args_str)
    while pos < n and args_str[pos] in ' \t':
        pos += 1
    if pos >= n or args_str[pos] not in ('"', "'", '`'):
        return None

    tag, pos = _read_str(args_str, pos)

    while pos < n and args_str[pos] in ', \t':
        pos += 1

    props = {}
    if pos < n and args_str[pos] == '{':
        props, _ = _parse_obj(args_str, pos)

    children_xml = []
    pad = '  ' * indent

    if 'children' in props:
        for el in _find_elements_in_val(props['children']):
            child_xml = _el_to_xml(el[2], indent + 1 if tag in _SVG_TAGS else indent)
            if child_xml:
                children_xml.append(child_xml)

    # If this is a Fragment or custom wrapper, return its rendered children directly
    if tag not in _SVG_TAGS:
        return '\n'.join(children_xml) if children_xml else None

    attrs = []
    for k, v in props.items():
        if k == 'children':
            continue
        elif isinstance(v, str):
            attrs.append(f'{_svg_attr(k)}="{v}"')
        elif isinstance(v, (int, float)):
            attrs.append(f'{_svg_attr(k)}="{v}"')
        elif isinstance(v, tuple) and v[0] == '_var' and _svg_attr(k) in ('width', 'height'):
            attrs.append(f'{_svg_attr(k)}="24"')

    # Ensure root svg always has xmlns for valid standalone SVG files
    if tag == 'svg' and not any(a.startswith('xmlns=') for a in attrs):
        attrs.insert(0, 'xmlns="http://www.w3.org/2000/svg"')

    attr_str = (' ' + ' '.join(attrs)) if attrs else ''
    if children_xml:
        inner_lines = '\n'.join(children_xml)
        return f'{pad}<{tag}{attr_str}>\n{inner_lines}\n{pad}</{tag}>'
    return f'{pad}<{tag}{attr_str}/>'


def extract_svgs(js_content: str) -> list[str]:
    """Return a list of SVG XML strings extracted from minified React JS."""
    results = []
    for m in _RE_SVG_CALL.finditer(js_content):
        paren = js_content.index('(', m.start())
        end = _skip_balanced(js_content, paren, '(', ')')
        xml = _el_to_xml(js_content[paren + 1:end - 1])
        if xml:
            results.append(xml)
    return results
