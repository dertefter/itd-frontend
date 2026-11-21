import { K as K_1, d as d_1, q as q_1, $ as $_1, an, ao, u as u_1, aq, B as B_1, I as I_1, g as g_1, S as S_1 } from "./index-B4ySybtH.js";
import { P as P_1 } from "./index-CkHyJiJD.js";
import { C as C_1 } from "./index-AsKwldqN.js";
import { O as O_1 } from "./index-CQmZctd5.js";
import { I as I_2, a as a_1 } from "./IconEyeOff-L3vRD_Bs.js";
const Q = "mCnG";
const z = "Ue1d";
const K = "n0gc";
const X = "lxsh";
const H = "E0Br";
const success = "n50p";
const backButton = "Z2kM";
const expiredModal = "tker";
const expiredTitle = "ovnD";
const expiredText = "QRCa";
const expiredActions = "Avbk";
const o = {
    container: Q,
    header: z,
    title: K,
    subtitle: X,
    error: H,
    success,
    backButton,
    expiredModal,
    expiredTitle,
    expiredText,
    expiredActions
};
function te({ email, onBack, onLegalError }) {
    const { verifyOtp, resendOtp } = K_1();
    const [u, r] = d_1(null);
    const [g, A] = d_1(false);
    const [x, c] = d_1(false);
    const [T, a] = d_1(false);
    const [E, b] = d_1(false);
    const _ = (t)=>{
        if (an(t)) {
            return t.code === ao.MISSING_FLOW_TOKEN || t.code === ao.UNAUTHORIZED || t.code === ao.BAD_REQUEST && t.message?.toLowerCase().includes("flow token");
        }
        return false;
    };
    const v = q_1(async (t)=>{
        r(null);
        A(true);
        try {
            const i = await verifyOtp(t);
            i === "authenticated" ? K_1.getState().status === "needs_profile" ? $_1("/onboarding") : $_1("/") : i === "password_reset" && $_1("/reset-password");
        } catch (i) {
            if (an(i) && i.code.startsWith("LEGAL_") && onLegalError) {
                onLegalError(i.code);
            } else if (_(i)) {
                a(true);
            } else if (an(i)) {
                switch(i.code){
                    case ao.OTP_INVALID:
                        r("Неверный код. Попробуйте снова");
                        break;
                    case ao.RATE_LIMIT_EXCEEDED:
                        r("Слишком много попыток. Попробуйте позже");
                        break;
                    default:
                        r(i.message || "Ошибка проверки кода");
                }
            } else {
                r("Произошла ошибка. Попробуйте позже");
            }
        } finally{
            A(false);
        }
    }, [
        verifyOtp,
        onLegalError
    ]);
    const onResend = q_1(async ()=>{
        r(null);
        c(false);
        try {
            await resendOtp();
            c(true);
            setTimeout(()=>c(false), 3000);
        } catch (t) {
            if (an(t)) {
                if (t.code === ao.RATE_LIMIT_EXCEEDED) {
                    r("Слишком много запросов. Попробуйте позже");
                } else {
                    r(t.message || "Не удалось отправить код");
                }
            } else {
                r("Произошла ошибка. Попробуйте позже");
            }
        }
    }, [
        resendOtp
    ]);
    const onClick = q_1(async ()=>{
        b(true);
        try {
            await resendOtp();
            a(false);
            c(true);
            setTimeout(()=>c(false), 3000);
        } catch (t) {
            a(false);
            if (an(t)) {
                r(t.message || "Не удалось отправить код");
            } else {
                r("Произошла ошибка. Попробуйте позже");
            }
        } finally{
            b(false);
        }
    }, [
        resendOtp
    ]);
    const y = q_1(()=>{
        a(false);
        onBack?.();
    }, [
        onBack
    ]);
    return u_1("div", {
        className: o.container,
        children: [
            u_1("div", {
                className: o.header,
                children: [
                    u_1("h1", {
                        className: o.title,
                        children: "Подтверждение действия"
                    }),
                    u_1("p", {
                        className: o.subtitle,
                        children: [
                            "Мы отправили шестизначный код на почту ",
                            email,
                            ", чтобы убедиться, что вы – настоящий её владелец."
                        ]
                    })
                ]
            }),
            u && u_1("div", {
                className: o.error,
                children: u
            }),
            x && u_1("div", {
                className: o.success,
                children: "Код отправлен повторно"
            }),
            u_1(O_1, {
                onSubmit: v,
                onResend,
                disabled: g
            }),
            onBack && u_1("button", {
                type: "button",
                className: o.backButton,
                onClick: onBack,
                children: "Назад"
            }),
            T && u_1(aq, {
                onClose: y,
                showHeader: false,
                children: u_1("div", {
                    className: o.expiredModal,
                    children: [
                        u_1("h2", {
                            className: o.expiredTitle,
                            children: "Время истекло"
                        }),
                        u_1("p", {
                            className: o.expiredText,
                            children: "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?"
                        }),
                        u_1("div", {
                            className: o.expiredActions,
                            children: [
                                u_1(B_1, {
                                    variant: "secondary",
                                    onClick: y,
                                    disabled: E,
                                    children: "Нет, закрыть"
                                }),
                                u_1(B_1, {
                                    onClick,
                                    disabled: E,
                                    children: "Да, отправить"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const ae = "Ou8Z";
const logo = "Ru67";
const form = "G60l";
const ie = "R8Cb";
const le = "E79h";
const oe = "qxC1";
const ce = "jK4v";
const inputs = "QvXu";
const inputGroup = "dxfl";
const label = "N5L0";
const inputWrapper = "Dt3g";
const input = "bfFh";
const inputError = "AFiD";
const fieldError = "QqxG";
const eyeButton = "aPUT";
const forgotPassword = "nMEo";
const submitButton = "RlRQ";
const signupLink = "qrkW";
const s = {
    container: ae,
    logo,
    form,
    header: ie,
    error: le,
    title: oe,
    subtitle: ce,
    inputs,
    inputGroup,
    label,
    inputWrapper,
    input,
    inputError,
    fieldError,
    eyeButton,
    forgotPassword,
    submitButton,
    signupLink
};
export const Login = (O)=>{
    const [h, m] = d_1(false);
    const [d, f] = d_1("");
    const [u, r] = d_1("");
    const [g, A] = d_1(false);
    const [isOpen, c] = d_1(false);
    const [T, a] = d_1(null);
    const [E, b] = d_1(null);
    const [_, v] = d_1("credentials");
    const { login, status, reset } = K_1();
    const t = status === "loading";
    const i = (p)=>{
        p.preventDefault();
        a(null);
        b(null);
        if (!d.trim()) {
            a("Введите email");
            return;
        }
        if (!u.trim()) {
            a("Введите пароль");
            return;
        }
        c(true);
    };
    const onVerify = q_1(async (captcha)=>{
        c(false);
        try {
            if (await login({
                email: d,
                password: u,
                captcha
            }) !== "authenticated") {
                v("verify");
            }
        } catch (k) {
            if (an(k)) {
                switch(k.code){
                    case ao.ACCOUNT_INVALID_CREDENTIALS:
                        a("Неверный email или пароль");
                        break;
                    case ao.ACCOUNT_DEACTIVATED:
                        a("Аккаунт деактивирован");
                        break;
                    case ao.ACCOUNT_TEMPORARILY_LOCKED:
                        a("Аккаунт временно заблокирован. Попробуйте позже");
                        break;
                    case ao.CAPTCHA_FAILED:
                        a("Проверка captcha не пройдена. Попробуйте снова");
                        break;
                    case ao.RATE_LIMIT_EXCEEDED:
                        a("Слишком много попыток. Попробуйте позже");
                        break;
                    case ao.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED:
                        b("Почта этого домена не поддерживается");
                        break;
                    default:
                        a(k.message || "Ошибка входа");
                }
            } else {
                a("Произошла ошибка. Попробуйте позже");
            }
        }
    }, [
        d,
        u,
        login
    ]);
    const onBack = q_1(()=>{
        reset();
        v("credentials");
    }, [
        reset
    ]);
    if (h) {
        return u_1(P_1, {
            intent: "sign-in",
            onBack: ()=>m(false)
        });
    }
    return u_1(S_1, {
        children: [
            u_1("div", {
                className: s.container,
                children: [
                    u_1("div", {
                        className: s.logo,
                        children: u_1(I_1, {})
                    }),
                    _ === "credentials" ? u_1("form", {
                        className: s.form,
                        onSubmit: i,
                        children: [
                            u_1("div", {
                                className: s.header,
                                children: [
                                    u_1("h1", {
                                        className: s.title,
                                        children: "Вход"
                                    }),
                                    u_1("p", {
                                        className: s.subtitle,
                                        children: "Пожалуйста, введите ваши данные"
                                    })
                                ]
                            }),
                            T && u_1("div", {
                                className: s.error,
                                children: T
                            }),
                            u_1("div", {
                                className: s.inputs,
                                children: [
                                    u_1("div", {
                                        className: s.inputGroup,
                                        children: [
                                            u_1("label", {
                                                className: s.label,
                                                children: "E-Mail"
                                            }),
                                            u_1("input", {
                                                type: "email",
                                                className: `${s.input} ${E ? s.inputError : ""}`,
                                                value: d,
                                                onInput: (p)=>{
                                                    f(p.target.value);
                                                    b(null);
                                                },
                                                placeholder: "ilya@gmail.com",
                                                disabled: t
                                            }),
                                            E && u_1("span", {
                                                className: s.fieldError,
                                                children: E
                                            })
                                        ]
                                    }),
                                    u_1("div", {
                                        className: s.inputGroup,
                                        children: [
                                            u_1("label", {
                                                className: s.label,
                                                children: "Пароль"
                                            }),
                                            u_1("div", {
                                                className: s.inputWrapper,
                                                children: [
                                                    u_1("input", {
                                                        type: g ? "text" : "password",
                                                        className: s.input,
                                                        value: u,
                                                        onInput: (p)=>r(p.target.value),
                                                        placeholder: "••••••••••••",
                                                        disabled: t
                                                    }),
                                                    u_1("button", {
                                                        type: "button",
                                                        className: s.eyeButton,
                                                        onClick: ()=>A(!g),
                                                        children: g ? u_1(I_2, {
                                                            size: 20
                                                        }) : u_1(a_1, {
                                                            size: 20
                                                        })
                                                    })
                                                ]
                                            }),
                                            u_1("a", {
                                                href: "/forgot-password",
                                                className: s.forgotPassword,
                                                children: "Забыли пароль?"
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
                                disabled: t,
                                children: t ? "Вход..." : "Войти"
                            }),
                            u_1(B_1, {
                                variant: "secondary",
                                fullWidth: true,
                                size: "lg",
                                style: {
                                    marginTop: 12
                                },
                                onClick: ()=>m(true),
                                disabled: t,
                                children: "Войти по номеру телефона"
                            }),
                            u_1("p", {
                                className: s.signupLink,
                                children: [
                                    "Еще нет аккаунта? ",
                                    u_1("a", {
                                        href: "/register",
                                        children: "Создать аккаунт"
                                    })
                                ]
                            }),
                            u_1(g_1, {})
                        ]
                    }) : u_1(te, {
                        email: d,
                        onBack
                    })
                ]
            }),
            u_1(C_1, {
                isOpen,
                onClose: ()=>c(false),
                onVerify
            })
        ]
    });
};
export { Login as default };
