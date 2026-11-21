import { aM, u as u_1, aS, af, S, ag, aT, B as B_1, aU, aV, aW, aX, aY, $ as $_1, aZ, a_, A as A_1, d, h as h_1, a$, q as q_1, b0, ah } from "./index-B4ySybtH.js";
import { I as I_1, S as S_1 } from "./index-CwwS5fmx.js";
import { I as I_2 } from "./IconCheck-MLNbKLCS.js";
import "./usePurchaseDialog-vo7rPjIe.js";
import "./IconInfo-DziGJX9X.js";
const page = "tMyO";
const pageTitle = "cNJZ";
const list = "llj3";
const item = "miGm";
const btn = "BO86";
const content = "yJFk";
const badge = "Jfvm";
const red = "ccic";
const green = "XYuj";
const blue = "Ocsm";
const purple = "KhUz";
const avatarLink = "aMCt";
const info = "Os0f";
const header = "oZG4";
const actorLink = "Tco3";
const name = "Aoaj";
const action = "mtMr";
const text = "gpOW";
const date = "uTYC";
const reminderTitle = "Jq3j";
const reminderText = "XepD";
const titleRow = "DkEm";
const unread = "bbtV";
const empty = "ELqM";
const loadMore = "KPNP";
const a = {
    page,
    pageTitle,
    list,
    item,
    btn,
    content,
    badge,
    red,
    green,
    blue,
    purple,
    avatarLink,
    info,
    header,
    actorLink,
    name,
    action,
    text,
    date,
    reminderTitle,
    reminderText,
    titleRow,
    unread,
    empty,
    loadMore
};
function Fe(o) {
    if (!o) {
        return "";
    }
    const c = new Date(o);
    if (isNaN(c.getTime())) {
        return "";
    }
    return c.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short"
    });
}
const U = {
    subscription_gift: {
        badgeColor: "purple",
        icon: u_1("img", {
            src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
            alt: "",
            width: 18,
            height: 18,
            style: {
                objectFit: "contain"
            }
        }),
        getAction: ()=>"подарил вам подписку"
    },
    follow: {
        badgeColor: "blue",
        icon: u_1(aU, {
            size: 12
        }),
        getAction: (o)=>{
            if (o > 1) {
                return `и ещё ${o - 1} человек подписались на вас`;
            }
            return "подписался(-ась) на вас";
        }
    },
    follow_request: {
        badgeColor: "blue",
        icon: u_1(aU, {
            size: 12
        }),
        getAction: ()=>"хочет подписаться на вас"
    },
    follow_accepted: {
        badgeColor: "green",
        icon: u_1(I_2, {
            size: 12
        }),
        getAction: ()=>"принял(а) вашу заявку на подписку"
    },
    post_reaction: {
        badgeColor: "red",
        icon: u_1(aX, {
            size: 12,
            filled: true
        }),
        getAction: (o)=>{
            if (o > 1) {
                return `и ещё ${o - 1} человек оценили ваш пост`;
            }
            return "оценил(а) ваш пост";
        }
    },
    post_comment: {
        badgeColor: "green",
        icon: u_1(aW, {
            size: 12,
            filled: true
        }),
        getAction: ()=>"прокомментировал(а) ваш пост"
    },
    post_repost: {
        badgeColor: "blue",
        icon: u_1(aY, {
            size: 12
        }),
        getAction: (o)=>{
            if (o > 1) {
                return `и ещё ${o - 1} человек сделали репост`;
            }
            return "сделал(а) репост вашего поста";
        }
    },
    comment_reaction: {
        badgeColor: "red",
        icon: u_1(aX, {
            size: 12,
            filled: true
        }),
        getAction: (o)=>{
            if (o > 1) {
                return `и ещё ${o - 1} человек оценили ваш комментарий`;
            }
            return "оценил(а) ваш комментарий";
        }
    },
    comment_reply: {
        badgeColor: "green",
        icon: u_1(aW, {
            size: 12,
            filled: true
        }),
        getAction: ()=>"ответил(а) на ваш комментарий"
    },
    post_mention: {
        badgeColor: "purple",
        icon: u_1(I_1, {
            size: 12
        }),
        getAction: ()=>"упомянул(а) вас в посте"
    },
    comment_mention: {
        badgeColor: "purple",
        icon: u_1(I_1, {
            size: 12
        }),
        getAction: ()=>"упомянул(а) вас в комментарии"
    },
    wall_post: {
        badgeColor: "blue",
        icon: u_1(aV, {
            size: 12
        }),
        getAction: ()=>"написал(а) на вашей стене"
    }
};
const $e = ({ type })=>{
    const c = U[type];
    const m = c?.badgeColor === "red" ? a.red : c?.badgeColor === "green" ? a.green : c?.badgeColor === "purple" ? a.purple : a.blue;
    return u_1("div", {
        className: `${a.badge} ${m}`,
        children: c?.icon || u_1(aW, {
            size: 12
        })
    });
};
function ve({ notification, isVisuallyUnread, onMarkRead, followStatus, onFollowToggle, isFollowLoading }) {
    const { openModal, closeModal } = aM();
    const A = U[notification.type];
    const n = notification.payload.actors[0];
    const count = notification.payload.count;
    const u = notification.type === "alice_task_reminder";
    const w = ()=>{
        onMarkRead(notification.id);
        const { type, entityId, parentEntityId, payload } = notification;
        if (type === "subscription_gift") {
            openModal(u_1(S_1, {
                isOpen: true,
                onClose: ()=>closeModal()
            }));
            return;
        }
        let payload_clickUrl = payload.clickUrl;
        const k = [
            "post_reaction",
            "post_comment",
            "post_repost",
            "post_mention",
            "wall_post"
        ];
        const E = [
            "comment_reaction",
            "comment_reply",
            "comment_mention"
        ];
        entityId && n?.username && (k.includes(type) ? type === "post_comment" && parentEntityId ? payload_clickUrl = `/@${n.username}/post/${parentEntityId}?comment=${entityId}` : payload_clickUrl = `/@${n.username}/post/${entityId}` : E.includes(type) && (parentEntityId ? payload_clickUrl = `/@${n.username}/post/${parentEntityId}?comment=${entityId}` : payload_clickUrl = `/@${n.username}/post/${entityId}`));
        if (!payload_clickUrl && n?.username && [
            "follow",
            "follow_request",
            "follow_accepted"
        ].includes(type)) {
            payload_clickUrl = `/@${n.username}`;
        }
        if (payload_clickUrl) {
            $_1(payload_clickUrl);
        }
    };
    const C = notification.type === "follow" || notification.type === "follow_request";
    const h = isFollowLoading ? "loading" : followStatus ? followStatus.isFollowing ? "following" : followStatus.hasOutgoingRequest ? "requested" : "none" : "none";
    const R = ()=>{
        switch(h){
            case "loading":
                return "Загрузка...";
            case "following":
                return "Отписаться";
            case "requested":
                return "Отменить";
            default:
                if (followStatus?.isFollowedBy) {
                    return "Подписаться в ответ";
                }
                return "Подписаться";
        }
    };
    const N = ()=>{
        if (h === "following" || h === "requested") {
            return "secondary";
        }
        return "primary";
    };
    const F = (e)=>{
        e.stopPropagation();
        if (n?.id && !isFollowLoading) {
            onFollowToggle(n.id);
        }
    };
    const s = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        onMarkRead(notification.id);
        if (n?.username) {
            $_1(`/@${n.username}`);
        }
    };
    return u_1("div", {
        className: `${a.item} ${isVisuallyUnread ? a.unread : ""}`,
        onClick: w,
        role: "button",
        tabIndex: 0,
        onKeyDown: (e)=>{
            if ((u || notification.type === "subscription_gift") && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                w();
            }
        },
        children: [
            u_1("div", {
                className: a.content,
                children: [
                    u ? u_1(aS, {}) : u_1("a", {
                        href: n?.username ? `/@${n.username}` : "#",
                        className: a.avatarLink,
                        onClick: s,
                        title: "Перейти в профиль",
                        children: u_1(af, {
                            src: n?.avatar || "",
                            alt: n?.displayName || "User",
                            size: "md",
                            halloween: n?.halloween,
                            badge: u_1($e, {
                                type: notification.type
                            })
                        })
                    }),
                    u_1("div", {
                        className: a.info,
                        children: [
                            u_1("div", {
                                className: a.header,
                                children: u ? u_1("span", {
                                    className: a.reminderTitle,
                                    children: notification.payload.title
                                }) : u_1(S, {
                                    children: [
                                        u_1("a", {
                                            href: n?.username ? `/@${n.username}` : "#",
                                            className: a.actorLink,
                                            onClick: s,
                                            title: "Перейти в профиль",
                                            children: u_1(ag, {
                                                userId: n?.id,
                                                halloween: n?.halloween,
                                                name: notification.type === "subscription_gift" ? aT(n) : n?.displayName || "Пользователь",
                                                verified: n?.isVerified ?? n?.verified ?? false,
                                                pin: n?.pin,
                                                size: "sm",
                                                className: a.name
                                            })
                                        }),
                                        u_1("span", {
                                            className: a.action,
                                            children: A?.getAction(count) || "уведомление"
                                        })
                                    ]
                                })
                            }),
                            notification.payload.entityPreview && u_1("p", {
                                className: `${a.text} ${u ? a.reminderText : ""}`,
                                children: notification.payload.entityPreview
                            }),
                            u_1("span", {
                                className: a.date,
                                children: Fe(notification.createdAt)
                            })
                        ]
                    })
                ]
            }),
            C && n?.id && u_1(B_1, {
                variant: N(),
                size: "md",
                className: a.btn,
                onClick: F,
                disabled: isFollowLoading,
                children: [
                    h === "none" && u_1(aU, {
                        size: 18
                    }),
                    R()
                ]
            })
        ]
    });
}
export const Notifications = (o)=>{
    const { notifications, status, nextCursor, fetchNotifications, markAllAsRead } = aZ();
    const _ = a_();
    const b = A_1(null);
    const [A, n] = d(new Set);
    const [f, u] = d(new Map);
    const [w, C] = d(new Set);
    h_1(()=>{
        const s = new Set;
        for (const e of notifications){
            if (!e.isRead) {
                s.add(e.id);
            }
        }
        n((e)=>{
            const i = new Set(e);
            for (const l of s){
                i.add(l);
            }
            return i;
        });
    }, [
        notifications
    ]);
    h_1(()=>{
        fetchNotifications(true).then(()=>{
            const s = aZ.getState().notifications.filter((e)=>!e.isRead).map((e)=>e.id);
            if (s.length > 0) {
                n((e)=>{
                    const i = new Set(e);
                    for (const l of s){
                        i.add(l);
                    }
                    return i;
                });
            }
            markAllAsRead();
        });
    }, [
        fetchNotifications,
        markAllAsRead
    ]);
    h_1(()=>{
        const s = [
            "follow",
            "follow_request"
        ];
        const e = [];
        for (const i of notifications){
            if (!s.includes(i.type)) {
                continue;
            }
            const l = i.payload.actors[0];
            if (!(!l?.id || f.has(l.id))) {
                e.push([
                    l.id,
                    {
                        isFollowing: l.isFollowing ?? false,
                        isFollowedBy: l.isFollowedBy ?? true,
                        hasOutgoingRequest: false,
                        hasIncomingRequest: false,
                        isBlocking: false,
                        isBlockedBy: false
                    }
                ]);
            }
        }
        if (e.length > 0) {
            u((i)=>{
                const l = new Map(i);
                for (const [d, r] of e){
                    l.set(d, r);
                }
                return l;
            });
        }
    }, [
        notifications
    ]);
    a$({
        sentinelRef: b,
        hasMore: !!nextCursor,
        isLoading: status === "loading",
        onLoadMore: fetchNotifications
    });
    const onMarkRead = q_1((s)=>{
        n((e)=>{
            const i = new Set(e);
            i.delete(s);
            return i;
        });
    }, []);
    const h = q_1(()=>{
        n(new Set);
        markAllAsRead();
    }, [
        markAllAsRead
    ]);
    const onFollowToggle = q_1(async (s)=>{
        if (!w.has(s)) {
            C((e)=>new Set(e).add(s));
            try {
                const e = f.get(s);
                if (e?.isFollowing || e?.hasOutgoingRequest) {
                    await b0.unfollowUser(s);
                    u((l)=>{
                        const d = new Map(l);
                        const r = d.get(s);
                        if (r) {
                            d.set(s, {
                                ...r,
                                isFollowing: false,
                                hasOutgoingRequest: false
                            });
                        }
                        return d;
                    });
                } else {
                    const l = await b0.followUser(s);
                    u((d)=>{
                        const r = new Map(d);
                        const k = r.get(s);
                        if (k) {
                            r.set(s, {
                                ...k,
                                isFollowing: l === "following",
                                hasOutgoingRequest: l === "requested"
                            });
                        } else {
                            r.set(s, {
                                isFollowing: l === "following",
                                isFollowedBy: true,
                                hasOutgoingRequest: l === "requested",
                                hasIncomingRequest: false,
                                isBlocking: false,
                                isBlockedBy: false
                            });
                        }
                        return r;
                    });
                }
            } catch (e) {
                if (e?.status === 409 || e?.code === "CONFLICT" || e?.message?.includes("Already following")) {
                    u((l)=>{
                        const d = new Map(l);
                        const r = d.get(s);
                        d.set(s, {
                            ...r ?? {
                                isFollowedBy: true,
                                hasIncomingRequest: false,
                                isBlocking: false,
                                isBlockedBy: false
                            },
                            isFollowing: true,
                            hasOutgoingRequest: false
                        });
                        return d;
                    });
                } else {
                    console.error("Failed to toggle follow:", e);
                }
            } finally{
                C((e)=>{
                    const i = new Set(e);
                    i.delete(s);
                    return i;
                });
            }
        }
    }, [
        f,
        w
    ]);
    const N = status === "loading";
    const F = notifications.length === 0 && !N;
    return u_1("div", {
        className: `${a.page} ym-hide-content`,
        children: [
            u_1("div", {
                className: a.titleRow,
                children: [
                    u_1("h1", {
                        className: a.pageTitle,
                        children: "Уведомления"
                    }),
                    _ > 0 && u_1(B_1, {
                        variant: "ghost",
                        size: "sm",
                        onClick: h,
                        children: "Прочитать все"
                    })
                ]
            }),
            F ? u_1("div", {
                className: a.empty,
                children: u_1("p", {
                    children: "Нет уведомлений"
                })
            }) : u_1("div", {
                className: a.list,
                children: [
                    notifications.map((s)=>{
                        const e = s.payload.actors[0]?.id;
                        return u_1(ve, {
                            notification: s,
                            isVisuallyUnread: A.has(s.id),
                            onMarkRead,
                            followStatus: e ? f.get(e) ?? null : null,
                            onFollowToggle,
                            isFollowLoading: e ? w.has(e) : false
                        }, s.id);
                    }),
                    nextCursor && u_1("div", {
                        ref: b,
                        className: a.loadMore,
                        children: N && u_1(ah, {
                            size: "sm"
                        })
                    })
                ]
            })
        ]
    });
};
