import { d as d_1, A as A_1, h as h_1, q as q_1, u as u_1, ah, bj } from "./index-B4ySybtH.js";
import { I as I_1, a as a_1 } from "./IconPlay-BjuOnGy0.js";
import { I as I_2 } from "./IconStop-CTwPjW8f.js";
function we() {
    const [l, E] = d_1(false);
    const [S, s] = d_1(false);
    const [b, w] = d_1(0);
    const [isPlaying, B] = d_1(false);
    const [playbackProgress, x] = d_1(0);
    const [duration, L] = d_1(0);
    const [audioLevels, D] = d_1([]);
    const [slideOffset, R] = d_1(0);
    const d = A_1(0);
    const a = A_1(null);
    const u = A_1(null);
    const V = A_1(null);
    const i = A_1(null);
    const p = A_1([]);
    const g = A_1(null);
    const h = A_1(null);
    const c = A_1(null);
    const A = A_1(null);
    const H = A_1(null);
    const e = A_1(null);
    const n = A_1([]);
    const t = A_1(false);
    const f = A_1(0);
    const y = A_1([]);
    const F = A_1(0);
    h_1(()=>{
        t.current = l;
    }, [
        l
    ]);
    h_1(()=>()=>{
            if (g.current) {
                clearInterval(g.current);
            }
            if (h.current) {
                cancelAnimationFrame(h.current);
            }
            if (e.current) {
                clearInterval(e.current);
            }
            if (i.current) {
                i.current.getTracks().forEach((r)=>r.stop());
            }
            if (a.current) {
                a.current.ondataavailable = null;
                a.current.onstop = null;
            }
            if (u.current && u.current.state !== "closed") {
                u.current.close();
            }
            if (c.current) {
                c.current.pause();
                c.current.onloadedmetadata = null;
                c.current.ontimeupdate = null;
                c.current.onended = null;
                c.current = null;
            }
            if (A.current) {
                URL.revokeObjectURL(A.current);
            }
        }, []);
    const z = q_1(()=>{
        if (!V.current) {
            return;
        }
        const V_current = V.current;
        const r_frequencyBinCount = V_current.frequencyBinCount;
        const M = new Uint8Array(r_frequencyBinCount);
        V_current.getByteFrequencyData(M);
        let W = 0;
        for(let ce = 0; ce < r_frequencyBinCount; ce++){
            W += M[ce];
        }
        const G = W / r_frequencyBinCount / 255;
        const T = Math.min(1, G * 3);
        const K = Math.max(0.1, T);
        if (t.current) {
            const de = performance.now() - f.current;
            const ie = Math.floor(de / 80);
            y.current.push(K);
            if (ie > F.current) {
                const ue = y.current;
                const se = ue.length > 0 ? ue.reduce((ae, fe)=>ae + fe, 0) / ue.length : 0.05;
                n.current.push(se);
                d.current += 4;
                D((ae)=>[
                        ...ae,
                        se
                    ]);
                R(d.current);
                y.current = [];
                F.current = ie;
            }
            h.current = requestAnimationFrame(z);
        }
    }, []);
    const q = q_1(()=>{
        const n_current = n.current;
        if (n_current.length > 0) {
            return [
                ...n_current
            ];
        }
        return [];
    }, []);
    const startRecording = q_1(async ()=>{
        try {
            if (A.current) {
                URL.revokeObjectURL(A.current);
                A.current = null;
            }
            H.current = null;
            if (c.current) {
                c.current.pause();
                c.current = null;
            }
            const r = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }
            });
            i.current = r;
            const v = new AudioContext;
            u.current = v;
            const M = v.createAnalyser();
            M.fftSize = 256;
            M.smoothingTimeConstant = 0.3;
            V.current = M;
            v.createMediaStreamSource(r).connect(M);
            const G = new MediaRecorder(r, {
                mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4"
            });
            a.current = G;
            p.current = [];
            n.current = [];
            f.current = performance.now();
            y.current = [];
            F.current = 0;
            G.ondataavailable = (K)=>{
                if (K.data.size > 0) {
                    p.current.push(K.data);
                }
            };
            G.start(100);
            E(true);
            s(false);
            w(0);
            x(0);
            L(0);
            B(false);
            d.current = 0;
            D([]);
            R(0);
            t.current = true;
            const T = Date.now();
            g.current = window.setInterval(()=>{
                const K = Math.floor((Date.now() - T) / 1000);
                w(K);
            }, 100);
            h.current = requestAnimationFrame(z);
        } catch (r) {
            console.error("Error accessing microphone:", r);
        }
    }, [
        z
    ]);
    const stopRecording = q_1(()=>new Promise((r)=>{
            t.current = false;
            E(false);
            if (a.current && a.current.state !== "inactive") {
                a.current.onstop = ()=>{
                    if (p.current.length > 0) {
                        const type = a.current?.mimeType || "audio/webm";
                        const W = new Blob(p.current, {
                            type
                        });
                        const G = URL.createObjectURL(W);
                        A.current = G;
                        H.current = W;
                        const T = new Audio(G);
                        c.current = T;
                        T.onloadedmetadata = ()=>{
                            if (isFinite(T.duration)) {
                                L(T.duration);
                            } else {
                                T.currentTime = 1e+101;
                                T.ontimeupdate = ()=>{
                                    T.ontimeupdate = null;
                                    T.currentTime = 0;
                                    L(T.duration);
                                };
                            }
                        };
                        T.onended = ()=>{
                            B(false);
                            x(0);
                            T.currentTime = 0;
                            if (e.current) {
                                clearInterval(e.current);
                                e.current = null;
                            }
                        };
                        s(true);
                        r(W);
                    } else {
                        r(null);
                    }
                };
                a.current.stop();
            } else {
                r(null);
            }
            if (i.current) {
                i.current.getTracks().forEach((M)=>M.stop());
                i.current = null;
            }
            if (g.current) {
                clearInterval(g.current);
                g.current = null;
            }
            if (h.current) {
                cancelAnimationFrame(h.current);
                h.current = null;
            }
            if (u.current && u.current.state !== "closed") {
                u.current.close();
                u.current = null;
            }
            const v = q();
            d.current = 0;
            D(v);
            R(0);
            x(0);
        }), [
        q
    ]);
    const cancelRecording = q_1(()=>{
        t.current = false;
        if (a.current) {
            a.current.ondataavailable = null;
            a.current.onstop = null;
            if (a.current.state !== "inactive") {
                a.current.stop();
            }
            a.current = null;
        }
        if (i.current) {
            i.current.getTracks().forEach((r)=>r.stop());
            i.current = null;
        }
        if (g.current) {
            clearInterval(g.current);
            g.current = null;
        }
        if (h.current) {
            cancelAnimationFrame(h.current);
            h.current = null;
        }
        if (e.current) {
            clearInterval(e.current);
            e.current = null;
        }
        if (u.current && u.current.state !== "closed") {
            u.current.close();
            u.current = null;
        }
        if (c.current) {
            c.current.pause();
            c.current = null;
        }
        if (A.current) {
            URL.revokeObjectURL(A.current);
            A.current = null;
        }
        H.current = null;
        E(false);
        s(false);
        w(0);
        B(false);
        x(0);
        L(0);
        d.current = 0;
        D([]);
        R(0);
        n.current = [];
        p.current = [];
    }, []);
    const P = q_1(()=>{
        if (e.current) {
            clearInterval(e.current);
        }
        e.current = window.setInterval(()=>{
            const c_current = c.current;
            if (!c_current || c_current.paused || c_current.ended) {
                if (e.current) {
                    clearInterval(e.current);
                    e.current = null;
                }
                return;
            }
            if (c_current.duration > 0) {
                x(c_current.currentTime / c_current.duration);
            }
        }, 100);
    }, []);
    const playAudio = q_1(()=>{
        if (!c.current || !A.current) {
            return;
        }
        if (e.current) {
            clearInterval(e.current);
            e.current = null;
        }
        const c_current = c.current;
        if (c_current.ended || c_current.currentTime >= c_current.duration) {
            c_current.currentTime = 0;
            x(0);
        }
        B(true);
        c_current.play().then(()=>{
            P();
        }).catch((v)=>{
            console.error("Error playing audio:", v);
            B(false);
        });
    }, [
        P
    ]);
    const pauseAudio = q_1(()=>{
        if (e.current) {
            clearInterval(e.current);
            e.current = null;
        }
        if (c.current) {
            c.current.pause();
            if (c.current.duration > 0) {
                x(c.current.currentTime / c.current.duration);
            }
        }
        B(false);
    }, []);
    const seekTo = q_1((r)=>{
        if (!c.current || !S) {
            return;
        }
        const c_current = c.current;
        const M = Math.max(0, Math.min(1, r));
        c_current.currentTime = M * c_current.duration;
        x(M);
        if (c_current.paused) {
            if (e.current) {
                clearInterval(e.current);
                e.current = null;
            }
            c_current.play().then(()=>{
                B(true);
                P();
            }).catch((W)=>{
                console.error("Error playing audio:", W);
            });
        }
    }, [
        S,
        P
    ]);
    const getAudioBlob = q_1(()=>H.current, []);
    return {
        isRecording: l,
        hasRecording: S,
        recordingTime: b,
        audioLevels,
        slideOffset,
        isPlaying,
        playbackProgress,
        duration,
        audioElementRef: c,
        startRecording,
        stopRecording,
        cancelRecording,
        playAudio,
        pauseAudio,
        seekTo,
        getAudioBlob
    };
}
const ne = 2;
const Re = 2;
const oe = ne + Re;
const Z = 24;
const Ae = 80;
const le = "rgba(142, 142, 147, 0.6)";
const ye = "#FFFFFF";
function Te({ levels, slideOffset, audioRef, isRecording, hasRecording, isPlaying, onSeek, onPlay }) {
    const $ = A_1(null);
    const x = A_1(null);
    const j = A_1(false);
    const L = A_1(0);
    const N = A_1(0);
    const D = A_1(0);
    const X = A_1(0);
    const R = A_1(null);
    const d = A_1(null);
    const a = A_1(0);
    const [u, V] = d_1(0);
    const i = Math.max(1, Math.floor(u / oe));
    h_1(()=>{
        D.current = slideOffset;
        if (slideOffset === 0) {
            N.current = 0;
        }
    }, [
        slideOffset
    ]);
    h_1(()=>{
        const x_current = x.current;
        if (!x_current) {
            return;
        }
        const n = new ResizeObserver((f)=>{
            for (const y of f){
                const F = y.contentRect.width;
                if (F > 0) {
                    V(F);
                }
            }
        });
        n.observe(x_current);
        const t = x_current.getBoundingClientRect();
        if (t.width > 0) {
            V(t.width);
        }
        return ()=>{
            n.disconnect();
        };
    }, []);
    h_1(()=>{
        const $_current = $.current;
        if (!$_current || u === 0) {
            return;
        }
        const n = window.devicePixelRatio || 1;
        $_current.width = u * n;
        $_current.height = Z * n;
        $_current.style.width = `${u}px`;
        $_current.style.height = `${Z}px`;
    }, [
        u
    ]);
    const p = q_1((e)=>{
        const $_current = $.current;
        if (!$_current || u === 0) {
            return;
        }
        const t = $_current.getContext("2d");
        if (!t) {
            return;
        }
        const f = window.devicePixelRatio || 1;
        t.clearRect(0, 0, $_current.width, $_current.height);
        t.save();
        t.scale(f, f);
        const y = Z / 2;
        const F = Z - 4;
        for(let z = 0; z < i; z++){
            let q;
            if (levels.length === 0) {
                q = 0.05;
            } else if (levels.length === 1) {
                q = levels[0];
            } else {
                const Y = z / (i - 1) * (levels.length - 1);
                const J = Math.floor(Y);
                const re = Math.min(J + 1, levels.length - 1);
                const r = Y - J;
                q = levels[J] * (1 - r) + levels[re] * r;
            }
            const Q = Math.max(4, q * F);
            const ee = z * oe;
            const U = y - Q / 2;
            const P = z < e;
            t.fillStyle = P ? ye : le;
            const te = ne / 2;
            t.beginPath();
            t.roundRect(ee, U, ne, Q, te);
            t.fill();
        }
        t.restore();
    }, [
        levels,
        u,
        i
    ]);
    const g = q_1((e)=>{
        const $_current = $.current;
        if (!$_current || u === 0) {
            return;
        }
        const t = $_current.getContext("2d");
        if (!t) {
            return;
        }
        const f = window.devicePixelRatio || 1;
        const D_current = D.current;
        const N_current = N.current;
        if (N_current !== D_current) {
            const U = e - X.current;
            const P = oe / Ae * U;
            if (N_current < D_current) {
                N.current = Math.min(D_current, N_current + P);
            } else {
                N.current = D_current;
            }
        }
        X.current = e;
        const N_current_1 = N.current;
        t.clearRect(0, 0, $_current.width, $_current.height);
        t.save();
        t.scale(f, f);
        t.translate(-N_current_1, 0);
        const q = Z / 2;
        const Q = Z - 4;
        const ee = i + levels.length;
        for(let U = 0; U < ee; U++){
            const P = U - i;
            const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
            const Y = Math.max(4, te * Q);
            const J = U * oe;
            const re = q - Y / 2;
            t.fillStyle = le;
            const r = ne / 2;
            t.beginPath();
            t.roundRect(J, re, ne, Y, r);
            t.fill();
        }
        t.restore();
        if (N.current !== D.current || isRecording) {
            R.current = requestAnimationFrame(g);
        }
    }, [
        levels,
        u,
        i,
        isRecording
    ]);
    h_1(()=>(isRecording ? (X.current = performance.now(), R.current = requestAnimationFrame(g)) : R.current && (cancelAnimationFrame(R.current), R.current = null), ()=>{
            if (R.current) {
                cancelAnimationFrame(R.current);
                R.current = null;
            }
        }), [
        isRecording,
        g
    ]);
    h_1(()=>{
        if (!isPlaying || isRecording) {
            if (d.current) {
                cancelAnimationFrame(d.current);
                d.current = null;
            }
            return;
        }
        const e = ()=>{
            const audioRef_current = audioRef.current;
            if (!audioRef_current || audioRef_current.paused || audioRef_current.ended) {
                d.current = null;
                return;
            }
            const t = audioRef_current.currentTime / audioRef_current.duration;
            const f = Math.ceil(t * i);
            if (f !== a.current) {
                a.current = f;
                p(f);
            }
            d.current = requestAnimationFrame(e);
        };
        d.current = requestAnimationFrame(e);
        return ()=>{
            if (d.current) {
                cancelAnimationFrame(d.current);
                d.current = null;
            }
        };
    }, [
        isPlaying,
        isRecording,
        audioRef,
        i,
        p
    ]);
    h_1(()=>{
        if (!isRecording && !isPlaying && hasRecording) {
            const e = audioRef.current;
            if (e && e.duration > 0 && e.currentTime > 0) {
                const n = e.currentTime / e.duration;
                const t = Math.ceil(n * i);
                a.current = t;
                p(t);
            } else {
                a.current = 0;
                p(0);
            }
        }
    }, [
        isRecording,
        isPlaying,
        hasRecording,
        p,
        audioRef,
        i
    ]);
    h_1(()=>{
        if (!isRecording && hasRecording && !isPlaying) {
            p(a.current);
        }
    }, [
        levels,
        i,
        isRecording,
        hasRecording,
        isPlaying,
        p
    ]);
    const h = q_1((e)=>{
        const x_current = x.current;
        if (!x_current) {
            return 0;
        }
        const t = x_current.getBoundingClientRect();
        const f = "touches" in e ? e.touches[0].clientX : e.clientX;
        return Math.max(0, Math.min(1, (f - t.left) / t.width));
    }, []);
    const c = q_1((e)=>{
        if (!(!hasRecording || isRecording)) {
            e.preventDefault();
            if (!isPlaying) {
                onPlay();
                return;
            }
            j.current = true;
            L.current = h(e);
        }
    }, [
        hasRecording,
        isRecording,
        isPlaying,
        h,
        onPlay
    ]);
    const A = q_1((e)=>{
        if (j.current) {
            L.current = h(e);
        }
    }, [
        h
    ]);
    const H = q_1(()=>{
        if (j.current) {
            onSeek(L.current);
            j.current = false;
        }
    }, [
        onSeek
    ]);
    h_1(()=>{
        const e = (t)=>A(t);
        const n = ()=>H();
        window.addEventListener("mousemove", e);
        window.addEventListener("mouseup", n);
        window.addEventListener("touchmove", e);
        window.addEventListener("touchend", n);
        return ()=>{
            window.removeEventListener("mousemove", e);
            window.removeEventListener("mouseup", n);
            window.removeEventListener("touchmove", e);
            window.removeEventListener("touchend", n);
        };
    }, [
        A,
        H
    ]);
    return u_1("div", {
        ref: x,
        style: {
            width: "100%",
            height: `${Z}px`,
            overflow: "hidden",
            cursor: hasRecording && !isRecording ? "pointer" : "default"
        },
        onMouseDown: c,
        onTouchStart: c,
        children: u_1("canvas", {
            ref: $
        })
    });
}
const voiceInput = "iNTO";
const circleButton = "J6Kh";
const playButton = "JHIP";
const hasRecording = "kAOX";
const stopButton = "zPMw";
const recording = "ZzOf";
const sendButton = "jr8a";
const audioVisualizer = "Y5kV";
const waveformContainer = "cGPa";
const Fe = "tBws";
const exiting = "sCVW";
const C = {
    voiceInput,
    circleButton,
    playButton,
    hasRecording,
    stopButton,
    recording,
    sendButton,
    audioVisualizer,
    waveformContainer,
    recordingTime: Fe,
    exiting
};
export function VoiceInput({ onCancel, onSend, isExiting, onExitComplete }) {
    const [b, w] = d_1(false);
    const { isRecording, hasRecording, recordingTime, audioLevels, slideOffset, isPlaying, playbackProgress, duration, audioElementRef, startRecording, stopRecording, cancelRecording, playAudio, pauseAudio, seekTo, getAudioBlob } = we();
    h_1(()=>{
        startRecording();
    }, []);
    h_1(()=>{
        if (isExiting && onExitComplete) {
            const t = setTimeout(onExitComplete, 300);
            return ()=>clearTimeout(t);
        }
    }, [
        isExiting,
        onExitComplete
    ]);
    const g = (t)=>{
        if (!isFinite(t) || isNaN(t)) {
            return "00:00";
        }
        const f = Math.floor(t / 60);
        const y = Math.floor(t % 60);
        return `${f.toString().padStart(2, "0")}:${y.toString().padStart(2, "0")}`;
    };
    const h = ()=>{
        hasRecording && (isPlaying ? pauseAudio() : playAudio());
    };
    const c = ()=>{
        if (isRecording) {
            stopRecording();
        }
    };
    const onSeek = q_1((t)=>{
        seekTo(t);
    }, [
        seekTo
    ]);
    const H = q_1(async ()=>{
        if (!(b || !onSend)) {
            w(true);
            try {
                let t = null;
                if (isRecording) {
                    t = await stopRecording();
                } else {
                    t = getAudioBlob();
                }
                if (!t) {
                    return;
                }
                await onSend(t);
                cancelRecording();
                onCancel();
            } catch (t) {
                console.error("Failed to send voice message:", t);
            } finally{
                w(false);
            }
        }
    }, [
        b,
        isRecording,
        stopRecording,
        getAudioBlob,
        onSend,
        cancelRecording,
        onCancel
    ]);
    const children = g(isRecording ? recordingTime : isPlaying ? playbackProgress * duration : duration);
    const className = [
        C.voiceInput,
        isRecording ? C.recording : "",
        hasRecording ? C.hasRecording : "",
        isExiting ? C.exiting : ""
    ].filter(Boolean).join(" ");
    return u_1("div", {
        className,
        children: [
            u_1("button", {
                className: `${C.circleButton} ${C.playButton}`,
                onClick: h,
                children: isPlaying ? u_1(I_1, {
                    size: 20
                }) : u_1(a_1, {
                    size: 20
                })
            }),
            u_1("div", {
                className: C.audioVisualizer,
                children: [
                    u_1("div", {
                        className: C.waveformContainer,
                        children: u_1(Te, {
                            levels: audioLevels,
                            slideOffset,
                            audioRef: audioElementRef,
                            isRecording,
                            hasRecording,
                            isPlaying,
                            onSeek,
                            onPlay: playAudio
                        })
                    }),
                    u_1("span", {
                        className: C.recordingTime,
                        children
                    })
                ]
            }),
            u_1("button", {
                className: `${C.circleButton} ${C.stopButton}`,
                onClick: c,
                children: u_1(I_2, {
                    size: 20
                })
            }),
            u_1("button", {
                className: `${C.circleButton} ${C.sendButton}`,
                onClick: H,
                disabled: b || isRecording && recordingTime < 1,
                children: b ? u_1(ah, {
                    size: "xs"
                }) : u_1(bj, {
                    size: 20
                })
            })
        ]
    });
}
