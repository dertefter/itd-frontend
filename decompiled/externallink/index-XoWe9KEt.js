import { u as u_1, a6, $ } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
import { I as I_2 } from "./IconInfo-DziGJX9X.js";
const w = ({ size = 48 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u_1("path", {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            }),
            u_1("polyline", {
                points: "15 3 21 3 21 9"
            }),
            u_1("line", {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            })
        ]
    });
const page = "khjV";
const backButton = "Dnc8";
const iconWrapper = "TSiQ";
const title = "KzGp";
const description = "mr5Q";
const urlSection = "gEWC";
const sectionTitle = "WeTf";
const urlBox = "m4MD";
const domain = "Eaw1";
const fullUrl = "lhsx";
const warningSection = "MFTx";
const warningList = "c8n4";
const actions = "I8ZV";
const primaryButton = "adaE";
const secondaryButton = "MAcV";
const e = {
    page,
    backButton,
    iconWrapper,
    title,
    description,
    urlSection,
    sectionTitle,
    urlBox,
    domain,
    fullUrl,
    warningSection,
    warningList,
    actions,
    primaryButton,
    secondaryButton
};
export function ExternalLink({ url }) {
    const t = a6(()=>{
        try {
            const r = new URLSearchParams(window.location.search).get("url") || url;
            if (!r) {
                return null;
            }
            const m = atob(r);
            const p = Uint8Array.from(m, (f)=>f.charCodeAt(0));
            return new TextDecoder().decode(p);
        } catch  {
            return null;
        }
    }, [
        url
    ]);
    const { domain, fullUrl } = a6(()=>{
        if (!t) {
            return {
                domain: null,
                fullUrl: null
            };
        }
        try {
            const l = new URL(t);
            if (l.protocol !== "http:" && l.protocol !== "https:") {
                return {
                    domain: null,
                    fullUrl: null
                };
            }
            return {
                domain: l.hostname,
                fullUrl: t
            };
        } catch  {
            return {
                domain: null,
                fullUrl: null
            };
        }
    }, [
        t
    ]);
    const i = ()=>{
        if (window.history.length > 1) {
            window.history.back();
        } else {
            $("/");
        }
    };
    const u = ()=>{
        if (t) {
            window.location.href = t;
        }
    };
    if (!t || !domain) {
        return u_1("div", {
            className: e.page,
            children: [
                u_1("button", {
                    className: e.backButton,
                    onClick: i,
                    children: [
                        u_1(I_1, {
                            size: 20
                        }),
                        u_1("span", {
                            children: "Назад"
                        })
                    ]
                }),
                u_1("div", {
                    className: e.iconWrapper,
                    children: u_1(I_2, {
                        size: 48
                    })
                }),
                u_1("h1", {
                    className: e.title,
                    children: "Неверная ссылка"
                }),
                u_1("p", {
                    className: e.description,
                    children: "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела."
                }),
                u_1("button", {
                    className: e.primaryButton,
                    onClick: ()=>$("/"),
                    children: "На главную"
                })
            ]
        });
    }
    return u_1("div", {
        className: e.page,
        children: [
            u_1("button", {
                className: e.backButton,
                onClick: i,
                children: [
                    u_1(I_1, {
                        size: 20
                    }),
                    u_1("span", {
                        children: "Назад"
                    })
                ]
            }),
            u_1("div", {
                className: e.iconWrapper,
                children: u_1(w, {
                    size: 48
                })
            }),
            u_1("h1", {
                className: e.title,
                children: "Переход на внешний сайт"
            }),
            u_1("p", {
                className: e.description,
                children: "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу."
            }),
            u_1("div", {
                className: e.urlSection,
                children: [
                    u_1("h2", {
                        className: e.sectionTitle,
                        children: "Адрес назначения"
                    }),
                    u_1("div", {
                        className: e.urlBox,
                        children: [
                            u_1("span", {
                                className: e.domain,
                                children: domain
                            }),
                            u_1("span", {
                                className: e.fullUrl,
                                children: fullUrl
                            })
                        ]
                    })
                ]
            }),
            u_1("div", {
                className: e.warningSection,
                children: [
                    u_1("h2", {
                        className: e.sectionTitle,
                        children: "Обратите внимание"
                    }),
                    u_1("ul", {
                        className: e.warningList,
                        children: [
                            u_1("li", {
                                children: "ИТД не несёт ответственности за содержимое внешних сайтов"
                            }),
                            u_1("li", {
                                children: "Не вводите личные данные на подозрительных ресурсах"
                            }),
                            u_1("li", {
                                children: "Проверяйте адрес сайта перед вводом паролей"
                            })
                        ]
                    })
                ]
            }),
            u_1("div", {
                className: e.actions,
                children: [
                    u_1("button", {
                        className: e.primaryButton,
                        onClick: u,
                        children: [
                            "Перейти на ",
                            domain
                        ]
                    }),
                    u_1("button", {
                        className: e.secondaryButton,
                        onClick: i,
                        children: "Остаться на ИТД"
                    })
                ]
            })
        ]
    });
}
export { ExternalLink as default };
