import { d as d_1, q as q_1, am, an, ao, $ as $_1, u as u_1, I as I_1, B as B_1, g as g_1, S as S_1 } from "./index-B4ySybtH.js";
import { C as C_1 } from "./index-AsKwldqN.js";
import { O as O_1 } from "./index-CQmZctd5.js";
import { I as I_2, a } from "./IconEyeOff-L3vRD_Bs.js";
const container = "ICEV";
const logo = "CotO";
const form = "bICc";
const header = "Hlls";
const title = "nvPO";
const subtitle = "Gp1M";
const error = "tjtP";
const inputs = "s4mD";
const inputGroup = "UrYM";
const label = "Rg2g";
const input = "Wgiw";
const inputWrapper = "DFYv";
const inputError = "ErNJ";
const fieldError = "kUYK";
const eyeButton = "CCMc";
const success = "ZPth";
const backButton = "wRIX";
const submitButton = "jZz0";
const backLink = "bg4Y";
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
    input,
    inputWrapper,
    inputError,
    fieldError,
    eyeButton,
    success,
    backButton,
    submitButton,
    backLink
};
export const ForgotPassword = (we)=>{
    const [n, W] = d_1("");
    const [b, $] = d_1("");
    const [P, _] = d_1("");
    const [u, t] = d_1(null);
    const [w, d] = d_1(null);
    const [I, c] = d_1(null);
    const [p, N] = d_1(false);
    const [isOpen, k] = d_1(false);
    const [h, m] = d_1("email");
    const [o, D] = d_1("");
    const [v, L] = d_1("");
    const [y, F] = d_1(false);
    const [C, G] = d_1(false);
    const [g, E] = d_1(null);
    const [x, O] = d_1(false);
    const U = (a)=>{
        a.preventDefault();
        t(null);
        d(null);
        if (!n.trim()) {
            d("Введите email");
            return;
        }
        k(true);
    };
    const onVerify = q_1(async (captcha)=>{
        k(false);
        N(true);
        try {
            const i = await am.forgotPassword({
                email: n,
                captcha
            });
            $(i.flowToken ?? "");
            m("otp");
        } catch (i) {
            if (an(i)) {
                switch(i.code){
                    case ao.ENTITY_NOT_FOUND:
                        d("Аккаунт с таким email не найден");
                        break;
                    case ao.VALIDATION_ERROR:
                        d("Введите корректный email");
                        break;
                    case ao.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
                        d("Почта этого домена не поддерживается");
                        break;
                    case ao.CAPTCHA_FAILED:
                        t("Проверка captcha не пройдена. Попробуйте снова");
                        break;
                    case ao.RATE_LIMIT_EXCEEDED:
                        t("Слишком много попыток. Попробуйте позже");
                        break;
                    default:
                        t(i.message || "Произошла ошибка");
                }
            } else {
                t("Произошла ошибка. Попробуйте позже");
            }
        } finally{
            N(false);
        }
    }, [
        n
    ]);
    const Y = q_1((a)=>{
        _(a);
        t(null);
        m("password");
    }, []);
    const X = q_1(async (a)=>{
        a.preventDefault();
        t(null);
        c(null);
        E(null);
        if (!o.trim()) {
            c("Введите новый пароль");
            return;
        }
        if (o.length < 10) {
            c("Минимум 10 символов");
            return;
        }
        if (o.length > 128) {
            c("Максимум 128 символов");
            return;
        }
        if (!/^[\x21-\x7E]+$/.test(o)) {
            c("Только латиница, цифры и знаки пунктуации");
            return;
        }
        if (o !== v) {
            E("Пароли не совпадают");
            return;
        }
        N(true);
        try {
            await am.resetPassword({
                email: n,
                flowToken: b,
                otp: P,
                newPassword: o
            });
            $_1("/login");
        } catch (i) {
            if (an(i)) {
                switch(i.code){
                    case ao.OTP_INVALID:
                        t("Неверный код. Попробуйте снова");
                        m("otp");
                        _("");
                        break;
                    case ao.MISSING_FLOW_TOKEN:
                    case ao.UNAUTHORIZED:
                        t("Сессия истекла. Начните заново");
                        m("email");
                        break;
                    case ao.RATE_LIMIT_EXCEEDED:
                        t("Слишком много попыток. Попробуйте позже");
                        break;
                    case ao.VALIDATION_ERROR:
                        c("Пароль не соответствует требованиям");
                        break;
                    default:
                        t(i.message || "Произошла ошибка");
                }
            } else {
                t("Произошла ошибка. Попробуйте позже");
            }
        } finally{
            N(false);
        }
    }, [
        n,
        b,
        P,
        o,
        v
    ]);
    const onResend = q_1(async ()=>{
        t(null);
        O(false);
        try {
            await am.resendOtp({
                email: n,
                flowToken: b
            });
            O(true);
            setTimeout(()=>O(false), 3000);
        } catch (a) {
            if (an(a)) {
                if (a.code === ao.RATE_LIMIT_EXCEEDED) {
                    t("Слишком много запросов. Попробуйте позже");
                } else {
                    t(a.message || "Не удалось отправить код");
                }
            } else {
                t("Произошла ошибка. Попробуйте позже");
            }
        }
    }, [
        n,
        b
    ]);
    const onClick = q_1(()=>{
        t(null);
        if (h === "password") {
            c(null);
            E(null);
            D("");
            L("");
            m("otp");
        } else {
            m("email");
        }
    }, [
        h
    ]);
    return u_1(S_1, {
        children: [
            u_1("div", {
                className: s.container,
                children: [
                    u_1("div", {
                        className: s.logo,
                        children: u_1(I_1, {})
                    }),
                    h === "email" && u_1("form", {
                        className: s.form,
                        onSubmit: U,
                        children: [
                            u_1("div", {
                                className: s.header,
                                children: [
                                    u_1("h1", {
                                        className: s.title,
                                        children: "Забыли пароль?"
                                    }),
                                    u_1("p", {
                                        className: s.subtitle,
                                        children: "Введите ваш E-Mail для восстановления"
                                    })
                                ]
                            }),
                            u && u_1("div", {
                                className: s.error,
                                children: u
                            }),
                            u_1("div", {
                                className: s.inputs,
                                children: u_1("div", {
                                    className: s.inputGroup,
                                    children: [
                                        u_1("label", {
                                            className: s.label,
                                            children: "E-Mail"
                                        }),
                                        u_1("input", {
                                            type: "email",
                                            className: `${s.input} ${w ? s.inputError : ""}`,
                                            value: n,
                                            onInput: (a)=>{
                                                W(a.target.value);
                                                d(null);
                                            },
                                            placeholder: "ilya@gmail.com",
                                            disabled: p
                                        }),
                                        w && u_1("span", {
                                            className: s.fieldError,
                                            children: w
                                        })
                                    ]
                                })
                            }),
                            u_1(B_1, {
                                type: "submit",
                                variant: "primary",
                                size: "lg",
                                fullWidth: true,
                                className: s.submitButton,
                                disabled: p,
                                children: p ? "Отправка..." : "Отправить"
                            }),
                            u_1("p", {
                                className: s.backLink,
                                children: u_1("a", {
                                    href: "/login",
                                    children: "Вернуться ко входу"
                                })
                            })
                        ]
                    }),
                    h === "otp" && u_1("div", {
                        className: s.form,
                        children: [
                            u_1("div", {
                                className: s.header,
                                children: [
                                    u_1("h1", {
                                        className: s.title,
                                        children: "Введите код"
                                    }),
                                    u_1("p", {
                                        className: s.subtitle,
                                        children: [
                                            "Мы отправили шестизначный код на ",
                                            n
                                        ]
                                    })
                                ]
                            }),
                            u && u_1("div", {
                                className: s.error,
                                children: u
                            }),
                            x && u_1("div", {
                                className: s.success,
                                children: "Код отправлен повторно"
                            }),
                            u_1(O_1, {
                                onSubmit: Y,
                                onResend,
                                disabled: p,
                                buttonText: "Продолжить"
                            }),
                            u_1("button", {
                                type: "button",
                                className: s.backButton,
                                onClick,
                                children: "Назад"
                            })
                        ]
                    }),
                    h === "password" && u_1("form", {
                        className: s.form,
                        onSubmit: X,
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
                            u && u_1("div", {
                                className: s.error,
                                children: u
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
                                                        type: y ? "text" : "password",
                                                        className: `${s.input} ${I ? s.inputError : ""}`,
                                                        value: o,
                                                        onInput: (a)=>{
                                                            D(a.target.value);
                                                            c(null);
                                                        },
                                                        placeholder: "Минимум 10 символов",
                                                        autoComplete: "new-password",
                                                        autoFocus: true
                                                    }),
                                                    u_1("button", {
                                                        type: "button",
                                                        className: s.eyeButton,
                                                        onClick: ()=>F(!y),
                                                        children: y ? u_1(I_2, {
                                                            size: 20
                                                        }) : u_1(a, {
                                                            size: 20
                                                        })
                                                    })
                                                ]
                                            }),
                                            I && u_1("span", {
                                                className: s.fieldError,
                                                children: I
                                            })
                                        ]
                                    }),
                                    u_1("div", {
                                        className: s.inputGroup,
                                        children: [
                                            u_1("label", {
                                                className: s.label,
                                                children: "Повторите пароль"
                                            }),
                                            u_1("div", {
                                                className: s.inputWrapper,
                                                children: [
                                                    u_1("input", {
                                                        type: C ? "text" : "password",
                                                        className: `${s.input} ${g ? s.inputError : ""}`,
                                                        value: v,
                                                        onInput: (a)=>{
                                                            L(a.target.value);
                                                            E(null);
                                                        },
                                                        placeholder: "Повторите пароль",
                                                        autoComplete: "new-password"
                                                    }),
                                                    u_1("button", {
                                                        type: "button",
                                                        className: s.eyeButton,
                                                        onClick: ()=>G(!C),
                                                        children: C ? u_1(I_2, {
                                                            size: 20
                                                        }) : u_1(a, {
                                                            size: 20
                                                        })
                                                    })
                                                ]
                                            }),
                                            g && u_1("span", {
                                                className: s.fieldError,
                                                children: g
                                            })
                                        ]
                                    })
                                ]
                            }),
                            u_1(B_1, {
                                type: "submit",
                                variant: "primary",
                                size: "lg",
                                fullWidth: true,
                                className: s.submitButton,
                                disabled: p || !o.trim(),
                                children: p ? "Сброс..." : "Сбросить пароль"
                            }),
                            u_1("button", {
                                type: "button",
                                className: s.backButton,
                                onClick,
                                children: "Назад"
                            })
                        ]
                    }),
                    u_1(g_1, {})
                ]
            }),
            u_1(C_1, {
                isOpen,
                onClose: ()=>k(false),
                onVerify
            })
        ]
    });
};
export { ForgotPassword as default };
