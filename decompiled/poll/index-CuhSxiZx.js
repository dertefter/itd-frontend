import { d, A as A_1, h as h_1, q, u as u_1, S as S_1 } from "./index-B4ySybtH.js";
const poll = "Xhj8";
const disabled = "BdZr";
const header = "mPOj";
const title = "eUUQ";
const meta = "WgXj";
const voteCount = "mkxB";
const options = "Olqs";
const option = "Pggi";
const votingOption = "B4kk";
const preselected = "fQCN";
const optionContent = "hWow";
const voted = "TpSk";
const optionProgressWrapper = "CMrC";
const optionProgress = "q7Nw";
const optionContentInverted = "RvZL";
const optionText = "E73F";
const optionPercent = "nnhX";
const optionProgressSimple = "ZSbI";
const checkmark = "As8a";
const checkbox = "MTh8";
const checkboxChecked = "UoVn";
const submitBtn = "e2AO";
const footer = "lfOb";
const revoteBtn = "svd4";
const t = {
    poll,
    disabled,
    header,
    title,
    meta,
    voteCount,
    options,
    option,
    votingOption,
    preselected,
    optionContent,
    voted,
    optionProgressWrapper,
    optionProgress,
    optionContentInverted,
    optionText,
    optionPercent,
    optionProgressSimple,
    checkmark,
    checkbox,
    checkboxChecked,
    submitBtn,
    footer,
    revoteBtn
};
export function Poll({ title, options, totalVotes, voted = false, selectedOptionId = null, selectedOptionIds = [], multipleChoice = false, onVote, onVoteMultiple, className, disabled = false }) {
    const [a, S] = d(voted);
    const [i, h] = d(()=>{
        if (selectedOptionIds.length > 0) {
            return new Set(selectedOptionIds);
        }
        if (selectedOptionId) {
            return new Set([
                selectedOptionId
            ]);
        }
        return new Set;
    });
    const [$, g] = d(totalVotes);
    const [E, N] = d(options);
    const [F, k] = d(voted);
    const [w, P] = d(false);
    const [L, A] = d(new Map);
    const f = A_1(new Map);
    const U = options.map((e)=>`${e.id}:${e.votes}`).join(",");
    h_1(()=>{
        N(options);
        g(totalVotes);
        S(voted);
        if (selectedOptionIds.length > 0) {
            h(new Set(selectedOptionIds));
        } else {
            h(selectedOptionId ? new Set([
                selectedOptionId
            ]) : new Set);
        }
        if (voted && !w) {
            k(true);
        }
    }, [
        U,
        totalVotes,
        voted,
        selectedOptionId,
        selectedOptionIds.join(",")
    ]);
    h_1(()=>{
        if (voted && f.current.size > 0) {
            const e = new Map;
            f.current.forEach((r, n)=>{
                e.set(n, r.offsetWidth);
            });
            A(e);
        }
    }, [
        voted
    ]);
    const y = a && !w;
    const X = q((e)=>{
        if (disabled || y) {
            return;
        }
        if (multipleChoice) {
            h((o)=>{
                const c = new Set(o);
                if (c.has(e)) {
                    c.delete(e);
                } else {
                    c.add(e);
                }
                return c;
            });
            return;
        }
        const r = i.size > 0 ? Array.from(i)[0] : null;
        N((o)=>o.map((c)=>{
                if (c.id === e) {
                    return {
                        ...c,
                        votes: c.votes + 1
                    };
                }
                if (c.id === r) {
                    return {
                        ...c,
                        votes: Math.max(0, c.votes - 1)
                    };
                }
                return c;
            }));
        if (!a) {
            g((o)=>o + 1);
        }
        h(new Set([
            e
        ]));
        S(true);
        P(false);
        const n = onVote?.(e);
        if (n && typeof n.then === "function") {
            n.then((o)=>{
                if (o) {
                    T(o);
                }
            });
        }
        O();
    }, [
        disabled,
        y,
        multipleChoice,
        i,
        a,
        onVote
    ]);
    const M = q(()=>{
        if (i.size === 0) {
            return;
        }
        const e = Array.from(i);
        N((n)=>n.map((o)=>{
                if (e.includes(o.id)) {
                    return {
                        ...o,
                        votes: o.votes + 1
                    };
                }
                return o;
            }));
        if (!a) {
            g((n)=>n + 1);
        }
        S(true);
        P(false);
        const r = onVoteMultiple?.(e);
        if (r && typeof r.then === "function") {
            r.then((n)=>{
                if (n) {
                    T(n);
                }
            });
        }
        O();
    }, [
        i,
        a,
        onVoteMultiple
    ]);
    const T = (e)=>{
        const r = (e.options ?? []).map((n)=>({
                id: n.id,
                text: n.text,
                votes: n.votesCount ?? n.voteCount ?? n.votes ?? 0
            }));
        N(r);
        g(e.totalVotes ?? 0);
        if (e.votedOptionIds && e.votedOptionIds.length > 0) {
            h(new Set(e.votedOptionIds));
        }
    };
    const O = ()=>{
        requestAnimationFrame(()=>{
            const e = new Map;
            f.current.forEach((r, n)=>{
                e.set(n, r.offsetWidth);
            });
            A(e);
            requestAnimationFrame(()=>{
                k(true);
            });
        });
    };
    const Z = ()=>{
        P(true);
        k(false);
    };
    const Q = ()=>{
        P(false);
        k(true);
    };
    const R = (e)=>{
        if ($ === 0) {
            return 0;
        }
        return Math.round(e / $ * 100);
    };
    const H = (e)=>{
        if (e === 1) {
            return "1 голос";
        }
        if (e >= 2 && e <= 4) {
            return `${e} голоса`;
        }
        return `${e} голосов`;
    };
    const K = (e)=>{
        e.stopPropagation();
    };
    return u_1("div", {
        className: `${t.poll} ${disabled ? t.disabled : ""} ${className || ""}`,
        onClick: K,
        children: [
            u_1("div", {
                className: t.header,
                children: [
                    u_1("span", {
                        className: t.title,
                        children: title
                    }),
                    a && u_1("div", {
                        className: t.meta,
                        children: u_1("span", {
                            className: t.voteCount,
                            children: H($)
                        })
                    })
                ]
            }),
            u_1("div", {
                className: t.options,
                children: E.map((e)=>{
                    const r = R(e.votes);
                    const n = i.has(e.id);
                    const width = F ? `${r}%` : "0%";
                    const c = L.get(e.id) || f.current.get(e.id)?.offsetWidth || 0;
                    if (y) {
                        return u_1("div", {
                            ref: (v)=>{
                                if (v) {
                                    f.current.set(e.id, v);
                                }
                            },
                            className: `${t.option} ${t.voted} ${n ? t.selected : ""}`,
                            children: [
                                u_1("div", {
                                    className: t.optionContent,
                                    children: [
                                        u_1("span", {
                                            className: t.optionText,
                                            children: [
                                                n && u_1("span", {
                                                    className: t.checkmark,
                                                    children: "✓ "
                                                }),
                                                e.text
                                            ]
                                        }),
                                        u_1("span", {
                                            className: t.optionPercent,
                                            children: [
                                                r,
                                                "%"
                                            ]
                                        })
                                    ]
                                }),
                                n && u_1("div", {
                                    className: t.optionProgressWrapper,
                                    style: {
                                        width
                                    },
                                    children: [
                                        u_1("div", {
                                            className: t.optionProgress
                                        }),
                                        u_1("div", {
                                            className: t.optionContentInverted,
                                            style: {
                                                width: `${c}px`
                                            },
                                            children: [
                                                u_1("span", {
                                                    className: t.optionText,
                                                    children: [
                                                        u_1("span", {
                                                            className: t.checkmark,
                                                            children: "✓ "
                                                        }),
                                                        e.text
                                                    ]
                                                }),
                                                u_1("span", {
                                                    className: t.optionPercent,
                                                    children: [
                                                        r,
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !n && u_1("div", {
                                    className: t.optionProgressSimple,
                                    style: {
                                        width
                                    }
                                })
                            ]
                        }, e.id);
                    }
                    return u_1("div", {
                        ref: (v)=>{
                            if (v) {
                                f.current.set(e.id, v);
                            }
                        },
                        className: `${t.option} ${t.votingOption} ${n ? t.preselected : ""}`,
                        onClick: ()=>X(e.id),
                        children: u_1("div", {
                            className: t.optionContent,
                            children: [
                                multipleChoice && u_1("span", {
                                    className: `${t.checkbox} ${n ? t.checkboxChecked : ""}`,
                                    children: n && "✓"
                                }),
                                u_1("span", {
                                    className: t.optionText,
                                    children: e.text
                                })
                            ]
                        })
                    }, e.id);
                })
            }),
            multipleChoice && !a && i.size > 0 && !w && u_1("button", {
                className: t.submitBtn,
                onClick: M,
                type: "button",
                children: "Проголосовать"
            }),
            a && u_1("div", {
                className: t.footer,
                children: w ? u_1(S_1, {
                    children: [
                        multipleChoice && i.size > 0 && u_1("button", {
                            className: t.submitBtn,
                            onClick: M,
                            type: "button",
                            children: "Проголосовать"
                        }),
                        u_1("button", {
                            className: t.revoteBtn,
                            onClick: Q,
                            type: "button",
                            children: "Отмена"
                        })
                    ]
                }) : u_1("button", {
                    className: t.revoteBtn,
                    onClick: Z,
                    type: "button",
                    children: "Изменить голос"
                })
            })
        ]
    });
}
export { Poll as default };
