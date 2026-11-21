import { d as d_1, A as A_1, h as h_1, q as q_1, u as u_1, ae as ae_1, S as S_1, af, ag, ah } from "./index-B4ySybtH.js";
import { s as s_1 } from "./searchApi-BVKXlKf0.js";
const page = "R2QW";
const pageTitle = "Mxt0";
const titleRow = "uAkd";
const searchWrapper = "pOT8";
const searchIcon = "RCkW";
const searchInput = "AQR1";
const sections = "wKsr";
const section = "rmj2";
const sectionHeader = "b5FZ";
const sectionTitle = "EXRM";
const usersList = "CDBq";
const userItem = "prUm";
const userInfo = "Q0k1";
const userUsername = "SGDW";
const clansBadges = "bfCm";
const clanBadge = "AN1I";
const clanEmoji = "c1ql";
const clanCount = "UlUE";
const hashtagsList = "sRRf";
const hashtagItem = "Rz9i";
const hashtagRank = "FkwO";
const hashtagInfo = "R0ca";
const hashtagTag = "OMUd";
const hashtagCount = "e0SN";
const empty = "VymE";
const a = {
    page,
    pageTitle,
    titleRow,
    searchWrapper,
    searchIcon,
    searchInput,
    sections,
    section,
    sectionHeader,
    sectionTitle,
    usersList,
    userItem,
    userInfo,
    userUsername,
    clansBadges,
    clanBadge,
    clanEmoji,
    clanCount,
    hashtagsList,
    hashtagItem,
    hashtagRank,
    hashtagInfo,
    hashtagTag,
    hashtagCount,
    empty
};
const m = (r)=>{
    if (r >= 1000000) {
        return `${(r / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (r >= 1000) {
        return `${(r / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    }
    return r.toString();
};
export const Search = (r)=>{
    const [g, y] = d_1("");
    const [p, R] = d_1([]);
    const [N, T] = d_1([]);
    const [u, l] = d_1([]);
    const [f, i] = d_1([]);
    const [C, S] = d_1(true);
    const [w, H] = d_1(true);
    const [L, h] = d_1(false);
    const o = A_1(null);
    h_1(()=>{
        (async ()=>{
            try {
                const [t, c] = await Promise.all([
                    s_1.getPopularAvatars(),
                    s_1.getTrendingHashtags()
                ]);
                R(t.slice(0, 10));
                T(c.slice(0, 10));
            } catch (t) {
                console.error("Failed to fetch search data:", t);
            } finally{
                S(false);
                H(false);
            }
        })();
    }, []);
    const U = q_1(async (s)=>{
        const t = s.trim().replace(/^@/, "").replace(/^#/, "");
        if (!t) {
            l([]);
            i([]);
            h(false);
            return;
        }
        h(true);
        try {
            const c = await s_1.globalSearch(t, 10, 5);
            l(c.users);
            i(c.hashtags);
        } catch (c) {
            console.error("Failed to search:", c);
            l([]);
            i([]);
        } finally{
            h(false);
        }
    }, []);
    const onInput = (s)=>{
        const value = s.target.value;
        y(value);
        if (o.current) {
            clearTimeout(o.current);
        }
        o.current = window.setTimeout(()=>{
            U(value);
        }, 1000);
    };
    const A = g.trim().length > 0;
    return u_1("div", {
        className: a.page,
        children: [
            u_1("div", {
                className: a.titleRow,
                children: u_1("h1", {
                    className: a.pageTitle,
                    children: "Поиск"
                })
            }),
            u_1("div", {
                className: a.searchWrapper,
                children: [
                    u_1("div", {
                        className: a.searchIcon,
                        children: u_1(ae_1, {
                            size: 20
                        })
                    }),
                    u_1("input", {
                        type: "text",
                        className: a.searchInput,
                        placeholder: "Поиск людей и хештегов",
                        value: g,
                        onInput
                    })
                ]
            }),
            u_1("div", {
                className: a.sections,
                children: A ? u_1(S_1, {
                    children: [
                        u_1("section", {
                            className: a.section,
                            children: [
                                u_1("div", {
                                    className: a.sectionHeader,
                                    children: u_1("h2", {
                                        className: a.sectionTitle,
                                        children: "Люди"
                                    })
                                }),
                                u_1("div", {
                                    className: a.usersList,
                                    children: L ? null : u.length === 0 ? u_1("div", {
                                        className: a.empty,
                                        children: "Ничего не найдено"
                                    }) : u.map((s)=>u_1("a", {
                                            href: `/@${s.username ?? s.userId}`,
                                            className: a.userItem,
                                            children: [
                                                u_1(af, {
                                                    src: s.avatar,
                                                    alt: s.displayName,
                                                    size: "md",
                                                    halloween: s.halloween
                                                }),
                                                u_1("div", {
                                                    className: a.userInfo,
                                                    children: [
                                                        u_1(ag, {
                                                            userId: s.id,
                                                            halloween: s.halloween,
                                                            name: s.displayName,
                                                            verified: s.isVerified ?? s.verified,
                                                            hasNuksta: s.hasNuksta,
                                                            pin: s.pin
                                                        }),
                                                        s.username && u_1("span", {
                                                            className: a.userUsername,
                                                            children: [
                                                                "@",
                                                                s.username
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, s.userId))
                                })
                            ]
                        }),
                        f.length > 0 && u_1("section", {
                            className: a.section,
                            children: [
                                u_1("div", {
                                    className: a.sectionHeader,
                                    children: u_1("h2", {
                                        className: a.sectionTitle,
                                        children: "Хештеги"
                                    })
                                }),
                                u_1("div", {
                                    className: a.hashtagsList,
                                    children: f.map((s)=>u_1("a", {
                                            href: `/hashtag/${encodeURIComponent(s.name)}`,
                                            className: a.hashtagItem,
                                            children: u_1("div", {
                                                className: a.hashtagInfo,
                                                children: [
                                                    u_1("span", {
                                                        className: a.hashtagTag,
                                                        children: [
                                                            "#",
                                                            s.name
                                                        ]
                                                    }),
                                                    u_1("span", {
                                                        className: a.hashtagCount,
                                                        children: [
                                                            m(s.count),
                                                            " постов"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, s.name))
                                })
                            ]
                        })
                    ]
                }) : u_1(S_1, {
                    children: [
                        u_1("section", {
                            className: a.section,
                            children: [
                                u_1("div", {
                                    className: a.sectionHeader,
                                    children: u_1("h2", {
                                        className: a.sectionTitle,
                                        children: "Топ кланов"
                                    })
                                }),
                                u_1("div", {
                                    className: a.clansBadges,
                                    children: C ? u_1(ah, {
                                        size: "sm"
                                    }) : p.length === 0 ? u_1("div", {
                                        className: a.empty,
                                        children: "Нет данных"
                                    }) : p.map((s)=>u_1("div", {
                                            className: a.clanBadge,
                                            children: [
                                                u_1("span", {
                                                    className: a.clanEmoji,
                                                    children: s.avatar
                                                }),
                                                u_1("span", {
                                                    className: a.clanCount,
                                                    children: m(s.count)
                                                })
                                            ]
                                        }, s.avatar))
                                })
                            ]
                        }),
                        u_1("section", {
                            className: a.section,
                            children: [
                                u_1("div", {
                                    className: a.sectionHeader,
                                    children: u_1("h2", {
                                        className: a.sectionTitle,
                                        children: "Популярные хештеги"
                                    })
                                }),
                                u_1("div", {
                                    className: a.hashtagsList,
                                    children: w ? u_1(ah, {
                                        size: "sm"
                                    }) : N.length === 0 ? u_1("div", {
                                        className: a.empty,
                                        children: "Нет данных"
                                    }) : N.map((s, t)=>u_1("a", {
                                            href: `/hashtag/${encodeURIComponent(s.name)}`,
                                            className: a.hashtagItem,
                                            children: [
                                                u_1("span", {
                                                    className: a.hashtagRank,
                                                    children: t + 1
                                                }),
                                                u_1("div", {
                                                    className: a.hashtagInfo,
                                                    children: [
                                                        u_1("span", {
                                                            className: a.hashtagTag,
                                                            children: [
                                                                "#",
                                                                s.name
                                                            ]
                                                        }),
                                                        u_1("span", {
                                                            className: a.hashtagCount,
                                                            children: [
                                                                m(s.count),
                                                                " постов"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, s.name))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
export { Search as default };
