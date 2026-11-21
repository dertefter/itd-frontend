import { d as d_1, A, h as h_1, u as u_1, S as S_1, $ as $_1 } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
async function g(n) {
    const t = await fetch(n, {
        credentials: "include",
        cache: "no-store"
    });
    if (!t.ok) {
        throw new Error(t.status === 404 ? "Документ не найден" : "Не удалось загрузить документ");
    }
    return t.json();
}
const p = {
    async list () {
        return (await g("/api/legal-documents?scope=social")).documents;
    },
    async current (n) {
        return (await g(`/api/legal-documents/social/${encodeURIComponent(n)}`)).document;
    },
    async versions (n) {
        return (await g(`/api/legal-documents/social/${encodeURIComponent(n)}/versions`)).versions;
    },
    async version (n, t) {
        return (await g(`/api/legal-documents/social/${encodeURIComponent(n)}/versions/${encodeURIComponent(t)}`)).document;
    }
};
function N(n) {
    const t = new Date(`${n}T00:00:00Z`);
    if (Number.isNaN(t.getTime())) {
        return n;
    }
    return t.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}
const page = "OSVJ";
const back = "fZNH";
const title = "O7vm";
const lead = "Uo4k";
const date = "hgFG";
const summary = "zCmq";
const notice = "LS6Y";
const list = "sZ1F";
const row = "vQLg";
const rowMain = "LmEu";
const rowTitle = "oIlp";
const rowDate = "QMVC";
const actions = "BHGj";
const action = "Kv6F";
const body = "d3r6";
const lines = "KKvH";
const state = "rE0c";
const retry = "dmFz";
const r = {
    page,
    back,
    title,
    lead,
    date,
    summary,
    notice,
    list,
    row,
    rowMain,
    rowTitle,
    rowDate,
    actions,
    action,
    body,
    lines,
    state,
    retry
};
function C({ fallback = "/legal" }) {
    return u_1("button", {
        className: r.back,
        onClick: ()=>{
            if (window.history.length > 1) {
                return window.history.back();
            }
            return $_1(fallback);
        },
        children: [
            u_1(I_1, {
                size: 20
            }),
            "Назад"
        ]
    });
}
function h({ error, retry }) {
    return u_1("div", {
        className: r.state,
        children: [
            error ?? "Загрузка...",
            retry && u_1("div", {
                children: u_1("button", {
                    className: r.retry,
                    onClick: retry,
                    children: "Попробовать снова"
                })
            })
        ]
    });
}
function O(n) {
    if (!n.includes("\\") && /^(https?:\/\/|mailto:|\/(?!\/))/i.test(n)) {
        return n;
    }
    return "#";
}
function v(n) {
    const t = [];
    const s = /\[([^\]]+)]\(([^)]+)\)/g;
    let o = 0;
    for (const l of n.matchAll(s)){
        const a = l.index ?? 0;
        if (a > o) {
            t.push(n.slice(o, a));
        }
        const d = O(l[2]);
        t.push(u_1("a", {
            href: d,
            target: d.startsWith("http") ? "_blank" : undefined,
            rel: d.startsWith("http") ? "noopener noreferrer" : undefined,
            children: l[1]
        }));
        o = a + l[0].length;
    }
    if (o < n.length) {
        t.push(n.slice(o));
    }
    return t;
}
function Q({ block }) {
    if (block.type === "heading") {
        return block.level === 3 ? u_1("h3", {
            children: block.text
        }) : u_1("h2", {
            children: block.text
        });
    }
    if (block.type === "list") {
        return u_1("ul", {
            children: block.items.map((t, s)=>u_1("li", {
                    children: v(t)
                }, s))
        });
    }
    if (block.type === "lines") {
        return u_1("div", {
            className: r.lines,
            children: block.items.map((t, s)=>u_1("span", {
                    children: v(t)
                }, s))
        });
    }
    return u_1("p", {
        children: v(block.text)
    });
}
export function LegalDocumentsPage({ path }) {
    const [t, s] = d_1(null);
    const [o, l] = d_1("");
    const a = A(0);
    const d = ()=>{
        const i = ++a.current;
        l("");
        p.list().then((c)=>{
            if (i === a.current) {
                s(c);
            }
        }).catch((c)=>{
            if (i === a.current) {
                l(c.message);
            }
        });
    };
    h_1(()=>(d(), ()=>{
            a.current++;
        }), []);
    return u_1("main", {
        className: r.page,
        "data-route": path,
        children: [
            u_1(C, {
                fallback: "/"
            }),
            u_1("h1", {
                className: r.title,
                children: "Правовые документы"
            }),
            u_1("p", {
                className: r.lead,
                children: "Здесь собраны действующие документы сервиса и предыдущие редакции."
            }),
            o ? u_1(h, {
                error: o,
                retry: d
            }) : t ? u_1("ul", {
                className: r.list,
                children: t.map((i)=>u_1("li", {
                        children: u_1("a", {
                            className: r.row,
                            href: `/legal/${i.slug}`,
                            children: [
                                u_1("span", {
                                    className: r.rowMain,
                                    children: [
                                        u_1("span", {
                                            className: r.rowTitle,
                                            children: i.title
                                        }),
                                        u_1("span", {
                                            className: r.summary,
                                            children: i.summary
                                        })
                                    ]
                                }),
                                u_1("span", {
                                    className: r.rowDate,
                                    children: [
                                        "Редакция от ",
                                        N(i.documentDate ?? i.effectiveAt)
                                    ]
                                })
                            ]
                        })
                    }, i.slug))
            }) : u_1(h, {})
        ]
    });
}
export function LegalDocumentPage({ slug = "", version }) {
    const [s, o] = d_1(null);
    const [l, a] = d_1(null);
    const [d, i] = d_1("");
    const c = A(0);
    const m = ()=>{
        const f = ++c.current;
        i("");
        o(null);
        a(null);
        const w = version ? p.version(slug, version) : p.current(slug);
        Promise.all([
            w,
            p.versions(slug)
        ]).then(([y, b])=>{
            if (f === c.current) {
                o(y);
                a(b.find((A)=>A.current) ?? null);
            }
        }).catch((y)=>{
            if (f === c.current) {
                i(y.message);
            }
        });
    };
    h_1(()=>(m(), ()=>{
            c.current++;
        }), [
        slug,
        version
    ]);
    const L = !!(s && l && s.version !== l.version);
    return u_1("main", {
        className: r.page,
        children: [
            u_1(C, {}),
            d ? u_1(h, {
                error: d,
                retry: m
            }) : s ? u_1(S_1, {
                children: [
                    u_1("h1", {
                        className: r.title,
                        children: s.title
                    }),
                    u_1("p", {
                        className: r.date,
                        children: [
                            "Редакция от ",
                            N(s.documentDate ?? s.effectiveAt),
                            " · версия ",
                            s.version
                        ]
                    }),
                    L && u_1("div", {
                        className: r.notice,
                        children: [
                            "Вы открыли предыдущую редакцию документа. ",
                            u_1("a", {
                                href: `/legal/${slug}`,
                                children: "Перейти к действующей редакции"
                            }),
                            "."
                        ]
                    }),
                    s.publishedAt && u_1("p", {
                        className: r.date,
                        children: [
                            "Опубликовано ",
                            N(s.publishedAt.slice(0, 10))
                        ]
                    }),
                    u_1("div", {
                        className: r.actions,
                        children: u_1("a", {
                            className: r.action,
                            href: `/legal/${slug}/history`,
                            children: "История документа"
                        })
                    }),
                    u_1("article", {
                        className: r.body,
                        children: s.blocks.map((block, w)=>u_1(Q, {
                                block
                            }, w))
                    })
                ]
            }) : u_1(h, {})
        ]
    });
}
export function LegalHistoryPage({ slug = "" }) {
    const [t, s] = d_1(null);
    const [o, l] = d_1("");
    const a = A(0);
    const d = ()=>{
        const c = ++a.current;
        l("");
        s(null);
        p.versions(slug).then((m)=>{
            if (c === a.current) {
                s(m);
            }
        }).catch((m)=>{
            if (c === a.current) {
                l(m.message);
            }
        });
    };
    h_1(()=>(d(), ()=>{
            a.current++;
        }), [
        slug
    ]);
    const children = t?.[0]?.title ?? "История документа";
    return u_1("main", {
        className: r.page,
        children: [
            u_1(C, {
                fallback: `/legal/${slug}`
            }),
            u_1("h1", {
                className: r.title,
                children
            }),
            u_1("p", {
                className: r.lead,
                children: "История редакций документа"
            }),
            o ? u_1(h, {
                error: o,
                retry: d
            }) : t ? u_1("ul", {
                className: r.list,
                children: t.map((c)=>u_1("li", {
                        children: u_1("a", {
                            className: r.row,
                            href: c.current ? `/legal/${slug}` : `/legal/${slug}/versions/${c.version}`,
                            children: [
                                u_1("span", {
                                    className: r.rowTitle,
                                    children: c.current ? "Действующая редакция" : `Редакция ${c.version}`
                                }),
                                u_1("span", {
                                    className: r.rowDate,
                                    children: N(c.documentDate ?? c.effectiveAt)
                                })
                            ]
                        })
                    }, c.version))
            }) : u_1(h, {})
        ]
    });
}
