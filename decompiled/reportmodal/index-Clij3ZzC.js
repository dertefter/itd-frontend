import { U as U_1, V, d as d_1, u as u_1, B as B_1, aq, g as g_1, an } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconCheckCircle-1o8Hm2hi.js";
const l = {
    TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
    CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
    ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
    DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG"
};
const I = {
    async createReport (n) {
        const r = await U_1.post(V.reports.create, n);
        return r?.data ?? r;
    }
};
const modalReport = "GUZN";
const content = "Xh0O";
const successIcon = "nPOD";
const title = "KAcN";
const subtitle = "JJJX";
const options = "LrsC";
const chip = "K6Hi";
const radio = "I2xt";
const chipActive = "buc8";
const radioDot = "czFZ";
const detailsSection = "lhFm";
const textarea = "LN7U";
const error = "VEDX";
const actions = "NCZa";
const s = {
    modalReport,
    content,
    successIcon,
    title,
    subtitle,
    options,
    chip,
    radio,
    chipActive,
    radioDot,
    detailsSection,
    textarea,
    error,
    actions
};
const X = {
    spam: "spam",
    violence: "violence",
    hate: "harassment",
    adult: "nudity",
    misinfo: "misinformation",
    other: "other"
};
const Y = [
    {
        id: "spam",
        label: "Спам или нежелательный контент"
    },
    {
        id: "violence",
        label: "Насилие или опасные действия"
    },
    {
        id: "hate",
        label: "Ненависть или травля"
    },
    {
        id: "adult",
        label: "Контент для взрослых (18+)"
    },
    {
        id: "misinfo",
        label: "Дезинформация или обман"
    },
    {
        id: "other",
        label: "Другое"
    }
];
export function ReportModal({ targetType, targetId, onClose, onSubmit }) {
    const [c, T] = d_1(null);
    const [d, u] = d_1("");
    const [N, m] = d_1(false);
    const [p, t] = d_1(null);
    const [E, _] = d_1(false);
    const b = async ()=>{
        if (c) {
            m(true);
            t(null);
            try {
                if (onSubmit) {
                    await onSubmit(c, d);
                } else {
                    await I.createReport({
                        targetType,
                        targetId,
                        reason: X[c],
                        description: d || undefined
                    });
                }
                _(true);
            } catch (a) {
                console.error("Failed to submit report:", a);
                if (an(a)) {
                    switch(a.code){
                        case l.CANNOT_REPORT_OWN_CONTENT:
                            t("Вы не можете пожаловаться на свой контент");
                            break;
                        case l.ALREADY_REPORTED:
                            t("Вы уже отправляли жалобу на этот контент");
                            break;
                        case l.TARGET_NOT_FOUND:
                            t("Контент не найден");
                            break;
                        case l.DESCRIPTION_TOO_LONG:
                            t("Описание слишком длинное (макс. 1000 символов)");
                            break;
                        default:
                            t("Произошла ошибка при отправке жалобы");
                    }
                } else {
                    t("Произошла ошибка при отправке жалобы");
                }
            } finally{
                m(false);
            }
        }
    };
    if (E) {
        return u_1(aq, {
            onClose,
            showHeader: false,
            frameless: false,
            className: s.modalReport,
            children: u_1("div", {
                className: s.content,
                children: [
                    u_1("div", {
                        className: s.successIcon,
                        children: u_1(I_1, {
                            size: 48
                        })
                    }),
                    u_1("h2", {
                        className: s.title,
                        children: "Спасибо за жалобу!"
                    }),
                    u_1("p", {
                        className: s.subtitle,
                        children: "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше."
                    }),
                    u_1("div", {
                        className: s.actions,
                        children: u_1(B_1, {
                            variant: "primary",
                            onClick: (a)=>{
                                a.stopPropagation();
                                onClose();
                            },
                            children: "Понятно"
                        })
                    })
                ]
            })
        });
    }
    return u_1(aq, {
        onClose,
        showHeader: false,
        frameless: false,
        className: s.modalReport,
        children: u_1("div", {
            className: s.content,
            children: [
                u_1("h2", {
                    className: s.title,
                    children: "Пожаловаться"
                }),
                u_1("p", {
                    className: s.subtitle,
                    children: "Выберите причину жалобы"
                }),
                u_1("div", {
                    className: s.options,
                    children: Y.map((a)=>u_1("button", {
                            type: "button",
                            className: `${s.chip} ${c === a.id ? s.chipActive : ""}`,
                            onClick: ()=>T(a.id),
                            children: [
                                u_1("span", {
                                    className: s.radio,
                                    children: c === a.id && u_1("span", {
                                        className: s.radioDot
                                    })
                                }),
                                a.label
                            ]
                        }, a.id))
                }),
                u_1("div", {
                    className: s.detailsSection,
                    children: u_1("textarea", {
                        className: s.textarea,
                        placeholder: "Опишите подробнее (необязательно)...",
                        value: d,
                        onInput: (a)=>u(a.target.value),
                        rows: 3,
                        maxLength: 1000
                    })
                }),
                u_1(g_1, {}),
                p && u_1("div", {
                    className: s.error,
                    children: p
                }),
                u_1("div", {
                    className: s.actions,
                    children: [
                        u_1(B_1, {
                            variant: "secondary",
                            onClick: (a)=>{
                                a.stopPropagation();
                                onClose();
                            },
                            disabled: N,
                            children: "Отмена"
                        }),
                        u_1(B_1, {
                            variant: "primary",
                            onClick: (a)=>{
                                a.stopPropagation();
                                b();
                            },
                            disabled: !c || N,
                            children: N ? "Отправка..." : "Отправить"
                        })
                    ]
                })
            ]
        })
    });
}
export { ReportModal as default };
