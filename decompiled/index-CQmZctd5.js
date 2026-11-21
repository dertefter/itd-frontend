import { d as d_1, A as A_1, h as h_1, u as u_1, B, S as S_1 } from "./index-B4ySybtH.js";
const form = "xQf9";
const O = "Xg5h";
const label = "uufp";
const codeInputs = "kta7";
const codeInput = "uikW";
const error = "am39";
const errorText = "Y41x";
const submitButton = "a0Mz";
const resendLink = "r2dt";
const resendButton = "Bn6S";
const o = {
    form,
    inputGroup: O,
    label,
    codeInputs,
    codeInput,
    error,
    errorText,
    submitButton,
    resendLink,
    resendButton
};
const F = ({ label = "Код с почты", error, buttonText = "Продолжить", resendText = "Отправить код повторно", countdownText = (c)=>`Получить новый код через ${c}с`, countdownDuration = 90, onSubmit, onResend, disabled = false })=>{
    const [c, d] = d_1([
        "",
        "",
        "",
        "",
        "",
        ""
    ]);
    const [a, m] = d_1(countdownDuration);
    const [f, h] = d_1(false);
    const r = A_1([]);
    h_1(()=>{
        r.current[0]?.focus();
    }, []);
    h_1(()=>{
        if (a > 0) {
            const t = setTimeout(()=>m(a - 1), 1000);
            return ()=>clearTimeout(t);
        } else {
            h(true);
        }
    }, [
        a
    ]);
    const v = (t, e)=>{
        if (!/^\d*$/.test(e)) {
            return;
        }
        const n = [
            ...c
        ];
        n[t] = e.slice(-1);
        d(n);
        e && t < 5 && r.current[t + 1]?.focus();
    };
    const w = (t, e)=>{
        e.key === "Backspace" && !c[t] && t > 0 && r.current[t - 1]?.focus();
    };
    const onPaste = (t)=>{
        t.preventDefault();
        const n = (t.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, 6).split("");
        const b = [
            ...c
        ];
        n.forEach((x, B)=>{
            if (B < 6) {
                b[B] = x;
            }
        });
        d(b);
        const $ = Math.min(n.length, 5);
        r.current[$]?.focus();
    };
    const onSubmit_1 = (t)=>{
        t.preventDefault();
        const e = c.join("");
        onSubmit?.(e);
    };
    const onClick = ()=>{
        if (f) {
            onResend?.();
            m(countdownDuration);
            h(false);
        }
    };
    const S = c.every((t)=>t !== "");
    return u_1("form", {
        className: o.form,
        onSubmit: onSubmit_1,
        children: [
            u_1("div", {
                className: o.inputGroup,
                children: [
                    u_1("label", {
                        className: o.label,
                        children: label
                    }),
                    u_1("div", {
                        className: o.codeInputs,
                        children: c.map((value, e)=>u_1("input", {
                                ref: (n)=>{
                                    r.current[e] = n;
                                },
                                type: "text",
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                                className: `${o.codeInput} ${error ? o.error : ""}`,
                                value,
                                onInput: (n)=>v(e, n.target.value),
                                onKeyDown: (n)=>w(e, n),
                                onPaste,
                                maxLength: 1,
                                disabled
                            }, e))
                    }),
                    error && u_1("p", {
                        className: o.errorText,
                        children: error
                    })
                ]
            }),
            u_1(B, {
                type: "submit",
                variant: "primary",
                size: "lg",
                fullWidth: true,
                className: o.submitButton,
                disabled: !S || disabled,
                children: buttonText
            }),
            u_1("p", {
                className: o.resendLink,
                children: f ? u_1("button", {
                    type: "button",
                    className: o.resendButton,
                    onClick,
                    disabled,
                    children: resendText
                }) : u_1(S_1, {
                    children: countdownText(a)
                })
            })
        ]
    });
};
export { F as O };
