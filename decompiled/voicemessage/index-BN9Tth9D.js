import { a6, aH, d as d_1, A as A_1, h as h_1, q as q_1, u, aI } from "./index-B4ySybtH.js";
import { I as I_1, a as a_1 } from "./IconPlay-BjuOnGy0.js";
const voiceMessage = "TxbO";
const playButton = "XgKg";
const content = "ZcbY";
const waveform = "f4qx";
const dragging = "u82q";
const bar = "DexA";
const played = "as7R";
const info = "WwTY";
const time = "D5s2";
const duration = "ZTEf";
const d = {
    voiceMessage,
    playButton,
    content,
    waveform,
    dragging,
    bar,
    played,
    info,
    time,
    duration
};
const G = 45;
function J(r) {
    let o = 0;
    for(let t = 0; t < r.length; t++){
        const m = r.charCodeAt(t);
        o = (o << 5) - o + m;
        o = o & o;
    }
    return Math.abs(o);
}
function Q(r) {
    const o = [];
    let t = J(r);
    for(let m = 0; m < G; m++){
        t = (t * 9301 + 49297) % 233280;
        const h = 0.2 + t / 233280 * 0.8;
        o.push(h);
    }
    return o;
}
function $(r) {
    if (!isFinite(r) || isNaN(r)) {
        return "0:00";
    }
    const o = Math.floor(r / 60);
    const t = Math.floor(r % 60);
    return `${o}:${t.toString().padStart(2, "0")}`;
}
export function VoiceMessage({ src, duration = 0 }) {
    const t = a6(()=>src, [
        src
    ]);
    const m = a6(()=>Q(src), [
        src
    ]);
    const h = aH((e)=>e.activeAudioId);
    const f = aH((e)=>e.setActiveAudio);
    const [y, P] = d_1(true);
    const [T, p] = d_1(0);
    const [a, C] = d_1(duration);
    const [A, x] = d_1(false);
    const c = A_1(null);
    const L = A_1(null);
    const s = A_1(null);
    const g = h === t;
    h_1(()=>{
        if (h !== t && c.current && !c.current.paused) {
            c.current.pause();
            if (s.current) {
                cancelAnimationFrame(s.current);
                s.current = null;
            }
        }
    }, [
        h,
        t
    ]);
    h_1(()=>{
        const e = new Audio(src);
        c.current = e;
        const n = ()=>{
            C(e.duration || duration);
            P(false);
        };
        const i = ()=>{
            p(0);
            if (s.current) {
                cancelAnimationFrame(s.current);
                s.current = null;
            }
            f(null);
        };
        const l = ()=>{
            P(false);
        };
        e.addEventListener("loadedmetadata", n);
        e.addEventListener("ended", i);
        e.addEventListener("error", l);
        return ()=>{
            e.removeEventListener("loadedmetadata", n);
            e.removeEventListener("ended", i);
            e.removeEventListener("error", l);
            e.pause();
            c.current = null;
            if (s.current) {
                cancelAnimationFrame(s.current);
            }
            if (aH.getState().activeAudioId === t) {
                f(null);
            }
        };
    }, [
        src,
        duration,
        t,
        f
    ]);
    const b = q_1(()=>{
        if (c.current) {
            p(c.current.currentTime);
            s.current = requestAnimationFrame(b);
        }
    }, []);
    const F = q_1(()=>{
        const c_current = c.current;
        !c_current || y || (g ? (c_current.pause(), s.current && (cancelAnimationFrame(s.current), s.current = null), f(null)) : (f(t), c_current.play(), b()));
    }, [
        g,
        y,
        t,
        f,
        b
    ]);
    const v = q_1((e)=>{
        if (!L.current || !a) {
            return 0;
        }
        const n = L.current.getBoundingClientRect();
        const e_clientX = e.clientX;
        return Math.max(0, Math.min(e_clientX - n.left, n.width)) / n.width;
    }, [
        a
    ]);
    const B = q_1((e)=>{
        const c_current = c.current;
        if (!c_current || !a || A) {
            return;
        }
        const i = v(e);
        c_current.currentTime = i * a;
        p(c_current.currentTime);
    }, [
        a,
        A,
        v
    ]);
    const onMouseDown = q_1((e)=>{
        const c_current = c.current;
        if (!c_current || !a) {
            return;
        }
        x(true);
        const i = v(e);
        c_current.currentTime = i * a;
        p(c_current.currentTime);
    }, [
        a,
        v
    ]);
    h_1(()=>{
        if (!A) {
            return;
        }
        const e = (i)=>{
            const c_current = c.current;
            if (!c_current || !a) {
                return;
            }
            const k = v(i);
            c_current.currentTime = k * a;
            p(c_current.currentTime);
        };
        const n = ()=>{
            x(false);
        };
        document.addEventListener("mousemove", e);
        document.addEventListener("mouseup", n);
        return ()=>{
            document.removeEventListener("mousemove", e);
            document.removeEventListener("mouseup", n);
        };
    }, [
        A,
        a,
        v
    ]);
    const S = a > 0 ? T / a : 0;
    return u("div", {
        className: `${d.voiceMessage} ${g ? d.playing : ""}`,
        children: [
            u("button", {
                className: d.playButton,
                onClick: F,
                disabled: y,
                children: y ? u(aI, {
                    size: 18
                }) : g ? u(I_1, {
                    size: 18
                }) : u(a_1, {
                    size: 18
                })
            }),
            u("div", {
                className: d.content,
                children: [
                    u("div", {
                        ref: L,
                        className: `${d.waveform} ${A ? d.dragging : ""}`,
                        onClick: B,
                        onMouseDown,
                        children: m.map((e, n)=>{
                            const l = (n + 0.5) / m.length <= S;
                            return u("div", {
                                className: `${d.bar} ${l ? d.played : ""}`,
                                style: {
                                    height: `${Math.max(4, e * 24)}px`
                                }
                            }, n);
                        })
                    }),
                    u("div", {
                        className: d.info,
                        children: [
                            u("span", {
                                className: d.time,
                                children: $(g || T > 0 ? T : a)
                            }),
                            (g || T > 0) && u("span", {
                                className: d.duration,
                                children: [
                                    "/ ",
                                    $(a)
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
export { VoiceMessage as default };
