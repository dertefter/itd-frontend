import { u as u_1, d as d_1, A, K as K_1, q as q_1, B, aB, bd, S, aw, $, an, be as be_1, ao, bf, bg } from "./index-B4ySybtH.js";
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "assets/index-Ci-xXFdA.js",
    "assets/index-B4ySybtH.js",
    "assets/index-B78tJsLI.css",
    "assets/index-CTqZnZLt.css"
]))=>i.map((i)=>d[i]);
const ie = "Au1i";
const track = "A38t";
const progress = "Bzu9";
const step = "FJ4x";
const active = "liYO";
const h = {
    stepper: ie,
    track,
    progress,
    step,
    active
};
function ue({ steps, currentStep, onStepClick, className }) {
    const k = (currentStep - 1) / (steps - 1) * 100;
    return u_1("div", {
        className: `${h.stepper} ${className || ""}`,
        children: [
            u_1("div", {
                className: h.track,
                children: u_1("div", {
                    className: h.progress,
                    style: {
                        width: `${k}%`
                    }
                })
            }),
            Array.from({
                length: steps
            }, (n, y)=>y + 1).map((n)=>u_1("button", {
                    type: "button",
                    className: `${h.step} ${currentStep >= n ? h.active : ""}`,
                    onClick: ()=>onStepClick?.(n),
                    children: n
                }, n))
        ]
    });
}
const page = "bLKh";
const container = "NHEn";
const header = "Khtz";
const title = "gQXv";
const subtitle = "l8vH";
const ge = "onUH";
const form = "h9cu";
const error = "AGIh";
const inputGroup = "gqYJ";
const label = "vuFf";
const hint = "OjDz";
const input = "Gyp7";
const inputError = "p8NX";
const fieldError = "j00W";
const avatarSection = "rjIx";
const avatarPicker = "M0fL";
const avatar = "gqkf";
const avatarEmpty = "BlZs";
const avatarHint = "IH4S";
const emojiPickerPortal = "igjE";
const emojiPickerBackdrop = "cqC7";
const submitButton = "w1Es";
const t = {
    page,
    container,
    header,
    title,
    subtitle,
    stepper: ge,
    form,
    error,
    inputGroup,
    label,
    hint,
    input,
    inputError,
    fieldError,
    avatarSection,
    avatarPicker,
    avatar,
    avatarEmpty,
    avatarHint,
    emojiPickerPortal,
    emojiPickerBackdrop,
    submitButton
};
const Le = bf(()=>bg(()=>import("./index-Ci-xXFdA.js"), __vite__mapDeps([
        0,
        1,
        2,
        3
    ])).then((d)=>({
            default: d.EmojiPicker
        })));
export const Onboarding = (d)=>{
    const [l, i] = d_1(1);
    const [c, k] = d_1("");
    const [n, y] = d_1("");
    const [m, O] = d_1(null);
    const [C, u] = d_1(null);
    const [P, f] = d_1(null);
    const [v, p] = d_1(null);
    const [w, U] = d_1(false);
    const [I, L] = d_1(false);
    const [D, g] = d_1(false);
    const [N, F] = d_1(null);
    const _ = A(null);
    const { createProfile } = K_1();
    const x = (r)=>{
        if (r) {
            return r.length < 3 ? "Минимум 3 символа" : r.length > 50 ? "Максимум 50 символов" : /^[a-zA-Z0-9_]+$/.test(r) ? /^[0-9_]/.test(r) ? "Не может начинаться с цифры или _" : /_$/.test(r) ? "Не может заканчиваться на _" : /__/.test(r) ? "Не может содержать два _ подряд" : null : "Только латиница, цифры и _";
        }
        return "Введите username";
    };
    const W = async (r)=>{
        r.preventDefault();
        u(null);
        f(null);
        p(null);
        const a = c.trim();
        const o = n.trim();
        if (!a) {
            f("Введите имя");
            return;
        }
        if (a.length < 2) {
            f("Имя должно быть не менее 2 символов");
            return;
        }
        const E = x(o);
        if (E) {
            p(E);
            return;
        }
        L(true);
        try {
            if (!await aw.checkUsername(o)) {
                p("Этот username уже занят");
                return;
            }
            i(2);
        } catch (b) {
            console.error("Failed to check username:", b);
            i(2);
        } finally{
            L(false);
        }
    };
    const q = async (r)=>{
        r.preventDefault();
        if (m) {
            u(null);
            U(true);
            try {
                await createProfile({
                    displayName: c.trim(),
                    username: n.trim(),
                    avatar: m
                });
                $("/");
            } catch (a) {
                console.error("Profile creation error:", a);
                if (an(a)) {
                    switch(a.code){
                        case ao.PROFILE_USERNAME_TAKEN:
                        case ao.PROFILE_USERNAME_RESERVED:
                            i(1);
                            p(be_1(a.code, a.message));
                            break;
                        default:
                            u(be_1(a.code, a.message || "Ошибка создания профиля"));
                    }
                } else {
                    u("Произошла ошибка. Попробуйте позже");
                }
            } finally{
                U(false);
            }
        }
    };
    const K = ()=>{
        i(1);
        u(null);
    };
    const onStepClick = (r)=>{
        if (r === 1) {
            i(1);
            u(null);
        } else if (r === 2 && l === 1) {
            const a = c.trim();
            const o = n.trim();
            if (!a || a.length < 2 || x(o) || v) {
                return;
            }
            i(2);
        }
    };
    const onEmojiSelect = q_1((r)=>{
        O(r.emoji);
        g(false);
    }, []);
    const Y = q_1(()=>{
        if (!_.current) {
            return;
        }
        const r = _.current.getBoundingClientRect();
        const a = 280;
        const o = 380;
        const E = window.innerWidth - r.right;
        const r_left = r.left;
        const J = window.innerHeight - r.bottom;
        let S;
        let $;
        let j;
        let A;
        if (J >= o + 8) {
            S = r.bottom + 8;
            j = "top";
        } else {
            S = r.top - o - 8;
            j = "bottom";
        }
        if (r_left > E) {
            $ = r.right - a;
            A = "right";
        } else {
            $ = r.left;
            A = "left";
        }
        F({
            top: S,
            left: $,
            transformOrigin: `${j} ${A}`
        });
        g(true);
    }, []);
    return u_1(S, {
        children: [
            u_1("div", {
                className: t.page,
                children: u_1("div", {
                    className: t.container,
                    children: [
                        u_1("div", {
                            className: t.header,
                            children: [
                                u_1("h1", {
                                    className: t.title,
                                    children: "Настройка профиля"
                                }),
                                u_1("p", {
                                    className: t.subtitle,
                                    children: "Пожалуйста, укажите данные профиля"
                                })
                            ]
                        }),
                        u_1(ue, {
                            steps: 2,
                            currentStep: l,
                            onStepClick,
                            className: t.stepper
                        }),
                        C && u_1("div", {
                            className: t.error,
                            children: C
                        }),
                        l === 1 && u_1("form", {
                            className: t.form,
                            onSubmit: W,
                            children: [
                                u_1("div", {
                                    className: t.inputGroup,
                                    children: [
                                        u_1("label", {
                                            className: t.label,
                                            children: "Имя"
                                        }),
                                        u_1("p", {
                                            className: t.hint,
                                            children: "Как тебя будут видеть другие пользователи"
                                        }),
                                        u_1("input", {
                                            type: "text",
                                            className: `${t.input} ${P ? t.inputError : ""}`,
                                            value: c,
                                            onInput: (r)=>{
                                                k(r.target.value);
                                                f(null);
                                            },
                                            placeholder: "Иван Иванов",
                                            maxLength: 50
                                        }),
                                        P && u_1("span", {
                                            className: t.fieldError,
                                            children: P
                                        })
                                    ]
                                }),
                                u_1("div", {
                                    className: t.inputGroup,
                                    children: [
                                        u_1("label", {
                                            className: t.label,
                                            children: "Username"
                                        }),
                                        u_1("p", {
                                            className: t.hint,
                                            children: 'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")'
                                        }),
                                        u_1("input", {
                                            type: "text",
                                            className: `${t.input} ${v ? t.inputError : ""}`,
                                            value: n,
                                            onInput: (r)=>{
                                                y(r.target.value.toLowerCase());
                                                p(null);
                                            },
                                            placeholder: "ivanov1998",
                                            maxLength: 50
                                        }),
                                        v && u_1("span", {
                                            className: t.fieldError,
                                            children: v
                                        })
                                    ]
                                }),
                                u_1(B, {
                                    type: "submit",
                                    variant: "primary",
                                    size: "lg",
                                    fullWidth: true,
                                    className: t.submitButton,
                                    disabled: I,
                                    children: I ? "Проверка..." : "Продолжить"
                                })
                            ]
                        }),
                        l === 2 && u_1("form", {
                            className: t.form,
                            onSubmit: q,
                            children: [
                                u_1("div", {
                                    className: t.avatarSection,
                                    children: [
                                        u_1("label", {
                                            className: t.label,
                                            children: "Эмоджи-клан"
                                        }),
                                        u_1("p", {
                                            className: t.hint,
                                            children: "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!"
                                        }),
                                        u_1("div", {
                                            className: t.avatarPicker,
                                            children: [
                                                u_1("div", {
                                                    ref: _,
                                                    className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                                                    onClick: Y,
                                                    children: m || "?"
                                                }),
                                                u_1("span", {
                                                    className: t.avatarHint,
                                                    children: m ? "Нажми чтобы изменить" : "Нажми чтобы выбрать"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                u_1(B, {
                                    type: "button",
                                    variant: "secondary",
                                    size: "lg",
                                    fullWidth: true,
                                    onClick: K,
                                    disabled: w,
                                    children: "Назад"
                                }),
                                u_1(B, {
                                    type: "submit",
                                    variant: "primary",
                                    size: "lg",
                                    fullWidth: true,
                                    className: t.submitButton,
                                    disabled: w || !m,
                                    children: "Завершить"
                                })
                            ]
                        })
                    ]
                })
            }),
            D && N && aB(u_1("div", {
                className: t.emojiPickerPortal,
                style: {
                    position: "fixed",
                    top: N.top,
                    left: N.left,
                    zIndex: 1000,
                    transformOrigin: N.transformOrigin
                },
                children: [
                    u_1("div", {
                        className: t.emojiPickerBackdrop,
                        onClick: ()=>g(false)
                    }),
                    u_1(bd, {
                        fallback: null,
                        children: u_1(Le, {
                            onEmojiSelect,
                            onClose: ()=>g(false),
                            excludeCategories: [
                                "Flags"
                            ]
                        })
                    })
                ]
            }), document.body)
        ]
    });
};
export { Onboarding as default };
