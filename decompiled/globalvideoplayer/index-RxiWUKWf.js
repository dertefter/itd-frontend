import { A as A_1, q as q_1, u as u_1, b4, aB, d, b5, h as h_1, b6, b7, b8, b9, ba, bb, bc } from "./index-B4ySybtH.js";
import { I as I_1 } from "./IconDownload-BOZrsf2k.js";
const wrapper = "uemV";
const track = "k7hp";
const fill = "yaLs";
const thumb = "fg97";
const A = {
    wrapper,
    track,
    fill,
    thumb
};
function Fe({ value, onChange, onDragStart, onDragEnd }) {
    const i = A_1(null);
    const p = q_1((u)=>{
        const i_current = i.current;
        if (!i_current) {
            return;
        }
        const y = i_current.getBoundingClientRect();
        const k = 1 - (u - y.top) / y.height;
        onChange(Math.max(0, Math.min(1, k)));
    }, [
        onChange
    ]);
    const onMouseDown = q_1((u)=>{
        u.stopPropagation();
        u.preventDefault();
        onDragStart?.();
        p(u.clientY);
        const f = (k)=>p(k.clientY);
        const y = ()=>{
            onDragEnd?.();
            document.removeEventListener("mousemove", f);
            document.removeEventListener("mouseup", y);
        };
        document.addEventListener("mousemove", f);
        document.addEventListener("mouseup", y);
    }, [
        p,
        onDragStart,
        onDragEnd
    ]);
    const w = 7;
    const v = 80;
    const E = w;
    const L = v - w;
    const N = E + value * (L - E);
    return u_1("div", {
        className: A.wrapper,
        onMouseDown,
        onClick: (u)=>{
            u.stopPropagation();
            u.preventDefault();
        },
        children: u_1("div", {
            ref: i,
            className: A.track,
            children: [
                u_1("div", {
                    className: A.fill,
                    style: {
                        height: `${N}px`
                    }
                }),
                u_1("div", {
                    className: A.thumb,
                    style: {
                        bottom: `${N}px`
                    }
                })
            ]
        })
    });
}
const overlay = "SBwg";
const chrome = "BgPL";
const closing = "vwKg";
const backdrop = "oJDr";
const overlayFade = "ZK9j";
const stage = "zfo1";
const video = "ppC6";
const bottomOverlay = "QWlV";
const topActions = "NeT9";
const mediaError = "iXo9";
const errorDownload = "Xq7P";
const poster = "X7xJ";
const controlButton = "UMdJ";
const playButton = "hkXy";
const time = "tjtU";
const speedButton = "z6zd";
const volumeControl = "e7PV";
const volumeActive = "UZ1r";
const volumeSlider = "Cf48";
const muteButton = "MRx6";
const fullscreenButton = "JboZ";
const progressContainer = "zV2X";
const progressTrack = "a6Wj";
const progressBuffered = "nfVq";
const progressFill = "Q0r2";
const scrubbing = "ZlVA";
const a = {
    overlay,
    chrome,
    closing,
    backdrop,
    overlayFade,
    stage,
    video,
    bottomOverlay,
    topActions,
    mediaError,
    errorDownload,
    poster,
    controlButton,
    playButton,
    time,
    speedButton,
    volumeControl,
    volumeActive,
    volumeSlider,
    muteButton,
    fullscreenButton,
    progressContainer,
    progressTrack,
    progressBuffered,
    progressFill,
    scrubbing
};
const duration = 280;
const easing = "cubic-bezier(0.32, 0.72, 0, 1)";
const V = [
    0.5,
    1,
    1.5,
    2
];
function Y(n) {
    return bb(n);
}
function at(n, l) {
    const h = Math.min(window.innerWidth / n, window.innerHeight / l);
    return {
        width: Math.round(n * h),
        height: Math.round(l * h)
    };
}
function ee(n) {
    const l = parseFloat(n ?? "");
    if (Number.isFinite(l)) {
        return l;
    }
    return 0;
}
const te = parseFloat(b7.getItem("video-volume") ?? "1");
const re = Number.isNaN(te) ? 1 : te;
export function GlobalVideoPlayer() {
    const n = b4((i)=>i.isOpen);
    const l = b4((i)=>i.options);
    const h = b4((i)=>i.session);
    const onUnmount = b4((i)=>i.close);
    if (!n || !l) {
        return null;
    }
    return aB(u_1(it, {
        options: l,
        onUnmount
    }, h), document.body);
}
function it({ options, onUnmount }) {
    const h = A_1(null);
    const b = A_1(null);
    const i = A_1(null);
    const current = A_1(new bc).current;
    const B = A_1(null);
    const [w, v] = d(false);
    const [E, L] = d(false);
    const [N, u] = d(options.startTime ?? 0);
    const [f, y] = d(0);
    const [k, oe] = d(re);
    const [I, q] = d(false);
    const [se, ae] = d(1);
    const [ie, H] = d(false);
    const [ce, U] = d(false);
    const [le, J] = d(!!options.poster);
    const [Z, ue] = d(()=>{
        if (options.width && options.height) {
            return {
                w: options.width,
                h: options.height
            };
        }
        const options_sourceRect = options.sourceRect;
        if (options_sourceRect && options_sourceRect.width > 0 && options_sourceRect.height > 0) {
            return {
                w: options_sourceRect.width,
                h: options_sourceRect.height
            };
        }
        return {
            w: 16,
            h: 9
        };
    });
    const [dt, de] = d({
        w: window.innerWidth,
        h: window.innerHeight
    });
    const R = A_1(false);
    const $ = A_1(false);
    const z = A_1(false);
    b5();
    const j = at(Z.w, Z.h);
    h_1(()=>{
        const e = ()=>de({
                w: window.innerWidth,
                h: window.innerHeight
            });
        window.addEventListener("resize", e);
        return ()=>window.removeEventListener("resize", e);
    }, []);
    b6(()=>{
        const b_current = b.current;
        const options_sourceRect = options.sourceRect;
        if (!b_current || !options_sourceRect) {
            return;
        }
        const o = b_current.getBoundingClientRect();
        if (o.width <= 0 || o.height <= 0) {
            return;
        }
        const s = options_sourceRect.width / o.width;
        const c = options_sourceRect.height / o.height;
        const C = options_sourceRect.left + options_sourceRect.width / 2 - (o.left + o.width / 2);
        const x = options_sourceRect.top + options_sourceRect.height / 2 - (o.top + o.height / 2);
        const G = ee(options_sourceRect.borderRadius);
        b_current.animate([
            {
                transform: `translate(${C}px, ${x}px) scale(${s}, ${c})`,
                borderRadius: `${G / Math.max(s, 0.01)}px`
            },
            {
                transform: "none",
                borderRadius: "0px"
            }
        ], {
            duration,
            easing,
            fill: "backwards"
        });
    }, []);
    const T = q_1(()=>{
        if (R.current) {
            return;
        }
        R.current = true;
        current.cancel();
        const i_current = i.current;
        options.onCloseStart?.(i_current?.currentTime ?? 0);
        const h_current = h.current;
        const b_current = b.current;
        h_current?.classList.add(a.closing);
        const s = options.resolveCloseRect?.() ?? options.sourceRect ?? null;
        if (!b_current || !s) {
            b_current?.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ], {
                duration: 200,
                easing: "ease-out",
                fill: "forwards"
            });
            setTimeout(onUnmount, 210);
            return;
        }
        const c = b_current.getBoundingClientRect();
        const C = s.width / c.width;
        const x = s.height / c.height;
        const G = s.left + s.width / 2 - (c.left + c.width / 2);
        const we = s.top + s.height / 2 - (c.top + c.height / 2);
        const ye = ee(s.borderRadius);
        b_current.animate([
            {
                transform: "none",
                borderRadius: "0px"
            },
            {
                transform: `translate(${G}px, ${we}px) scale(${C}, ${x})`,
                borderRadius: `${ye / Math.max(C, 0.01)}px`
            }
        ], {
            duration,
            easing,
            fill: "forwards"
        }).addEventListener("finish", onUnmount);
    }, [
        options,
        onUnmount
    ]);
    h_1(()=>{
        const i_current = i.current;
        if (i_current) {
            i_current.volume = re;
            i_current.playbackRate = V[1];
            if (options.startTime && options.startTime > 0) {
                i_current.currentTime = options.startTime;
            }
            i_current.play().then(()=>v(true)).catch(()=>{
                i_current.muted = true;
                q(true);
                i_current.play().then(()=>v(true)).catch(()=>{});
            });
        }
    }, []);
    h_1(()=>{
        const i_current = i.current;
        return ()=>{
            current.cancel();
            if (i_current) {
                try {
                    i_current.pause();
                    i_current.removeAttribute("src");
                    i_current.load();
                } catch  {}
            }
        };
    }, []);
    h_1(()=>{
        const i_current = i.current;
        if (!i_current || !options.poster) {
            return;
        }
        let t = false;
        const o = ()=>{
            if (!t) {
                J(false);
            }
        };
        const e_requestVideoFrameCallback = i_current.requestVideoFrameCallback;
        if (typeof e_requestVideoFrameCallback === "function") {
            e_requestVideoFrameCallback.call(i_current, o);
            return ()=>{
                t = true;
            };
        }
        const c = ()=>requestAnimationFrame(o);
        i_current.addEventListener("playing", c, {
            once: true
        });
        return ()=>{
            t = true;
            i_current.removeEventListener("playing", c);
        };
    }, []);
    h_1(()=>{
        if (!w) {
            return;
        }
        let e = 0;
        const t = ()=>{
            const i_current = i.current;
            if (i_current && !$.current) {
                u(i_current.currentTime);
            }
            e = requestAnimationFrame(t);
        };
        e = requestAnimationFrame(t);
        return ()=>cancelAnimationFrame(e);
    }, [
        w
    ]);
    const [me, he] = d([]);
    h_1(()=>{
        const i_current = i.current;
        if (!i_current) {
            return;
        }
        const t = ()=>{
            const i_current_duration = i_current.duration;
            if (!Number.isFinite(i_current_duration) || i_current_duration <= 0) {
                return;
            }
            const s = [];
            for(let c = 0; c < i_current.buffered.length; c++){
                const C = i_current.buffered.start(c);
                const x = i_current.buffered.end(c);
                s.push({
                    left: C / i_current_duration * 100,
                    width: (x - C) / i_current_duration * 100
                });
            }
            he(s);
        };
        i_current.addEventListener("progress", t);
        i_current.addEventListener("loadedmetadata", t);
        i_current.addEventListener("durationchange", t);
        i_current.addEventListener("seeked", t);
        t();
        return ()=>{
            i_current.removeEventListener("progress", t);
            i_current.removeEventListener("loadedmetadata", t);
            i_current.removeEventListener("durationchange", t);
            i_current.removeEventListener("seeked", t);
        };
    }, []);
    const M = q_1(()=>{
        const i_current = i.current;
        i_current && (i_current.paused ? current.prepare(i_current, options.resolveUrl, i_current.currentTime, ()=>i_current.isConnected && !R.current).then(async (t)=>{
            if (t) {
                await i_current.play();
            }
        }).catch(()=>{}) : (current.cancel(), i_current.pause(), v(false)));
    }, []);
    const F = q_1((e)=>{
        const i_current = i.current;
        if (!i_current || !Number.isFinite(e)) {
            return;
        }
        const o = !i_current.paused;
        const s = Math.max(0, Math.min(i_current.duration || e, e));
        if (!options.resolveUrl) {
            i_current.currentTime = s;
            u(s);
            return;
        }
        current.prepare(i_current, options.resolveUrl, s, ()=>i_current.isConnected && !R.current).then(async (c)=>{
            if (c) {
                i_current.currentTime = s;
                u(s);
                if (o) {
                    await i_current.play();
                }
            }
        }).catch(()=>{});
    }, []);
    const O = q_1((e)=>{
        const i_current = i.current;
        if (!(!i_current || !Number.isFinite(i_current.duration))) {
            F(i_current.currentTime + e);
        }
    }, [
        F
    ]);
    const W = q_1(()=>{
        const i_current = i.current;
        if (i_current) {
            i_current.muted = !i_current.muted;
            q(i_current.muted);
        }
    }, []);
    const onChange = q_1((e)=>{
        oe(e);
        b7.setItem("video-volume", String(e));
        const i_current = i.current;
        if (i_current) {
            i_current.volume = e;
            i_current.muted = e === 0;
            q(e === 0);
        }
    }, []);
    const ve = q_1(()=>{
        ae((e)=>{
            const t = (e + 1) % V.length;
            if (i.current) {
                i.current.playbackRate = V[t];
            }
            return t;
        });
    }, []);
    const D = q_1(()=>{
        const h_current = h.current;
        const i_current = i.current;
        if (document.fullscreenElement) {
            document.exitFullscreen?.();
            return;
        }
        if (h_current?.requestFullscreen) {
            h_current.requestFullscreen().catch(()=>{});
        } else {
            i_current?.webkitEnterFullscreen?.();
        }
    }, []);
    h_1(()=>{
        const e = (t)=>{
            switch(t.key){
                case "Escape":
                    T();
                    break;
                case " ":
                    t.preventDefault();
                    M();
                    break;
                case "ArrowLeft":
                    t.preventDefault();
                    O(-5);
                    break;
                case "ArrowRight":
                    t.preventDefault();
                    O(5);
                    break;
                case "m":
                case "M":
                case "ь":
                case "Ь":
                    W();
                    break;
                case "f":
                case "F":
                case "а":
                case "А":
                    D();
                    break;
            }
        };
        window.addEventListener("keydown", e);
        return ()=>window.removeEventListener("keydown", e);
    }, [
        T,
        M,
        O,
        W,
        D
    ]);
    const X = q_1((e)=>{
        const B_current = B.current;
        const i_current = i.current;
        if (!B_current || !i_current || !Number.isFinite(i_current.duration) || i_current.duration <= 0) {
            return;
        }
        const s = B_current.getBoundingClientRect();
        if (s.width <= 0) {
            return;
        }
        const c = Math.min(1, Math.max(0, (e - s.left) / s.width));
        F(i_current.duration * c);
    }, [
        F
    ]);
    const onPointerDown = q_1((e)=>{
        e.stopPropagation();
        $.current = true;
        H(true);
        const e_currentTarget = e.currentTarget;
        try {
            e_currentTarget.setPointerCapture(e.pointerId);
        } catch  {}
        X(e.clientX);
        const o = (c)=>X(c.clientX);
        const s = ()=>{
            try {
                e_currentTarget.releasePointerCapture(e.pointerId);
            } catch  {}
            document.removeEventListener("pointermove", o);
            document.removeEventListener("pointerup", s);
            document.removeEventListener("pointercancel", s);
            window.removeEventListener("blur", s);
            H(false);
            setTimeout(()=>{
                $.current = false;
            }, 0);
        };
        document.addEventListener("pointermove", o);
        document.addEventListener("pointerup", s);
        document.addEventListener("pointercancel", s);
        window.addEventListener("blur", s);
    }, [
        X
    ]);
    const ge = f > 0 ? N / f * 100 : 0;
    const be = !options.sourceRect;
    return u_1("div", {
        ref: h,
        "data-vp": "overlay",
        className: `${a.overlay} ${be ? a.overlayFade : ""} ym-hide-content`,
        onClick: T,
        children: [
            u_1("div", {
                className: a.backdrop
            }),
            u_1("div", {
                className: `${a.chrome} ${a.topActions}`,
                children: [
                    options.onDownload && u_1("button", {
                        type: "button",
                        className: a.controlButton,
                        "aria-label": "Скачать видео",
                        onClick: (e)=>{
                            e.stopPropagation();
                            options.onDownload?.();
                        },
                        children: u_1(I_1, {
                            size: 22
                        })
                    }),
                    u_1("button", {
                        type: "button",
                        className: a.controlButton,
                        "aria-label": "Закрыть видео",
                        onClick: (e)=>{
                            e.stopPropagation();
                            T();
                        },
                        children: u_1(b8, {
                            size: 24
                        })
                    })
                ]
            }),
            u_1("div", {
                ref: b,
                "data-vp": "stage",
                className: a.stage,
                style: {
                    width: `${j.width}px`,
                    height: `${j.height}px`
                },
                onClick: (e)=>{
                    e.stopPropagation();
                    if (!$.current && !z.current) {
                        M();
                    }
                },
                onDblClick: (e)=>{
                    e.stopPropagation();
                    D();
                },
                children: [
                    u_1("video", {
                        ref: i,
                        "data-vp": "video",
                        src: options.url,
                        className: a.video,
                        playsInline: true,
                        onPlay: ()=>{
                            b9();
                            v(true);
                            L(false);
                        },
                        onError: ()=>{
                            L(true);
                            v(false);
                            J(false);
                        },
                        onPause: ()=>v(false),
                        onEnded: ()=>v(false),
                        onLoadedMetadata: (e)=>{
                            const e_currentTarget = e.currentTarget;
                            y(e_currentTarget.duration);
                            if (!options.width && e_currentTarget.videoWidth > 0 && e_currentTarget.videoHeight > 0) {
                                ue({
                                    w: e_currentTarget.videoWidth,
                                    h: e_currentTarget.videoHeight
                                });
                            }
                        },
                        onSeeked: (e)=>u(e.currentTarget.currentTime)
                    }),
                    options.poster && le && u_1("img", {
                        className: a.poster,
                        src: options.poster,
                        alt: "",
                        "aria-hidden": "true"
                    }),
                    E && u_1("div", {
                        className: a.mediaError,
                        role: "alert",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            u_1("strong", {
                                children: "Не удалось воспроизвести видео"
                            }),
                            u_1("p", {
                                children: "Формат может не поддерживаться браузером. Попробуйте открыть файл на устройстве."
                            }),
                            options.onDownload && u_1("button", {
                                type: "button",
                                className: a.errorDownload,
                                onClick: ()=>{
                                    options.onDownload?.();
                                },
                                children: [
                                    u_1(I_1, {
                                        size: 18
                                    }),
                                    " Скачать видео"
                                ]
                            })
                        ]
                    }),
                    u_1("div", {
                        className: `${a.chrome} ${a.bottomOverlay}`,
                        hidden: E,
                        onDblClick: (e)=>e.stopPropagation(),
                        children: [
                            u_1("button", {
                                type: "button",
                                className: `${a.controlButton} ${a.playButton}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    M();
                                },
                                "aria-label": w ? "Пауза" : "Воспроизвести",
                                children: w ? u_1(lt, {}) : u_1(ct, {})
                            }),
                            u_1("span", {
                                className: a.time,
                                children: [
                                    Y(N),
                                    " / ",
                                    Y(f)
                                ]
                            }),
                            u_1("button", {
                                type: "button",
                                className: `${a.controlButton} ${a.speedButton}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    ve();
                                },
                                "aria-label": "Скорость воспроизведения",
                                children: [
                                    V[se],
                                    "×"
                                ]
                            }),
                            u_1("div", {
                                className: `${a.volumeControl} ${ce ? a.volumeActive : ""}`,
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    u_1("div", {
                                        className: a.volumeSlider,
                                        children: u_1(Fe, {
                                            value: I ? 0 : k,
                                            onChange,
                                            onDragStart: ()=>{
                                                z.current = true;
                                                U(true);
                                            },
                                            onDragEnd: ()=>{
                                                U(false);
                                                setTimeout(()=>{
                                                    z.current = false;
                                                }, 0);
                                            }
                                        })
                                    }),
                                    u_1("button", {
                                        type: "button",
                                        className: a.muteButton,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            W();
                                        },
                                        "aria-label": I ? "Включить звук" : "Выключить звук",
                                        children: u_1(ba, {
                                            muted: I || k === 0,
                                            volume: k
                                        })
                                    })
                                ]
                            }),
                            u_1("button", {
                                type: "button",
                                className: `${a.controlButton} ${a.fullscreenButton}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    D();
                                },
                                "aria-label": "На весь экран",
                                children: u_1(ut, {})
                            }),
                            u_1("div", {
                                "data-vp": "progress",
                                className: a.progressContainer,
                                onPointerDown,
                                onClick: (e)=>e.stopPropagation(),
                                children: u_1("div", {
                                    ref: B,
                                    className: a.progressTrack,
                                    children: [
                                        me.map((e, t)=>u_1("div", {
                                                className: a.progressBuffered,
                                                style: {
                                                    left: `${e.left}%`,
                                                    width: `${e.width}%`
                                                }
                                            }, t)),
                                        u_1("div", {
                                            className: `${a.progressFill} ${ie ? a.scrubbing : ""}`,
                                            style: {
                                                width: `${ge}%`
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function ct() {
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
function lt() {
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
function ut() {
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
