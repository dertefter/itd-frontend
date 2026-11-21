import { q as q_1, d as d_1, h as h_1, A as A_1, a6, u as u_1, S, bz, b6, bp, b5, aB, b8 } from "./index-B4ySybtH.js";
import { I } from "./IconDownload-BOZrsf2k.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
import { I as I_2 } from "./IconChevronRight-Dq1Aw0fA.js";
const fe = 100;
function he(e, i) {
    const o = q_1(()=>{
        const s = i ? window.innerWidth : window.innerWidth - fe * 2;
        const window_innerHeight = window.innerHeight;
        return e.map((d)=>{
            if (!d.width || !d.height) {
                return {
                    width: s,
                    height: window_innerHeight
                };
            }
            const k = Math.min(s / d.width, window_innerHeight / d.height);
            return {
                width: d.width * k,
                height: d.height * k
            };
        });
    }, [
        e,
        i
    ]);
    const [u, g] = d_1(o);
    h_1(()=>{
        g(o());
        const s = ()=>g(o());
        window.addEventListener("resize", s);
        return ()=>window.removeEventListener("resize", s);
    }, [
        o
    ]);
    return u;
}
function pe({ onClose, onPrev, onNext }) {
    h_1(()=>{
        const u = (g)=>{
            switch(g.key){
                case "Escape":
                    g.preventDefault();
                    g.stopPropagation();
                    onClose();
                    break;
                case "ArrowLeft":
                    g.preventDefault();
                    g.stopPropagation();
                    onPrev();
                    break;
                case "ArrowRight":
                    g.preventDefault();
                    g.stopPropagation();
                    onNext();
                    break;
            }
        };
        window.addEventListener("keydown", u, true);
        return ()=>window.removeEventListener("keydown", u, true);
    }, [
        onClose,
        onPrev,
        onNext
    ]);
}
function me({ initialIndex, total }) {
    const [o, u] = d_1(initialIndex);
    const [g, s] = d_1(false);
    const p = A_1(null);
    const d = q_1(()=>{
        if (p.current) {
            clearTimeout(p.current);
            p.current = null;
            s(false);
        }
    }, []);
    const k = q_1((m)=>{
        if (!(m === o || m < 0 || m >= total)) {
            d();
            s(true);
            u(m);
            p.current = window.setTimeout(()=>{
                p.current = null;
                s(false);
            }, 500);
        }
    }, [
        o,
        total,
        d
    ]);
    const goToPrev = q_1(()=>{
        if (o > 0) {
            k(o - 1);
        }
    }, [
        o,
        k
    ]);
    const goToNext = q_1(()=>{
        if (o < total - 1) {
            k(o + 1);
        }
    }, [
        o,
        total,
        k
    ]);
    return {
        currentIndex: o,
        setCurrentIndex: u,
        isAnimating: g,
        setIsAnimating: s,
        cancelAnimation: d,
        goToIndex: k,
        goToPrev,
        goToNext
    };
}
const $t = 150;
const ge = 0.3;
function zt(e, i) {
    const o = e.clientX - i.clientX;
    const u = e.clientY - i.clientY;
    return Math.sqrt(o * o + u * u);
}
function we({ currentIndex, imagesCount, imageSizes, isMobile, isAnimating, setIsAnimating, cancelAnimation, onIndexChange, onClose, trackRef, onDragStart }) {
    const [m, y] = d_1(0);
    const [P, v] = d_1(0);
    const [T, $] = d_1(false);
    const [F, _] = d_1(1);
    const [pt, X] = d_1(null);
    const [E, S] = d_1(null);
    const [nt, h] = d_1(1);
    const [panX, vt] = d_1(0);
    const [panY, xt] = d_1(0);
    const [Tt, tt] = d_1(false);
    const G = A_1(1);
    const ot = A_1({
        x: 0,
        y: 0
    });
    const ct = A_1(false);
    const at = A_1(false);
    const gt = A_1(0);
    const q = A_1(0);
    const st = A_1(0);
    const N = A_1(1);
    const H = A_1({
        x: 0,
        y: 0
    });
    const K = A_1({
        x: 0,
        y: 0
    });
    const j = A_1({
        x: 0,
        y: 0
    });
    const ut = A_1(0);
    const J = A_1(0);
    const M = A_1(null);
    const B = A_1(false);
    const R = A_1(null);
    const U = A_1(null);
    const wt = A_1(false);
    const bt = q_1((a)=>{
        G.current = a;
        h(a);
    }, []);
    const lt = q_1((a, c)=>{
        ot.current = {
            x: a,
            y: c
        };
        vt(a);
        xt(c);
    }, []);
    const mt = q_1(()=>{
        tt(true);
        bt(1);
        lt(0, 0);
        setTimeout(()=>tt(false), 300);
    }, [
        bt,
        lt
    ]);
    const it = q_1((a, c, f)=>{
        const w = imageSizes[currentIndex];
        if (!w) {
            return {
                x: 0,
                y: 0
            };
        }
        const I = Math.max(0, (w.width * f - window.innerWidth) / 2);
        const L = Math.max(0, (w.height * f - window.innerHeight) / 2);
        return {
            x: Math.max(-I, Math.min(I, a)),
            y: Math.max(-L, Math.min(L, c))
        };
    }, [
        imageSizes,
        currentIndex
    ]);
    h_1(()=>{
        G.current = 1;
        ot.current = {
            x: 0,
            y: 0
        };
        h(1);
        vt(0);
        xt(0);
        tt(false);
    }, [
        currentIndex
    ]);
    h_1(()=>()=>{
            if (R.current) {
                clearTimeout(R.current);
                R.current = null;
            }
        }, []);
    const dt = q_1((a)=>{
        let c = a;
        if (currentIndex === 0 && c > 0 || currentIndex === imagesCount - 1 && c < 0) {
            c *= ge;
        }
        return c;
    }, [
        currentIndex,
        imagesCount
    ]);
    const ft = q_1(()=>{
        if (Math.abs(P) > $t) {
            return onClose(isMobile), true;
        }
        return setIsAnimating(true), v(0), y(0), _(1), R.current = window.setTimeout(()=>{
            R.current = null;
            setIsAnimating(false);
        }, 300), false;
    }, [
        P,
        isMobile,
        onClose,
        setIsAnimating
    ]);
    const onMouseDown = q_1((a)=>{
        if (isMobile || a.button !== 0) {
            return;
        }
        const c = U.current ?? currentIndex;
        let f = 0;
        const w = trackRef?.current;
        if (w) {
            const I = getComputedStyle(w).transform;
            if (I && I !== "none") {
                const L = new DOMMatrixReadOnly(I).m41;
                let Z = 0;
                for(let et = 0; et < c; et++){
                    Z += imageSizes[et]?.width || 0;
                }
                f = L + Z;
                if (Math.abs(f) < 1) {
                    f = 0;
                }
            }
        }
        cancelAnimation();
        if (R.current) {
            clearTimeout(R.current);
            R.current = null;
        }
        if (U.current !== null) {
            onIndexChange(U.current);
            U.current = null;
        }
        setIsAnimating(false);
        X(null);
        S(null);
        ut.current = f;
        J.current = 0;
        y(f);
        $(true);
        B.current = false;
        j.current = {
            x: a.clientX,
            y: a.clientY
        };
        M.current = null;
        a.preventDefault();
    }, [
        isMobile,
        currentIndex,
        imageSizes,
        trackRef,
        cancelAnimation,
        onIndexChange,
        setIsAnimating
    ]);
    const onMouseMove = q_1((a)=>{
        if (!T || isMobile) {
            return;
        }
        const c = a.clientX - j.current.x;
        const f = a.clientY - j.current.y;
        if (!M.current && (Math.abs(c) > 10 || Math.abs(f) > 10)) {
            M.current = Math.abs(c) > Math.abs(f) ? "x" : "y";
            B.current = true;
            onDragStart?.();
        }
        if (M.current === "x") {
            J.current = c;
            y(dt(ut.current + c));
        } else if (M.current === "y") {
            v(f);
            const w = Math.min(Math.abs(f) / $t, 1);
            _(1 - w * 0.5);
        }
    }, [
        T,
        isMobile,
        dt,
        onDragStart
    ]);
    const Mt = q_1(()=>{
        if (!(!T || isMobile)) {
            $(false);
            if (M.current === "x") {
                const c = U.current ?? currentIndex;
                const f = J.current;
                let w = c;
                if (f < -80 && c < imagesCount - 1) {
                    w = c + 1;
                } else if (f > 80 && c > 0) {
                    w = c - 1;
                }
                if (w !== c) {
                    const I = imageSizes[w]?.width || 0;
                    const L = imageSizes[c]?.width || 0;
                    const Z = w > c ? -L : I;
                    setIsAnimating(true);
                    X(w);
                    y(Z);
                    U.current = w;
                    R.current = window.setTimeout(()=>{
                        R.current = null;
                        setIsAnimating(false);
                        X(null);
                        y(0);
                        U.current = null;
                        onIndexChange(w);
                    }, 500);
                } else {
                    setIsAnimating(true);
                    y(0);
                    R.current = window.setTimeout(()=>{
                        R.current = null;
                        setIsAnimating(false);
                    }, 300);
                }
            } else {
                if (M.current === "y") {
                    ft();
                } else if (m !== 0) {
                    setIsAnimating(true);
                    y(0);
                    R.current = window.setTimeout(()=>{
                        R.current = null;
                        setIsAnimating(false);
                    }, 300);
                }
            }
            M.current = null;
        }
    }, [
        T,
        isMobile,
        currentIndex,
        m,
        imagesCount,
        imageSizes,
        ft,
        onIndexChange,
        setIsAnimating
    ]);
    const onTouchStart = q_1((a)=>{
        if (!isMobile) {
            return;
        }
        q.current = Math.max(q.current, a.touches.length);
        if (a.touches.length === 2) {
            ct.current = true;
            at.current = true;
            st.current = zt(a.touches[0], a.touches[1]);
            N.current = G.current;
            $(false);
            M.current = null;
            y(0);
            v(0);
            _(1);
            tt(false);
            return;
        }
        if (G.current > 1) {
            q.current = 1;
            H.current = {
                x: a.touches[0].clientX,
                y: a.touches[0].clientY
            };
            K.current = {
                ...ot.current
            };
            $(true);
            B.current = false;
            M.current = null;
            tt(false);
            const f = a.target;
            wt.current = f.tagName === "IMG" && f.hasAttribute("data-viewer-image");
            return;
        }
        q.current = 1;
        at.current = false;
        cancelAnimation();
        if (R.current) {
            clearTimeout(R.current);
            R.current = null;
        }
        setIsAnimating(false);
        y(0);
        B.current = false;
        const a_target = a.target;
        wt.current = a_target.tagName === "IMG" && a_target.hasAttribute("data-viewer-image");
        j.current = {
            x: a.touches[0].clientX,
            y: a.touches[0].clientY
        };
        M.current = null;
        $(true);
    }, [
        isMobile,
        cancelAnimation,
        setIsAnimating
    ]);
    const onTouchMove = q_1((a)=>{
        if (!isMobile) {
            return;
        }
        q.current = Math.max(q.current, a.touches.length);
        if (ct.current && a.touches.length >= 2) {
            const w = zt(a.touches[0], a.touches[1]);
            const I = N.current * (w / st.current);
            const L = Math.min(Math.max(I, 0.5), 5);
            const Z = it(ot.current.x, ot.current.y, L);
            bt(L);
            lt(Z.x, Z.y);
            return;
        }
        if (G.current > 1 && T && !ct.current) {
            const w = a.touches[0].clientX - H.current.x;
            const I = a.touches[0].clientY - H.current.y;
            if (Math.abs(w) > 5 || Math.abs(I) > 5) {
                B.current = true;
            }
            const L = it(K.current.x + w, K.current.y + I, G.current);
            lt(L.x, L.y);
            return;
        }
        if (!T) {
            return;
        }
        const c = a.touches[0].clientX - j.current.x;
        const f = a.touches[0].clientY - j.current.y;
        if (!M.current && (Math.abs(c) > 10 || Math.abs(f) > 10)) {
            M.current = Math.abs(c) > Math.abs(f) ? "x" : "y";
            B.current = true;
            onDragStart?.();
        }
        if (M.current === "x") {
            y(dt(c));
        } else if (M.current === "y") {
            v(f);
            const w = Math.min(Math.abs(f) / $t, 1);
            _(Math.round((1 - w * 0.7) * 100) / 100);
        }
    }, [
        isMobile,
        T,
        bt,
        lt,
        it,
        dt,
        onDragStart
    ]);
    const onTouchEnd = q_1(()=>{
        if (isMobile) {
            if (ct.current) {
                ct.current = false;
                gt.current = Date.now();
                if (G.current < 1.1) {
                    mt();
                }
                return;
            }
            if (G.current > 1) {
                $(false);
                return;
            }
            if (q.current > 1 || at.current) {
                $(false);
                v(0);
                _(1);
                M.current = null;
                return;
            }
            if (Date.now() - gt.current < 300) {
                $(false);
                v(0);
                _(1);
                M.current = null;
                return;
            }
            if (T) {
                $(false);
                if (!wt.current) {
                    if (!M.current) {
                        B.current = true;
                        onClose(true);
                        return;
                    }
                    if (M.current === "y" && P > 30) {
                        B.current = true;
                        onClose(true);
                        return;
                    }
                }
                if (M.current === "x") {
                    let c = currentIndex;
                    if (m < -50 && currentIndex < imagesCount - 1) {
                        c = currentIndex + 1;
                    } else if (m > 50 && currentIndex > 0) {
                        c = currentIndex - 1;
                    }
                    setIsAnimating(true);
                    y(0);
                    if (c !== currentIndex) {
                        onIndexChange(c);
                    }
                    R.current = window.setTimeout(()=>{
                        R.current = null;
                        setIsAnimating(false);
                    }, 500);
                } else {
                    if (M.current === "y") {
                        ft();
                    }
                }
                M.current = null;
            }
        }
    }, [
        isMobile,
        T,
        currentIndex,
        m,
        P,
        imagesCount,
        ft,
        onIndexChange,
        onClose,
        setIsAnimating,
        mt
    ]);
    const onTouchCancel = q_1(()=>{
        if (isMobile) {
            ct.current = false;
            at.current = false;
            q.current = 0;
            M.current = null;
            $(false);
            y(0);
            v(0);
            _(1);
            setIsAnimating(false);
            if (G.current < 1.1) {
                mt();
            }
        }
    }, [
        isMobile,
        mt,
        setIsAnimating
    ]);
    const freezeInFlight = q_1(()=>{
        const U_current = U.current;
        const c = U_current ?? currentIndex;
        const f = trackRef?.current;
        if (f) {
            const w = getComputedStyle(f).transform;
            if (w && w !== "none") {
                const L = new DOMMatrixReadOnly(w).m41;
                let Z = 0;
                for(let et = 0; et < c; et++){
                    Z += imageSizes[et]?.width || 0;
                }
                y(L + Z);
            }
            const I = f.parentElement;
            if (I) {
                const L = I.getBoundingClientRect();
                S({
                    width: L.width,
                    height: L.height
                });
            }
        }
        if (R.current) {
            clearTimeout(R.current);
            R.current = null;
        }
        if (U_current !== null) {
            onIndexChange(U_current);
            U.current = null;
        }
        setIsAnimating(false);
        X(null);
        return c;
    }, [
        currentIndex,
        imageSizes,
        trackRef,
        onIndexChange,
        setIsAnimating
    ]);
    const unfreeze = q_1(()=>{
        S(null);
        if (m !== 0 || P !== 0 || F !== 1) {
            setIsAnimating(true);
            y(0);
            v(0);
            _(1);
            if (R.current) {
                clearTimeout(R.current);
            }
            R.current = window.setTimeout(()=>{
                R.current = null;
                setIsAnimating(false);
            }, 300);
        }
    }, [
        m,
        P,
        F,
        setIsAnimating
    ]);
    const displaySize = a6(()=>{
        if (E) {
            return E;
        }
        const a = U.current ?? currentIndex;
        const c = imageSizes[a] || {
            width: 600,
            height: 400
        };
        if (isAnimating && pt !== null) {
            const f = imageSizes[pt] || c;
            return {
                width: f.width,
                height: f.height
            };
        }
        if (T && M.current !== "y" && m !== 0) {
            const f = m < 0 ? Math.min(a + 1, imagesCount - 1) : Math.max(a - 1, 0);
            if (f === a) {
                return c;
            }
            const w = imageSizes[f] || c;
            const I = c.width / 2 + w.width / 2;
            const L = Math.min(Math.abs(m) / I, 1);
            return {
                width: c.width + (w.width - c.width) * L,
                height: c.height + (w.height - c.height) * L
            };
        }
        return c;
    }, [
        E,
        imageSizes,
        currentIndex,
        isAnimating,
        pt,
        T,
        m,
        imagesCount
    ]);
    const animateClose = q_1(()=>{
        setIsAnimating(true);
        v(window.innerHeight);
        _(0);
    }, [
        setIsAnimating
    ]);
    return {
        offsetX: m,
        offsetY: P,
        isDragging: T,
        opacity: F,
        wasDragging: B,
        displaySize,
        animateClose,
        freezeInFlight,
        unfreeze,
        zoom: {
            scale: nt,
            panX,
            panY,
            isAnimating: Tt
        },
        desktopHandlers: {
            onMouseDown,
            onMouseMove,
            onMouseUp: Mt,
            onMouseLeave: Mt
        },
        mobileHandlers: {
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onTouchCancel
        }
    };
}
const viewer = "Huxx";
const transitioning = "gsjr";
const windowContainer = "IXyK";
const mobileContainer = "M7u1";
const mobileSlide = "WBGz";
const closing = "Pr9x";
const slide = "eYjL";
const navArea = "G4ow";
const dots = "NPeN";
const backdrop = "CmBV";
const fadeClosing = "RUtY";
const toolbar = "gudj";
const counter = "TFlh";
const windowZoomed = "CNHx";
const track = "fpVS";
const mobileTrack = "jSc4";
const navLeft = "Cvkx";
const navRight = "VJdv";
const dot = "NCf1";
const active = "Mcqy";
const filmstrip = "iigo";
const filmstripLeaving = "HMqy";
const filmshot = "XmWh";
const filmshotActive = "PJkj";
const filmshotImage = "dKa4";
const C = {
    viewer,
    transitioning,
    windowContainer,
    mobileContainer,
    mobileSlide,
    closing,
    slide,
    navArea,
    dots,
    backdrop,
    fadeClosing,
    toolbar,
    counter,
    windowZoomed,
    track,
    mobileTrack,
    navLeft,
    navRight,
    dot,
    active,
    filmstrip,
    filmstripLeaving,
    filmshot,
    filmshotActive,
    filmshotImage
};
function We({ currentIndex, total, onPrev, onNext }) {
    if (total <= 1) {
        return null;
    }
    return u_1(S, {
        children: [
            u_1("button", {
                type: "button",
                "aria-label": "Предыдущее изображение",
                className: `${C.navArea} ${C.navLeft}`,
                onClick: onPrev,
                disabled: currentIndex === 0,
                children: u_1(I_1, {
                    size: 24
                })
            }),
            u_1("button", {
                type: "button",
                "aria-label": "Следующее изображение",
                className: `${C.navArea} ${C.navRight}`,
                onClick: onNext,
                disabled: currentIndex === total - 1,
                children: u_1(I_2, {
                    size: 24
                })
            })
        ]
    });
}
function _e({ total, currentIndex, onDotClick }) {
    if (total <= 1) {
        return null;
    }
    return u_1("div", {
        className: C.dots,
        children: Array.from({
            length: total
        }, (u, g)=>u_1("button", {
                className: `${C.dot} ${g === currentIndex ? C.active : ""}`,
                onClick: ()=>onDotClick(g)
            }, g))
    });
}
function Ue({ images, currentIndex, isClosing, onPick }) {
    if (images.length <= 1) {
        return null;
    }
    return u_1("div", {
        className: `${C.filmstrip} ${isClosing ? C.filmstripLeaving : ""}`,
        children: images.map((g, s)=>u_1("button", {
                type: "button",
                className: `${C.filmshot} ${s === currentIndex ? C.filmshotActive : ""}`,
                onClick: (p)=>{
                    p.stopPropagation();
                    onPick(s);
                },
                "aria-label": `Фотография ${s + 1}`,
                "aria-pressed": s === currentIndex,
                children: u_1("img", {
                    src: g.thumbUrl || g.url,
                    alt: "",
                    className: C.filmshotImage
                })
            }, g.id))
    });
}
function At({ img, isActive, style, dataViewerImage, onFullReady }) {
    const { url, thumbUrl, loadSrc, loadThumb } = img;
    const [z, O] = d_1(null);
    const [m, y] = d_1(null);
    h_1(()=>{
        if (!loadThumb || thumbUrl || m || z) {
            return;
        }
        let X = false;
        loadThumb().then((E)=>{
            if (!X && E) {
                y(E);
            }
        });
        return ()=>{
            X = true;
        };
    }, [
        loadThumb,
        thumbUrl,
        m,
        z
    ]);
    const [P, v] = d_1(()=>{
        if (loadSrc) {
            return false;
        }
        if (!thumbUrl) {
            return true;
        }
        if (!isActive) {
            return false;
        }
        const X = new Image;
        X.src = url;
        return X.complete;
    });
    const [T, $] = d_1(false);
    const F = A_1(null);
    h_1(()=>{
        const X = new AbortController;
        F.current = X;
        return ()=>X.abort();
    }, []);
    h_1(()=>{
        if (!loadSrc || !isActive || z || T) {
            return;
        }
        let X = false;
        loadSrc(F.current?.signal).then((E)=>{
            if (X) {
                return;
            }
            if (!E) {
                $(true);
                return;
            }
            const S = new Image;
            S.src = E;
            const nt = ()=>{
                if (!X) {
                    O(E);
                    v(true);
                }
            };
            if (S.complete) {
                nt();
                return;
            }
            S.onload = ()=>{
                (S.decode ? S.decode() : Promise.resolve()).catch(()=>{}).then(nt);
            };
        });
        return ()=>{
            X = true;
        };
    }, [
        loadSrc,
        isActive,
        z,
        T
    ]);
    h_1(()=>{
        if (loadSrc && !T) {
            return;
        }
        if (!thumbUrl) {
            v(true);
            return;
        }
        if (P || !isActive) {
            return;
        }
        const X = new Image;
        X.src = url;
        if (X.complete) {
            v(true);
            return;
        }
        let E = false;
        const S = ()=>{
            if (!E) {
                v(true);
            }
        };
        X.onload = ()=>{
            (X.decode ? X.decode() : Promise.resolve()).catch(()=>{}).then(S);
        };
        return ()=>{
            E = true;
            X.onload = null;
        };
    }, [
        url,
        thumbUrl,
        isActive,
        P,
        loadSrc,
        T
    ]);
    h_1(()=>{
        isActive && P && onFullReady?.();
    }, [
        isActive,
        P
    ]);
    const _ = a6(()=>bz(img.thumbhash), [
        img.thumbhash
    ]);
    return u_1("img", {
        src: loadSrc && !T ? z ?? thumbUrl ?? m ?? undefined : P || !thumbUrl ? url : thumbUrl,
        alt: "",
        draggable: false,
        decoding: isActive ? "sync" : "async",
        loading: isActive ? "eager" : "lazy",
        ...dataViewerImage ? {
            "data-viewer-image": true
        } : {},
        style: {
            ...style ?? {},
            ...!P && _ ? {
                backgroundImage: `url(${_})`,
                backgroundSize: "100% 100%"
            } : {}
        }
    });
}
const Ve = 2;
function Ze({ images, imageSizes, currentIndex, offsetX, offsetY, isAnimating, displaySize, trackRef, handlers, onImageClick, onActiveFullReady, zoom = null }) {
    const y = a6(()=>{
        let P = 0;
        for(let v = 0; v < currentIndex; v++){
            P += imageSizes[v]?.width || 0;
        }
        return P;
    }, [
        currentIndex,
        imageSizes
    ]);
    return u_1("div", {
        className: `${C.windowContainer} ${zoom ? C.windowZoomed : ""}`,
        style: {
            width: `${displaySize.width}px`,
            height: `${displaySize.height}px`,
            transform: `translateY(${offsetY}px)`,
            transition: isAnimating ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1), transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)" : "none"
        },
        onMouseDown: handlers.onMouseDown,
        onMouseMove: handlers.onMouseMove,
        onMouseUp: handlers.onMouseUp,
        onMouseLeave: handlers.onMouseLeave,
        children: u_1("div", {
            ref: trackRef,
            className: C.track,
            style: {
                transform: `translateX(${-y + offsetX}px)`,
                transition: isAnimating ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)" : "none"
            },
            children: images.map((P, v)=>{
                const T = Math.abs(v - currentIndex) <= Ve;
                const $ = imageSizes[v];
                const F = v === currentIndex;
                return u_1("div", {
                    className: C.slide,
                    onClick: onImageClick,
                    style: {
                        ...$ ? {
                            width: `${$.width}px`,
                            height: `${$.height}px`
                        } : {},
                        transition: zoom?.isPanning ? "none" : "transform 220ms cubic-bezier(0.32, 0.72, 0, 1)",
                        ...F && zoom ? {
                            transform: `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`,
                            transformOrigin: `${zoom.originX}% ${zoom.originY}%`
                        } : {}
                    },
                    "data-active-slide": F ? "" : undefined,
                    "data-slide-index": v,
                    children: T && u_1(At, {
                        img: P,
                        isActive: F,
                        onFullReady: F ? onActiveFullReady : undefined,
                        style: {
                            width: $?.width || "auto",
                            height: $?.height || "auto"
                        }
                    })
                }, P.id);
            })
        })
    });
}
const Ge = 2;
function qe({ images, imageSizes, currentIndex, offsetX, offsetY, isAnimating, isClosing, handlers, onImageClick, onActiveFullReady, zoom }) {
    return u_1("div", {
        className: C.mobileContainer,
        style: {
            transform: `translateY(${offsetY}px)`,
            transition: isAnimating ? `transform ${isClosing ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)` : "none"
        },
        onTouchStart: handlers.onTouchStart,
        onTouchMove: handlers.onTouchMove,
        onTouchEnd: handlers.onTouchEnd,
        onTouchCancel: handlers.onTouchCancel,
        children: u_1("div", {
            className: C.mobileTrack,
            style: {
                transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
                transition: isAnimating ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)" : "none"
            },
            children: images.map((m, y)=>{
                const P = Math.abs(y - currentIndex) <= Ge;
                const v = y === currentIndex;
                const T = imageSizes[y];
                const $ = T ? {
                    width: `${T.width}px`,
                    height: `${T.height}px`
                } : {};
                if (v && zoom.scale !== 1) {
                    $.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;
                    $.transition = zoom.isAnimating ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)" : "none";
                }
                return u_1("div", {
                    className: C.mobileSlide,
                    onClick: (F)=>{
                        F.stopPropagation();
                        onImageClick();
                    },
                    "data-active-slide": v ? "" : undefined,
                    "data-slide-index": y,
                    children: P && u_1(At, {
                        img: m,
                        isActive: v,
                        onFullReady: v ? onActiveFullReady : undefined,
                        dataViewerImage: true,
                        style: $
                    })
                }, m.id);
            })
        })
    });
}
const St = 280;
const easing = "cubic-bezier(0.32, 0.72, 0, 1)";
const Ke = 220;
const Ht = {
    transform: "none",
    clipPath: "inset(0px round 0px)",
    borderRadius: "0px"
};
function je(e, i) {
    if (!e || e === "0px" || i <= 0 || !Number.isFinite(i)) {
        return "0px";
    }
    return e.replace(/([\d.]+)px/g, (o, u)=>{
        const g = parseFloat(u) / i;
        if (Number.isFinite(g)) {
            return `${g}px`;
        }
        return "0px";
    });
}
const Bt = 2.5;
const Je = ()=>typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export function ImageViewer({ images, initialIndex, sourceRect = null, resolveSourceRect = null, zoomable = false, thumbs = false, onClose }) {
    const d = A_1(null);
    const k = A_1(false);
    const [disabled, O] = d_1(false);
    b6(()=>{
        const document_activeElement = document.activeElement;
        d.current?.querySelector("[data-viewer-close]")?.focus({
            preventScroll: true
        });
        return ()=>{
            if (document_activeElement instanceof HTMLElement && document_activeElement.isConnected) {
                document_activeElement.focus({
                    preventScroll: true
                });
            }
        };
    }, []);
    const trackRef = A_1(null);
    const y = A_1(null);
    const P = A_1(null);
    const v = A_1(null);
    const current = A_1(Je()).current;
    const [$, F] = d_1(false);
    const [_, pt] = d_1(false);
    const [X, E] = d_1(sourceRect !== null && !current);
    const S = bp();
    const imageSizes = he(images, S);
    const h = me({
        initialIndex,
        total: images.length
    });
    b5();
    const kt = q_1(()=>{
        const d_current = d.current;
        if (d_current) {
            return d_current.querySelector("[data-active-slide] img");
        }
        return null;
    }, []);
    const vt = q_1((t)=>{
        const d_current = d.current;
        if (d_current) {
            return d_current.querySelector(`[data-slide-index="${t}"] img`);
        }
        return null;
    }, []);
    const rt = q_1(()=>{
        const y_current = y.current;
        if (P.current === "open" && y_current && y_current.playState === "running") {
            y_current.finish();
        }
        E(false);
    }, []);
    const onPrev = q_1(()=>{
        rt();
        h.goToPrev();
    }, [
        rt,
        h.goToPrev
    ]);
    const onNext = q_1(()=>{
        rt();
        h.goToNext();
    }, [
        rt,
        h.goToNext
    ]);
    const tt = q_1((t, r)=>{
        if (!r) {
            return null;
        }
        const n = r.getBoundingClientRect();
        if (n.width === 0 || n.height === 0) {
            return null;
        }
        const D = t.hiddenLeft ?? 0;
        const A = t.hiddenTop ?? 0;
        const Q = t.hiddenRight ?? 0;
        const V = t.hiddenBottom ?? 0;
        const a = t.width + D + Q;
        const c = t.height + A + V;
        const f = D / a * n.width;
        const w = A / c * n.height;
        const I = Q / a * n.width;
        const L = V / c * n.height;
        const Z = n.width - f - I;
        const et = n.height - w - L;
        const yt = Math.max(t.width / Z, t.height / et);
        const Wt = t.width / yt;
        const _t = t.height / yt;
        const Xt = Math.max(0, (Z - Wt) / 2);
        const Nt = Math.max(0, (et - _t) / 2);
        const Ct = f + Xt;
        const Lt = w + Nt;
        const Yt = I + Xt;
        const Et = L + Nt;
        const Ut = (Ct + (n.width - Yt)) / 2;
        const Vt = (Lt + (n.height - Et)) / 2;
        const Zt = n.left + n.width / 2;
        const Gt = n.top + n.height / 2;
        const qt = Zt + (Ut - n.width / 2) * yt;
        const Kt = Gt + (Vt - n.height / 2) * yt;
        const jt = t.left + t.width / 2;
        const Jt = t.top + t.height / 2;
        const Qt = jt - qt;
        const te = Jt - Kt;
        const transform = `translate(${Qt}px, ${te}px) scale(${yt})`;
        const It = je(t.borderRadius, yt);
        const clipPath = `inset(${Lt}px ${Yt}px ${Et}px ${Ct}px round ${It})`;
        return {
            transform,
            clipPath,
            borderRadius: It
        };
    }, []);
    const G = q_1((t)=>{
        const r = getComputedStyle(t);
        return {
            transform: r.transform === "none" ? "none" : r.transform,
            clipPath: r.clipPath === "none" ? "inset(0px round 0px)" : r.clipPath,
            borderRadius: `${r.borderTopLeftRadius} ${r.borderTopRightRadius} ${r.borderBottomRightRadius} ${r.borderBottomLeftRadius}`
        };
    }, []);
    const ot = (t, r)=>{
        t.style.transform = r.transform;
        t.style.clipPath = r.clipPath;
        t.style.borderRadius = r.borderRadius;
    };
    const ct = (t)=>{
        t.style.removeProperty("transform");
        t.style.removeProperty("clip-path");
        t.style.removeProperty("border-radius");
    };
    const at = q_1((t, r)=>{
        ot(t, r);
        const n = t.animate([
            r,
            {
                ...Ht
            }
        ], {
            duration: St,
            easing,
            fill: "forwards"
        });
        y.current = n;
        P.current = "open";
        v.current = t;
        n.addEventListener("finish", ()=>{
            ct(t);
            n.cancel();
            if (y.current === n) {
                y.current = null;
                P.current = null;
            }
            E(false);
        });
        n.addEventListener("cancel", ()=>E(false), {
            once: true
        });
    }, []);
    const gt = q_1((t, r, n)=>{
        ot(t, r);
        const D = t.animate([
            r,
            {
                transform: n.transform,
                clipPath: n.clipPath,
                borderRadius: n.borderRadius
            }
        ], {
            duration: St,
            easing,
            fill: "forwards"
        });
        y.current = D;
        P.current = "close";
        v.current = t;
        D.addEventListener("finish", ()=>onClose());
    }, [
        onClose
    ]);
    const q = q_1((t)=>{
        if (resolveSourceRect) {
            return resolveSourceRect(t);
        }
        if (t === initialIndex) {
            return sourceRect;
        }
        return null;
    }, [
        resolveSourceRect,
        initialIndex,
        sourceRect
    ]);
    const st = q_1((t = false)=>{
        if (current) {
            onClose();
            return;
        }
        const y_current = y.current;
        const v_current = v.current;
        if (y_current && y_current.playState === "running" && v_current) {
            const Q = P.current === "open";
            const V = G(v_current);
            y_current.cancel();
            ct(v_current);
            y.current = null;
            P.current = null;
            if (Q) {
                const a = N.freezeInFlight();
                const c = q(a);
                const f = c ? tt(c, v_current) : null;
                F(true);
                if (f) {
                    gt(v_current, V, f);
                } else {
                    ot(v_current, V);
                    pt(true);
                    setTimeout(onClose, St);
                }
            } else {
                N.unfreeze();
                F(false);
                E(true);
                at(v_current, V);
            }
            return;
        }
        if ($) {
            return;
        }
        const D = N.freezeInFlight();
        const A = q(D);
        if (t && S && !A) {
            N.animateClose();
            setTimeout(onClose, 150);
            return;
        }
        F(true);
        if (A) {
            const Q = vt(D);
            const V = tt(A, Q);
            if (V && Q) {
                gt(Q, {
                    ...Ht
                }, V);
                return;
            }
        }
        pt(true);
        setTimeout(onClose, St);
    }, [
        $,
        q,
        h.currentIndex,
        G,
        tt,
        at,
        gt,
        vt,
        S,
        onClose,
        current
    ]);
    const N = we({
        currentIndex: h.currentIndex,
        imagesCount: images.length,
        imageSizes,
        isMobile: S,
        isAnimating: h.isAnimating,
        setIsAnimating: h.setIsAnimating,
        cancelAnimation: h.cancelAnimation,
        onIndexChange: h.goToIndex,
        onClose: st,
        trackRef,
        onDragStart: rt
    });
    const [H, K] = d_1(null);
    const j = A_1({
        x: 0,
        y: 0,
        panX: 0,
        panY: 0
    });
    const ut = A_1(false);
    const J = A_1(false);
    const M = A_1(null);
    const B = A_1(null);
    const R = q_1((t = false)=>{
        if (B.current === null) {
            if (H && !S && !current) {
                ut.current = false;
                K(null);
                B.current = window.setTimeout(()=>{
                    B.current = null;
                    st(t);
                }, Ke);
                return;
            }
            st(t);
        }
    }, [
        st,
        S,
        current,
        H
    ]);
    h_1(()=>()=>{
            if (B.current !== null) {
                window.clearTimeout(B.current);
            }
        }, []);
    const U = q_1(()=>{
        if (!$) {
            R(true);
        }
    }, [
        $,
        R
    ]);
    pe({
        onClose: U,
        onPrev,
        onNext
    });
    h_1(()=>{
        const t = [
            images[h.currentIndex - 1],
            images[h.currentIndex + 1],
            images[h.currentIndex - 2],
            images[h.currentIndex + 2]
        ];
        for (const r of t){
            if (!r || r.loadSrc && !r.thumbUrl) {
                continue;
            }
            const n = new Image;
            n.decoding = "async";
            n.src = r.thumbUrl || r.url;
        }
    }, [
        images,
        h.currentIndex
    ]);
    const [wt, bt] = d_1(-1);
    const onActiveFullReady = q_1(()=>{
        bt(h.currentIndex);
    }, [
        h.currentIndex
    ]);
    const mt = A_1(null);
    h_1(()=>{
        const t = new AbortController;
        mt.current = t;
        return ()=>t.abort();
    }, []);
    h_1(()=>{
        if (wt === h.currentIndex) {
            for (const t of [
                images[h.currentIndex - 1],
                images[h.currentIndex + 1]
            ]){
                if (!t) {
                    continue;
                }
                if (t.loadSrc) {
                    t.loadSrc(mt.current?.signal).then((n)=>{
                        if (!n) {
                            return;
                        }
                        const D = new Image;
                        D.decoding = "async";
                        D.src = n;
                    });
                    continue;
                }
                if (!t.thumbUrl) {
                    continue;
                }
                const r = new Image;
                r.decoding = "async";
                r.src = t.url;
            }
        }
    }, [
        wt,
        h.currentIndex,
        images
    ]);
    b6(()=>{
        if (!sourceRect || current) {
            E(false);
            return;
        }
        const t = kt();
        if (!t) {
            E(false);
            return;
        }
        const r = tt(sourceRect, t);
        if (!r) {
            E(false);
            return;
        }
        at(t, {
            transform: r.transform,
            clipPath: r.clipPath,
            borderRadius: r.borderRadius
        });
        return ()=>{
            y.current?.cancel();
        };
    }, []);
    h_1(()=>{
        K(null);
    }, [
        h.currentIndex
    ]);
    const it = q_1((t, r, n)=>{
        const D = r === "x" ? n.width : n.height;
        const A = (r === "x" ? n.originX : n.originY) / 100;
        const Q = D * A * (n.scale - 1);
        const V = D * (1 - A) * (n.scale - 1);
        return Math.max(-V, Math.min(Q, t));
    }, []);
    const dt = q_1((t, r, n)=>{
        const D = it(t, r, n);
        const A = t - D;
        if (A === 0) {
            return t;
        }
        return D + Math.sign(A) * Math.min(72, Math.abs(A) * 0.18);
    }, [
        it
    ]);
    const ft = q_1((t)=>{
        if (!ut.current || S) {
            return;
        }
        const r = t.clientX - j.current.x;
        const n = t.clientY - j.current.y;
        if (Math.abs(r) > 4 || Math.abs(n) > 4) {
            J.current = true;
        }
        K((D)=>D && {
                ...D,
                panX: dt(j.current.panX + r, "x", D),
                panY: dt(j.current.panY + n, "y", D)
            });
        t.preventDefault();
    }, [
        dt,
        S
    ]);
    const ht = q_1(()=>{
        if (ut.current) {
            ut.current = false;
            K((t)=>t && {
                    ...t,
                    panX: it(t.panX, "x", t),
                    panY: it(t.panY, "y", t),
                    isPanning: false
                });
            if (J.current) {
                if (M.current !== null) {
                    window.clearTimeout(M.current);
                }
                M.current = window.setTimeout(()=>{
                    J.current = false;
                    M.current = null;
                }, 0);
            }
        }
    }, [
        it
    ]);
    h_1(()=>(window.addEventListener("mousemove", ft), window.addEventListener("mouseup", ht), window.addEventListener("blur", ht), ()=>{
            window.removeEventListener("mousemove", ft);
            window.removeEventListener("mouseup", ht);
            window.removeEventListener("blur", ht);
            if (M.current !== null) {
                window.clearTimeout(M.current);
            }
        }), [
        ht,
        ft
    ]);
    const handlers = {
        onMouseDown: (t)=>{
            if (!H || S) {
                N.desktopHandlers.onMouseDown(t);
                return;
            }
            if (t.button === 0) {
                ut.current = true;
                J.current = false;
                j.current = {
                    x: t.clientX,
                    y: t.clientY,
                    panX: H.panX,
                    panY: H.panY
                };
                K((r)=>r && {
                        ...r,
                        isPanning: true
                    });
                t.preventDefault();
            }
        },
        onMouseMove: (t)=>{
            if (!H || S) {
                N.desktopHandlers.onMouseMove(t);
                return;
            }
        },
        onMouseUp: ()=>{
            if (!H || S) {
                N.desktopHandlers.onMouseUp();
                return;
            }
            ht();
        },
        onMouseLeave: ()=>{
            if (!H || S) {
                N.desktopHandlers.onMouseLeave();
                return;
            }
        }
    };
    const onClick = q_1((t)=>{
        if (J.current) {
            J.current = false;
            return;
        }
        if (N.wasDragging.current) {
            N.wasDragging.current = false;
            return;
        }
        if (t.target instanceof Element && !t.target.closest('img,button,a,[role="button"]')) {
            R(true);
        }
    }, [
        R
    ]);
    const onImageClick = q_1((t)=>{
        if (J.current) {
            J.current = false;
            return;
        }
        if (N.wasDragging.current) {
            N.wasDragging.current = false;
            return;
        }
        if (zoomable && !S) {
            if (H) {
                K(null);
                return;
            }
            const n = t?.currentTarget?.getBoundingClientRect();
            if (!n || !t) {
                K({
                    scale: Bt,
                    originX: 50,
                    originY: 50,
                    panX: 0,
                    panY: 0,
                    width: n?.width || N.displaySize.width,
                    height: n?.height || N.displaySize.height,
                    isPanning: false
                });
                return;
            }
            K({
                scale: Bt,
                originX: (t.clientX - n.left) / n.width * 100,
                originY: (t.clientY - n.top) / n.height * 100,
                panX: 0,
                panY: 0,
                width: n.width,
                height: n.height,
                isPanning: false
            });
            return;
        }
        st(S);
    }, [
        st,
        S,
        zoomable,
        H,
        N.displaySize
    ]);
    return aB(u_1("div", {
        ref: d,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Просмотр изображений",
        onKeyDown: (t)=>{
            if (t.key !== "Tab") {
                return;
            }
            const r = Array.from(d.current?.querySelectorAll('button:not(:disabled),a[href],[tabindex="0"]') ?? []).filter((D)=>D.getClientRects().length > 0);
            const n = t.shiftKey ? r.at(-1) : r[0];
            if (!t.shiftKey && document.activeElement === r.at(-1) || t.shiftKey && document.activeElement === r[0]) {
                t.preventDefault();
                n?.focus();
            }
        },
        className: `${C.viewer} ${$ ? C.closing : ""} ${_ ? C.fadeClosing : ""} ${X ? C.transitioning : ""} ym-hide-content`,
        style: {
            "--opacity": N.opacity,
            "--opacity-transition": h.isAnimating ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)" : "none"
        },
        onClick,
        children: [
            u_1("div", {
                className: C.backdrop,
                "aria-hidden": true
            }),
            u_1("div", {
                className: C.toolbar,
                children: [
                    u_1("span", {
                        className: C.counter,
                        "aria-live": "polite",
                        children: [
                            h.currentIndex + 1,
                            " из ",
                            images.length
                        ]
                    }),
                    images[h.currentIndex]?.onDownload && u_1("button", {
                        type: "button",
                        "aria-label": "Скачать изображение",
                        disabled,
                        onClick: async (t)=>{
                            t.stopPropagation();
                            if (k.current) {
                                return;
                            }
                            const r = images[h.currentIndex]?.onDownload;
                            if (r) {
                                k.current = true;
                                O(true);
                                try {
                                    await r();
                                } finally{
                                    k.current = false;
                                    O(false);
                                }
                            }
                        },
                        children: u_1(I, {
                            size: 22
                        })
                    }),
                    u_1("button", {
                        type: "button",
                        "data-viewer-close": true,
                        "aria-label": "Закрыть изображение",
                        onClick: (t)=>{
                            t.stopPropagation();
                            U();
                        },
                        children: u_1(b8, {
                            size: 24
                        })
                    })
                ]
            }),
            !S && u_1(Ze, {
                images,
                imageSizes,
                currentIndex: h.currentIndex,
                offsetX: N.offsetX,
                offsetY: N.offsetY,
                isAnimating: h.isAnimating,
                displaySize: N.displaySize,
                trackRef,
                handlers,
                onImageClick,
                onActiveFullReady,
                zoom: H
            }),
            S && u_1(qe, {
                images,
                imageSizes,
                currentIndex: h.currentIndex,
                offsetX: N.offsetX,
                offsetY: N.offsetY,
                isAnimating: h.isAnimating,
                isClosing: false,
                handlers: N.mobileHandlers,
                onImageClick,
                onActiveFullReady,
                zoom: N.zoom
            }),
            !S && u_1(We, {
                currentIndex: h.currentIndex,
                total: images.length,
                onPrev,
                onNext
            }),
            thumbs ? u_1(Ue, {
                images,
                currentIndex: h.currentIndex,
                isClosing: $,
                onPick: (t)=>{
                    rt();
                    h.goToIndex(t);
                }
            }) : u_1(_e, {
                total: images.length,
                currentIndex: h.currentIndex,
                onDotClick: (t)=>{
                    rt();
                    h.goToIndex(t);
                }
            })
        ]
    }), document.body);
}
export { ImageViewer as default };
