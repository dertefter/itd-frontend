import { K, A as A_1, h as h_1, aB, u as u_1, aC, af, aD, aq, aE, aF, aG } from "./index-B4ySybtH.js";
import { u as u_2, a as a_1, s, P as P_1 } from "./usePurchaseDialog-vo7rPjIe.js";
const cancelBtn = "XswM";
const A = {
    cancelBtn
};
export function G({ isOpen, onClose, recipient, onSucceeded }) {
    const o = K((t)=>t.status);
    const n = K((t)=>t.profile?.id);
    const u = A_1(false);
    const m = A_1(true);
    const l = A_1(0);
    const i = `${isOpen}:${o}:${n}:${recipient.id}`;
    const f = A_1(i);
    f.current = i;
    const captureCurrent = ()=>{
        const t = aG.captureRequest();
        const l_current = l.current;
        return ()=>m.current && !u.current && f.current === i && l.current === l_current && t() && K.getState().status === "authenticated" && K.getState().profile?.id === n;
    };
    const N = ()=>{
        l.current++;
        u.current = true;
        onClose();
    };
    h_1(()=>{
        l.current++;
        u.current = !isOpen;
    }, [
        isOpen,
        n,
        recipient.id,
        o
    ]);
    h_1(()=>(m.current = true, ()=>{
            m.current = false;
        }), []);
    const h = u_2({
        open: isOpen,
        eligible: o === "authenticated",
        ownerId: n ?? null,
        kind: "gift",
        recipientId: recipient.id,
        recipientName: recipient.name,
        scopeKey: i,
        captureCurrent,
        onClose: N,
        onSucceeded: ()=>{
            aE();
            aF.success("Подписка для пользователя оформлена");
            onSucceeded?.();
            N();
        }
    });
    const ref = a_1(isOpen, `Подарить ИТД НУКСТА — ${recipient.name}`);
    if (isOpen) {
        return aB(u_1(aq, {
            onClose: h.dismiss,
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
                                    children: "Подарить ИТД НУКСТА"
                                }),
                                u_1("div", {
                                    className: `${s.section} ${s.profileSection}`,
                                    children: [
                                        u_1("div", {
                                            className: s.label,
                                            children: "Подписка в подарок"
                                        }),
                                        u_1("div", {
                                            className: s.row,
                                            children: [
                                                u_1(af, {
                                                    src: recipient.avatar || null,
                                                    size: "sm"
                                                }),
                                                u_1("div", {
                                                    children: [
                                                        u_1("div", {
                                                            className: s.name,
                                                            children: [
                                                                u_1("span", {
                                                                    className: s.nameGradient,
                                                                    children: recipient.name
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
                                                        recipient.username ? u_1("div", {
                                                            className: s.dim,
                                                            children: [
                                                                "@",
                                                                recipient.username
                                                            ]
                                                        }) : u_1("div", {
                                                            className: s.dim,
                                                            children: "получатель подарка"
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
                                            children: u_1("span", {
                                                className: s.label,
                                                children: "Что получит пользователь"
                                            })
                                        }),
                                        u_1("div", {
                                            className: s.features,
                                            children: [
                                                u_1("div", {
                                                    className: s.row,
                                                    children: [
                                                        u_1("span", {
                                                            className: s.icon,
                                                            children: u_1(aD, {
                                                                size: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            className: s.featureTitle,
                                                            children: "Доступ к отправке личных сообщений"
                                                        })
                                                    ]
                                                }),
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
                                                            className: `${s.featureTitle} ${s.gradientText}`,
                                                            children: "Уникальный цвет ника"
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
                                                                alt: "Пин поддерживателя",
                                                                width: 20,
                                                                height: 20
                                                            })
                                                        }),
                                                        u_1("div", {
                                                            className: s.featureTitle,
                                                            children: "Пин поддерживателя"
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
                                            ...h.panel
                                        }),
                                        u_1("button", {
                                            type: "button",
                                            className: A.cancelBtn,
                                            onClick: h.dismiss,
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
