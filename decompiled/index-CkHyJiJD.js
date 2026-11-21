import { A as A_1, r as r_1, d as d_1, h as h_1, o as o_1, v as v_1, a as a_1, b as b_1, c as c_1, q as q_1, f as f_1, W as W_1, u as u_1, s, I as I_1, P as P_1, C as C_1, S as S_1, e as e_1, B as B_1, T as T_1, g as g_1, i as i_1, j as j_1, k as k_1, l as l_1, m as m_1, p as p_1, n as n_1, t as t_1, w as w_1, x as x_1, y as y_1, z as z_1, D as D_1, E as E_1, F as F_1, G as G_1, H as H_1, J as J_1, K as K_1, R as R_1, $ as $_1, L as L_1, M as M_1, N as N_1, O as O_1 } from "./index-B4ySybtH.js";
import { C as C_2 } from "./index-AsKwldqN.js";
function Dn(ue) {
    const { intent } = ue;
    const q = A_1(r_1());
    const B = A_1(n_1());
    const O = A_1(false);
    const A = A_1(0);
    const [P, K] = d_1(!!q.current);
    const [_, $] = d_1(false);
    const [resumeOpen, D] = d_1(false);
    const Y = (phone, flowToken, mode)=>{
        if (O.current) {
            x_1({
                phone,
                flowToken,
                mode,
                expiresAt: A.current
            }, B.current);
        }
    };
    const [T, R] = d_1(false);
    const N = A_1("direct");
    const [directEntry, J] = d_1(false);
    const L = A_1(0);
    const [, x] = d_1("");
    const [Ke, S] = d_1("");
    const [r, f] = d_1("number");
    const [U, Ye] = d_1(null);
    const [de, Oe] = d_1(false);
    const [Q, Te] = d_1("ru");
    const [Re, Ce] = d_1("");
    const [Z, Ie] = d_1("");
    const [fe, i] = d_1("");
    const [isOpen, M] = d_1(false);
    const [c, Pe] = d_1(false);
    const ee = A_1(false);
    const [l, ne] = d_1("");
    const [h, m] = d_1("");
    const [u, p] = d_1(null);
    const [W, v] = d_1([]);
    const [V, F] = d_1("");
    const [ke, he] = d_1("");
    const [Qe, G] = d_1(0);
    const [Ze, te] = d_1(0);
    const [me, pe] = d_1(false);
    const [Ae, en] = d_1(()=>Date.now());
    const _e = async ()=>{
        const e = r_1();
        if (!e) {
            K(false);
            $(false);
            return;
        }
        K(true);
        $(false);
        try {
            const n = await p_1.resume(e.phone, e.flowToken);
            if (!O.current || B.current !== n_1()) {
                return;
            }
            const s = t_1(e.phone, "ru");
            if (v_1(s.country, s.digits) !== e.phone) {
                e_1();
                return;
            }
            A.current = Math.min(e.expiresAt, Date.now() + n.expiresIn * 1000);
            Te(s.country);
            Ce(s.digits);
            Ie("");
            ne(e.phone);
            m(e.flowToken);
            p(n);
            v([]);
            G(Date.now() + n.retryIn * 1000);
            L.current = A.current;
            const Ve = e.mode === "reverse";
            J(false);
            D(Ve);
            R(Ve);
            f(e.mode === "choice" ? "number" : "code");
            i(e.mode === "choice" ? m_1 : "");
            Y(e.phone, e.flowToken, e.mode);
        } catch (n) {
            if (!O.current || B.current !== n_1()) {
                return;
            }
            if (n instanceof w_1 && [
                "INVALID_FLOW_TOKEN",
                "OTP_EXPIRED",
                "RESUME_UNSUPPORTED"
            ].includes(n.code)) {
                e_1();
            } else {
                $(true);
            }
        } finally{
            if (O.current) {
                K(false);
            }
        }
    };
    h_1(()=>{
        O.current = true;
        const e = o_1(()=>{
            m("");
            p(null);
            D(false);
            R(false);
            f("number");
            v([]);
            F("");
            he("");
            K(false);
            $(false);
        });
        if (q.current) {
            _e();
        }
        return ()=>{
            O.current = false;
            e();
        };
    }, []);
    h_1(()=>{
        const e = setInterval(()=>en(Date.now()), 1000);
        return ()=>clearInterval(e);
    }, []);
    const b = Math.max(0, Math.ceil((Qe - Ae) / 1000));
    const w = Math.max(0, Math.ceil((Ze - Ae) / 1000));
    const d = !Z && v_1(Q, Re);
    const De = a_1();
    const re = b_1(De, Q);
    const be = !!d && c_1(De, Q) && Ke !== d;
    const [y, Le] = d_1(null);
    const [xe, Se] = d_1(false);
    const [nn, tn] = d_1("Получить код");
    const se = A_1(0);
    const ae = A_1(null);
    const oe = A_1(null);
    const ie = q_1(async ()=>{
        const e = ++se.current;
        try {
            const n = await f_1(W_1);
            if (e !== se.current) {
                return;
            }
            Le(n);
            tn(n.bundle.submitLabel);
        } catch  {
            if (e === se.current) {
                Se(true);
            }
        }
    }, []);
    const C = q_1(()=>{
        Le(null);
        Se(false);
        ie();
    }, [
        ie
    ]);
    h_1(()=>{
        const e = se;
        ie();
        return ()=>{
            e.current++;
        };
    }, [
        ie
    ]);
    const ce = (e = 0)=>{
        e_1();
        q.current = null;
        A.current = 0;
        L.current = 0;
        m("");
        p(null);
        v([]);
        D(false);
        J(false);
        R(false);
        f("number");
        M(false);
        pe(false);
        te(Date.now() + e * 1000);
        i(G_1);
        C();
    };
    const le = async (e)=>{
        if (!ee.current) {
            ee.current = true;
            Pe(true);
            i("");
            try {
                await e();
            } catch (n) {
                if (r === "terms" && y_1(n)) {
                    ce();
                } else if (r === "code" && y_1(n) && n.flowExpiresIn > 0) {
                    pe(true);
                    te(Date.now() + n.flowExpiresIn * 1000);
                    i(z_1);
                } else if (r === "code" && y_1(n)) {
                    ce();
                } else {
                    i(D_1(n) || E_1(n) || F_1(n));
                }
                if (r === "number" && n instanceof w_1 && n.code === "PHONE_VERIFICATION_PENDING") {
                    te(Date.now() + n.retryIn * 1000);
                }
                if (n instanceof w_1 && n.retryIn && !(r === "number" && N.current === "reverse")) {
                    G(Date.now() + n.retryIn * 1000);
                }
            } finally{
                ee.current = false;
                Pe(false);
            }
        }
    };
    const Ue = async ()=>{
        await K_1.getState().initialize();
        const status = K_1.getState().status;
        if (status !== "authenticated" && status !== "needs_profile") {
            throw new Error("Session unavailable");
        }
        if (status === "needs_profile") {
            if (window.location.pathname !== R_1.ONBOARDING && !$_1(R_1.ONBOARDING, true)) {
                window.location.assign(R_1.ONBOARDING);
            }
            return;
        }
        L_1.syncIfAttached().catch(()=>{});
        if ([
            R_1.LOGIN,
            R_1.REGISTER,
            R_1.ONBOARDING
        ].some((n)=>n === window.location.pathname)) {
            const n = R_1.HOME;
            if (!$_1(n, true)) {
                window.location.assign(n);
            }
        }
    };
    const H = async (e)=>{
        if (!(!O.current || B.current !== n_1())) {
            if (e.step === "terms") {
                if (!H_1(e.consent, M_1)) {
                    throw new w_1("LEGAL_UNAVAILABLE");
                }
                Ye(e.consent);
                Oe(false);
                f("terms");
                return;
            }
            e_1();
            if (e.step === "password" && e.flowToken) {
                m(e.flowToken);
                F("");
                f("password");
            } else if (e.accessToken) {
                await Ue();
            } else {
                throw new Error("Unexpected login response");
            }
        }
    };
    const onVerify = (e)=>{
        M(false);
        const ae_current = ae.current;
        ae.current = null;
        if (d) {
            if (!ae_current) {
                i(C_1);
                C();
                return;
            }
            le(async ()=>{
                try {
                    oe.current = d;
                    const s = await p_1.start(d, e, J_1(ae_current), N.current);
                    if (!O.current || B.current !== n_1()) {
                        return;
                    }
                    A.current = Date.now() + 300000;
                    L.current = A.current;
                    pe(false);
                    te(0);
                    D(false);
                    Y(d, s.flowToken, s.reverseOnly && N.current !== "reverse" ? "choice" : N.current === "reverse" ? "reverse" : "code");
                    if (s.reverseOnly && N.current !== "reverse") {
                        S("");
                        x("");
                        ne(d);
                        m(s.flowToken);
                        p(s);
                        v([]);
                        L.current = Date.now() + 240000;
                        i(m_1);
                        return;
                    }
                    S("");
                    x("");
                    J(N.current === "reverse");
                    R(s.reverseOnly === true);
                    ne(d);
                    m(s.flowToken);
                    p(s);
                    v([]);
                    f("code");
                    if (N.current !== "reverse") {
                        G(Date.now() + s.retryIn * 1000);
                    }
                } catch (s) {
                    if (D_1(s)) {
                        C();
                    }
                    s instanceof w_1 && (s.code === "PHONE_NUMBER_LIMIT_REVERSE_AVAILABLE" ? (x(d), S(""), ne(d), m(""), p(null)) : [
                        "TOO_MANY_REQUESTS",
                        "REVERSE_BUDGET_EXHAUSTED",
                        "REVERSE_UNAVAILABLE"
                    ].includes(s.code) && (x(""), S(d), p(null), m("")));
                    throw s;
                }
            });
        }
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        if (r === "number") {
            if (!re || !d || b || w || c || P || _) {
                return;
            }
            if (!y || i_1(y)) {
                C();
                return;
            }
            N.current = "direct";
            ae.current = y;
            i("");
            M(true);
            return;
        }
        le(async ()=>{
            if (r === "terms") {
                if (!de || !U) {
                    return;
                }
                const n = (s)=>{
                    if (T) {
                        return N_1.complete(l, h, false, s);
                    }
                    return p_1.verify(l, h, W.join(""), s);
                };
                try {
                    if (i_1(U)) {
                        await H(await n());
                    } else {
                        await H(await n({
                            accepted: true,
                            contextToken: U.contextToken
                        }));
                    }
                } catch (s) {
                    if (!O_1(s)) {
                        throw s;
                    }
                    await H(await n());
                }
            } else if (r === "code") {
                if (!u || u.reverseOnly || W.join("").length !== u.codeLength) {
                    return;
                }
                let n;
                try {
                    n = await p_1.verify(l, h, W.join(""));
                } catch (s) {
                    if (O_1(s)) {
                        e_1();
                        f("number");
                        v([]);
                        m("");
                        p(null);
                        C();
                    }
                    throw s;
                }
                await H(n);
            } else {
                if (r === "reset" && (V !== ke || !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(V))) {
                    i("Пароли должны совпадать: от 8 символов, латинская буква и цифра.");
                    return;
                }
                if (r === "reset") {
                    await p_1.reset(l, h, V);
                } else {
                    await p_1.password(l, h, V);
                }
                await Ue();
            }
        });
    };
    return u_1("div", {
        className: s.card,
        "data-reverse-open": T,
        children: [
            u_1("div", {
                className: s.brand,
                children: u_1(I_1, {})
            }),
            u_1("div", {
                className: s.symbol,
                children: u_1("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: [
                        u_1("rect", {
                            x: "6",
                            y: "2",
                            width: "12",
                            height: "20",
                            rx: "3"
                        }),
                        u_1("path", {
                            d: "M10 5h4m-3 14h2"
                        })
                    ]
                })
            }),
            u_1("h1", {
                className: s.phase,
                children: r === "terms" ? "Создание аккаунта" : r === "number" ? intent === "sign-up" ? "Регистрация" : "Вход по телефону" : r === "code" ? T ? "Позвоните сами" : u?.reverseOnly ? "Не удалось позвонить" : "Подтвердите номер" : r === "reset" ? "Новый пароль" : "Облачный пароль"
            }, r + String(T)),
            u_1("p", {
                className: `${s.description} ${s.phase}`,
                children: r === "terms" ? "Номер подтверждён. Примите условия, чтобы создать аккаунт." : r === "number" ? intent === "sign-up" ? re ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом." : "Создайте аккаунт по номеру телефона. Подтвердите номер звонком." : re ? "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом." : "Войдите или создайте аккаунт. Подтвердите номер звонком." : r === "code" ? T ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно." : u?.reverseOnly ? "Вы можете позвонить сами или повторить запрос позже." : u?.channel === "push" ? "Код отправлен в приложение ИТД." : u?.channel === "sms" ? "Введите код из сообщения." : `Введите последние ${u?.codeLength ?? 4} цифры номера входящего звонка.` : r === "password" ? "Для этого аккаунта включена дополнительная защита." : "Номер подтверждён. Задайте новый пароль для входа."
            }, r + String(T)),
            u_1("form", {
                className: `${s.form} ${s.phase}`,
                onSubmit,
                children: [
                    r === "number" ? u_1(P_1, {
                        country: Q,
                        digits: Re,
                        disabled: c || P || _,
                        error: Z,
                        onChange: (e, n, s)=>{
                            Te(e);
                            Ce(n);
                            Ie(s);
                            i("");
                            if (oe.current && v_1(e, n) !== oe.current) {
                                oe.current = null;
                                C();
                            }
                        }
                    }) : u_1("span", {
                        className: s.number,
                        children: l.replace(/^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/, "+7 ($1) $2-$3-$4")
                    }),
                    (r === "password" || r === "reset") && u_1("label", {
                        className: s.field,
                        children: [
                            r === "reset" ? "Новый пароль" : "Облачный пароль",
                            u_1("input", {
                                type: "password",
                                autoComplete: r === "reset" ? "new-password" : "current-password",
                                maxLength: 100,
                                value: V,
                                onInput: (e)=>F(e.currentTarget.value),
                                disabled: c,
                                required: true
                            })
                        ]
                    }),
                    r === "reset" && u_1("label", {
                        className: s.field,
                        children: [
                            "Повторите пароль",
                            u_1("input", {
                                type: "password",
                                autoComplete: "new-password",
                                maxLength: 100,
                                value: ke,
                                onInput: (e)=>he(e.currentTarget.value),
                                disabled: c,
                                required: true
                            })
                        ]
                    }),
                    (fe || Z || r === "number" && xe) && u_1("p", {
                        className: s.error,
                        role: "alert",
                        children: fe || Z || C_1
                    }),
                    r === "number" && xe && u_1("button", {
                        className: s.link,
                        type: "button",
                        onClick: C,
                        children: "Загрузить документы ещё раз"
                    }),
                    r === "number" && _ && u_1(S_1, {
                        children: [
                            u_1("p", {
                                className: s.error,
                                role: "alert",
                                children: "Не удалось восстановить начатую проверку."
                            }),
                            u_1("button", {
                                className: s.link,
                                type: "button",
                                disabled: P,
                                onClick: ()=>{
                                    _e();
                                },
                                children: "Продолжить проверку"
                            }),
                            u_1("button", {
                                className: s.link,
                                type: "button",
                                onClick: ()=>{
                                    e_1();
                                    $(false);
                                    q.current = null;
                                },
                                children: "Начать заново"
                            })
                        ]
                    }),
                    r !== "code" && r !== "terms" && (r !== "number" || re) && u_1(B_1, {
                        type: "submit",
                        fullWidth: true,
                        size: "lg",
                        loading: c || P,
                        disabled: P || _ || (r === "number" ? !d || !!b || !!w || !y : !V),
                        children: r === "number" ? b ? `Подождите ${b} с` : w ? `Новая проверка через ${w} с` : nn : r === "reset" ? "Сохранить и войти" : "Войти"
                    }),
                    r === "terms" && U && u_1(S_1, {
                        children: [
                            u_1(T_1, {
                                checked: de,
                                disabled: c,
                                onChange: Oe,
                                href: U.bundle.documents.find((e)=>e.slug === "terms")?.url ?? "/terms"
                            }),
                            u_1(g_1, {}),
                            u_1(B_1, {
                                type: "submit",
                                fullWidth: true,
                                size: "lg",
                                disabled: !de,
                                loading: c,
                                children: U.bundle.submitLabel
                            })
                        ]
                    }),
                    r === "number" && u_1("div", {
                        className: s.reverseEntry,
                        "data-ready": be,
                        "aria-hidden": !be,
                        inert: !be,
                        children: u_1("div", {
                            children: u_1(B_1, {
                                type: "button",
                                fullWidth: true,
                                size: "lg",
                                disabled: c || P || _ || !!w || !y,
                                onClick: ()=>{
                                    if (!(!d || ee.current || P || _ || w)) {
                                        if (l === d && u?.reverseOnly && h && Date.now() < L.current) {
                                            Y(l, h, "reverse");
                                            J(true);
                                            D(false);
                                            R(true);
                                            f("code");
                                            i("");
                                            return;
                                        }
                                        if (!y || i_1(y)) {
                                            C();
                                            return;
                                        }
                                        N.current = "reverse";
                                        ae.current = y;
                                        i("");
                                        M(true);
                                    }
                                },
                                children: w ? `Позвонить самому через ${w} с` : "Позвонить самому"
                            })
                        })
                    }),
                    r === "code" && u_1("div", {
                        className: s.verification,
                        children: [
                            u && u_1(j_1, {
                                visible: !T && !u.reverseOnly,
                                children: [
                                    u_1(k_1, {
                                        value: W,
                                        length: u.codeLength,
                                        onChange: v,
                                        disabled: c,
                                        status: fe ? "error" : "idle"
                                    }),
                                    u_1(B_1, {
                                        type: "submit",
                                        fullWidth: true,
                                        size: "lg",
                                        loading: c,
                                        disabled: W.join("").length !== u.codeLength,
                                        children: "Продолжить"
                                    }),
                                    u_1("button", {
                                        className: s.link,
                                        type: "button",
                                        disabled: c || !!b || me,
                                        onClick: ()=>{
                                            le(async ()=>{
                                                const e = await p_1.resend(l, h);
                                                p(e);
                                                v([]);
                                                G(Date.now() + e.retryIn * 1000);
                                            });
                                        },
                                        children: b ? `Повторить через ${b} с` : "Позвонить ещё раз"
                                    }),
                                    me && u_1(B_1, {
                                        type: "button",
                                        fullWidth: true,
                                        size: "lg",
                                        disabled: c || !!w,
                                        onClick: ()=>ce(),
                                        children: w ? `Новая проверка через ${w} с` : "Начать новую проверку"
                                    })
                                ]
                            }),
                            u_1(l_1, {
                                embedded: true,
                                resumeOpen,
                                directEntry,
                                onRestart: ()=>ce(),
                                onUnavailable: ()=>{
                                    e_1();
                                    f("number");
                                    R(false);
                                    x("");
                                    S(l);
                                    p(null);
                                    m("");
                                    i("Слишком много попыток. Подождите перед повторным запросом.");
                                },
                                onExit: (e, n)=>{
                                    if (e || n === 0) {
                                        e_1();
                                        m("");
                                        p(null);
                                        x(n === 0 ? "" : l);
                                        L.current = 0;
                                    }
                                    if (n === 0) {
                                        S(l);
                                    }
                                    f("number");
                                    R(false);
                                    i(n === 0 ? "Слишком много попыток. Подождите перед повторным запросом." : b ? "Подождите перед повторным запросом, либо воспользуйтесь альтернативным методом." : m_1);
                                },
                                initialFailure: u?.reverseOnly,
                                phone: l,
                                flowToken: h,
                                disabled: c,
                                onModeChange: (e)=>{
                                    Y(l, h, e ? "reverse" : u?.reverseOnly ? "choice" : "code");
                                    R(e);
                                    i("");
                                },
                                onComplete: H
                            }, l + h),
                            u?.reverseOnly && !T && u_1("button", {
                                className: s.link,
                                type: "button",
                                disabled: c || !!b || me,
                                onClick: ()=>{
                                    le(async ()=>{
                                        const e = await p_1.resend(l, h);
                                        p(e);
                                        v([]);
                                        G(Date.now() + e.retryIn * 1000);
                                    });
                                },
                                children: b ? `Повторить через ${b} с` : "Позвонить ещё раз"
                            })
                        ]
                    }),
                    r === "password" && u_1("button", {
                        className: s.link,
                        type: "button",
                        disabled: c,
                        onClick: ()=>{
                            f("reset");
                            F("");
                            i("");
                        },
                        children: "Не помню пароль"
                    }),
                    r === "reset" && u_1("a", {
                        className: s.link,
                        href: "/forgot-password",
                        children: "Восстановить через почту"
                    }),
                    r === "number" ? ue.intent === "sign-up" ? u_1("p", {
                        className: s.terms,
                        children: [
                            "Уже есть аккаунт? ",
                            u_1("a", {
                                href: "/login",
                                children: "Войти"
                            })
                        ]
                    }) : u_1("button", {
                        className: s.back,
                        type: "button",
                        disabled: c,
                        onClick: ue.onBack,
                        children: "Вернуться ко входу по почте"
                    }) : u_1("button", {
                        className: s.back,
                        type: "button",
                        disabled: c,
                        onClick: ()=>{
                            e_1();
                            D(false);
                            f("number");
                            v([]);
                            F("");
                            he("");
                            m("");
                            i("");
                        },
                        children: "Другой номер телефона"
                    }),
                    (r === "code" || r === "password" || r === "reset") && u_1(g_1, {})
                ]
            }, r),
            r === "number" && y && u_1("p", {
                className: s.terms,
                children: y.bundle.text.map((e, n)=>{
                    const s = e.document === "terms" ? "/terms" : e.document === "privacy" ? "/privacy" : null;
                    if (s) {
                        return u_1("a", {
                            href: s,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.text
                        }, n);
                    }
                    return e.text;
                })
            }),
            u_1(C_2, {
                isOpen,
                onClose: ()=>M(false),
                onVerify
            })
        ]
    });
}
export { Dn as P };
