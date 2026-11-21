import { d as d_1, h as h_1, bg, a6, A as A_1, q as q_1, bA, bB, u as u_1, ah, S as S_1 } from "./index-B4ySybtH.js";
const picker = "N3r2";
const nativeEmoji = "BTWv";
const searchFloating = "XtCr";
const searchInput = "tLqW";
const skinTonePopup = "M7Nz";
const skinVariantButton = "ikvj";
const skinVariantImage = "tHuR";
const content = "GAST";
const categoryTitle = "kqmz";
const emojiGrid = "NTWY";
const emojiButton = "Acpt";
const noResults = "SbUi";
const m = {
    picker,
    nativeEmoji,
    searchFloating,
    searchInput,
    skinTonePopup,
    skinVariantButton,
    skinVariantImage,
    content,
    categoryTitle,
    emojiGrid,
    emojiButton,
    noResults
};
const gt = [
    "Smileys & Emotion",
    "People & Body",
    "Animals & Nature",
    "Food & Drink",
    "Travel & Places",
    "Activities",
    "Objects",
    "Symbols",
    "Flags"
];
const yt = [
    "",
    "1F3FB",
    "1F3FC",
    "1F3FD",
    "1F3FE",
    "1F3FF"
];
const U = "emoji-picker-recent";
const j = 32;
const N = (t)=>{
    try {
        return String.fromCodePoint(...t.split("-").map((e)=>parseInt(e, 16)));
    } catch  {
        return "";
    }
};
const I = (t)=>`https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${t.toLowerCase()}.png`;
const W = (t)=>{
    if (t) {
        return `${U}:${encodeURIComponent(t)}`;
    }
    return U;
};
const x = (t)=>{
    try {
        const e = localStorage.getItem(W(t));
        const n = e ? JSON.parse(e) : [];
        if (Array.isArray(n)) {
            return n.filter((o)=>typeof o === "string" && /^[0-9a-f]{1,6}(?:-[0-9a-f]{1,6}){0,15}$/i.test(o)).slice(0, j);
        }
        return [];
    } catch  {
        return [];
    }
};
const vt = (t, e)=>{
    try {
        localStorage.setItem(W(e), JSON.stringify(t.slice(0, j)));
    } catch  {}
};
const Et = (t, e)=>{
    const n = [];
    const o = {};
    for (const [i, d] of Object.entries(t)){
        o[i] = d.map((r)=>{
            const u = Array.isArray(r.s) ? r.s : [
                r.s
            ];
            const c = {
                unified: r.u,
                short_name: e[r.u]?.[0] ?? u[0],
                short_names: [
                    ...u,
                    ...e[r.u] ?? []
                ],
                category: i,
                skin_variations: r.v
            };
            n.push(c);
            return c;
        });
    }
    return {
        all: n,
        byCategory: o
    };
};
let k = null;
const jt = ()=>{
    const [t, e] = d_1(k);
    const [n, o] = d_1(!k);
    h_1(()=>{
        if (k) {
            return;
        }
        (async ()=>{
            try {
                const [d, r] = await Promise.all([
                    bg(()=>import("./emoji-data-DrtcpqC0.js"), []),
                    bg(()=>import("./emoji-ru-C3Oi2iH3.js"), [])
                ]);
                const u = Et(d.default, r.default);
                k = u;
                e(u);
            } catch (d) {
                console.error("Failed to load emoji data:", d);
            } finally{
                o(false);
            }
        })();
    }, []);
    return a6(()=>({
            all: t?.all ?? [],
            byCategory: t?.byCategory ?? {},
            isLoading: n
        }), [
        t,
        n
    ]);
};
const kt = (t, e)=>{
    const [n, o] = d_1([]);
    const i = A_1({
        scope: e,
        items: []
    });
    h_1(()=>{
        o(x(e));
    }, [
        e
    ]);
    const recentEmojis = a6(()=>n.slice(0, j).map((c)=>{
            const h = t.find((f)=>f.unified === c || Object.values(f.skin_variations ?? {}).includes(c));
            return h && (h.unified === c ? h : {
                ...h,
                unified: c,
                skin_variations: undefined
            });
        }).filter((c)=>c !== undefined), [
        n,
        t
    ]);
    const addRecentEmoji = q_1((c)=>{
        if (i.current.scope !== e) {
            i.current = {
                scope: e,
                items: []
            };
        }
        if (!i.current.items.includes(c)) {
            i.current.items.unshift(c);
        }
    }, [
        e
    ]);
    const flushRecentEmojis = q_1(()=>{
        if (i.current.scope !== e || i.current.items.length === 0) {
            return;
        }
        const c = x(e);
        const f = [
            ...i.current.items
        ];
        for (const y of c){
            if (!f.includes(y)) {
                f.push(y);
            }
        }
        vt(f.slice(0, j), e);
        o(f.slice(0, j));
        i.current = {
            scope: e,
            items: []
        };
    }, [
        e
    ]);
    return {
        recentEmojis,
        addRecentEmoji,
        flushRecentEmojis
    };
};
const A = bA(false);
const _t = ({ emoji, onClick })=>{
    const n = bB(A);
    return u_1("button", {
        type: "button",
        className: m.emojiButton,
        onClick,
        "aria-label": emoji.short_name,
        title: emoji.short_name,
        children: n ? u_1("span", {
            className: m.nativeEmoji,
            "aria-hidden": "true",
            children: N(emoji.unified)
        }) : u_1("img", {
            src: I(emoji.unified),
            alt: emoji.short_name,
            loading: "lazy"
        })
    });
};
const $ = (t)=>{
    const e = [
        t.unified
    ];
    if (t.skin_variations) {
        for (const n of yt.slice(1)){
            const o = t.skin_variations[n];
            if (o) {
                e.push(o);
            }
        }
    }
    return e;
};
const Rt = ({ popup, onSelect, onClose })=>{
    const o = bB(A);
    const i = A_1(null);
    const d = $(popup.emoji);
    h_1(()=>{
        const r = (u)=>{
            if (i.current && !i.current.contains(u.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", r);
        return ()=>document.removeEventListener("mousedown", r);
    }, [
        onClose
    ]);
    return u_1("div", {
        ref: i,
        className: m.skinTonePopup,
        style: {
            left: popup.x,
            top: popup.y
        },
        children: d.map((r, u)=>u_1("button", {
                type: "button",
                "aria-label": [
                    "Без оттенка кожи",
                    "Светлый тон кожи",
                    "Умеренно светлый тон кожи",
                    "Средний тон кожи",
                    "Умеренно тёмный тон кожи",
                    "Тёмный тон кожи"
                ][u],
                className: m.skinVariantButton,
                onClick: ()=>onSelect(r, popup.emoji.short_name),
                children: o ? u_1("span", {
                    className: m.nativeEmoji,
                    "aria-hidden": "true",
                    children: N(r)
                }) : u_1("img", {
                    src: I(r),
                    alt: "",
                    className: m.skinVariantImage
                })
            }, r))
    });
};
const z = ({ emojis, onEmojiClick })=>u_1("div", {
        className: m.emojiGrid,
        children: emojis.map((n)=>u_1(_t, {
                emoji: n,
                onClick: (o)=>onEmojiClick(n, o)
            }, n.unified))
    });
const Nt = ({ name, emojis, onEmojiClick, sectionRef })=>u_1("div", {
        ref: sectionRef,
        className: m.categorySection,
        children: [
            u_1("div", {
                className: m.categoryTitle,
                children: name
            }),
            u_1(z, {
                emojis,
                onEmojiClick
            })
        ]
    });
const Tt = ({ value, onChange, placeholder = "Поиск эмодзи" })=>u_1("div", {
        className: m.searchFloating,
        children: u_1("input", {
            type: "text",
            className: m.searchInput,
            placeholder,
            "aria-label": placeholder,
            value,
            onInput: (o)=>onChange(o.target.value)
        })
    });
const bt = {
    "Smileys & Emotion": "Смайлы и эмоции",
    "People & Body": "Люди и жесты",
    "Animals & Nature": "Животные и природа",
    "Food & Drink": "Еда и напитки",
    "Travel & Places": "Путешествия",
    Activities: "Занятия",
    Objects: "Предметы",
    Symbols: "Символы",
    Flags: "Флаги"
};
export const EmojiPicker = ({ onEmojiSelect, onClose, width = 280, height = 380, excludeCategories = [], native = false, recentScope })=>{
    const [u, c] = d_1("apple");
    const [h, onChange] = d_1("");
    const [y, b] = d_1(null);
    const ref = A_1(null);
    const B = A_1(null);
    const X = A_1({});
    const { all, byCategory, isLoading } = jt();
    const { recentEmojis, addRecentEmoji, flushRecentEmojis } = kt(all, recentScope);
    h_1(()=>()=>{
            flushRecentEmojis();
            onClose?.();
        }, [
        flushRecentEmojis,
        onClose
    ]);
    const P = a6(()=>{
        if (!h.trim()) {
            return null;
        }
        const a = h.toLowerCase();
        return all.filter((l)=>!excludeCategories.includes(l.category) && (l.short_names.some((p)=>p.toLowerCase().includes(a)) || N(l.unified).includes(a))).slice(0, 100);
    }, [
        h,
        all,
        excludeCategories
    ]);
    const Q = a6(()=>{
        if (u === "apple") {
            const a = [];
            if (recentEmojis.length > 0) {
                a.push({
                    id: "recent",
                    name: "Недавние",
                    emojis: recentEmojis
                });
            }
            for (const l of gt){
                if (excludeCategories.includes(l)) {
                    continue;
                }
                const p = byCategory[l] || [];
                if (p.length !== 0) {
                    a.push({
                        id: l,
                        name: bt[l] ?? l,
                        emojis: p
                    });
                }
            }
            return a;
        }
        return [];
    }, [
        u,
        recentEmojis,
        byCategory,
        excludeCategories
    ]);
    const onEmojiClick = q_1((a, l)=>{
        const p = $(a);
        if (p.length > 1) {
            const H = l.currentTarget;
            const v = B.current?.getBoundingClientRect();
            const F = H.getBoundingClientRect();
            if (v) {
                const G = p.length * 36 + (p.length - 1) * 4 + 16;
                const x_1 = Math.max(G / 2 + 4, Math.min(v.width - G / 2 - 4, F.left - v.left + F.width / 2));
                const y_1 = Math.max(4, Math.min(v.height - 56, F.top - v.top - 60));
                b({
                    emoji: a,
                    x: x_1,
                    y: y_1
                });
            }
            return;
        }
        w(a.unified, a.short_name);
    }, []);
    const w = q_1((a, name)=>{
        addRecentEmoji(a);
        b(null);
        onEmojiSelect({
            unified: a,
            emoji: N(a),
            name,
            imageUrl: native ? "" : I(a)
        });
    }, [
        onEmojiSelect,
        addRecentEmoji,
        native
    ]);
    const Y = ()=>{
        if (isLoading) {
            return u_1(ah, {});
        }
        if (h && P) {
            return P.length === 0 ? u_1("div", {
                className: m.noResults,
                children: "Ничего не найдено"
            }) : u_1(z, {
                emojis: P,
                onEmojiClick
            });
        }
        return u_1(S_1, {
            children: Q.map((a)=>u_1(Nt, {
                    name: a.name,
                    emojis: a.emojis,
                    onEmojiClick,
                    sectionRef: (l)=>{
                        X.current[a.id] = l;
                    }
                }, a.id))
        });
    };
    return u_1(A.Provider, {
        value: native,
        children: u_1("div", {
            className: m.picker,
            role: "dialog",
            "aria-label": "Выбор эмодзи",
            style: {
                width,
                height
            },
            ref: B,
            children: [
                y && u_1(Rt, {
                    popup: y,
                    onSelect: w,
                    onClose: ()=>b(null)
                }),
                u_1("div", {
                    className: m.content,
                    ref,
                    children: Y()
                }),
                u_1(Tt, {
                    value: h,
                    onChange
                })
            ]
        })
    });
};
export { EmojiPicker as default };
