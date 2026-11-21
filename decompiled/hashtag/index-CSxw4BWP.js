import { d as d_1, a1, h as h_1, q as q_1, a2, u as u_1, a3, a4, a5, $ } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
const page = "WY5S";
const header = "S0CZ";
const backButton = "okEe";
const hashtagName = "Hjca";
const empty = "Xc0X";
const emptyText = "uGHe";
const error = "W4uI";
const errorText = "X9XW";
const retryButton = "n3FO";
const s = {
    page,
    header,
    backButton,
    hashtagName,
    empty,
    emptyText,
    error,
    errorText,
    retryButton
};
export const Hashtag = ({ name })=>{
    const [g, i] = d_1([]);
    const [C, f] = d_1(true);
    const [y, N] = d_1(null);
    const [d, L] = d_1(null);
    const [h, x] = d_1(false);
    const o = name ? decodeURIComponent(name) : "";
    const m = a1((t)=>t._lastLikeUpdate);
    h_1(()=>{
        if (!m) {
            return;
        }
        const { postId, myReaction, totalDelta } = m;
        i((M)=>M.map((c)=>{
                if (c.id === postId) {
                    return {
                        ...c,
                        reactions: {
                            ...c.reactions,
                            myReaction,
                            total: Math.max(0, c.reactions.total + totalDelta)
                        }
                    };
                }
                return c;
            }));
    }, [
        m
    ]);
    const r = q_1(async (t)=>{
        if (o) {
            try {
                if (t) {
                    x(true);
                } else {
                    f(true);
                    N(null);
                }
                const a = await a2.getPostsByHashtag(o, {
                    limit: 20,
                    cursor: t
                });
                i(t ? (n)=>[
                        ...n,
                        ...a.data
                    ] : a.data);
                L(a.nextCursor);
            } catch (a) {
                console.error("Failed to fetch hashtag posts:", a);
                if (!t) {
                    N("Не удалось загрузить посты");
                }
            } finally{
                f(false);
                x(false);
            }
        }
    }, [
        o
    ]);
    h_1(()=>{
        r();
    }, [
        r
    ]);
    const onLoadMore = q_1(()=>{
        if (d && !h) {
            r(d);
        }
    }, [
        d,
        h,
        r
    ]);
    const onClick = ()=>{
        if (window.history.length > 1) {
            window.history.back();
        } else {
            $("/search");
        }
    };
    const onDelete = q_1((t)=>{
        i((a)=>a.filter((n)=>n.id !== t));
    }, []);
    if (o) {
        return u_1("div", {
            className: s.page,
            children: [
                u_1("div", {
                    className: s.header,
                    children: [
                        u_1("button", {
                            className: s.backButton,
                            onClick,
                            children: [
                                u_1(I_1, {
                                    size: 18
                                }),
                                "Назад"
                            ]
                        }),
                        u_1("h1", {
                            className: s.hashtagName,
                            children: [
                                "#",
                                o
                            ]
                        })
                    ]
                }),
                C ? u_1(a3, {
                    count: 4
                }) : y ? u_1("div", {
                    className: s.error,
                    children: [
                        u_1("span", {
                            className: s.errorText,
                            children: y
                        }),
                        u_1("button", {
                            className: s.retryButton,
                            onClick: ()=>r(),
                            children: "Повторить"
                        })
                    ]
                }) : g.length === 0 ? u_1("div", {
                    className: s.empty,
                    children: u_1("span", {
                        className: s.emptyText,
                        children: "Нет постов с этим хештегом"
                    })
                }) : u_1(a4, {
                    posts: g,
                    renderPost: (post)=>u_1(a5, {
                            post,
                            source: "hashtag",
                            sourceContext: o,
                            onDelete
                        }),
                    hasMore: !!d,
                    isLoadingMore: h,
                    onLoadMore
                })
            ]
        });
    }
    return u_1("div", {
        className: s.page,
        children: u_1("div", {
            className: s.error,
            children: u_1("span", {
                className: s.errorText,
                children: "Хештег не указан"
            })
        })
    });
};
export { Hashtag as default };
