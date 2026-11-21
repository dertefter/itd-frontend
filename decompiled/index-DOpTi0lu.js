import { K, d, A as A_1, h, aK, aL, u, aB, af, aq, aG, aw } from "./index-B4ySybtH.js";
import { s as s_1 } from "./searchApi-BVKXlKf0.js";
import { G as G_1 } from "./index-CmOh_voz.js";
import "./usePurchaseDialog-vo7rPjIe.js";
const modal = "ctAX";
const info = "UxlW";
const picker = "o2a3";
const stage = "uG4i";
const glow = "IaY7";
const pin = "FMZj";
const sparkles = "Bacc";
const capsule = "DYdq";
const skeleton = "ABes";
const features = "Ta81";
const primary = "sCpM";
const secondary = "kqpQ";
const retry = "bPrO";
const person = "N52S";
const results = "x5E4";
const subscriptionStatus = "Vy7n";
const r = {
    modal,
    info,
    picker,
    stage,
    glow,
    pin,
    sparkles,
    capsule,
    skeleton,
    features,
    primary,
    secondary,
    retry,
    person,
    results,
    subscriptionStatus
};
const ye = (c)=>{
    if (c % 10 >= 2 && c % 10 <= 4 && (c % 100 < 12 || c % 100 > 14)) {
        return "раза";
    }
    return "раз";
};
const ke = "У пользователя уже есть подписка. Подарить ещё одну нельзя.";
function Se({ userId, name, image, onClose }) {
    const n = K((t)=>t.profile?.id);
    const [l, T] = d(null);
    const [$, A] = d(0);
    const [B, R] = d(false);
    const [I, x] = d(0);
    const [p, C] = d("info");
    const [f, L] = d("");
    const [M, m] = d([]);
    const [q, v] = d(false);
    const [D, E] = d(false);
    const [F, O] = d(null);
    const [G, N] = d(false);
    const [Y, b] = d(false);
    const o = A_1(null);
    h(()=>{
        let t = true;
        R(false);
        aK(userId).then((s)=>{
            if (t) {
                T(s);
            }
        }).catch(()=>{
            if (t) {
                R(true);
            }
        });
        return ()=>{
            t = false;
        };
    }, [
        userId,
        I
    ]);
    h(()=>{
        if (l === null) {
            return;
        }
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            A(l);
            return;
        }
        let t = 0;
        const s = performance.now();
        const u = (h)=>{
            const d = Math.min(1, (h - s) / 650);
            A(Math.round(l * (1 - (1 - d) ** 3)));
            if (d < 1) {
                t = requestAnimationFrame(u);
            }
        };
        t = requestAnimationFrame(u);
        return ()=>cancelAnimationFrame(t);
    }, [
        l
    ]);
    h(()=>{
        m([]);
        E(false);
        N(false);
        b(false);
        const t = f.trim();
        if (p !== "pick" || !n || t.length < 2) {
            v(false);
            return;
        }
        let s = true;
        v(true);
        const u = setTimeout(()=>{
            s_1.globalSearch(t.slice(0, 100), 20, 1).then((h)=>{
                if (s) {
                    m(h.users.filter((d)=>{
                        const i = d.userId ?? d.id;
                        return i && i !== n && i !== aL && i !== "00000000-0000-0000-0000-000000000000";
                    }));
                }
            }).catch(()=>{
                if (s) {
                    E(true);
                }
            }).finally(()=>{
                if (s) {
                    v(false);
                }
            });
        }, 300);
        return ()=>{
            s = false;
            o.current = null;
            clearTimeout(u);
        };
    }, [
        f,
        p,
        n
    ]);
    const _ = async (t)=>{
        const s = t.userId ?? t.id;
        if (!s || !n || s === n || K.getState().profile?.id !== n || t.hasNuksta || o.current) {
            return;
        }
        const u = Symbol();
        const h = aG.captureRequest();
        const d = ()=>o.current === u && h() && K.getState().profile?.id === n;
        o.current = u;
        N(true);
        b(false);
        try {
            const i = await aw.getProfileByUsername(s, {
                force: true,
                silent: true
            });
            if (!d()) {
                return;
            }
            if (i.id !== s || i.isDeleted) {
                throw new Error("Recipient unavailable");
            }
            if (i.hasNuksta === true || i.subscription?.isActive === true) {
                m((K)=>K.map((y)=>{
                        if ((y.userId ?? y.id) === s) {
                            return {
                                ...y,
                                hasNuksta: true
                            };
                        }
                        return y;
                    }));
                return;
            }
            if (i.hasNuksta !== false && i.subscription?.isActive !== false) {
                throw new Error("Unknown subscription status");
            }
            O({
                id: s,
                name: t.displayName,
                username: t.username ?? undefined,
                avatar: t.avatar
            });
        } catch  {
            if (d()) {
                b(true);
            }
        } finally{
            if (o.current === u) {
                o.current = null;
                N(false);
            }
        }
    };
    if (F) {
        return u(G_1, {
            isOpen: true,
            recipient: F,
            onClose
        });
    }
    return aB(u(aq, {
        title: p === "info" ? "Даритель НУКСТА" : "Кому подарить НУКСТА",
        onClose,
        className: r.modal,
        children: p === "info" ? u("div", {
            className: r.info,
            children: [
                u("div", {
                    className: r.stage,
                    children: [
                        u("span", {
                            className: r.glow
                        }),
                        u("span", {
                            className: r.sparkles,
                            "aria-hidden": "true",
                            children: "✦"
                        }),
                        u("img", {
                            className: r.pin,
                            src: image,
                            alt: "Пин дарителя НУКСТА",
                            width: 150,
                            height: 150
                        }),
                        u("div", {
                            className: r.capsule,
                            "aria-label": l === null ? "Загружаем число подарков" : `${l} подарков НУКСТЫ`,
                            children: l === null ? u("span", {
                                className: r.skeleton
                            }) : $.toLocaleString("ru-RU")
                        })
                    ]
                }),
                u("h2", {
                    children: l === null ? `${n === userId ? "Ты" : name} — даритель НУКСТА` : `${n === userId ? "Ты" : name} подарил НУКСТА ${l.toLocaleString("ru-RU")} ${ye(l)}`
                }),
                B && u("button", {
                    className: r.retry,
                    onClick: ()=>x((t)=>t + 1),
                    children: "Обновить число подарков"
                }),
                u("div", {
                    className: r.features,
                    children: [
                        u("h3", {
                            children: "Что даёт НУКСТА"
                        }),
                        u("div", {
                            children: [
                                u("span", {
                                    "aria-hidden": "true",
                                    children: "↗"
                                }),
                                u("p", {
                                    children: [
                                        u("strong", {
                                            children: "Пишите кому угодно"
                                        }),
                                        "С НУКСТА можно писать в личку любому, кто открыт для сообщений."
                                    ]
                                })
                            ]
                        }),
                        u("div", {
                            children: [
                                u("span", {
                                    "aria-hidden": "true",
                                    children: "✦"
                                }),
                                u("p", {
                                    children: [
                                        u("strong", {
                                            children: "Видно издалека"
                                        }),
                                        "Ник с градиентом и пин рядом с именем."
                                    ]
                                })
                            ]
                        }),
                        u("div", {
                            children: [
                                u("span", {
                                    "aria-hidden": "true",
                                    children: "♡"
                                }),
                                u("p", {
                                    children: [
                                        u("strong", {
                                            children: "Подарок виден всем"
                                        }),
                                        "Каждый подарок прибавляется к счётчику на пине дарителя."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                u("button", {
                    className: r.primary,
                    disabled: !n,
                    onClick: ()=>C("pick"),
                    children: "Подарить НУКСТА"
                }),
                u("button", {
                    className: r.secondary,
                    onClick: onClose,
                    children: "Не сейчас"
                })
            ]
        }) : u("div", {
            className: r.picker,
            children: [
                u("input", {
                    autoFocus: true,
                    value: f,
                    maxLength: 100,
                    placeholder: "Имя или @никнейм",
                    "aria-label": "Найти получателя подарка",
                    onInput: (t)=>{
                        o.current = null;
                        m([]);
                        L(t.currentTarget.value);
                    }
                }),
                u("div", {
                    className: r.results,
                    "aria-busy": q,
                    children: [
                        M.map((t)=>u("button", {
                                type: "button",
                                className: r.person,
                                "aria-disabled": t.hasNuksta === true || G,
                                title: t.hasNuksta ? ke : undefined,
                                onClick: ()=>{
                                    _(t);
                                },
                                children: [
                                    u(af, {
                                        src: t.avatar,
                                        size: "sm"
                                    }),
                                    u("span", {
                                        children: [
                                            u("strong", {
                                                children: t.displayName
                                            }),
                                            u("small", {
                                                children: [
                                                    "@",
                                                    t.username
                                                ]
                                            }),
                                            t.hasNuksta && u("small", {
                                                className: r.subscriptionStatus,
                                                children: "Уже есть подписка"
                                            })
                                        ]
                                    })
                                ]
                            }, t.userId ?? t.id)),
                        q ? u("p", {
                            children: "Ищем…"
                        }) : D ? u("p", {
                            role: "alert",
                            children: "Не удалось загрузить пользователей. Попробуйте ещё раз."
                        }) : f.trim().length >= 2 && !M.length ? u("p", {
                            children: "Никого не нашли"
                        }) : null,
                        G && u("p", {
                            role: "status",
                            children: "Проверяем подписку…"
                        }),
                        Y && u("p", {
                            role: "alert",
                            children: "Не удалось проверить подписку. Попробуйте ещё раз."
                        })
                    ]
                }),
                u("button", {
                    className: r.secondary,
                    onClick: ()=>{
                        o.current = null;
                        C("info");
                    },
                    children: "Назад"
                })
            ]
        })
    }), document.body);
}
export { Se as default };
