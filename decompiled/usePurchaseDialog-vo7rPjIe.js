import { u, S, ah, d as d_1, A as A_1, h, bh, br, bs } from "./index-B4ySybtH.js";
const modal = "eGGw";
const sub = "BHeW";
const top = "Vcdr";
const bottom = "z37B";
const title = "QsoW";
const section = "KWWF";
const profileSection = "k4RB";
const label = "Yrn1";
const labelRow = "H7U0";
const dim = "JpDi";
const row = "Agy9";
const icon = "wKPJ";
const iconGradient = "SC1H";
const name = "awyl";
const nameGradient = "eBnP";
const namePinBadge = "gVOy";
const promoImage = "FuPv";
const features = "UYcy";
const featureContent = "QOtS";
const featureTitle = "YAZS";
const gradientText = "ieGQ";
const soon = "MCgK";
const infoBtn = "m5Fw";
const footer = "YoYV";
const methodSelectRow = "foNJ";
const methodSelectLabel = "srR3";
const methodSelect = "Bizp";
const subscribeBtn = "qolq";
const De = {
    modal,
    sub,
    top,
    bottom,
    title,
    section,
    profileSection,
    label,
    labelRow,
    dim,
    row,
    icon,
    iconGradient,
    name,
    nameGradient,
    namePinBadge,
    promoImage,
    features,
    featureContent,
    featureTitle,
    gradientText,
    soon,
    infoBtn,
    footer,
    methodSelectRow,
    methodSelectLabel,
    methodSelect,
    subscribeBtn
};
const panel = "DRwu";
const stage = "VwGE";
const heading = "ruck";
const back = "eiP9";
const primary = "cvZd";
const secondary = "wlAi";
const reselect = "oSqr";
const terms = "qWGl";
const term = "wuvQ";
const consent = "CKkk";
const selected = "N9xK";
const amount = "sUdj";
const Xe = "nepQ";
const recipient = "S3NO";
const notice = "gklF";
const message = "NdtY";
const textButton = "fYTQ";
const loading = "u5qI";
const expiry = "apSF";
const srOnly = "BHyw";
const d = {
    panel,
    stage,
    heading,
    back,
    primary,
    secondary,
    reselect,
    terms,
    term,
    consent,
    selected,
    amount,
    summary: Xe,
    recipient,
    notice,
    message,
    textButton,
    loading,
    expiry,
    srOnly
};
const D = (e)=>`${new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits: 2
    }).format(e / 100).replace(/[\u00a0\u202f]/g, " ")} ₽`;
const Z = (e)=>`${e} ${e === 1 ? "месяц" : e === 3 ? "месяца" : "месяцев"}`;
const X = (e)=>Number.isSafeInteger(e) && e > 0;
const it = false;
function yt(e) {
    const { step, kind, quote } = e;
    const c = step === "creating" || step === "resolving";
    const i = e.canEditTerms && e.canStartNewAttempt && !c;
    const q = quote && e.offers.some((m)=>m.months === quote.months && m.initialAmountMinor === quote.initialAmountMinor && m.quoteVersion === quote.quoteVersion);
    const k = step === "terms" && i && quote && quote.months === e.months && quote.currency === "RUB" && X(quote.initialAmountMinor) && q;
    const C = kind === "self" && e.canOfferAutoRenewal && !e.agreement.enabled;
    const w = step === "routes" ? "Способ оплаты" : step === "terms" ? "Срок подписки" : null;
    const className = `${De.subscribeBtn} ${d.primary}`;
    const l = quote && X(quote.initialAmountMinor) ? u("div", {
        className: d.summary,
        children: [
            kind === "gift" && e.recipientName && u("div", {
                className: d.recipient,
                children: [
                    "Подарок для ",
                    e.recipientName
                ]
            }),
            u("div", {
                children: [
                    "НУКСТА · ",
                    Z(quote.months),
                    " · ",
                    u("strong", {
                        children: D(quote.initialAmountMinor)
                    })
                ]
            })
        ]
    }) : null;
    return u("section", {
        className: d.panel,
        "data-purchase-step": step,
        "aria-busy": c || e.internationalBusy,
        tabIndex: -1,
        ref: (m)=>{
            if (!m) {
                return;
            }
            const focusedStep = m.dataset.focusedStep;
            m.dataset.focusedStep = step;
            if (!focusedStep || focusedStep === step || focusedStep === "resolving" && step === "overview") {
                return;
            }
            const s = m.querySelector("[data-purchase-heading]") ?? m.querySelector("button:not(:disabled)") ?? m;
            s.focus({
                preventScroll: true
            });
            requestAnimationFrame(()=>{
                if (!m.isConnected || m.dataset.focusedStep !== step) {
                    return;
                }
                const y = m.closest("[data-purchase-scroll]");
                if (y && (step === "routes" || step === "terms")) {
                    y.scrollTo({
                        top: y.scrollHeight,
                        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
                    });
                } else {
                    s.scrollIntoView({
                        block: "nearest"
                    });
                }
            });
        },
        children: u("div", {
            className: d.stage,
            children: [
                w && u("h3", {
                    className: d.heading,
                    tabIndex: -1,
                    "data-purchase-heading": true,
                    children: w
                }),
                step === "overview" && u("button", {
                    type: "button",
                    className,
                    disabled: !i,
                    onClick: ()=>{
                        if (i) {
                            e.onBegin();
                        }
                    },
                    children: kind === "gift" ? "Подарить" : "Купить"
                }),
                step === "routes" && u(S, {
                    children: [
                        u("button", {
                            type: "button",
                            className,
                            disabled: !i || e.internationalBusy,
                            onClick: ()=>{
                                if (i && !e.internationalBusy) {
                                    e.onRubles();
                                }
                            },
                            children: "Оплатить в рублях"
                        }),
                        it,
                        e.internationalUnavailable && u("div", {
                            className: d.message,
                            role: "alert",
                            children: [
                                e.internationalUnavailable,
                                e.onInternationalPreview && u("button", {
                                    type: "button",
                                    className: d.textButton,
                                    onClick: e.onInternationalPreview,
                                    children: "Информация об оплате"
                                })
                            ]
                        })
                    ]
                }),
                step === "terms" && u(S, {
                    children: [
                        u("fieldset", {
                            className: d.terms,
                            disabled: !i,
                            children: [
                                u("legend", {
                                    className: d.srOnly,
                                    children: "Выберите срок подписки"
                                }),
                                e.offers.map((m)=>u("label", {
                                        className: `${d.term} ${e.months === m.months ? d.selected : ""}`,
                                        children: [
                                            u("input", {
                                                type: "radio",
                                                name: `nuksta-${kind}-months`,
                                                value: m.months,
                                                checked: e.months === m.months,
                                                onChange: ()=>{
                                                    if (i) {
                                                        e.onMonthsChange(m.months);
                                                    }
                                                }
                                            }),
                                            u("span", {
                                                children: Z(m.months)
                                            }),
                                            u("span", {
                                                className: d.amount,
                                                children: D(m.initialAmountMinor)
                                            })
                                        ]
                                    }, m.months))
                            ]
                        }),
                        l,
                        e.methodSelector,
                        kind === "gift" ? u("p", {
                            className: d.notice,
                            children: "Это разовый подарок. Автопродление не подключается"
                        }) : e.agreement.enabled ? u("p", {
                            className: d.notice,
                            children: e.agreement.summary || "Автопродление подключено"
                        }) : C ? u("label", {
                            className: d.consent,
                            children: [
                                u("input", {
                                    type: "checkbox",
                                    checked: e.newAutoConsent,
                                    disabled: !i,
                                    onChange: (m)=>{
                                        if (i) {
                                            e.onNewAutoConsentChange(m.currentTarget.checked);
                                        }
                                    }
                                }),
                                u("span", {
                                    children: [
                                        e.agreement.requiresNewConsent ? "Подключить" : "Включить",
                                        " автопродление. ",
                                        u("a", {
                                            href: "/recurring-terms",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Условия автопродления"
                                        })
                                    ]
                                })
                            ]
                        }) : u("p", {
                            className: d.notice,
                            children: "Новое автопродление не подключается"
                        }),
                        kind === "self" && C && e.newAutoConsent && quote && u("p", {
                            className: d.notice,
                            children: [
                                "Далее — ",
                                D(quote.renewalAmountMinor),
                                " каждый месяц после окончания оплаченного срока. Напомним за 3 дня до окончания."
                            ]
                        }),
                        u("p", {
                            className: d.notice,
                            children: u("a", {
                                href: "/subscription-terms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Условия платного доступа НУКСТА"
                            })
                        }),
                        u("button", {
                            type: "button",
                            className,
                            disabled: !k,
                            onClick: ()=>{
                                if (k) {
                                    e.onPay();
                                }
                            },
                            children: quote ? `${kind === "gift" ? "Подарить за" : "Оплатить"} ${D(quote.initialAmountMinor)}` : "Загружаем условия…"
                        })
                    ]
                }),
                step === "resolving" && u("p", {
                    className: d.loading,
                    role: "status",
                    children: [
                        u(ah, {
                            size: "xs"
                        }),
                        "Проверяем предыдущую оплату…"
                    ]
                }),
                step === "creating" && u(S, {
                    children: [
                        l,
                        u("p", {
                            className: d.loading,
                            role: "status",
                            children: [
                                u(ah, {
                                    size: "xs"
                                }),
                                kind === "gift" ? "Оформляем подарок…" : "Открываем оплату…"
                            ]
                        })
                    ]
                }),
                step === "pending" && u(S, {
                    children: [
                        l,
                        e.providerLabel && u("p", {
                            className: d.notice,
                            children: [
                                "Оплата через ",
                                e.providerLabel
                            ]
                        }),
                        e.pendingSummary && u("p", {
                            className: d.notice,
                            children: e.pendingSummary
                        }),
                        u("p", {
                            className: d.notice,
                            role: "status",
                            children: "Ожидаем подтверждение оплаты"
                        }),
                        e.canResume === true && u("button", {
                            type: "button",
                            className,
                            onClick: e.onResume,
                            children: "Продолжить оплату"
                        }),
                        u("button", {
                            type: "button",
                            className: d.secondary,
                            onClick: e.onCheckStatus,
                            children: "Проверить статус"
                        }),
                        e.canReselect && u("button", {
                            type: "button",
                            className: d.reselect,
                            onClick: e.onReselect,
                            children: "Вернуться к выбору"
                        }),
                        u("p", {
                            className: d.notice,
                            children: "Закрытие окна не отменяет платёж. Повторно оплачивать не нужно."
                        })
                    ]
                }),
                step === "reviewRequired" && u(S, {
                    children: [
                        l,
                        u("p", {
                            className: d.message,
                            role: "alert",
                            children: "Статус оплаты нужно проверить в поддержке. Повторно оплачивать не нужно."
                        })
                    ]
                }),
                step === "active" && u("p", {
                    className: d.notice,
                    role: "status",
                    children: [
                        "Подписка активна",
                        e.actualExpiryLabel && u("span", {
                            className: d.expiry,
                            children: [
                                "Действует до ",
                                e.actualExpiryLabel
                            ]
                        })
                    ]
                }),
                e.error && u("div", {
                    className: d.message,
                    role: "alert",
                    children: [
                        e.error,
                        (step === "resolving" || step === "terms") && u("button", {
                            type: "button",
                            className: d.textButton,
                            onClick: e.onRetryRead,
                            children: "Повторить проверку"
                        })
                    ]
                }),
                (step === "routes" || step === "terms") && u("button", {
                    type: "button",
                    className: d.back,
                    disabled: e.internationalBusy || !i,
                    onClick: ()=>{
                        if (i && !e.internationalBusy) {
                            e.onBack();
                        }
                    },
                    children: "Назад"
                })
            ]
        }, step)
    });
}
const Y = new Map;
const re = (e, r)=>`itd:gift-attempt:${e}:${r}`;
function ot(e, r) {
    const o = re(e, r);
    let a = Y.get(o);
    try {
        a = sessionStorage.getItem(o) ?? a;
    } catch  {}
    if (!a || !/^[0-9a-f-]{36}$/i.test(a)) {
        a = crypto.randomUUID();
    }
    Y.set(o, a);
    try {
        sessionStorage.setItem(o, a);
    } catch  {}
    return a;
}
function lt(e, r) {
    const o = re(e, r);
    Y.delete(o);
    try {
        sessionStorage.removeItem(o);
    } catch  {}
}
const H = new Map;
function ut(e) {
    const r = `itd:self-attempt:${e}`;
    let o = H.get(e);
    try {
        o = sessionStorage.getItem(r) ?? o;
    } catch  {}
    if (!o || !/^[0-9a-f-]{36}$/i.test(o)) {
        o = crypto.randomUUID();
    }
    H.set(e, o);
    try {
        sessionStorage.setItem(r, o);
    } catch  {}
    return o;
}
function dt(e) {
    H.delete(e);
    try {
        sessionStorage.removeItem(`itd:self-attempt:${e}`);
    } catch  {}
}
const L = (scope)=>({
        scope,
        step: "resolving",
        months: 1,
        auto: false,
        state: null,
        attempt: null,
        error: null,
        internationalBusy: false,
        unavailable: null,
        preview: null,
        agreementFresh: false
    });
const mt = [
    "months",
    "initialAmountMinor",
    "currency",
    "quoteVersion",
    "renewalMonths",
    "renewalAmountMinor",
    "renewalCurrency",
    "autoRenewal",
    "consentVersion",
    "provider",
    "fingerprint",
    "recipientUserId"
];
const ee = (e, r)=>!!e && !!r && mt.every((o)=>e[o] === r[o]);
const te = (e)=>{
    if (e) {
        return new Intl.DateTimeFormat("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(e));
    }
    return null;
};
const ne = "Не удалось проверить оплату. Повторите проверку; повторно платить не нужно.";
const ft = {
    recipient_not_found: "Получатель не найден",
    recipient_already_subscribed: "У пользователя уже есть подписка",
    cannot_gift_yourself: "Нельзя подарить подписку себе",
    gift_payment_unavailable: "Не удалось создать платёж. Попробуйте позже",
    gift_payment_review_required: "Статус предыдущего платежа нужно проверить в поддержке. Повторно оплачивать не нужно",
    gift_recipient_conflict: "Этот платёж создан для другого получателя. Откройте окно подарка ещё раз",
    quote_changed: "Условия оплаты изменились. Проверьте их перед новой попыткой."
};
const ht = (e)=>{
    if (e && typeof e === "object" && "code" in e && typeof e.code === "string") {
        return ft[e.code] ?? null;
    }
    return null;
};
function pt(e) {
    const r = `${e.open}:${e.eligible}:${e.ownerId}:${e.kind}:${e.recipientId}:${e.scopeKey}`;
    const [o, a] = d_1(L(r));
    const c = o.scope === r ? o : L(r);
    const i = A_1(e);
    i.current = e;
    const q = A_1(true);
    const k = A_1(false);
    const C = A_1(0);
    const w = A_1(0);
    const f = A_1(false);
    const l = A_1(c);
    l.current = c;
    const m = A_1(null);
    const g = A_1(0);
    const s = (t)=>{
        l.current = {
            ...l.current,
            ...t
        };
        a(l.current);
    };
    const y = ()=>{
        g.current++;
        if (m.current !== null) {
            clearInterval(m.current);
        }
        m.current = null;
    };
    const R = ()=>{
        const i_current = i.current;
        const C_current = C.current;
        const h = i_current.captureCurrent();
        return ()=>q.current && !k.current && i.current.open && i.current.eligible && C.current === C_current && i.current.scopeKey === i_current.scopeKey && i.current.ownerId === i_current.ownerId && i.current.recipientId === i_current.recipientId && i.current.kind === i_current.kind && h();
    };
    const x = ()=>bs(i.current.kind, i.current.recipientId);
    const _ = ()=>{
        const i_current = i.current;
        if (!i_current.ownerId) {
            throw new Error("Требуется авторизация");
        }
        if (i_current.kind === "gift") {
            return ot(i_current.ownerId, i_current.recipientId);
        }
        return ut(i_current.ownerId);
    };
    const P = ()=>{
        const i_current = i.current;
        i_current.ownerId && (i_current.kind === "gift" ? lt(i_current.ownerId, i_current.recipientId) : dt(i_current.ownerId));
    };
    const G = ()=>{
        y();
        P();
        k.current = true;
        i.current.onSucceeded();
    };
    const E = ()=>{
        const state = l.current.state;
        return !f.current && !k.current && i.current.open && i.current.eligible && !!state?.canEditTerms && !!state.canStartNewAttempt && ![
            "pending",
            "creating",
            "resolving",
            "reviewRequired",
            "active"
        ].includes(l.current.step);
    };
    const W = (t)=>{
        s({
            attempt: t,
            error: null
        });
        if (t.paid && t.status === "succeeded") {
            G();
            return;
        }
        if (t.status === "failed" || t.status === "review_required") {
            y();
            s({
                step: "reviewRequired"
            });
            return;
        }
        if (t.status === "canceled") {
            y();
            B(true);
            return;
        }
        s({
            step: "pending"
        });
    };
    const j = (t)=>{
        y();
        const g_current = g.current;
        const h = R();
        const p = x();
        const v = Date.now() + 8 * 60000;
        const u = _();
        const N = l.current.attempt?.quote ?? l.current.state?.quote;
        let F = false;
        const T = async ()=>{
            if (!(!h() || g_current !== g.current)) {
                if (Date.now() >= v) {
                    y();
                    s({
                        error: "Подтверждение задерживается. Проверьте статус позже; повторно платить не нужно."
                    });
                    return;
                }
                if (!F) {
                    F = true;
                    try {
                        const V = p.kind === "gift" ? await bh.getGiftCheckout(t, p.recipientUserId) : await bh.getCheckoutPayment(t, l.current.state?.agreement);
                        if (!h() || g_current !== g.current) {
                            return;
                        }
                        if (!ee(N, V.quote)) {
                            y();
                            s({
                                step: "reviewRequired",
                                error: "Условия предыдущей оплаты изменились. Повторно платить не нужно."
                            });
                            return;
                        }
                        W(V);
                        if (!h() || g_current !== g.current || l.current.step !== "pending") {
                            return;
                        }
                        s({
                            agreementFresh: false
                        });
                        const S = await bh.getCheckoutState(p, u);
                        if (!h() || g_current !== g.current) {
                            return;
                        }
                        if (S.state === "succeeded") {
                            G();
                            return;
                        }
                        if ([
                            "pending",
                            "processing"
                        ].includes(S.state) && S.attemptId === t && ee(N, S.quote)) {
                            s({
                                state: S,
                                agreementFresh: true,
                                attempt: {
                                    ...V,
                                    confirmationUrl: S.confirmationUrl
                                },
                                error: null
                            });
                        } else if (S.state === "canceled" && S.canEditTerms && S.canStartNewAttempt) {
                            y();
                            P();
                            s({
                                state: S,
                                agreementFresh: true,
                                attempt: null,
                                step: "terms"
                            });
                        } else {
                            y();
                            s({
                                state: S,
                                agreementFresh: true,
                                step: "reviewRequired"
                            });
                        }
                    } catch  {
                        if (h() && g_current === g.current) {
                            s({
                                error: ne
                            });
                        }
                    } finally{
                        F = false;
                    }
                }
            }
        };
        m.current = setInterval(()=>{
            T();
        }, 2000);
        T();
    };
    async function B(t = false, b = null) {
        if (!i.current.open || !i.current.eligible || !i.current.ownerId || k.current || f.current) {
            return;
        }
        const h = R();
        const p = ++w.current;
        const v = x();
        s({
            step: "resolving",
            error: null
        });
        try {
            const u = await bh.getCheckoutState(v, _());
            if (!h() || p !== w.current) {
                return;
            }
            const N = l.current.months;
            const months = u.offers.some((T)=>T.months === N) ? N : u.offers[0]?.months ?? N;
            s({
                state: u,
                months,
                attempt: null,
                error: b,
                agreementFresh: true
            });
            if (u.state === "succeeded") {
                G();
                return;
            }
            if (u.state === "pending" || u.state === "processing") {
                s({
                    step: "pending"
                });
                j(u.attemptId);
                return;
            }
            if (u.state === "review_required" || !u.canEditTerms || !u.canStartNewAttempt) {
                s({
                    step: "reviewRequired"
                });
                return;
            }
            if (t || u.state === "canceled" || u.state === "failed") {
                P();
            }
            s({
                step: t ? "terms" : "overview"
            });
        } catch  {
            if (h() && p === w.current) {
                s({
                    step: "resolving",
                    error: ne
                });
            }
        }
    }
    h(()=>(q.current = true, k.current = false, C.current++, w.current++, f.current = false, y(), s(L(r)), e.open && e.eligible && e.ownerId && B(), ()=>{
            C.current++;
            w.current++;
            k.current = true;
            y();
        }), [
        e.open,
        e.eligible,
        e.ownerId,
        e.recipientId,
        e.kind,
        e.scopeKey
    ]);
    h(()=>()=>{
            q.current = false;
            k.current = true;
            y();
        }, []);
    const M = ()=>{
        try {
            const t = window.open("", "_blank");
            if (t) {
                t.opener = null;
            }
            return t;
        } catch  {
            return null;
        }
    };
    const O = (t, b = null)=>{
        if (b && !b.closed) {
            try {
                b.location.href = t;
                return;
            } catch  {
                b.close();
            }
        }
        window.location.href = t;
    };
    const onPay = async ()=>{
        if (!E() || l.current.step !== "terms") {
            return;
        }
        const t = R();
        const b = x();
        const state = l.current.state;
        let p;
        try {
            p = br(state, b, _(), l.current.months, l.current.auto, i.current.methodId);
        } catch  {
            s({
                error: "Условия изменились. Повторите проверку оплаты."
            });
            return;
        }
        f.current = true;
        w.current++;
        y();
        const v = p.methodId ? null : M();
        s({
            step: "creating",
            error: null
        });
        try {
            const u = b.kind === "gift" ? await bh.createGiftCheckout(p) : await bh.payCheckout(p, state.agreement);
            if (!t()) {
                v?.close();
                return;
            }
            f.current = false;
            W(u);
            if (u.paid || [
                "canceled",
                "failed",
                "review_required"
            ].includes(u.status)) {
                v?.close();
            } else {
                if (u.confirmationUrl) {
                    O(u.confirmationUrl, v);
                } else {
                    v?.close();
                }
                j(u.id);
            }
        } catch (u) {
            v?.close();
            if (t()) {
                f.current = false;
                await B(false, ht(u));
            }
        } finally{
            if (t()) {
                f.current = false;
            }
        }
    };
    const onReselect = async ()=>{
        const state = l.current.state;
        const b = l.current.attempt?.id ?? state?.attemptId;
        if (f.current || l.current.step !== "pending" || !state?.canReleaseAttempt || !b) {
            return;
        }
        const h = R();
        const p = x();
        f.current = true;
        w.current++;
        y();
        s({
            step: "resolving",
            error: null
        });
        try {
            const v = await bh.releaseCheckout(p, b);
            if (!h()) {
                return;
            }
            if (v.released) {
                P();
                s({
                    attempt: null
                });
            }
            f.current = false;
            await B();
            const u = l.current;
            if (h() && u.step === "overview") {
                s({
                    step: "routes"
                });
            }
        } catch  {
            if (h()) {
                P();
                f.current = false;
                await B(false, "Не удалось обновить выбор. Проверьте статус оплаты.");
            }
        } finally{
            if (h()) {
                f.current = false;
            }
        }
    };
    const onInternational = async ()=>{
        if (!E() || l.current.step !== "routes") {
            return;
        }
        const t = R();
        const b = x();
        const h = M();
        let p = false;
        f.current = true;
        w.current++;
        s({
            internationalBusy: true,
            error: null,
            unavailable: null
        });
        try {
            const v = await bh.internationalCheckout(b, _());
            if (!t()) {
                h?.close();
                return;
            }
            if (v.mode === "informational") {
                h?.close();
                s({
                    unavailable: "Оплата для других стран пока недоступна.",
                    preview: v.handoffUrl
                });
            } else {
                const u = document.createElement("form");
                const N = document.createElement("input");
                if (h) {
                    h.name = `itd-checkout-${crypto.randomUUID()}`;
                }
                u.method = "POST";
                u.action = v.handoff.url;
                u.target = h?.name || "_self";
                N.type = "hidden";
                N.name = "handoffTicket";
                N.value = v.handoff.fields.handoffTicket;
                u.appendChild(N);
                document.body.appendChild(u);
                try {
                    u.submit();
                } finally{
                    N.value = "";
                    u.remove();
                }
                p = true;
                s({
                    step: "resolving"
                });
            }
        } catch  {
            h?.close();
            if (t()) {
                p = true;
                s({
                    step: "resolving",
                    unavailable: "Не удалось открыть оплату для других стран. Повторите проверку."
                });
            }
        } finally{
            if (t()) {
                f.current = false;
                s({
                    internationalBusy: false
                });
                if (p) {
                    B();
                }
            }
        }
    };
    const U = c.attempt?.quote ?? c.state?.quote ?? null;
    const quote = [
        "pending",
        "reviewRequired"
    ].includes(c.step) ? U : c.state?.offers.find((t)=>t.months === c.months) ?? null;
    const A = c.state?.agreement;
    const z = te(A?.nextChargeAt);
    const oe = A?.enabled ? `Автопродление подключено: ${new Intl.NumberFormat("ru-RU").format(A.renewalAmountMinor / 100)} ${A.renewalCurrency === "RUB" ? "₽" : "BYN"} каждый месяц${z ? `, следующее списание ${z}` : " после окончания оплаченного срока"}. Напомним за 3 дня.` : null;
    return {
        panel: {
            kind: e.kind,
            step: c.step,
            months: c.months,
            newAutoConsent: c.auto,
            canEditTerms: !!c.state?.canEditTerms,
            canStartNewAttempt: !!c.state?.canStartNewAttempt,
            canOfferAutoRenewal: !!A?.canOffer,
            agreement: {
                enabled: !!A?.enabled,
                requiresNewConsent: !!A?.requiresNewConsent,
                summary: oe
            },
            offers: c.state?.offers ?? [],
            quote,
            recipientName: e.recipientName,
            error: c.error,
            internationalBusy: c.internationalBusy,
            internationalUnavailable: c.unavailable,
            canResume: !!(c.attempt?.confirmationUrl ?? c.state?.confirmationUrl),
            actualExpiryLabel: te(c.state?.actualExpiresAt),
            canReselect: c.step === "pending" && c.state?.canReleaseAttempt === true,
            onReselect,
            providerLabel: U ? U.provider === "yookassa" ? "ЮKassa" : "bePaid" : null,
            pendingSummary: U ? e.kind === "gift" ? "Разовый подарок, без автопродления." : `${U.autoRenewal ? `В этой оплате выбрано автопродление: ${new Intl.NumberFormat("ru-RU").format(U.renewalAmountMinor / 100)} ₽ каждый месяц.` : "В этой оплате автопродление не выбрано."} ${c.agreementFresh ? `Сейчас автопродление ${A?.enabled ? "включено" : "выключено"}.` : "Проверяем текущий статус автопродления."}` : null,
            onBegin: ()=>{
                if (E()) {
                    s({
                        step: "routes"
                    });
                }
            },
            onRubles: ()=>{
                if (E()) {
                    s({
                        step: "terms",
                        unavailable: null
                    });
                }
            },
            onBack: ()=>{
                if (E()) {
                    s({
                        step: c.step === "terms" ? "routes" : "overview",
                        error: null
                    });
                }
            },
            onMonthsChange: (t)=>{
                if (E() && l.current.step === "terms" && l.current.state?.offers.some((b)=>b.months === t)) {
                    s({
                        months: t
                    });
                }
            },
            onNewAutoConsentChange: (auto)=>{
                if (E() && !A?.enabled && A?.canOffer) {
                    s({
                        auto
                    });
                }
            },
            onPay,
            onInternational,
            onResume: ()=>{
                if (l.current.step !== "pending") {
                    return;
                }
                const t = l.current.attempt?.confirmationUrl ?? l.current.state?.confirmationUrl;
                if (t) {
                    O(t, M());
                }
            },
            onCheckStatus: ()=>{
                if (!f.current) {
                    y();
                    B();
                }
            },
            onRetryRead: ()=>{
                B();
            },
            ...c.preview ? {
                onInternationalPreview: ()=>O(c.preview, M())
            } : {}
        },
        dismiss () {
            k.current = true;
            C.current++;
            w.current++;
            y();
            i.current.onClose();
        }
    };
}
function vt(e, r) {
    const o = A_1(null);
    h(()=>{
        const a = o.current?.parentElement?.parentElement;
        const c = a?.parentElement;
        if (!e || !a || !c) {
            return;
        }
        const document_activeElement = document.activeElement;
        const q = [
            "role",
            "aria-modal",
            "aria-label",
            "data-purchase-dialog"
        ];
        const k = q.map((g)=>a.getAttribute(g));
        const C = c.getAttribute("data-purchase-overlay");
        a.setAttribute("role", "dialog");
        a.setAttribute("aria-modal", "true");
        a.setAttribute("aria-label", r);
        a.setAttribute("data-purchase-dialog", "");
        c.setAttribute("data-purchase-overlay", "");
        const w = ()=>Array.from(a.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]')).filter((g)=>g.getClientRects().length > 0);
        const f = w()[0];
        const l = f?.getAttribute("aria-label");
        if (f?.tagName === "BUTTON" && !f.textContent?.trim() && !l) {
            f.setAttribute("aria-label", "Закрыть");
        }
        const m = (g)=>{
            if (g.key !== "Tab") {
                return;
            }
            const s = w();
            const y = s[0];
            const R = s.at(-1);
            !y || !R || (g.shiftKey && (document.activeElement === y || !a.contains(document.activeElement)) ? (g.preventDefault(), R.focus()) : !g.shiftKey && (document.activeElement === R || !a.contains(document.activeElement)) && (g.preventDefault(), y.focus()));
        };
        a.addEventListener("keydown", m);
        a.contains(document.activeElement) || f?.focus({
            preventScroll: true
        });
        return ()=>{
            a.removeEventListener("keydown", m);
            q.forEach((g, s)=>{
                if (k[s] === null) {
                    return a.removeAttribute(g);
                }
                return a.setAttribute(g, k[s]);
            });
            if (C === null) {
                c.removeAttribute("data-purchase-overlay");
            } else {
                c.setAttribute("data-purchase-overlay", C);
            }
            if (f && l === null) {
                f.removeAttribute("aria-label");
            }
            if (document_activeElement?.isConnected) {
                document_activeElement.focus({
                    preventScroll: true
                });
            }
        };
    }, [
        e,
        r
    ]);
    return o;
}
export { yt as P, vt as a, De as s, pt as u };
