import { A as A_1, q as q_1, u as u_1, h as h_1, bo, d, bp, bq, ba, b7 } from "./index-B4ySybtH.js";
const wrapper = "RBDB";
const track = "AOEG";
const fill = "drPv";
const thumb = "BUo7";
const R = {
    wrapper,
    track,
    fill,
    thumb
};
function Be({ value, onChange, onDragStart, onDragEnd }) {
    const i = A_1(null);
    const u = q_1((p)=>{
        const i_current = i.current;
        if (!i_current) {
            return;
        }
        const L = i_current.getBoundingClientRect();
        const k = 1 - (p - L.top) / L.height;
        onChange(Math.max(0, Math.min(1, k)));
    }, [
        onChange
    ]);
    const onMouseDown = q_1((p)=>{
        p.stopPropagation();
        p.preventDefault();
        onDragStart?.();
        u(p.clientY);
        const h = (k)=>u(k.clientY);
        const L = ()=>{
            onDragEnd?.();
            document.removeEventListener("mousemove", h);
            document.removeEventListener("mouseup", L);
        };
        document.addEventListener("mousemove", h);
        document.addEventListener("mouseup", L);
    }, [
        u,
        onDragStart,
        onDragEnd
    ]);
    const y = 7;
    const n = 80;
    const l = y;
    const f = n - y;
    const M = l + value * (f - l);
    const height = `${M}px`;
    return u_1("div", {
        className: R.wrapper,
        onMouseDown,
        onClick: (p)=>{
            p.stopPropagation();
            p.preventDefault();
        },
        children: u_1("div", {
            ref: i,
            className: R.track,
            children: [
                u_1("div", {
                    className: R.fill,
                    style: {
                        height
                    }
                }),
                u_1("div", {
                    className: R.thumb,
                    style: {
                        bottom: `${M}px`
                    }
                })
            ]
        })
    });
}
const Ce = 250;
function Ne({ videoRef, vs, attachmentId, source }) {
    const i = A_1(0);
    const u = A_1(null);
    const E = A_1(0);
    h_1(()=>{
        const videoRef_current = videoRef.current;
        if (!videoRef_current || !vs || !attachmentId) {
            return;
        }
        const l = ()=>{
            u.current = Date.now();
        };
        const f = ()=>{
            if (u.current !== null) {
                i.current += Date.now() - u.current;
                u.current = null;
            }
        };
        const M = ()=>{
            if (videoRef_current.paused || u.current === null) {
                return;
            }
            const p = Date.now();
            i.current += p - u.current;
            u.current = p;
        };
        const C = ()=>{
            if (videoRef_current.duration > 0 && Number.isFinite(videoRef_current.duration)) {
                E.current = Math.round(videoRef_current.duration * 1000);
            }
        };
        if (!videoRef_current.paused && videoRef_current.readyState >= 3) {
            u.current = Date.now();
        }
        videoRef_current.addEventListener("playing", l);
        videoRef_current.addEventListener("pause", f);
        videoRef_current.addEventListener("waiting", f);
        videoRef_current.addEventListener("timeupdate", M);
        videoRef_current.addEventListener("loadedmetadata", C);
        if (videoRef_current.duration > 0 && Number.isFinite(videoRef_current.duration)) {
            E.current = Math.round(videoRef_current.duration * 1000);
        }
        return ()=>{
            videoRef_current.removeEventListener("playing", l);
            videoRef_current.removeEventListener("pause", f);
            videoRef_current.removeEventListener("waiting", f);
            videoRef_current.removeEventListener("timeupdate", M);
            videoRef_current.removeEventListener("loadedmetadata", C);
        };
    }, [
        videoRef,
        vs,
        attachmentId
    ]);
    const y = q_1(()=>{
        if (!(!vs || !attachmentId)) {
            if (u.current !== null) {
                i.current += Date.now() - u.current;
                u.current = null;
            }
            if (i.current >= Ce && E.current > 0) {
                const n = source === "post_page" || source === "link";
                bo.trackVideoProgress(vs, attachmentId, i.current, E.current, n ? source : undefined);
            }
            i.current = 0;
        }
    }, [
        vs,
        attachmentId,
        source
    ]);
    h_1(()=>()=>y(), [
        y
    ]);
    return {
        emit: y
    };
}
const container = "bROU";
const hidden = "NQyo";
const video = "U1QE";
const revealing = "ibSq";
const canvas = "PFFe";
const duration = "ioca";
const bottomOverlay = "tIMz";
const volumeControl = "AID7";
const active = "TuED";
const volumeSlider = "YMgo";
const muteButton = "Ougb";
const muteButtonMobile = "KpJn";
const controlButton = "I8Gc";
const playButton = "VZFa";
const fullscreenButton = "yULo";
const progressContainer = "CuO2";
const progressTrack = "Zwoc";
const progressFill = "LvYN";
const scrubbing = "YjNZ";
const a = {
    container,
    hidden,
    video,
    revealing,
    canvas,
    duration,
    bottomOverlay,
    volumeControl,
    active,
    volumeSlider,
    muteButton,
    muteButtonMobile,
    controlButton,
    playButton,
    fullscreenButton,
    progressContainer,
    progressTrack,
    progressFill,
    scrubbing
};
const ee = parseFloat(b7.getItem("video-volume") ?? "1");
let D = true;
let H = isNaN(ee) ? 1 : ee;
const X = new Set;
const B = new Map;
let te = false;
let Y = null;
function V() {
    const s = window.innerHeight / 2;
    let c = null;
    let v = Infinity;
    for (const [m] of B){
        const i = m.getBoundingClientRect();
        if (Math.abs(i.top + i.height / 2 - s) < v) {
            v = Math.abs(i.top + i.height / 2 - s);
            c = m;
        }
    }
    for (const [m, i] of B){
        m === c && !i.userPaused ? i.video.paused && i.video.play().catch(()=>{}) : i.video.paused || i.video.pause();
    }
}
function ne() {
    if (Y == null) {
        Y = requestAnimationFrame(()=>{
            Y = null;
            V();
        });
    }
}
function _() {
    const s = B.size > 1;
    if (s !== te) {
        if (s) {
            window.addEventListener("scroll", ne, {
                passive: true
            });
        } else {
            window.removeEventListener("scroll", ne);
        }
        te = s;
    }
}
function z(s) {
    D = s;
    b7.setItem("video-muted", String(s));
    X.forEach((c)=>c(s));
}
function Ze(s) {
    H = s;
    b7.setItem("video-volume", String(s));
}
function Qe(s) {
    const c = Math.floor(s / 60);
    const v = s % 60;
    return `${c}:${v.toString().padStart(2, "0")}`;
}
function je() {
    return u_1("svg", {
        width: "13",
        height: "14",
        viewBox: "0 0 13 14",
        fill: "none",
        "aria-hidden": "true",
        children: u_1("path", {
            fill: "currentColor",
            d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z"
        })
    });
}
function Je() {
    return u_1("svg", {
        width: "13",
        height: "14",
        viewBox: "0 0 13 14",
        fill: "currentColor",
        "aria-hidden": "true",
        children: [
            u_1("rect", {
                width: "4",
                height: "14",
                rx: "2"
            }),
            u_1("rect", {
                x: "9",
                width: "4",
                height: "14",
                rx: "2"
            })
        ]
    });
}
function Ke() {
    return u_1("svg", {
        width: "19",
        height: "18",
        viewBox: "0 0 25 24",
        fill: "none",
        "aria-hidden": "true",
        children: u_1("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "3",
            d: "M4 16q0 5 5 5M22 16q0 5-5 5M22 8q0-5-5-5M4 8q0-5 5-5"
        })
    });
}
export function PostMediaVideo({ src, spoiler = false, width, height, duration, className = "", postVs, source, attachmentId }) {
    const l = A_1(null);
    const f = A_1(null);
    const M = A_1(null);
    const ref = A_1(null);
    const p = A_1(null);
    const [h, L] = d(!spoiler);
    const [k, re] = d(false);
    const [oe, se] = d(false);
    const [N, ie] = d(D);
    const [I, ce] = d(H);
    const [ae, Q] = d(false);
    const [le, T] = d(0);
    const [ue, j] = d(false);
    const [J, $] = d(false);
    const F = A_1(false);
    const x = A_1(false);
    const de = bp();
    const { emit } = Ne({
        videoRef: l,
        vs: postVs,
        attachmentId,
        source
    });
    const { resetOpacity } = bq(M, f, {
        isVisible: oe && !h && spoiler,
        isRevealing: k,
        onRevealComplete: ()=>L(true)
    });
    h_1(()=>{
        const e = (r)=>{
            ie(r);
            if (l.current) {
                l.current.muted = r;
            }
        };
        X.add(e);
        return ()=>{
            X.delete(e);
        };
    }, []);
    h_1(()=>{
        const f_current = f.current;
        if (!f_current) {
            return;
        }
        const r = new IntersectionObserver((o)=>{
            o.forEach((d)=>{
                se(d.isIntersecting);
                const l_current = l.current;
                l_current && (d.isIntersecting ? (l_current.currentTime = 0, l_current.muted = D, l_current.volume = H, B.set(f_current, {
                    video: l_current,
                    userPaused: false
                }), _(), V()) : (B.delete(f_current), _(), V(), l_current.pause(), emit(), l_current.currentTime = 0));
            });
        }, {
            threshold: 0.3
        });
        r.observe(f_current);
        return ()=>{
            r.disconnect();
            B.delete(f_current);
            _();
            V();
            emit();
        };
    }, [
        h,
        emit
    ]);
    h_1(()=>{
        const l_current = l.current;
        if (!l_current) {
            return;
        }
        const r = ()=>{
            if (F.current) {
                return;
            }
            const l_current_duration = l_current.duration;
            if (!(!Number.isFinite(l_current_duration) || l_current_duration <= 0)) {
                T(l_current.currentTime / l_current_duration * 100);
            }
        };
        const o = ()=>T(0);
        l_current.addEventListener("timeupdate", r);
        l_current.addEventListener("loadedmetadata", r);
        l_current.addEventListener("emptied", o);
        return ()=>{
            l_current.removeEventListener("timeupdate", r);
            l_current.removeEventListener("loadedmetadata", r);
            l_current.removeEventListener("emptied", o);
        };
    }, []);
    h_1(()=>{
        const l_current = l.current;
        if (!l_current) {
            return;
        }
        const r = ()=>$(true);
        const o = ()=>$(false);
        l_current.addEventListener("play", r);
        l_current.addEventListener("pause", o);
        $(!l_current.paused);
        return ()=>{
            l_current.removeEventListener("play", r);
            l_current.removeEventListener("pause", o);
        };
    }, []);
    const O = q_1((e)=>{
        const p_current = p.current;
        const l_current = l.current;
        if (!p_current || !l_current) {
            return;
        }
        const d = p_current.getBoundingClientRect();
        if (d.width <= 0) {
            return;
        }
        const g = Math.min(1, Math.max(0, (e - d.left) / d.width));
        if (!(!Number.isFinite(l_current.duration) || l_current.duration <= 0)) {
            l_current.currentTime = l_current.duration * g;
            T(g * 100);
        }
    }, []);
    const onPointerDown = q_1((e)=>{
        e.stopPropagation();
        F.current = true;
        j(true);
        const e_currentTarget = e.currentTarget;
        try {
            e_currentTarget.setPointerCapture(e.pointerId);
        } catch  {}
        O(e.clientX);
        const o = (g)=>O(g.clientX);
        const d = ()=>{
            try {
                e_currentTarget.releasePointerCapture(e.pointerId);
            } catch  {}
            document.removeEventListener("pointermove", o);
            document.removeEventListener("pointerup", d);
            document.removeEventListener("pointercancel", d);
            window.removeEventListener("blur", d);
            j(false);
            setTimeout(()=>{
                F.current = false;
            }, 0);
        };
        document.addEventListener("pointermove", o);
        document.addEventListener("pointerup", d);
        document.addEventListener("pointercancel", d);
        window.addEventListener("blur", d);
    }, [
        O
    ]);
    const pe = (e)=>{
        e.stopPropagation();
        if (!(x.current || F.current)) {
            if (!h && !k && spoiler) {
                re(true);
                resetOpacity();
                return;
            }
            A();
        }
    };
    const onDblClick = (e)=>{
        e.stopPropagation();
        G();
    };
    const K = q_1((e)=>{
        e.stopPropagation();
        e.preventDefault();
        z(!D);
    }, []);
    const A = q_1(()=>{
        const l_current = l.current;
        const f_current = f.current;
        if (!l_current || !f_current) {
            return;
        }
        const o = B.get(f_current);
        if (l_current.paused) {
            if (o) {
                o.userPaused = false;
            }
            l_current.play().catch(()=>{});
        } else {
            if (o) {
                o.userPaused = true;
            }
            l_current.pause();
        }
    }, []);
    const G = q_1(()=>{
        const l_current = l.current;
        const f_current = f.current;
        if (!l_current) {
            return;
        }
        if (document.fullscreenElement) {
            document.exitFullscreen?.();
            return;
        }
        const o = l_current;
        if (f_current?.requestFullscreen) {
            f_current.requestFullscreen().catch(()=>{});
        } else if (o.webkitEnterFullscreen) {
            o.webkitEnterFullscreen();
        }
    }, []);
    const ge = q_1((e)=>{
        e.stopPropagation();
        e.preventDefault();
        A();
    }, [
        A
    ]);
    const he = q_1((e)=>{
        e.stopPropagation();
        e.preventDefault();
        G();
    }, [
        G
    ]);
    const onChange = q_1((e)=>{
        ce(e);
        Ze(e);
        if (l.current) {
            l.current.volume = e;
        }
        if (e > 0 && D) {
            z(false);
        } else if (e === 0 && !D) {
            z(true);
        }
    }, []);
    const U = !h && spoiler;
    return u_1("div", {
        ref: f,
        className: `${a.container} ${className} ${U ? a.hidden : ""} ${k ? a.revealing : ""}`,
        onClick: pe,
        onDblClick,
        children: [
            u_1("video", {
                ref: l,
                src,
                preload: "metadata",
                playsInline: true,
                muted: N,
                loop: true,
                className: a.video,
                width,
                height
            }),
            duration != null && U && u_1("div", {
                className: a.duration,
                children: Qe(duration)
            }),
            (h || !spoiler) && u_1("div", {
                className: a.bottomOverlay,
                children: [
                    u_1("button", {
                        className: `${a.controlButton} ${a.playButton}`,
                        onClick: ge,
                        type: "button",
                        "aria-label": J ? "Pause" : "Play",
                        children: J ? u_1(Je, {}) : u_1(je, {})
                    }),
                    u_1("button", {
                        className: `${a.controlButton} ${a.fullscreenButton}`,
                        onClick: he,
                        type: "button",
                        "aria-label": "Fullscreen",
                        children: u_1(Ke, {})
                    }),
                    de ? u_1("button", {
                        className: a.muteButtonMobile,
                        onClick: K,
                        type: "button",
                        "aria-label": N ? "Unmute" : "Mute",
                        children: u_1(ba, {
                            muted: N,
                            volume: I
                        })
                    }) : u_1("div", {
                        className: `${a.volumeControl} ${ae ? a.active : ""}`,
                        children: [
                            u_1("div", {
                                className: a.volumeSlider,
                                children: u_1(Be, {
                                    value: N ? 0 : I,
                                    onChange,
                                    onDragStart: ()=>{
                                        x.current = true;
                                        Q(true);
                                    },
                                    onDragEnd: ()=>{
                                        Q(false);
                                        setTimeout(()=>{
                                            x.current = false;
                                        }, 0);
                                    }
                                })
                            }),
                            u_1("button", {
                                className: a.muteButton,
                                onClick: K,
                                type: "button",
                                "aria-label": N ? "Unmute" : "Mute",
                                children: u_1(ba, {
                                    muted: N,
                                    volume: I
                                })
                            })
                        ]
                    }),
                    u_1("div", {
                        ref,
                        className: a.progressContainer,
                        onPointerDown,
                        onClick: (e)=>e.stopPropagation(),
                        children: u_1("div", {
                            ref: p,
                            className: a.progressTrack,
                            children: u_1("div", {
                                className: `${a.progressFill} ${ue ? a.scrubbing : ""}`,
                                style: {
                                    width: `${le}%`
                                }
                            })
                        })
                    })
                ]
            }),
            U && u_1("canvas", {
                ref: M,
                className: a.canvas
            })
        ]
    });
}
