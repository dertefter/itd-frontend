import { u as u_1, ar, K as K_1, d as d_1, A, h, bh, aB, aC, af, aW, aq, aG, aF, bi } from "./index-B4ySybtH.js";
import { u as u_2, a as a_1, s, P as P_1 } from "./usePurchaseDialog-vo7rPjIe.js";
import { I } from "./IconInfo-DziGJX9X.js";
const le = ({ size = 18 })=>u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        fill: "none",
        viewBox: "0 0 18 18",
        children: [
            u_1("path", {
                fill: "currentColor",
                d: "M7.048 14.278c.022.184.052.368.09.55v.001a6.5 6.5 0 0 0 .466 1.403 4.044 4.044 0 0 1-1.442-.982.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.12.01.237.018.354.026Zm3.925 1.383c.052.062.108.12.166.179h-.001a3.253 3.253 0 0 1-.166-.179ZM9 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .088-.005.173-.006.254A6.5 6.5 0 0 0 7 13.443c-1.682-.111-3.11-.43-3.712-1.283-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm.32 10.333-.067.177c.02-.06.042-.119.065-.177l.075-.174a4.47 4.47 0 0 0-.074.174Zm4.998-2.759v.002c-.017-.003-.034-.008-.051-.01l.051.008Zm-.344-.05Z"
            }),
            u_1("path", {
                fill: "currentColor",
                d: "M15.065 11.348c.324 0 .587.263.587.587v1.956a.587.587 0 0 0 1.174 0V13.5a3.327 3.327 0 1 0-1.33 2.66.587.587 0 0 1 .704.94 4.5 4.5 0 1 1 1.8-3.6v.391a1.76 1.76 0 0 1-3.05 1.2 2.152 2.152 0 1 1-.386-3.46.586.586 0 0 1 .501-.283ZM12.522 13.5a.978.978 0 1 0 1.956 0 .978.978 0 0 0-1.956 0Z"
            })
        ]
    });
const ee = ({ size = 24 })=>u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: u_1("path", {
            fill: "currentColor",
            "fill-rule": "evenodd",
            d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
            "clip-rule": "evenodd"
        })
    });
const te = ({ size = 20 })=>u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        children: u_1("path", {
            fill: "currentColor",
            d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z"
        })
    });
function T({ text }) {
    return u_1(bi, {
        text,
        multiline: true,
        children: u_1("span", {
            className: s.infoBtn,
            children: u_1(I, {
                size: 14
            })
        })
    });
}
const l = "new";
function ae(a) {
    if (a.type === "bank_card") {
        return `${a.cardBrand || "Карта"} •••• ${a.cardLast4 || ""}`.trim();
    }
    if (a.type === "sbp") {
        return "СБП";
    }
    return a.type;
}
function re({ isOpen, onClose }) {
    const c = ar();
    const r = K_1((s)=>s.status);
    const [V, x] = d_1(false);
    const [R, y] = d_1(false);
    const [L, D] = d_1(0);
    const o = `${isOpen}:${r}:${c?.id}:${c?.subscription?.isActive}`;
    const v = A(o);
    v.current = o;
    const p = A(true);
    const d = A(0);
    const M = ()=>{
        const s = aG.captureRequest();
        const d_current = d.current;
        return ()=>p.current && v.current === o && s() && d.current === d_current && K_1.getState().status === "authenticated" && K_1.getState().profile?.id === c?.id;
    };
    const I = ()=>{
        d.current++;
        v.current = "";
        onClose();
    };
    h(()=>(p.current = true, ()=>{
            p.current = false;
        }), []);
    const [$, f] = d_1([]);
    const [N, g] = d_1(l);
    const [u, Z] = d_1(null);
    h(()=>{
        d.current++;
        f([]);
        g(l);
        Z(null);
        x(false);
        y(false);
        if (!isOpen || r !== "authenticated" || !c?.id) {
            return;
        }
        let s = true;
        const b = M();
        const h = ()=>s && b();
        bh.getStatus().then((A)=>{
            if (h()) {
                Z({
                    active: A.active,
                    profileActive: c?.subscription?.isActive,
                    expiresAt: A.expiresAt
                });
                x(true);
                if (A.recurringEnabled) {
                    bh.getMethods().then((S)=>{
                        if (!h()) {
                            return;
                        }
                        f(S);
                        const k = S.find((z)=>z.isDefault) || S[0];
                        g(k ? k.id : l);
                    }).catch(()=>{
                        if (h()) {
                            f([]);
                        }
                    });
                }
            }
        }).catch(()=>{
            if (h()) {
                y(true);
            }
        });
        return ()=>{
            s = false;
        };
    }, [
        isOpen,
        r,
        c?.id,
        c?.subscription?.isActive,
        L
    ]);
    const w = (u?.profileActive === c?.subscription?.isActive ? u?.active : null) ?? c?.subscription?.isActive ?? false;
    const i = u_2({
        open: isOpen,
        eligible: V && !w && r === "authenticated",
        ownerId: c?.id ?? null,
        kind: "self",
        recipientId: null,
        recipientName: null,
        scopeKey: o,
        methodId: N !== l ? N : undefined,
        captureCurrent: M,
        onClose: I,
        onSucceeded: ()=>{
            aF.success("Подписка оформлена!");
            I();
            K_1.getState().fetchProfile().catch(()=>{});
        }
    });
    const ref = a_1(isOpen, "ИТД НУКСТА");
    if (isOpen) {
        return aB(u_1(aq, {
            onClose: i.dismiss,
            showHeader: false,
            frameless: true,
            className: s.modal,
            children: [
                u_1(aC, {}),
                u_1("div", {
                    className: s.sub,
                    ref,
                    "data-purchase-scroll": true,
                    children: [
                        u_1("div", {
                            className: s.top,
                            children: [
                                u_1("div", {
                                    className: s.title,
                                    children: "ИТД НУКСТА"
                                }),
                                u_1("div", {
                                    className: `${s.section} ${s.profileSection}`,
                                    children: [
                                        u_1("div", {
                                            className: s.label,
                                            children: "Ваш профиль с ИТД НУКСТА"
                                        }),
                                        u_1("div", {
                                            className: s.row,
                                            children: [
                                                u_1(af, {
                                                    src: c?.avatar || null,
                                                    baseAvatar: c?.baseAvatar,
                                                    size: "sm"
                                                }),
                                                u_1("div", {
                                                    children: [
                                                        u_1("div", {
                                                            className: s.name,
                                                            children: [
                                                                u_1("span", {
                                                                    className: s.nameGradient,
                                                                    children: c?.displayName
                                                                }),
                                                                u_1("img", {
                                                                    src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                                                    alt: "НУКСТА",
                                                                    width: 24,
                                                                    height: 24,
                                                                    className: s.namePinBadge
                                                                })
                                                            ]
                                                        }),
                                                        u_1("div", {
                                                            className: s.dim,
                                                            children: "только что"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        u_1("img", {
                            src: "/assets/nuksta/purchase-20261118.webp",
                            alt: "",
                            width: 960,
                            height: 683,
                            decoding: "async",
                            className: s.promoImage
                        }),
                        u_1("div", {
                            className: s.bottom,
                            children: [
                                u_1("div", {
                                    className: s.section,
                                    children: [
                                        u_1("div", {
                                            className: s.labelRow,
                                            children: [
                                                u_1("span", {
                                                    className: s.label,
                                                    children: "Прикольные украшалки"
                                                }),
                                                u_1(T, {
                                                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️"
                                                })
                                            ]
                                        }),
                                        u_1("div", {
                                            className: s.features,
                                            children: [
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1("div", {
                                                                className: s.iconGradient
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            children: u_1("div", {
                                                                className: `${s.featureTitle} ${s.gradientText}`,
                                                                children: "Уникальный цвет ника"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1("img", {
                                                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                                                alt: "Пин",
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            children: u_1("div", {
                                                                className: s.featureTitle,
                                                                children: "Пин поддерживателя"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                u_1("div", {
                                    className: s.section,
                                    children: [
                                        u_1("div", {
                                            className: s.labelRow,
                                            children: [
                                                u_1("span", {
                                                    className: s.label,
                                                    children: "Сможете с нами тестить новые штуки"
                                                }),
                                                u_1(T, {
                                                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд"
                                                })
                                            ]
                                        }),
                                        u_1("div", {
                                            className: s.features,
                                            children: [
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1(te, {
                                                                size: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            className: s.featureContent,
                                                            children: u_1("div", {
                                                                className: s.featureTitle,
                                                                children: "Загрузка видео"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1(aW, {
                                                                size: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            className: s.featureContent,
                                                            children: u_1("div", {
                                                                className: s.featureTitle,
                                                                children: "Сообщения"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1(ee, {
                                                                size: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            className: s.featureContent,
                                                            children: u_1("div", {
                                                                className: s.featureTitle,
                                                                children: [
                                                                    "Музыка ",
                                                                    u_1("span", {
                                                                        className: s.soon,
                                                                        children: "soon"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                u_1("div", {
                                    className: s.footer,
                                    children: [
                                        u_1(P_1, {
                                            ...i.panel,
                                            onRetryRead: ()=>{
                                                if (R) {
                                                    D((s)=>s + 1);
                                                } else {
                                                    i.panel.onRetryRead();
                                                }
                                            },
                                            step: w ? "active" : i.panel.step,
                                            actualExpiryLabel: w && u?.expiresAt ? new Date(u.expiresAt).toLocaleDateString("ru-RU") : i.panel.actualExpiryLabel,
                                            error: R ? "Не удалось загрузить условия подписки. Откройте окно ещё раз" : i.panel.error,
                                            methodSelector: $.length > 0 ? u_1("label", {
                                                className: s.methodSelectRow,
                                                children: [
                                                    u_1("span", {
                                                        className: s.methodSelectLabel,
                                                        children: "Способ оплаты"
                                                    }),
                                                    u_1("select", {
                                                        className: s.methodSelect,
                                                        value: N,
                                                        disabled: !i.panel.canEditTerms,
                                                        onChange: (s)=>g(s.currentTarget.value),
                                                        children: [
                                                            $.map((s)=>u_1("option", {
                                                                    value: s.id,
                                                                    children: ae(s)
                                                                }, s.id)),
                                                            u_1("option", {
                                                                value: l,
                                                                children: "Новый способ оплаты"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : undefined
                                        }),
                                        u_1("button", {
                                            type: "button",
                                            className: s.closeBtn,
                                            onClick: i.dismiss,
                                            children: "Закрыть"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }), document.body);
    }
    return null;
}
export { le as I, re as S };
