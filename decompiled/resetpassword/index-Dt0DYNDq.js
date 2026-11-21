import { d as d_1, u as u_1, I as I_1, B, S as S_1, am, $ as $_1, an, ao } from "./index-B4ySybtH.js";
import { I as I_2, a as a_1 } from "./IconEyeOff-L3vRD_Bs.js";
const container = "POSW";
const logo = "UK2Y";
const form = "Ds8e";
const header = "GNIq";
const title = "LDsk";
const subtitle = "yKNh";
const error = "KvlO";
const inputs = "YxZo";
const inputGroup = "OJh8";
const label = "iDQJ";
const inputWrapper = "B9KA";
const input = "Mydg";
const inputError = "ynEg";
const fieldError = "MwuZ";
const hint = "NqKg";
const eyeButton = "PNdk";
const submitButton = "NwFn";
const backLink = "d3HG";
const s = {
    container,
    logo,
    form,
    header,
    title,
    subtitle,
    error,
    inputs,
    inputGroup,
    label,
    inputWrapper,
    input,
    inputError,
    fieldError,
    hint,
    eyeButton,
    submitButton,
    backLink
};
export const ResetPassword = (Q)=>{
    const [t, y] = d_1("");
    const [f, g] = d_1("");
    const [c, v] = d_1(false);
    const [u, I] = d_1(false);
    const [N, a] = d_1(null);
    const [d, n] = d_1(null);
    const [p, m] = d_1(null);
    const [i, E] = d_1(false);
    const onSubmit = async (o)=>{
        o.preventDefault();
        a(null);
        n(null);
        m(null);
        if (!t.trim()) {
            n("Введите новый пароль");
            return;
        }
        if (t.length < 10) {
            n("Минимум 10 символов");
            return;
        }
        if (t.length > 128) {
            n("Максимум 128 символов");
            return;
        }
        if (!/^[\x21-\x7E]+$/.test(t)) {
            n("Только латиница, цифры и знаки пунктуации");
            return;
        }
        if (t !== f) {
            m("Пароли не совпадают");
            return;
        }
        E(true);
        try {
            await am.resetPassword({
                newPassword: t
            });
            $_1("/login");
        } catch (h) {
            if (an(h)) {
                switch(h.code){
                    case ao.MISSING_FLOW_TOKEN:
                    case ao.UNAUTHORIZED:
                    case ao.BAD_REQUEST:
                        a("Сессия сброса пароля истекла. Начните заново");
                        break;
                    case ao.VALIDATION_ERROR:
                        n("Пароль не соответствует требованиям");
                        break;
                    case ao.RATE_LIMIT_EXCEEDED:
                        a("Слишком много попыток. Попробуйте позже");
                        break;
                    default:
                        a(h.message || "Произошла ошибка");
                }
            } else {
                a("Произошла ошибка. Попробуйте позже");
            }
        } finally{
            E(false);
        }
    };
    return u_1(S_1, {
        children: u_1("div", {
            className: s.container,
            children: [
                u_1("div", {
                    className: s.logo,
                    children: u_1(I_1, {})
                }),
                u_1("form", {
                    className: s.form,
                    onSubmit,
                    children: [
                        u_1("div", {
                            className: s.header,
                            children: [
                                u_1("h1", {
                                    className: s.title,
                                    children: "Новый пароль"
                                }),
                                u_1("p", {
                                    className: s.subtitle,
                                    children: "Придумайте новый пароль для вашего аккаунта"
                                })
                            ]
                        }),
                        N && u_1("div", {
                            className: s.error,
                            children: N
                        }),
                        u_1("div", {
                            className: s.inputs,
                            children: [
                                u_1("div", {
                                    className: s.inputGroup,
                                    children: [
                                        u_1("label", {
                                            className: s.label,
                                            children: "Новый пароль"
                                        }),
                                        u_1("div", {
                                            className: s.inputWrapper,
                                            children: [
                                                u_1("input", {
                                                    type: c ? "text" : "password",
                                                    className: `${s.input} ${d ? s.inputError : ""}`,
                                                    value: t,
                                                    onInput: (o)=>{
                                                        y(o.target.value);
                                                        n(null);
                                                    },
                                                    placeholder: "••••••••••••",
                                                    autoComplete: "new-password",
                                                    disabled: i
                                                }),
                                                u_1("button", {
                                                    type: "button",
                                                    className: s.eyeButton,
                                                    onClick: ()=>v(!c),
                                                    children: c ? u_1(I_2, {
                                                        size: 20
                                                    }) : u_1(a_1, {
                                                        size: 20
                                                    })
                                                })
                                            ]
                                        }),
                                        u_1("span", {
                                            className: s.hint,
                                            children: "Минимум 10 символов, латиница, цифры и пунктуация"
                                        }),
                                        d && u_1("span", {
                                            className: s.fieldError,
                                            children: d
                                        })
                                    ]
                                }),
                                u_1("div", {
                                    className: s.inputGroup,
                                    children: [
                                        u_1("label", {
                                            className: s.label,
                                            children: "Подтверждение пароля"
                                        }),
                                        u_1("div", {
                                            className: s.inputWrapper,
                                            children: [
                                                u_1("input", {
                                                    type: u ? "text" : "password",
                                                    className: `${s.input} ${p ? s.inputError : ""}`,
                                                    value: f,
                                                    onInput: (o)=>{
                                                        g(o.target.value);
                                                        m(null);
                                                    },
                                                    placeholder: "••••••••••••",
                                                    autoComplete: "new-password",
                                                    disabled: i
                                                }),
                                                u_1("button", {
                                                    type: "button",
                                                    className: s.eyeButton,
                                                    onClick: ()=>I(!u),
                                                    children: u ? u_1(I_2, {
                                                        size: 20
                                                    }) : u_1(a_1, {
                                                        size: 20
                                                    })
                                                })
                                            ]
                                        }),
                                        p && u_1("span", {
                                            className: s.fieldError,
                                            children: p
                                        })
                                    ]
                                })
                            ]
                        }),
                        u_1(B, {
                            type: "submit",
                            variant: "primary",
                            size: "lg",
                            fullWidth: true,
                            className: s.submitButton,
                            disabled: i,
                            children: i ? "Сохранение..." : "Сохранить пароль"
                        }),
                        u_1("p", {
                            className: s.backLink,
                            children: u_1("a", {
                                href: "/login",
                                children: "Вернуться ко входу"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
export { ResetPassword as default };
