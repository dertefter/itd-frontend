import { u, d as d_1, A as A_1, q, bC, bD, h, aF, aq, S as S_1, aI, aB } from "./index-B4ySybtH.js";
const Ut = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("path", {
                d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
            }),
            u("path", {
                d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
            })
        ]
    });
const jt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: u("circle", {
            cx: "12",
            cy: "12",
            r: "10"
        })
    });
const Ht = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("path", {
                d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
            }),
            u("path", {
                d: "M22 21H7"
            }),
            u("path", {
                d: "m5 11 9 9"
            })
        ]
    });
const _t = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: u("line", {
            x1: "5",
            y1: "19",
            x2: "19",
            y2: "5"
        })
    });
const Gt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: u("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2"
        })
    });
const qt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("path", {
                d: "M21 7v6h-6"
            }),
            u("path", {
                d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
            })
        ]
    });
const Jt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("path", {
                d: "M3 7v6h6"
            }),
            u("path", {
                d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
            })
        ]
    });
const Vt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }),
            u("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }),
            u("line", {
                x1: "11",
                y1: "8",
                x2: "11",
                y2: "14"
            }),
            u("line", {
                x1: "8",
                y1: "11",
                x2: "14",
                y2: "11"
            })
        ]
    });
const Qt = ({ size = 20 })=>u("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            u("circle", {
                cx: "11",
                cy: "11",
                r: "8"
            }),
            u("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }),
            u("line", {
                x1: "8",
                y1: "11",
                x2: "14",
                y2: "11"
            })
        ]
    });
const j = 0.25;
const nt = 4;
const tt = 0.15;
function tn(o, v, E) {
    const [zoom, T] = d_1(1);
    const [panOffset, Z] = d_1({
        x: 0,
        y: 0
    });
    const B = A_1(1);
    const I = A_1({
        x: 0,
        y: 0
    });
    const isPanningRef = A_1(false);
    const panStartRef = A_1({
        x: 0,
        y: 0
    });
    const pinchRef = A_1(null);
    const b = q((M, p)=>{
        B.current = M;
        I.current = p;
        T(M);
        Z(p);
    }, []);
    const C = q((M, p, P, F, Y)=>{
        const w = (F - P.x) / M;
        const D = (Y - P.y) / M;
        return {
            x: F - w * p,
            y: Y - D * p
        };
    }, []);
    const y = q((M = Infinity)=>{
        const o_current = o.current;
        if (!o_current) {
            return;
        }
        const P = o_current.getBoundingClientRect();
        const F = 32;
        const Y = (P.width - F * 2) / v;
        const w = (P.height - F * 2) / E;
        const D = Math.max(j, Math.min(Y, w, M));
        b(D, {
            x: (P.width - v * D) / 2,
            y: (P.height - E * D) / 2
        });
    }, [
        v,
        E,
        b,
        o
    ]);
    const zoomIn = q(()=>{
        const o_current = o.current;
        if (!o_current) {
            return;
        }
        const p = o_current.getBoundingClientRect();
        const P = p.width / 2;
        const F = p.height / 2;
        const B_current = B.current;
        const w = Math.min(nt, B_current + tt);
        b(w, C(B_current, w, I.current, P, F));
    }, [
        o,
        b,
        C
    ]);
    const zoomOut = q(()=>{
        const o_current = o.current;
        if (!o_current) {
            return;
        }
        const p = o_current.getBoundingClientRect();
        const P = p.width / 2;
        const F = p.height / 2;
        const B_current = B.current;
        const w = Math.max(j, B_current - tt);
        b(w, C(B_current, w, I.current, P, F));
    }, [
        o,
        b,
        C
    ]);
    const zoomReset = q(()=>y(), [
        y
    ]);
    return {
        zoom,
        panOffset,
        zoomRef: B,
        panOffsetRef: I,
        isPanningRef,
        panStartRef,
        pinchRef,
        updateTransform: b,
        zoomToPoint: C,
        fitAndCenter: y,
        zoomIn,
        zoomOut,
        zoomReset,
        MIN_ZOOM: j,
        MAX_ZOOM: nt
    };
}
const nn = 50;
function en(o, v, E, d) {
    const T = A_1([]);
    const k = A_1(-1);
    const [Z, B] = d_1({
        index: -1,
        length: 0
    });
    const saveToHistory = q(()=>{
        const v_current = v.current;
        const o_current = o.current;
        if (!v_current || !o_current) {
            return;
        }
        const a = T.current.slice(0, k.current + 1);
        a.push({
            image: v_current.getImageData(0, 0, o_current.width, o_current.height),
            extra: d?.current
        });
        if (a.length > nn) {
            a.shift();
        }
        T.current = a;
        k.current = a.length - 1;
        B({
            index: k.current,
            length: a.length
        });
    }, [
        o,
        v,
        d
    ]);
    const S = q((y)=>{
        const m = T.current[y];
        const v_current = v.current;
        if (!(!m || !v_current)) {
            v_current.putImageData(m.image, 0, 0);
            if (d && m.extra !== undefined) {
                d.current = m.extra;
            }
            k.current = y;
            B({
                index: y,
                length: T.current.length
            });
            E.current?.();
        }
    }, [
        v,
        E,
        d
    ]);
    const undo = q(()=>S(k.current - 1), [
        S
    ]);
    const redo = q(()=>S(k.current + 1), [
        S
    ]);
    const restoreCurrent = q(()=>S(k.current), [
        S
    ]);
    const initHistory = q((y, m)=>{
        T.current = [
            {
                image: y.getImageData(0, 0, m.width, m.height),
                extra: d?.current
            }
        ];
        k.current = 0;
        B({
            index: 0,
            length: 1
        });
    }, [
        d
    ]);
    return {
        historyIndex: Z.index,
        canUndo: Z.index > 0,
        canRedo: Z.index < Z.length - 1,
        saveToHistory,
        undo,
        redo,
        initHistory,
        restoreCurrent
    };
}
const modalContent = "WFfj";
const container = "vrUx";
const toolbar = "uAZI";
const toolGroup = "kRBw";
const separator = "mhlb";
const spacer = "ovFu";
const toolButton = "IS9C";
const active = "gHBI";
const sizeButton = "zjI6";
const sizePreview = "WONA";
const colorPalette = "yllC";
const colorButton = "Wtcu";
const colorPicker = "EoDs";
const zoomLabel = "UIEh";
const canvasContainer = "Edih";
const viewport = "vppc";
const actions = "KN9q";
const cancelButton = "Fg48";
const saveButton = "prZ9";
const confirmOverlay = "cRYU";
const confirmDialog = "yXTZ";
const confirmText = "E1pq";
const confirmActions = "UALt";
const confirmCancel = "LR3z";
const confirmClose = "avN8";
const c = {
    modalContent,
    container,
    toolbar,
    toolGroup,
    separator,
    spacer,
    toolButton,
    active,
    sizeButton,
    sizePreview,
    colorPalette,
    colorButton,
    colorPicker,
    zoomLabel,
    canvasContainer,
    viewport,
    actions,
    cancelButton,
    saveButton,
    confirmOverlay,
    confirmDialog,
    confirmText,
    confirmActions,
    confirmCancel,
    confirmClose
};
const Rn = [
    "#000000",
    "#FFFFFF",
    "#FF3B30",
    "#FF9500",
    "#FFCC00",
    "#34C759",
    "#007AFF",
    "#5856D6",
    "#AF52DE",
    "#FF2D55",
    "#8E8E93",
    "#00C7BE"
];
const Dn = [
    2,
    4,
    8,
    12,
    20,
    32
];
const En = bC(({ tool, color, brushSize, zoom, canUndo, canRedo, onToolChange, onColorChange, onBrushSizeChange, onZoomIn, onZoomOut, onZoomReset, onUndo, onRedo, onClear })=>u("div", {
        className: c.toolbar,
        children: [
            u("div", {
                className: c.toolGroup,
                children: [
                    u("button", {
                        className: `${c.toolButton} ${tool === "brush" ? c.active : ""}`,
                        onClick: ()=>onToolChange("brush"),
                        title: "Кисть",
                        children: u(Ut, {})
                    }),
                    u("button", {
                        className: `${c.toolButton} ${tool === "eraser" ? c.active : ""}`,
                        onClick: ()=>onToolChange("eraser"),
                        title: "Ластик",
                        children: u(Ht, {})
                    }),
                    u("button", {
                        className: `${c.toolButton} ${tool === "line" ? c.active : ""}`,
                        onClick: ()=>onToolChange("line"),
                        title: "Линия",
                        children: u(_t, {})
                    }),
                    u("button", {
                        className: `${c.toolButton} ${tool === "rectangle" ? c.active : ""}`,
                        onClick: ()=>onToolChange("rectangle"),
                        title: "Прямоугольник",
                        children: u(Gt, {})
                    }),
                    u("button", {
                        className: `${c.toolButton} ${tool === "circle" ? c.active : ""}`,
                        onClick: ()=>onToolChange("circle"),
                        title: "Круг",
                        children: u(jt, {})
                    })
                ]
            }),
            u("div", {
                className: c.separator
            }),
            u("div", {
                className: c.toolGroup,
                children: Dn.map((a)=>u("button", {
                        className: `${c.sizeButton} ${brushSize === a ? c.active : ""}`,
                        onClick: ()=>onBrushSizeChange(a),
                        title: `${a}px`,
                        children: u("span", {
                            className: c.sizePreview,
                            style: {
                                width: Math.min(a, 20),
                                height: Math.min(a, 20)
                            }
                        })
                    }, a))
            }),
            u("div", {
                className: c.separator
            }),
            u("div", {
                className: c.colorPalette,
                children: [
                    Rn.map((a)=>u("button", {
                            className: `${c.colorButton} ${color === a ? c.active : ""}`,
                            style: {
                                backgroundColor: a
                            },
                            onClick: ()=>onColorChange(a),
                            title: a
                        }, a)),
                    u("input", {
                        type: "color",
                        value: color,
                        onChange: (a)=>onColorChange(a.currentTarget.value),
                        className: c.colorPicker,
                        title: "Свой цвет"
                    })
                ]
            }),
            u("div", {
                className: c.spacer
            }),
            u("div", {
                className: c.toolGroup,
                children: [
                    u("button", {
                        className: c.toolButton,
                        onClick: onZoomOut,
                        disabled: zoom <= j,
                        title: "Уменьшить",
                        children: u(Qt, {})
                    }),
                    u("button", {
                        className: c.zoomLabel,
                        onClick: onZoomReset,
                        title: "Сбросить зум",
                        children: [
                            Math.round(zoom * 100),
                            "%"
                        ]
                    }),
                    u("button", {
                        className: c.toolButton,
                        onClick: onZoomIn,
                        disabled: zoom >= nt,
                        title: "Увеличить",
                        children: u(Vt, {})
                    })
                ]
            }),
            u("div", {
                className: c.separator
            }),
            u("div", {
                className: c.toolGroup,
                children: [
                    u("button", {
                        className: c.toolButton,
                        onClick: onUndo,
                        disabled: !canUndo,
                        title: "Отменить (Ctrl+Z)",
                        children: u(Jt, {})
                    }),
                    u("button", {
                        className: c.toolButton,
                        onClick: onRedo,
                        disabled: !canRedo,
                        title: "Повторить (Ctrl+Y)",
                        children: u(qt, {})
                    }),
                    u("button", {
                        className: c.toolButton,
                        onClick: onClear,
                        title: "Очистить",
                        children: u(bD, {
                            size: 20
                        })
                    })
                ]
            })
        ]
    }));
function Tn(o, v, E, d) {
    if (o.current) {
        o.current = false;
        v.current = null;
        E.current = null;
        d();
    }
}
const In = {
    post: {
        width: 800,
        height: 500
    },
    banner: {
        width: 1100,
        height: 380
    }
};
export function DrawingCanvas({ isOpen, onClose, onSave, mode = "post", saveButtonText }) {
    const [k, Z] = d_1(false);
    const [B, I] = d_1(false);
    const S = q(()=>(I(true), false), []);
    const H = q(()=>{
        I(false);
        onClose();
    }, [
        onClose
    ]);
    const $ = q(()=>{
        I(false);
    }, []);
    const b = A_1(null);
    const C = A_1(null);
    const y = A_1(null);
    const m = A_1(null);
    const a = A_1(1);
    const [R, onToolChange] = d_1("brush");
    const [p, onColorChange] = d_1("#000000");
    const [F, onBrushSizeChange] = d_1(4);
    const w = A_1(false);
    const D = A_1([]);
    const K = A_1(null);
    const wt = A_1(0);
    const X = A_1(null);
    const { width, height } = In[mode];
    const { zoom, panOffset, zoomRef, panOffsetRef, isPanningRef, panStartRef, pinchRef, updateTransform, zoomToPoint, fitAndCenter, zoomIn, zoomOut, zoomReset } = tn(C, width, height);
    const ct = q(()=>{
        const b_current = b.current;
        const y_current = y.current;
        if (!b_current || !y_current) {
            return;
        }
        const t = b_current.getContext("2d");
        if (!t) {
            return;
        }
        const a_current = a.current;
        const h = b_current.width / a_current;
        const l = b_current.height / a_current;
        const zoomRef_current = zoomRef.current;
        const panOffsetRef_current = panOffsetRef.current;
        t.save();
        t.setTransform(a_current, 0, 0, a_current, 0, 0);
        t.clearRect(0, 0, h, l);
        t.translate(panOffsetRef_current.x, panOffsetRef_current.y);
        t.scale(zoomRef_current, zoomRef_current);
        t.shadowColor = "rgba(0, 0, 0, 0.15)";
        t.shadowBlur = 20 / zoomRef_current;
        t.shadowOffsetX = 0;
        t.shadowOffsetY = 4 / zoomRef_current;
        t.fillStyle = "#FFFFFF";
        t.fillRect(0, 0, width, height);
        t.shadowColor = "transparent";
        t.shadowBlur = 0;
        t.shadowOffsetY = 0;
        t.imageSmoothingEnabled = zoomRef_current < 2;
        t.drawImage(y_current, 0, 0, width, height);
        t.imageSmoothingEnabled = true;
        const X_current = X.current;
        if (X_current) {
            t.strokeStyle = X_current.color;
            t.lineWidth = X_current.lineWidth;
            t.lineCap = "round";
            t.lineJoin = "round";
            t.beginPath();
            if (X_current.tool === "line") {
                t.moveTo(X_current.start.x, X_current.start.y);
                t.lineTo(X_current.current.x, X_current.current.y);
            } else if (X_current.tool === "rectangle") {
                t.rect(X_current.start.x, X_current.start.y, X_current.current.x - X_current.start.x, X_current.current.y - X_current.start.y);
            } else if (X_current.tool === "circle") {
                const J = Math.hypot(X_current.current.x - X_current.start.x, X_current.current.y - X_current.start.y);
                t.arc(X_current.start.x, X_current.start.y, J, 0, Math.PI * 2);
            }
            t.stroke();
        }
        t.restore();
    }, [
        width,
        height
    ]);
    const G = A_1(ct);
    G.current = ct;
    const { saveToHistory, undo, redo, canUndo, canRedo, initHistory, restoreCurrent } = en(y, m, G, D);
    const bt = fitAndCenter;
    h(()=>{
        if (!isOpen || !b.current || !C.current) {
            return;
        }
        const b_current = b.current;
        const C_current = C.current;
        const t = window.devicePixelRatio || 1;
        a.current = t;
        const s = C_current.getBoundingClientRect();
        b_current.width = s.width * t;
        b_current.height = s.height * t;
        const h = document.createElement("canvas");
        h.width = width * t;
        h.height = height * t;
        const l = h.getContext("2d", {
            willReadFrequently: true
        });
        if (!l) {
            return;
        }
        l.scale(t, t);
        l.fillStyle = "#FFFFFF";
        l.fillRect(0, 0, width, height);
        y.current = h;
        m.current = l;
        D.current = [];
        K.current = null;
        w.current = false;
        initHistory(l, h);
        let u = true;
        const g = new ResizeObserver((J)=>{
            for (const ft of J){
                const { width: q, height: V } = ft.contentRect;
                if (!(q === 0 || V === 0)) {
                    b_current.width = q * a.current;
                    b_current.height = V * a.current;
                    if (u) {
                        const mt = (q - 64) / width;
                        const pt = (V - 64) / height;
                        const et = Math.max(j, Math.min(mt, pt));
                        updateTransform(et, {
                            x: (q - width * et) / 2,
                            y: (V - height * et) / 2
                        });
                    }
                    G.current();
                }
            }
        });
        g.observe(C_current);
        const i = setTimeout(()=>{
            u = false;
        }, 500);
        return ()=>{
            clearTimeout(i);
            g.disconnect();
            y.current = null;
            m.current = null;
        };
    }, [
        isOpen,
        width,
        height
    ]);
    h(()=>{
        ct();
    }, [
        zoom,
        panOffset,
        ct
    ]);
    const lt = q((n)=>{
        const b_current = b.current;
        if (!b_current) {
            return {
                x: 0,
                y: 0
            };
        }
        const t = b_current.getBoundingClientRect();
        let s;
        let h;
        if ("touches" in n) {
            s = n.touches[0].clientX;
            h = n.touches[0].clientY;
        } else {
            s = n.clientX;
            h = n.clientY;
        }
        const l = (s - t.left - panOffsetRef.current.x) / zoomRef.current;
        const u = (h - t.top - panOffsetRef.current.y) / zoomRef.current;
        if (mode === "banner") {
            return {
                x: Math.round(Math.max(-2 * width, Math.min(3 * width, l)) * 100) / 100,
                y: Math.round(Math.max(-2 * height, Math.min(3 * height, u)) * 100) / 100
            };
        }
        return {
            x: l,
            y: u
        };
    }, [
        width,
        height,
        mode
    ]);
    const Bt = q((n)=>{
        if ("button" in n && n.button !== 0 || "touches" in n && n.touches.length > 1) {
            return;
        }
        n.preventDefault();
        const m_current = m.current;
        if (!m_current) {
            return;
        }
        const t = lt(n);
        if (mode === "banner" && D.current.length >= 2000) {
            aF.error("Рисунок слишком сложный. Упростите его перед сохранением");
            return;
        }
        if (mode === "banner") {
            wt.current = D.current.reduce((s, h)=>s + (h.tool === "clear" ? 0 : h.points.length), 0);
            K.current = {
                tool: R,
                color: p,
                width: F,
                points: [
                    [
                        t.x,
                        t.y
                    ]
                ]
            };
        }
        w.current = true;
        if (R === "brush" || R === "eraser") {
            m_current.beginPath();
            m_current.moveTo(t.x, t.y);
            m_current.lineCap = "round";
            m_current.lineJoin = "round";
            m_current.lineWidth = F;
            m_current.strokeStyle = R === "eraser" ? "#FFFFFF" : p;
            m_current.lineTo(t.x, t.y);
            m_current.stroke();
        } else {
            X.current = {
                start: t,
                current: t,
                tool: R,
                color: p,
                lineWidth: F
            };
        }
    }, [
        R,
        p,
        F,
        lt,
        mode
    ]);
    const vt = q((n)=>{
        if (!w.current || "touches" in n && n.touches.length > 1) {
            return;
        }
        n.preventDefault();
        const r = lt(n);
        const K_current = K.current;
        if (K_current) {
            const s = [
                r.x,
                r.y
            ];
            if (R === "brush" || R === "eraser") {
                K_current.points.push(s);
            } else {
                K_current.points = [
                    K_current.points[0],
                    s
                ];
            }
            if (mode === "banner" && (K_current.points.length > 4096 || wt.current + K_current.points.length > 60000)) {
                w.current = false;
                X.current = null;
                K.current = null;
                restoreCurrent();
                aF.error("Штрих слишком сложный и не сохранён. Нарисуйте его несколькими частями");
                return;
            }
        }
        if (R === "brush" || R === "eraser") {
            const s = m.current;
            if (!s) {
                return;
            }
            s.lineTo(r.x, r.y);
            s.stroke();
            G.current();
        } else {
            if (X.current) {
                X.current = {
                    ...X.current,
                    current: r
                };
                G.current();
            }
        }
    }, [
        R,
        lt,
        mode,
        restoreCurrent
    ]);
    const at = q(()=>{
        if (!w.current) {
            return;
        }
        w.current = false;
        const X_current = X.current;
        if (X_current) {
            const t = m.current;
            if (t) {
                t.strokeStyle = X_current.color;
                t.lineWidth = X_current.lineWidth;
                t.lineCap = "round";
                t.lineJoin = "round";
                t.beginPath();
                if (X_current.tool === "line") {
                    t.moveTo(X_current.start.x, X_current.start.y);
                    t.lineTo(X_current.current.x, X_current.current.y);
                } else if (X_current.tool === "rectangle") {
                    t.rect(X_current.start.x, X_current.start.y, X_current.current.x - X_current.start.x, X_current.current.y - X_current.start.y);
                } else if (X_current.tool === "circle") {
                    const s = Math.hypot(X_current.current.x - X_current.start.x, X_current.current.y - X_current.start.y);
                    t.arc(X_current.start.x, X_current.start.y, s, 0, Math.PI * 2);
                }
                t.stroke();
            }
            X.current = null;
        }
        const K_current = K.current;
        if (K_current) {
            if (![
                "brush",
                "eraser"
            ].includes(K_current.tool) && K_current.points.length === 1) {
                K_current.points.push(K_current.points[0]);
            }
            D.current = [
                ...D.current,
                K_current
            ];
        }
        K.current = null;
        saveToHistory();
        G.current();
    }, [
        saveToHistory
    ]);
    const Mt = A_1(vt);
    const ut = A_1(at);
    Mt.current = vt;
    ut.current = at;
    const ht = q(()=>{
        Tn(w, K, X, restoreCurrent);
    }, [
        restoreCurrent
    ]);
    const gt = q(()=>{
        ht();
        undo();
    }, [
        ht,
        undo
    ]);
    const dt = q(()=>{
        ht();
        redo();
    }, [
        ht,
        redo
    ]);
    const onMouseDown = q((n)=>{
        if (n.button === 1) {
            n.preventDefault();
            isPanningRef.current = true;
            panStartRef.current = {
                x: n.clientX,
                y: n.clientY
            };
        }
    }, []);
    h(()=>{
        if (!isOpen) {
            return;
        }
        const n = (t)=>{
            if (isPanningRef.current) {
                const s = t.clientX - panStartRef.current.x;
                const h = t.clientY - panStartRef.current.y;
                panStartRef.current = {
                    x: t.clientX,
                    y: t.clientY
                };
                const l = panOffsetRef.current;
                updateTransform(zoomRef.current, {
                    x: l.x + s,
                    y: l.y + h
                });
                return;
            }
            Mt.current(t);
        };
        const r = ()=>{
            if (isPanningRef.current) {
                isPanningRef.current = false;
                return;
            }
            ut.current();
        };
        window.addEventListener("mousemove", n);
        window.addEventListener("mouseup", r);
        return ()=>{
            window.removeEventListener("mousemove", n);
            window.removeEventListener("mouseup", r);
        };
    }, [
        isOpen,
        updateTransform
    ]);
    h(()=>{
        if (!isOpen) {
            return;
        }
        const n = (r)=>{
            if ((r.ctrlKey || r.metaKey) && r.key === "z") {
                r.preventDefault();
                if (r.shiftKey) {
                    dt();
                } else {
                    gt();
                }
            }
            if ((r.ctrlKey || r.metaKey) && r.key === "y") {
                r.preventDefault();
                dt();
            }
            if ((r.ctrlKey || r.metaKey) && (r.key === "=" || r.key === "+")) {
                r.preventDefault();
                const t = C.current;
                if (!t) {
                    return;
                }
                const s = t.getBoundingClientRect();
                const h = s.width / 2;
                const l = s.height / 2;
                const u = zoomRef.current;
                const g = Math.min(nt, u + tt);
                updateTransform(g, zoomToPoint(u, g, panOffsetRef.current, h, l));
            }
            if ((r.ctrlKey || r.metaKey) && r.key === "-") {
                r.preventDefault();
                const t = C.current;
                if (!t) {
                    return;
                }
                const s = t.getBoundingClientRect();
                const h = s.width / 2;
                const l = s.height / 2;
                const u = zoomRef.current;
                const g = Math.max(j, u - tt);
                updateTransform(g, zoomToPoint(u, g, panOffsetRef.current, h, l));
            }
            if ((r.ctrlKey || r.metaKey) && r.key === "0") {
                r.preventDefault();
                bt();
            }
        };
        window.addEventListener("keydown", n);
        return ()=>window.removeEventListener("keydown", n);
    }, [
        isOpen,
        gt,
        dt,
        updateTransform,
        zoomToPoint,
        bt
    ]);
    h(()=>{
        if (!isOpen) {
            return;
        }
        const C_current = C.current;
        if (!C_current) {
            return;
        }
        const r = (t)=>{
            t.preventDefault();
            const s = C_current.getBoundingClientRect();
            const h = t.clientX - s.left;
            const l = t.clientY - s.top;
            if (t.ctrlKey || t.metaKey) {
                const u = zoomRef.current;
                const g = t.deltaY > 0 ? -tt : tt;
                const i = Math.min(nt, Math.max(j, u + g));
                if (i === u) {
                    return;
                }
                updateTransform(i, zoomToPoint(u, i, panOffsetRef.current, h, l));
            } else {
                updateTransform(zoomRef.current, {
                    x: panOffsetRef.current.x - t.deltaX,
                    y: panOffsetRef.current.y - t.deltaY
                });
            }
        };
        C_current.addEventListener("wheel", r, {
            passive: false
        });
        return ()=>C_current.removeEventListener("wheel", r);
    }, [
        isOpen,
        updateTransform,
        zoomToPoint
    ]);
    h(()=>{
        if (!isOpen) {
            return;
        }
        const C_current = C.current;
        if (!C_current) {
            return;
        }
        const r = (l, u)=>Math.hypot(u.clientX - l.clientX, u.clientY - l.clientY);
        const t = (l)=>{
            if (l.touches.length === 2) {
                l.preventDefault();
                w.current && (mode === "banner" ? ut.current() : (w.current = false, X.current = null));
                const u = C_current.getBoundingClientRect();
                const g = l.touches[0];
                const i = l.touches[1];
                pinchRef.current = {
                    dist: r(g, i),
                    midX: (g.clientX + i.clientX) / 2 - u.left,
                    midY: (g.clientY + i.clientY) / 2 - u.top
                };
            }
        };
        const s = (l)=>{
            if (l.touches.length === 2 && pinchRef.current) {
                l.preventDefault();
                const u = C_current.getBoundingClientRect();
                const g = l.touches[0];
                const i = l.touches[1];
                const J = r(g, i);
                const ft = (g.clientX + i.clientX) / 2 - u.left;
                const q = (g.clientY + i.clientY) / 2 - u.top;
                const V = J / pinchRef.current.dist;
                const yt = zoomRef.current;
                const mt = Math.min(nt, Math.max(j, yt * V));
                const pt = ft - pinchRef.current.midX;
                const et = q - pinchRef.current.midY;
                const Ft = zoomToPoint(yt, mt, panOffsetRef.current, pinchRef.current.midX, pinchRef.current.midY);
                updateTransform(mt, {
                    x: Ft.x + pt,
                    y: Ft.y + et
                });
                pinchRef.current = {
                    dist: J,
                    midX: ft,
                    midY: q
                };
            }
        };
        const h = (l)=>{
            if (l.touches.length < 2) {
                pinchRef.current = null;
            }
        };
        C_current.addEventListener("touchstart", t, {
            passive: false
        });
        C_current.addEventListener("touchmove", s, {
            passive: false
        });
        C_current.addEventListener("touchend", h);
        C_current.addEventListener("touchcancel", h);
        return ()=>{
            C_current.removeEventListener("touchstart", t);
            C_current.removeEventListener("touchmove", s);
            C_current.removeEventListener("touchend", h);
            C_current.removeEventListener("touchcancel", h);
        };
    }, [
        isOpen,
        updateTransform,
        zoomToPoint,
        mode
    ]);
    const onClear = q(()=>{
        const m_current = m.current;
        if (m_current) {
            m_current.fillStyle = "#FFFFFF";
            m_current.fillRect(0, 0, width, height);
            D.current = [];
            K.current = null;
            X.current = null;
            w.current = false;
            saveToHistory();
            G.current();
        }
    }, [
        width,
        height,
        saveToHistory
    ]);
    const At = async ()=>{
        const y_current = y.current;
        if (!y_current || k) {
            return;
        }
        ut.current();
        const r = y_current.toDataURL("image/png");
        Z(true);
        try {
            await onSave(r, mode === "banner" ? {
                version: 1,
                width,
                height,
                ops: D.current
            } : undefined);
            onClose();
        } catch (t) {
            console.error("Failed to save drawing:", t);
        } finally{
            Z(false);
        }
    };
    if (isOpen) {
        return u(S_1, {
            children: [
                u(aq, {
                    onClose,
                    onBeforeClose: S,
                    showHeader: false,
                    contentClassName: c.modalContent,
                    size: "wide",
                    children: u("div", {
                        className: c.container,
                        children: [
                            u(En, {
                                tool: R,
                                color: p,
                                brushSize: F,
                                zoom,
                                canUndo,
                                canRedo,
                                onToolChange,
                                onColorChange,
                                onBrushSizeChange,
                                onZoomIn: zoomIn,
                                onZoomOut: zoomOut,
                                onZoomReset: zoomReset,
                                onUndo: gt,
                                onRedo: dt,
                                onClear
                            }),
                            u("div", {
                                ref: C,
                                className: c.canvasContainer,
                                onMouseDown,
                                children: u("canvas", {
                                    ref: b,
                                    className: c.viewport,
                                    onMouseDown: Bt,
                                    onTouchStart: Bt,
                                    onTouchMove: vt,
                                    onTouchEnd: at,
                                    onTouchCancel: at
                                })
                            }),
                            u("div", {
                                className: c.actions,
                                children: [
                                    u("button", {
                                        className: c.cancelButton,
                                        onClick: ()=>S(),
                                        disabled: k,
                                        children: "Отмена"
                                    }),
                                    u("button", {
                                        className: c.saveButton,
                                        onClick: At,
                                        disabled: k,
                                        children: k ? u(S_1, {
                                            children: [
                                                u(aI, {}),
                                                "Загрузка..."
                                            ]
                                        }) : saveButtonText || (mode === "banner" ? "Загрузить баннер" : "Добавить рисунок")
                                    })
                                ]
                            })
                        ]
                    })
                }),
                B && aB(u("div", {
                    className: c.confirmOverlay,
                    onClick: $,
                    children: u("div", {
                        className: c.confirmDialog,
                        onClick: (n)=>n.stopPropagation(),
                        children: [
                            u("p", {
                                className: c.confirmText,
                                children: "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены."
                            }),
                            u("div", {
                                className: c.confirmActions,
                                children: [
                                    u("button", {
                                        className: c.confirmCancel,
                                        onClick: $,
                                        children: "Отмена"
                                    }),
                                    u("button", {
                                        className: c.confirmClose,
                                        onClick: H,
                                        children: "Закрыть"
                                    })
                                ]
                            })
                        ]
                    })
                }), document.body)
            ]
        });
    }
    return null;
}
