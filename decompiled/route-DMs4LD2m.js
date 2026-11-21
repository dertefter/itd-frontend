import { u as u_1, d as d_1, A as A_1, a6, bz, h as h_1, b8, bt as bt_1, b6, aB, ck, bD, q as q_1, cl as cl_1, cm as cm_1, au as au_1, az, cn as cn_1, ag, co as co_1, S as S_1, cp as cp_1, $ as $_1, cq, aF, cr as cr_1, cs as cs_1, ct, cu as cu_1, ci as ci_1, cv, cw, cx, cy, cz, cA, ar as ar_1, cB, aV, bu as bu_1, aw, B as B_1, b0, cC, cD, cE, cF, ae, cG, cH, ay, cI, cJ, K as K_1, cK, cL, cM, cN, cO, cP, cQ, cR, b4, cS, cT, bb, cU, aH, cV, cW, cX, cY, cZ, b1, aA, c_, c$, d0, bW, d1, d2, d3, bd as bd_1, bf as bf_1, bg, d4, d5, d6, d7, d8, d9, da as da_1, db, dc as dc_1, dd as dd_1, de, df as df_1, bC, dg, aL, dh as dh_1, di as di_1, dj, dk, dl as dl_1, dm as dm_1, dn as dn_1, dp as dp_1, dq, b9, dr as dr_1, ds as ds_1, dt as dt_1, du as du_1, dv, dw, aY, aq, dx, b7, dy, dz, dA, bH, dB, bG, dC, dD, dE, dF, dG, dH, ax, U as U_1, bp as bp_1, dI, dJ, dK, dL, dM, dN, c3 } from "./index-B4ySybtH.js";
import { u as u_2, a as a_1 } from "./formatLastSeen-CufG1XeE.js";
import { I } from "./IconCheck-MLNbKLCS.js";
import { s as s_1 } from "./searchApi-BVKXlKf0.js";
import { I as I_1 } from "./IconChevronLeft-5EaueS2w.js";
import { I as I_2 } from "./IconChevronRight-Dq1Aw0fA.js";
import { I as I_3 } from "./IconDownload-BOZrsf2k.js";
import { I as I_4 } from "./IconCheckCircle-1o8Hm2hi.js";
import { I as I_5 } from "./IconChevronDown-zXZ2fiWV.js";
import { I as I_6 } from "./IconStop-CTwPjW8f.js";
import { MAX_FILE_SIZE } from "./messengerMediaApi-CdFHD6Y6.js";
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
    "assets/index-9foMZ2v1.js",
    "assets/index-B4ySybtH.js",
    "assets/index-B78tJsLI.css",
    "assets/index-BPWr9vqd.css",
    "assets/index-BkCPVE8D.js",
    "assets/index-Bh1rLuyb.css",
    "assets/index-Clij3ZzC.js",
    "assets/IconCheckCircle-1o8Hm2hi.js",
    "assets/index-BlxRSroZ.css"
]))=>i.map((i)=>d[i]);
const bs = ({ size = 20 })=>u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            u_1("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M16 9a5 5 0 0 1 .95 2.293M19.364 5.636a9 9 0 0 1 1.889 9.96M2 2l20 20"
            }),
            u_1("path", {
                fill: "currentColor",
                d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
            }),
            u_1("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11M9.828 4.172A.686.686 0 0 1 11 4.657v.686"
            })
        ]
    });
const Ki = ({ size = 20 })=>u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        fill: "none",
        viewBox: "0 0 24 24",
        children: [
            u_1("path", {
                fill: "currentColor",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M11 4.702a.706.706 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
            }),
            u_1("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M16 9a5 5 0 0 1 0 6M19.364 18.364a9 9 0 0 0 0-12.728"
            })
        ]
    });
const Xi = ({ size = 10, flipped = false })=>{
    const width = size * 8 / 10;
    return u_1("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width,
        height: size,
        viewBox: "0 0 8 10",
        fill: "none",
        style: flipped ? {
            transform: "scaleX(-1)"
        } : undefined,
        children: u_1("path", {
            fill: "currentColor",
            d: "M0 10h8V0c-.083 6.101-3 8-8 10"
        })
    });
};
const Yi = "PCPj";
const img = "ClcA";
const imgLoaded = "J54n";
const overlay = "wooG";
const btn = "Hn50";
const to = "Jfvw";
const no = "uAEG";
const ringSpin = "MFyO";
const cross = "Qnm0";
const bt = {
    wrap: Yi,
    img,
    imgLoaded,
    overlay,
    btn,
    progress: to,
    ring: no,
    ringSpin,
    cross
};
function sr({ src, thumbhash, alt = "", className, uploadProgress, onCancel, onClick, refreshSrc, pending }) {
    const [c, d] = d_1(false);
    const [f, l] = d_1(false);
    const [m, g] = d_1(null);
    const [p, S] = d_1(false);
    const M = A_1(false);
    const y = a6(()=>bz(thumbhash), [
        thumbhash
    ]);
    const P = A_1(null);
    const N = A_1(src);
    h_1(()=>{
        if (N.current !== src) {
            d(false);
            l(false);
            g(null);
            S(false);
            M.current = false;
            N.current = src;
        }
    }, [
        src
    ]);
    const x = m ?? src;
    h_1(()=>{
        const P_current = P.current;
        !P_current || !x || P_current.complete && P_current.naturalWidth > 0 && d(true);
    }, [
        x
    ]);
    const k = !!y && !c;
    const $ = typeof uploadProgress === "number";
    const O = !$ && !c && !f && !p && (!!x || !!pending);
    const F = !$ && (f || p) && !c;
    const onCancel_1 = ()=>{
        l(true);
        onCancel?.();
    };
    const Y = ()=>{
        l(false);
        d(false);
        S(false);
        M.current = false;
        g(null);
    };
    const Q = ()=>{
        if (refreshSrc && !M.current) {
            M.current = true;
            refreshSrc().then((R)=>{
                if (R && R !== x) {
                    g(R);
                } else {
                    S(true);
                }
            }, ()=>S(true));
            return;
        }
        S(true);
    };
    const C = ()=>{
        if (F) {
            Y();
        } else {
            onClick?.();
        }
    };
    return u_1("div", {
        className: `${bt.wrap} ${className ?? ""}`,
        onClick: C,
        style: k ? {
            backgroundImage: `url(${y})`
        } : undefined,
        children: [
            x && !f && !p && u_1("img", {
                ref: P,
                src: x,
                alt,
                loading: "lazy",
                draggable: false,
                className: `${bt.img} ${c ? bt.imgLoaded : ""}`,
                onLoad: ()=>d(true),
                onError: Q
            }),
            $ && u_1(Er, {
                progress: uploadProgress,
                onCancel: onCancel_1
            }),
            O && u_1(Er, {
                progress: undefined,
                onCancel: onCancel_1
            }),
            F && u_1(io, {
                onRetry: Y
            })
        ]
    });
}
const Gt = 40;
const On = 16;
const strokeWidth = 4;
const on = 2 * Math.PI * On;
const zt = Gt / 2;
function io({ onRetry }) {
    return u_1("div", {
        className: bt.overlay,
        children: u_1("button", {
            type: "button",
            className: bt.btn,
            onClick: (n)=>{
                n.stopPropagation();
                onRetry();
            },
            "aria-label": "Скачать",
            children: u_1("span", {
                className: bt.cross,
                children: u_1(oo, {})
            })
        })
    });
}
function oo() {
    return u_1("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: u_1("path", {
            d: "M12 4v12m0 0l-5-5m5 5l5-5M5 20h14",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function Er({ progress, onCancel }) {
    const r = typeof progress === "number";
    const s = r ? Math.max(0, Math.min(1, progress)) : 0;
    const o = on * (1 - s);
    return u_1("div", {
        className: bt.overlay,
        children: [
            u_1("button", {
                type: "button",
                className: bt.btn,
                onClick: (u)=>{
                    u.stopPropagation();
                    onCancel?.();
                },
                "aria-label": "Отменить",
                children: [
                    u_1("svg", {
                        className: `${bt.ring} ${r ? "" : bt.ringSpin}`,
                        width: Gt,
                        height: Gt,
                        viewBox: `0 0 ${Gt} ${Gt}`,
                        "aria-hidden": "true",
                        children: [
                            u_1("circle", {
                                cx: zt,
                                cy: zt,
                                r: On,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.25)",
                                strokeWidth
                            }),
                            u_1("circle", {
                                cx: zt,
                                cy: zt,
                                r: On,
                                fill: "none",
                                stroke: "#fff",
                                strokeWidth,
                                strokeLinecap: "round",
                                strokeDasharray: r ? on : `${on * 0.25} ${on}`,
                                strokeDashoffset: r ? o : 0,
                                transform: `rotate(-90 ${zt} ${zt})`
                            })
                        ]
                    }),
                    u_1("span", {
                        className: bt.cross,
                        children: u_1(b8, {
                            size: 12
                        })
                    })
                ]
            }),
            r && u_1("span", {
                className: bt.progress,
                role: "progressbar",
                "aria-label": "Загрузка изображения",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": Math.round(s * 100),
                children: [
                    Math.round(s * 100),
                    "%"
                ]
            })
        ]
    });
}
const ao = "Bv2T";
const dots = "AFLn";
const dot = "gUsc";
const label = "S7MM";
const Wt = {
    wrap: ao,
    dots,
    dot,
    label
};
const ho = {
    typing: "печатает",
    record_voice: "записывает голосовое",
    record_video: "записывает видео",
    upload_photo: "отправляет фото",
    upload_video: "отправляет видео",
    upload_voice: "отправляет голосовое",
    upload_document: "отправляет файл"
};
const ys = ({ chatId, label, dotsOnly })=>{
    const s = bt_1((c)=>c.typingByChat[chatId]);
    const o = s?.expiresAt ?? 0;
    const [, u] = d_1(0);
    h_1(()=>{
        const c = o - Date.now();
        if (c <= 0) {
            return;
        }
        const d = window.setTimeout(()=>u((f)=>f + 1), c + 50);
        return ()=>window.clearTimeout(d);
    }, [
        o
    ]);
    if (Date.now() >= o) {
        return null;
    }
    const i = s?.action ?? "typing";
    const a = s?.progress !== undefined && i.startsWith("upload_") ? ` (${Math.round(s.progress * 100)}%)` : "";
    const h = (label ?? ho[i] ?? "печатает") + a;
    return u_1("span", {
        className: Wt.wrap,
        children: [
            u_1("span", {
                className: Wt.dots,
                "aria-hidden": true,
                children: [
                    u_1("span", {
                        className: Wt.dot
                    }),
                    u_1("span", {
                        className: Wt.dot
                    }),
                    u_1("span", {
                        className: Wt.dot
                    })
                ]
            }),
            !dotsOnly && u_1("span", {
                className: Wt.label,
                children: h
            })
        ]
    });
};
function tn({ src, emoji, name, fallbackClass }) {
    const [o, u] = d_1(null);
    h_1(()=>u(null), [
        src
    ]);
    if (src && src !== o) {
        return u_1("img", {
            src,
            alt: "",
            onError: ()=>u(src)
        });
    }
    return u_1("span", {
        className: fallbackClass,
        children: emoji || name.slice(0, 1).toUpperCase()
    });
}
const fo = "UOQw";
const incoming = "xvCn";
const outgoing = "lHNj";
const menuOpen = "LXjU";
const bubble = "m06m";
const selected = "PNUC";
const selectMark = "x3za";
const meta = "jIFi";
const replyPreviewText = "w2YH";
const searchHit = "ObN9";
const replyIndicator = "FFmH";
const selectMarkVisible = "Fvom";
const selecting = "oKEN";
const bubbleWrap = "Pzm8";
const bubbleFrameless = "GOXE";
const image = "xsPe";
const bubbleSharedPost = "rf1X";
const $o = "Zdg5";
const bubbleIn = "CHhB";
const bubbleCaption = "RlcN";
const group_middle = "SHFu";
const group_last = "pGFv";
const bubbleOut = "MDeV";
const group_solo = "zGFA";
const group_first = "ieXG";
const tail = "ipKh";
const messageLink = "QHRw";
const replyBlock = "zw2E";
const forwardedHeader = "aChY";
const metaOverlay = "Bapc";
const Wo = "oDqL";
const edited = "woZr";
const readStatus = "bCMz";
const readStatusRead = "oWZ0";
const sendingStatus = "skqi";
const sendingSpin = "Am0Z";
const failedStatus = "dM0z";
const Yo = "mtIg";
const video = "zT55";
const videoPreview = "XnHK";
const videoOpen = "MLrm";
const spoiler = "p2YS";
const inlineCode = "WV6K";
const videoDuration = "Br3J";
const videoDownload = "X0Bl";
const videoPreviewFlush = "O7UM";
const videoFlushWrap = "XDaF";
const videoPlayOverlay = "WZxr";
const aa = "A6FT";
const audioMeta = "fdQA";
const audioName = "w0mv";
const audioSize = "Vvnt";
const audioPlayer = "SBzk";
const voice = "KC80";
const voicePlay = "czMt";
const voiceMeta = "c0M8";
const voiceWaveform = "q43K";
const voiceBars = "t0qS";
const voiceBarsFill = "jIKW";
const voiceBar = "ggTI";
const voiceBarActive = "rcu0";
const voiceCaption = "CCkK";
const file = "kmUo";
const fileCircle = "y9L5";
const fileCancelIcon = "cVT2";
const fileBody = "yj4O";
const fileName = "puoS";
const fileStem = "QlBl";
const fileExtension = "lNAL";
const fileSize = "CQy0";
const forwardedLabel = "fSyg";
const replyAccentBar = "cLNu";
const replyContent = "NRWy";
const replyAuthorName = "SJ6Y";
const replyBlockOut = "maky";
const replyBlockIn = "mxMC";
const menuLayer = "f2XI";
const menuPopIn = "bLxo";
const menuPopOut = "tByz";
const reactionFooterMotion = "mXBm";
const reactionFooterEntering = "Av1l";
const reactionFooterClip = "ichJ";
const reactionFooterLeaving = "EYlA";
const reactionFooter = "FOsm";
const bubbleWithReactions = "BUZ3";
const emojiText = "R3FV";
const bubbleEmoji = "F0vk";
const uploadOverlay = "vWmT";
const uploadCancel = "XM9K";
const unavailableText = "CQhx";
const purchaseAction = "oBc7";
const giftNoticePin = "se0m";
const K = {
    row: fo,
    incoming,
    outgoing,
    menuOpen,
    bubble,
    selected,
    selectMark,
    meta,
    replyPreviewText,
    searchHit,
    replyIndicator,
    selectMarkVisible,
    selecting,
    bubbleWrap,
    bubbleFrameless,
    image,
    bubbleSharedPost,
    text: $o,
    bubbleIn,
    bubbleCaption,
    group_middle,
    group_last,
    bubbleOut,
    group_solo,
    group_first,
    tail,
    messageLink,
    replyBlock,
    forwardedHeader,
    metaOverlay,
    time: Wo,
    edited,
    readStatus,
    readStatusRead,
    sendingStatus,
    sendingSpin,
    failedStatus,
    sendFailure: Yo,
    video,
    videoPreview,
    videoOpen,
    spoiler,
    inlineCode,
    videoDuration,
    videoDownload,
    videoPreviewFlush,
    videoFlushWrap,
    videoPlayOverlay,
    audio: aa,
    audioMeta,
    audioName,
    audioSize,
    audioPlayer,
    voice,
    voicePlay,
    voiceMeta,
    voiceWaveform,
    voiceBars,
    voiceBarsFill,
    voiceBar,
    voiceBarActive,
    voiceCaption,
    file,
    fileCircle,
    fileCancelIcon,
    fileBody,
    fileName,
    fileStem,
    fileExtension,
    fileSize,
    forwardedLabel,
    replyAccentBar,
    replyContent,
    replyAuthorName,
    replyBlockOut,
    replyBlockIn,
    menuLayer,
    menuPopIn,
    menuPopOut,
    reactionFooterMotion,
    reactionFooterEntering,
    reactionFooterClip,
    reactionFooterLeaving,
    reactionFooter,
    bubbleWithReactions,
    emojiText,
    bubbleEmoji,
    uploadOverlay,
    uploadCancel,
    unavailableText,
    purchaseAction,
    giftNoticePin
};
const ws = ({ read, decorative = false })=>u_1("span", {
        role: decorative ? undefined : "img",
        "aria-hidden": decorative || undefined,
        "aria-label": decorative ? undefined : read ? "Прочитано" : "Отправлено",
        className: `${K.readStatus} ${read ? K.readStatusRead : ""}`,
        children: read ? u_1("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "9",
            fill: "none",
            children: u_1("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M10 1 4 8 1 5M15 1 9 8l-.5-.5"
            })
        }) : u_1("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "11",
            height: "9",
            fill: "none",
            children: u_1("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M10 1 4 8 1 5"
            })
        })
    });
function Ja(e, n, r, s, o) {
    const a = Math.max(0, r.bottom - 8 - e.bottom - 10);
    const h = Math.max(0, e.top - 10 - r.top - 8);
    const c = Math.max(0, r.bottom - r.top - 16);
    const d = a >= n.height;
    const f = d || h >= n.height;
    const l = f ? d ? a : h : c;
    const m = Math.min(n.height, l);
    const g = f ? d ? e.bottom + 10 : e.top - 10 - m : (o?.y ?? e.top) + 10;
    const top = Math.max(r.top + 8, Math.min(g, r.bottom - 8 - m));
    const S = s === "end" ? e.right - n.width : e.left;
    const left = Math.max(r.left + 8, Math.min(S, r.right - n.width - 8));
    return {
        top,
        left,
        maxHeight: l,
        origin: `${s === "end" ? "right" : "left"} ${f && !d ? "bottom" : "top"}`,
        visible: true
    };
}
const ft = 8;
function ir({ open, interactive = true, point, menuRef, anchorRef, align = "start", onClose }) {
    const [a, h] = d_1(null);
    b6(()=>{
        if (!open || !point) {
            h(null);
            return;
        }
        h({
            top: point.y,
            left: point.x,
            visible: false
        });
    }, [
        open,
        point
    ]);
    b6(()=>{
        if (!a || a.visible || !point) {
            return;
        }
        const menuRef_current = menuRef.current;
        if (!menuRef_current) {
            return;
        }
        if (anchorRef?.current) {
            h(Nn(anchorRef.current, menuRef_current, align, point));
            return;
        }
        const { offsetWidth, offsetHeight } = menuRef_current;
        const window_innerWidth = window.innerWidth;
        const m = window.visualViewport?.height ?? window.innerHeight;
        const g = point.x + offsetWidth > window_innerWidth - ft;
        const p = point.y + offsetHeight > m - ft;
        let S = g ? point.x - offsetWidth : point.x;
        let M = p ? point.y - offsetHeight : point.y;
        if (S < ft) {
            S = ft;
        }
        if (M < ft) {
            M = ft;
        }
        h({
            top: M,
            left: S,
            origin: `${g ? "right" : "left"} ${p ? "bottom" : "top"}`,
            visible: true,
            maxHeight: m - ft * 2
        });
    }, [
        a,
        point,
        menuRef,
        anchorRef,
        align
    ]);
    h_1(()=>{
        if (!open) {
            return;
        }
        const c = (f)=>{
            if (!(f.target instanceof Node && menuRef.current?.contains(f.target))) {
                onClose();
            }
        };
        const d = (f)=>{
            if (f.target instanceof Node && menuRef.current?.contains(f.target)) {
                return;
            }
            const l = anchorRef?.current;
            const menuRef_current = menuRef.current;
            if (!l || !l.isConnected || !menuRef_current || !point) {
                onClose();
                return;
            }
            h(Nn(l, menuRef_current, align, point));
        };
        window.addEventListener("scroll", d, true);
        window.addEventListener("resize", d);
        window.addEventListener("wheel", c, {
            capture: true,
            passive: true
        });
        window.addEventListener("touchmove", c, {
            capture: true,
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", d, true);
            window.removeEventListener("resize", d);
            window.removeEventListener("wheel", c, true);
            window.removeEventListener("touchmove", c, true);
        };
    }, [
        open,
        onClose,
        menuRef,
        anchorRef,
        align,
        point
    ]);
    b6(()=>{
        if (!open || !interactive) {
            return;
        }
        const c = (d)=>{
            const d_target = d.target;
            d_target && (menuRef.current && menuRef.current.contains(d_target) || (d.preventDefault(), d.stopPropagation(), d.stopImmediatePropagation(), onClose()));
        };
        document.addEventListener("click", c, true);
        return ()=>{
            document.removeEventListener("click", c, true);
        };
    }, [
        open,
        interactive,
        onClose,
        menuRef
    ]);
    b6(()=>{
        if (!open || !interactive) {
            return;
        }
        const c = (d)=>{
            if (d.key === "Escape") {
                d.preventDefault();
                onClose();
            }
        };
        document.addEventListener("keydown", c);
        return ()=>document.removeEventListener("keydown", c);
    }, [
        open,
        interactive,
        onClose
    ]);
    b6(()=>{
        if (!open || !menuRef.current || !point) {
            return;
        }
        const c = ()=>{
            const menuRef_current = menuRef.current;
            if (!menuRef_current) {
                return;
            }
            if (anchorRef?.current) {
                h(Nn(anchorRef.current, menuRef_current, align, point));
                return;
            }
            const l = window.visualViewport?.height ?? window.innerHeight;
            h((m)=>({
                    ...m,
                    visible: true,
                    maxHeight: l - ft * 2,
                    left: Math.max(ft, Math.min(point.x, window.innerWidth - menuRef_current.offsetWidth - ft)),
                    top: Math.max(ft, Math.min(point.y, l - menuRef_current.offsetHeight - ft))
                }));
        };
        const d = new ResizeObserver(c);
        d.observe(menuRef.current);
        if (anchorRef?.current) {
            d.observe(anchorRef.current);
        }
        window.visualViewport?.addEventListener("resize", c);
        return ()=>{
            d.disconnect();
            window.visualViewport?.removeEventListener("resize", c);
        };
    }, [
        open,
        menuRef,
        point,
        a?.visible,
        anchorRef,
        align
    ]);
    return a;
}
function Nn(e, n, r, s) {
    const window_visualViewport = window.visualViewport;
    const u = window_visualViewport?.offsetLeft ?? 0;
    const i = window_visualViewport?.offsetTop ?? 0;
    const a = {
        left: u,
        top: i,
        right: u + (window_visualViewport?.width ?? window.innerWidth),
        bottom: i + (window_visualViewport?.height ?? window.innerHeight)
    };
    const h = e.closest("[data-message-list]");
    if (h) {
        const c = h.getBoundingClientRect();
        a.left = Math.max(a.left, c.left);
        a.right = Math.min(a.right, c.right);
        a.top = Math.max(a.top, c.top + (parseFloat(getComputedStyle(h).paddingTop) || 0));
        a.bottom = Math.min(a.bottom, c.bottom);
        const d = h.parentElement?.querySelector("[data-chat-composer]");
        if (d) {
            a.bottom = Math.min(a.bottom, d.getBoundingClientRect().top);
        }
        a.top = Math.min(a.top, a.bottom - ft * 2 - 1);
    }
    return Ja(e.getBoundingClientRect(), {
        width: n.offsetWidth,
        height: Math.max(n.offsetHeight, n.scrollHeight)
    }, a, r, s);
}
const menu = "b9B1";
const menuIn = "OxYd";
const menuOut = "UM60";
const tc = "iD22";
const itemDanger = "o0ER";
const ve = {
    menu,
    menuIn,
    menuOut,
    item: tc,
    itemDanger
};
const rc = ({ size = 18 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            u_1("path", {
                d: "M14 4l6 6-9 9H5v-6l9-9z",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            }),
            u_1("path", {
                d: "M11 7l6 6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            })
        ]
    });
const sc = ({ x, y, closing, isPinned, isMuted, isUnread = false, isGroup, readOnly = false, onAction, onClose })=>{
    h_1(()=>{
        const m = (g)=>{
            if (g.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", m);
        return ()=>{
            window.removeEventListener("keydown", m);
        };
    }, [
        onClose
    ]);
    const d = A_1(null);
    const point = a6(()=>({
            x,
            y
        }), [
        x,
        y
    ]);
    const l = ir({
        open: true,
        interactive: !closing,
        point,
        menuRef: d,
        onClose
    });
    h_1(()=>{
        l?.visible && !closing && d.current?.querySelector("button:not(:disabled)")?.focus({
            preventScroll: true
        });
    }, [
        l?.visible,
        closing
    ]);
    return aB(u_1("div", {
        ref: d,
        "data-chat-menu": true,
        role: "menu",
        "aria-label": "Действия с чатом",
        inert: !!closing || !l?.visible,
        "aria-hidden": !!closing || !l?.visible,
        onKeyDown: (m)=>{
            if (m.key === "Escape") {
                m.preventDefault();
                m.stopPropagation();
                onClose();
                return;
            }
            if (![
                "Tab",
                "ArrowDown",
                "ArrowUp",
                "Home",
                "End"
            ].includes(m.key)) {
                return;
            }
            const g = [
                ...m.currentTarget.querySelectorAll("button:not(:disabled)")
            ];
            if (!g.length) {
                return;
            }
            const p = g.indexOf(document.activeElement);
            const S = m.key === "ArrowUp" || m.key === "Tab" && m.shiftKey;
            const M = m.key === "Home" ? 0 : m.key === "End" ? g.length - 1 : (p + (S ? -1 : 1) + g.length) % g.length;
            m.preventDefault();
            m.stopPropagation();
            g[M].focus({
                preventScroll: true
            });
            g[M].scrollIntoView({
                block: "nearest"
            });
        },
        className: `${ve.menu} ${closing ? ve.menuOut : l?.visible ? ve.menuIn : ""} ym-hide-content`,
        style: {
            position: "fixed",
            top: l?.top ?? "auto",
            left: l?.left ?? "auto",
            visibility: l?.visible ? "visible" : "hidden",
            transformOrigin: l?.origin ?? "left top",
            zIndex: 1000,
            margin: 0
        },
        children: [
            !isUnread && u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("markUnread"),
                children: [
                    u_1(I, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Пометить непрочитанным"
                    })
                ]
            }),
            isUnread && u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("markRead"),
                children: [
                    u_1(I, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Пометить прочитанным"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("togglePin"),
                children: [
                    u_1(ck, {
                        size: 18
                    }),
                    u_1("span", {
                        children: isPinned ? "Открепить" : "Закрепить"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("toggleMute"),
                children: [
                    isMuted ? u_1(Ki, {
                        size: 18
                    }) : u_1(bs, {
                        size: 18
                    }),
                    u_1("span", {
                        children: isMuted ? "Включить уведомления" : "Выключить уведомления"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("clearHistory"),
                children: [
                    u_1(rc, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Очистить историю"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: `${ve.item} ${ve.itemDanger}`,
                onClick: ()=>onAction("deleteSelf"),
                children: [
                    u_1(bD, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Удалить у себя"
                    })
                ]
            }),
            !isGroup && !readOnly && u_1("button", {
                role: "menuitem",
                type: "button",
                className: `${ve.item} ${ve.itemDanger}`,
                onClick: ()=>onAction("deleteAll"),
                children: [
                    u_1(bD, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Удалить у всех"
                    })
                ]
            })
        ]
    }), document.body);
};
const ic = 130;
function or({ open, onClosed }) {
    const [closing, s] = d_1(false);
    const o = A_1(null);
    const requestClose = q_1(()=>{
        if (o.current == null) {
            s(true);
            o.current = window.setTimeout(()=>{
                o.current = null;
                onClosed();
            }, ic);
        }
    }, [
        onClosed
    ]);
    const cancelClose = q_1(()=>{
        if (o.current != null) {
            clearTimeout(o.current);
            o.current = null;
        }
        s(false);
    }, []);
    h_1(()=>{
        if (!open) {
            if (o.current != null) {
                clearTimeout(o.current);
                o.current = null;
            }
            s(false);
        }
    }, [
        open
    ]);
    return {
        closing,
        requestClose,
        cancelClose
    };
}
const oc = "qI6Q";
const collapsedOnMobile = "hNeq";
const filters = "iw0y";
const lc = "aW61";
const uc = "LoJu";
const dc = "cK1l";
const newMessage = "jt87";
const fc = "p9DD";
const searchIcon = "wA58";
const searchInput = "mbgu";
const gc = "tKFI";
const vc = "dfeR";
const bc = "GX3p";
const itemActive = "Rdib";
const wc = "r0Ml";
const kc = "TwTi";
const Cc = "LTLh";
const Nc = "Gbjd";
const Sc = "hwK2";
const topRow = "ne1H";
const Ec = "edko";
const nameText = "k4Bh";
const Rc = "wotV";
const Tc = "ui3H";
const bottomRow = "A7am";
const preview = "Zp4a";
const lastMessageStatus = "kLvp";
const Lc = "xnwl";
const Pc = "owdj";
const mutedIcon = "ndTe";
const pinIcon = "wdRL";
const stateBox = "xjNb";
const Fc = "EHVX";
const stateTitle = "yeS3";
const stateHint = "hBlT";
const retryButton = "IsYQ";
const sectionTitle = "VINR";
const clearSearch = "KySb";
const resultHint = "nwT8";
const draftLabel = "GL39";
const messageResults = "l1TC";
const messageResult = "bpXi";
const notificationButton = "jvsh";
const re = {
    list: oc,
    collapsedOnMobile,
    filters,
    header: lc,
    backButton: uc,
    title: dc,
    newMessage,
    searchField: fc,
    searchIcon,
    searchInput,
    empty: gc,
    items: vc,
    item: bc,
    itemActive,
    avatarWrap: wc,
    avatar: kc,
    avatarFallback: Cc,
    onlineDot: Nc,
    content: Sc,
    topRow,
    name: Ec,
    nameText,
    identityName: Rc,
    time: Tc,
    bottomRow,
    preview,
    lastMessageStatus,
    sendFailure: Lc,
    badge: Pc,
    mutedIcon,
    pinIcon,
    stateBox,
    spinner: Fc,
    stateTitle,
    stateHint,
    retryButton,
    sectionTitle,
    clearSearch,
    resultHint,
    draftLabel,
    messageResults,
    messageResult,
    notificationButton
};
const Jt = new Set;
class Xc extends Map {
    set(n, r) {
        if (this.get(n) === r) {
            return this;
        }
        super.set(n, r);
        for (const s of Jt){
            s();
        }
        return this;
    }
    delete(n) {
        const r = super.delete(n);
        if (r) {
            for (const s of Jt){
                s();
            }
        }
        return r;
    }
    clear() {
        super.clear();
        for (const n of Jt){
            n();
        }
    }
}
const Ge = new Xc;
function Yc(e) {
    const [, n] = d_1(0);
    const r = Ge.get(e) ?? "";
    h_1(()=>{
        let s = r;
        const o = ()=>{
            const u = Ge.get(e) ?? "";
            if (u !== s) {
                s = u;
                n((i)=>i + 1);
            }
        };
        Jt.add(o);
        o();
        return ()=>Jt.delete(o);
    }, [
        e
    ]);
    return r;
}
function nn() {
    const e = A_1(null);
    const [visible, r] = d_1(false);
    h_1(()=>{
        if (!e.current || typeof IntersectionObserver === "undefined") {
            r(true);
            return;
        }
        const s = new IntersectionObserver(([o])=>r(o.isIntersecting), {
            rootMargin: "160px 0px"
        });
        s.observe(e.current);
        return ()=>s.disconnect();
    }, []);
    return {
        ref: e,
        visible
    };
}
const Jc = 500;
const Qc = ({ chat, active, onClick })=>{
    const { user, lastMessage, unreadCount, isPinned, isMuted } = chat;
    const h = cl_1(chat);
    const c = Yc(chat.id);
    const { ref, visible } = nn();
    const l = u_2(chat.isGroup || user.deleted ? null : user.id, visible, false);
    h_1(()=>{
        if (!visible || Ge.has(chat.id)) {
            return;
        }
        const B = az();
        let Z = false;
        cm_1.loadDraft(chat.id).then((z)=>{
            if (!Z && au_1(B) && !Ge.has(chat.id)) {
                Ge.set(chat.id, z ?? "");
            }
        });
        return ()=>{
            Z = true;
        };
    }, [
        chat.id,
        visible
    ]);
    const m = bt_1((B)=>B.messagesByChat?.[chat.id]?.some((Z)=>Z._sendStatus === "failed") ?? false);
    const g = bt_1((B)=>B.isAtLiveBottomByChat?.[chat.id] ?? false);
    const [p, S] = d_1(()=>typeof document !== "undefined" && !document.hidden && document.hasFocus());
    h_1(()=>{
        if (!active) {
            return;
        }
        const B = ()=>S(!document.hidden && document.hasFocus());
        B();
        window.addEventListener("focus", B);
        window.addEventListener("blur", B);
        document.addEventListener("visibilitychange", B);
        return ()=>{
            window.removeEventListener("focus", B);
            window.removeEventListener("blur", B);
            document.removeEventListener("visibilitychange", B);
        };
    }, [
        active
    ]);
    const M = active && g && p ? 0 : unreadCount;
    const y = bt_1((B)=>B.typingByChat[chat.id]?.expiresAt ?? 0);
    const [P, N] = d_1(false);
    h_1(()=>{
        const B = y - Date.now();
        N(B > 0);
        if (B <= 0) {
            return;
        }
        const Z = window.setTimeout(()=>N(false), B + 50);
        return ()=>window.clearTimeout(Z);
    }, [
        y
    ]);
    const x = bt_1((B)=>B.togglePinned);
    const k = bt_1((B)=>B.toggleMuted);
    const $ = bt_1((B)=>B.clearChatHistory);
    const O = bt_1((B)=>B.deleteChat);
    const [F, H] = d_1(null);
    const { closing, requestClose, cancelClose } = or({
        open: F !== null,
        onClosed: ()=>H(null)
    });
    const R = A_1(false);
    h_1(()=>{
        R.current && !F && (document.activeElement === document.body || document.activeElement?.closest("[data-chat-menu]")) && ref.current?.focus({
            preventScroll: true
        });
        R.current = !!F;
    }, [
        F
    ]);
    const D = A_1(null);
    const X = A_1(false);
    const I = A_1(false);
    const q = (x_1, y_1)=>{
        cancelClose();
        H({
            x: x_1,
            y: y_1
        });
    };
    const onContextMenu = (B)=>{
        B.preventDefault();
        q(B.clientX, B.clientY);
    };
    const v = (B)=>{
        if (B.pointerType !== "touch") {
            return;
        }
        X.current = false;
        const { clientX, clientY } = B;
        D.current = window.setTimeout(()=>{
            X.current = true;
            q(clientX, clientY);
        }, Jc);
    };
    const U = ()=>{
        if (D.current !== null) {
            window.clearTimeout(D.current);
            D.current = null;
        }
    };
    const oe = (B)=>{
        if (!(B.button !== 0 || B.ctrlKey || B.metaKey || B.shiftKey || B.altKey)) {
            B.preventDefault();
            if (X.current) {
                X.current = false;
                return;
            }
            onClick();
        }
    };
    const de = async (B)=>{
        requestClose();
        if (B === "markUnread") {
            if (I.current) {
                return;
            }
            const Z = az();
            I.current = true;
            try {
                if (active) {
                    await bt_1.getState().setActiveChat(null);
                    $_1("/chats");
                }
                await cq.markUnread(chat.id);
                if (au_1(Z)) {
                    await bt_1.getState().loadChats();
                }
            } catch  {
                if (au_1(Z)) {
                    aF.error("Не удалось отметить чат непрочитанным");
                }
            } finally{
                I.current = false;
            }
        } else if (B === "markRead") {
            if (I.current) {
                return;
            }
            const Z = az();
            I.current = true;
            try {
                if (chat.isRequest) {
                    await cq.acceptRequest(chat.id);
                    await bt_1.getState().loadChats();
                }
                const z = await cq.getMessages(chat.id, {
                    limit: 1,
                    skipErrorToast: true
                });
                if (!au_1(Z)) {
                    return;
                }
                const W = z.messages[0]?.message_id;
                if (W) {
                    await bt_1.getState().markRead(chat.id, W);
                } else {
                    await bt_1.getState().loadChats();
                }
            } catch  {
                if (au_1(Z)) {
                    aF.error("Не удалось отметить чат прочитанным");
                }
            } finally{
                I.current = false;
            }
        } else {
            switch(B){
                case "togglePin":
                    x(chat.id);
                    break;
                case "toggleMute":
                    k(chat.id);
                    break;
                case "clearHistory":
                    if (window.confirm("Очистить историю чата? Сообщения у вас будут удалены.")) {
                        $(chat.id, false);
                    }
                    break;
                case "deleteSelf":
                    if (window.confirm("Удалить чат? Он исчезнет только у вас.")) {
                        O(chat.id, false);
                    }
                    break;
                default:
                    if (B === "deleteAll" && window.confirm(`Удалить чат у обоих? Он исчезнет и у ${user.name}.`)) {
                        O(chat.id, true);
                    }
            }
        }
    };
    return u_1(S_1, {
        children: [
            u_1("a", {
                ref,
                "data-chat-id": chat.id,
                href: `/chats/${encodeURIComponent(chat.id)}`,
                "aria-current": active ? "page" : undefined,
                "aria-haspopup": "menu",
                "aria-expanded": !!F,
                onKeyDown: (B)=>{
                    if (B.key !== "ContextMenu" && !(B.shiftKey && B.key === "F10")) {
                        return;
                    }
                    B.preventDefault();
                    const Z = B.currentTarget.getBoundingClientRect();
                    q(Z.right - 12, Z.top + 12);
                },
                className: `${re.item} ${active ? re.itemActive : ""}`,
                onClick: oe,
                onContextMenu,
                onPointerDown: v,
                onPointerUp: U,
                onPointerCancel: U,
                onPointerLeave: U,
                children: [
                    u_1("div", {
                        className: re.avatarWrap,
                        children: [
                            u_1("div", {
                                className: re.avatar,
                                "aria-hidden": true,
                                children: u_1(tn, {
                                    src: h ? cn_1 : user.avatar,
                                    emoji: h ? undefined : user.avatarEmoji,
                                    name: h ? "ИТД" : user.name,
                                    fallbackClass: re.avatarFallback
                                })
                            }),
                            !h && user.online && u_1("span", {
                                className: re.onlineDot,
                                role: "img",
                                "aria-label": "В сети"
                            })
                        ]
                    }),
                    u_1("div", {
                        className: re.content,
                        children: [
                            u_1("div", {
                                className: re.topRow,
                                children: [
                                    u_1("span", {
                                        className: re.name,
                                        children: [
                                            u_1(ag, {
                                                userId: chat.isGroup || user.deleted ? undefined : user.id,
                                                name: h ? "ИТД" : user.name,
                                                size: "sm",
                                                className: `${re.nameText} ${re.identityName}`,
                                                verified: h || !user.deleted && (l?.verified ?? l?.isVerified ?? user.verified),
                                                pin: user.deleted ? null : l?.pin,
                                                hasNuksta: l?.hasNuksta
                                            }),
                                            isMuted && u_1("span", {
                                                className: re.mutedIcon,
                                                "aria-label": "Уведомления выключены",
                                                children: u_1(bs, {
                                                    size: 14
                                                })
                                            })
                                        ]
                                    }),
                                    lastMessage && u_1("span", {
                                        className: re.time,
                                        children: co_1(lastMessage.createdAt)
                                    })
                                ]
                            }),
                            u_1("div", {
                                className: re.bottomRow,
                                children: [
                                    u_1("span", {
                                        className: re.preview,
                                        children: c.trim() ? u_1(S_1, {
                                            children: [
                                                u_1("span", {
                                                    className: re.draftLabel,
                                                    children: "Черновик: "
                                                }),
                                                c.replace(/\s+/g, " ").trim()
                                            ]
                                        }) : P && !h ? u_1(ys, {
                                            chatId: chat.id
                                        }) : `${lastMessage?.isOutgoing ? "Вы: " : ""}${lastMessage?.text || (lastMessage ? "📎 Вложение" : "Нет сообщений")}`
                                    }),
                                    M && M > 0 ? u_1("span", {
                                        className: re.badge,
                                        role: "img",
                                        "aria-label": `Непрочитанных сообщений: ${M}`,
                                        children: M > 99 ? "99+" : M
                                    }) : isPinned ? u_1("span", {
                                        className: re.pinIcon,
                                        "aria-label": "Закреплён",
                                        children: u_1(ck, {
                                            size: 14
                                        })
                                    }) : null,
                                    m && u_1("span", {
                                        className: re.sendFailure,
                                        role: "img",
                                        "aria-label": "Есть неотправленные сообщения",
                                        title: "Есть неотправленные сообщения",
                                        children: u_1(cp_1, {
                                            size: 18
                                        })
                                    }),
                                    !m && !P && lastMessage?.isOutgoing && !lastMessage.isPending && u_1("span", {
                                        className: re.lastMessageStatus,
                                        role: "img",
                                        "aria-label": lastMessage.isRead ? "Прочитано" : "Отправлено",
                                        children: u_1(ws, {
                                            read: !!lastMessage.isRead,
                                            decorative: true
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            F && u_1(sc, {
                x: F.x,
                y: F.y,
                closing,
                isPinned: !!isPinned,
                isMuted: !!isMuted,
                isUnread: (unreadCount ?? 0) > 0,
                isGroup: !!chat.isGroup,
                readOnly: h,
                onAction: de,
                onClose: requestClose
            })
        ]
    });
};
function Zc() {
    const [e, n] = d_1(cs_1);
    const [r, s] = d_1(false);
    const o = A_1(false);
    h_1(()=>{
        const i = ()=>{
            const d = cs_1();
            n(d);
            if (!d) {
                ct();
            }
        };
        const a = (d)=>{
            if (d.key === cu_1 || d.key === null) {
                i();
            }
        };
        window.addEventListener("focus", i);
        window.addEventListener("storage", a);
        window.addEventListener(cr_1, i);
        document.addEventListener("visibilitychange", i);
        let h = false;
        let c;
        if (navigator.permissions?.query) {
            navigator.permissions.query({
                name: "notifications"
            }).then((d)=>{
                if (!h) {
                    c = d;
                    c.addEventListener("change", i);
                    i();
                }
            }).catch(()=>{});
        }
        return ()=>{
            h = true;
            c?.removeEventListener("change", i);
            window.removeEventListener("focus", i);
            window.removeEventListener("storage", a);
            window.removeEventListener(cr_1, i);
            document.removeEventListener("visibilitychange", i);
        };
    }, []);
    if (typeof Notification === "undefined") {
        return null;
    }
    const u = async ()=>{
        if (!o.current) {
            if (cs_1()) {
                cv(false);
                n(false);
                aF.success("Уведомления браузера выключены");
                return;
            }
            o.current = true;
            s(true);
            try {
                const i = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
                if (i === "granted") {
                    cv(true);
                    n(true);
                    aF.success("Уведомления браузера включены");
                } else {
                    n(false);
                    if (i === "denied") {
                        aF.error("Разрешите уведомления в настройках браузера");
                    }
                }
            } catch  {
                n(false);
                aF.error("Браузер не разрешил включить уведомления");
            } finally{
                o.current = false;
                s(false);
            }
        }
    };
    return u_1("button", {
        type: "button",
        className: re.notificationButton,
        "aria-label": "Уведомления браузера",
        "aria-pressed": e,
        disabled: r,
        title: e ? "Выключить уведомления браузера" : "Включить уведомления браузера",
        onClick: ()=>{
            u();
        },
        children: u_1(ci_1, {
            size: 18
        })
    });
}
const xr = ()=>({
        index: 0,
        before: {},
        done: []
    });
async function el(e, n, r, s, o, u = 5) {
    const i = {
        index: r.index,
        before: {
            ...r.before
        },
        done: [
            ...r.done
        ]
    };
    const a = new Set(i.done);
    const h = [];
    let c = 0;
    if (cw(e.trim()).length < 2) {
        return {
            hits: h,
            next: i,
            scanned: c,
            cancelled: !o(),
            complete: true
        };
    }
    for(let d = 0; d < u && n.some((f)=>!a.has(f)); d++){
        if (!o()) {
            return {
                hits: [],
                next: r,
                scanned: c,
                cancelled: true,
                complete: false
            };
        }
        while(a.has(n[i.index % n.length])){
            i.index++;
        }
        const f = n[i.index++ % n.length];
        const l = i.before[f];
        const m = await s(f, l);
        if (!o()) {
            return {
                hits: [],
                next: r,
                scanned: c,
                cancelled: true,
                complete: false
            };
        }
        if (m.length > 100) {
            throw Error("Слишком большая страница истории");
        }
        c += m.length;
        for (const p of m){
            if (!p.is_deleted && !p.unavailable && cw(p.text ?? "").includes(cw(e.trim()))) {
                h.push({
                    chatId: f,
                    message: {
                        message_id: p.message_id,
                        created_at: p.created_at,
                        sender_id: p.sender_id,
                        text: (cx(p.text, p.entities ?? []) ?? "").slice(0, 240)
                    }
                });
            }
        }
        const g = m.at(-1)?.message_id;
        if (!g) {
            a.add(f);
            i.done.push(f);
        } else {
            if (g === l) {
                throw Error("История не продвигается. Повторите поиск");
            }
            i.before[f] = g;
        }
    }
    return {
        hits: h,
        next: i,
        scanned: c,
        cancelled: false,
        complete: n.every((d)=>a.has(d))
    };
}
function tl({ query, chats }) {
    const [r, s] = d_1([]);
    const [o, u] = d_1(false);
    const [i, a] = d_1(false);
    const [h, c] = d_1("");
    const [d, f] = d_1(0);
    const l = A_1(xr());
    const m = A_1();
    const g = A_1(0);
    const p = A_1(false);
    const S = chats.map((P)=>P.id);
    const M = S.join(",");
    const y = async ()=>{
        if (p.current) {
            return;
        }
        p.current = true;
        u(true);
        c("");
        const g_current = g.current;
        const N = az();
        const x = new AbortController;
        m.current = x;
        const k = ()=>g_current === g.current && au_1(N) && !x.signal.aborted;
        try {
            const $ = await el(query, S, l.current, async (O, before)=>(await cq.getMessages(O, {
                    limit: 100,
                    before,
                    skipErrorToast: true
                }, x.signal)).messages, k);
            if (!k() || $.cancelled) {
                return;
            }
            l.current = $.next;
            a($.complete);
            s((O)=>{
                const F = new Map(O.map((H)=>[
                        `${H.chatId}:${H.message.message_id}`,
                        H
                    ]));
                for (const H of $.hits){
                    F.set(`${H.chatId}:${H.message.message_id}`, H);
                }
                return [
                    ...F.values()
                ].slice(0, 500);
            });
        } catch  {
            if (k()) {
                c("Не удалось продолжить поиск");
            }
        } finally{
            if (k()) {
                p.current = false;
                u(false);
            }
        }
    };
    h_1(()=>{
        g.current++;
        m.current?.abort();
        p.current = false;
        l.current = xr();
        s([]);
        a(false);
        c("");
        u(true);
        const P = setTimeout(()=>{
            y();
        }, 300);
        return ()=>{
            clearTimeout(P);
            g.current++;
            m.current?.abort();
            p.current = false;
        };
    }, [
        query,
        M,
        d
    ]);
    h_1(()=>cy((P)=>{
            if (!(!P.chat_id || !S.includes(P.chat_id) || P.type === "message_reactions")) {
                g.current++;
                m.current?.abort();
                p.current = false;
                u(false);
                s((N)=>N.filter((x)=>x.chatId !== P.chat_id));
                c("Переписка изменилась. Обновите поиск");
            }
        }), [
        M
    ]);
    return u_1("section", {
        "aria-label": "Поиск по сообщениям",
        className: re.messageResults,
        children: [
            u_1("p", {
                className: re.resultHint,
                children: "Поиск по истории всех ваших чатов"
            }),
            r.map((P)=>u_1("button", {
                    type: "button",
                    className: re.messageResult,
                    onClick: ()=>$_1(`/chats/${P.chatId}?message=${P.message.message_id}`, true),
                    children: [
                        u_1("strong", {
                            children: chats.find((N)=>N.id === P.chatId)?.user.name ?? "Чат"
                        }),
                        u_1("span", {
                            children: P.message.text
                        }),
                        u_1("time", {
                            dateTime: P.message.created_at,
                            children: [
                                cz(P.message.created_at),
                                " ",
                                cA(P.message.created_at)
                            ]
                        })
                    ]
                }, `${P.chatId}:${P.message.message_id}`)),
            !r.length && !o && !h && u_1("p", {
                className: re.empty,
                children: "Ничего не найдено"
            }),
            o && u_1("p", {
                role: "status",
                className: re.resultHint,
                children: "Ищем сообщения..."
            }),
            h ? u_1("p", {
                role: "status",
                className: re.resultHint,
                children: [
                    h,
                    " ",
                    u_1("button", {
                        type: "button",
                        className: re.retryButton,
                        onClick: ()=>f((P)=>P + 1),
                        children: "Обновить"
                    })
                ]
            }) : !i && !o && r.length < 500 ? u_1("button", {
                type: "button",
                className: re.retryButton,
                onClick: ()=>{
                    y();
                },
                children: "Искать дальше"
            }) : null,
            r.length >= 500 && u_1("p", {
                role: "status",
                className: re.resultHint,
                children: "Показаны первые 500 сообщений. Уточните запрос"
            })
        ]
    });
}
const nl = ({ chats, activeChatId, onSelect })=>{
    const s = ar_1();
    const o = s?.id;
    const u = bt_1((A)=>A.draftUser);
    const i = bt_1((A)=>A.chatsStatus);
    const a = bt_1((A)=>A.loadChats);
    const [h, c] = d_1("");
    const [d, f] = d_1("people");
    const [l, m] = d_1(false);
    const [g, p] = d_1("all");
    const S = h.trim().replace(/^@/, "");
    const [M, y] = d_1(0);
    const [P, N] = d_1(null);
    const [x, k] = d_1(null);
    const [$, O] = d_1(null);
    const F = A_1("");
    const H = A_1(null);
    const Y = ()=>{
        c("");
        f("people");
        p("all");
        m(true);
        H.current?.focus({
            preventScroll: true
        });
    };
    const Q = !!S;
    h_1(()=>{
        if (!Q || !o || F.current === o) {
            return;
        }
        let A = true;
        const v = az();
        k(null);
        a().then((U)=>{
            if (!(!A || !au_1(v))) {
                if (U) {
                    F.current = o;
                }
                k({
                    owner: o,
                    complete: U
                });
            }
        }).catch(()=>{
            if (A && au_1(v)) {
                k({
                    owner: o,
                    complete: false
                });
            }
        });
        return ()=>{
            A = false;
        };
    }, [
        Q,
        o,
        a,
        M
    ]);
    h_1(()=>{
        if (!S || !o || d === "messages") {
            N(null);
            return;
        }
        let A = false;
        const v = az();
        N({
            owner: o,
            query: S,
            users: [],
            status: "loading"
        });
        const U = window.setTimeout(async ()=>{
            try {
                const oe = await s_1.globalSearch(S.slice(0, 100), 20, 1);
                if (A || !au_1(v)) {
                    return;
                }
                const de = new Set;
                const users = oe.users.filter((Z)=>{
                    const z = Z.userId ?? Z.id;
                    if (!z || z === o || de.has(z)) {
                        return false;
                    }
                    return de.add(z), true;
                });
                N({
                    owner: o,
                    query: S,
                    users,
                    status: "ready"
                });
            } catch  {
                if (!A && au_1(v)) {
                    N({
                        owner: o,
                        query: S,
                        users: [],
                        status: "error"
                    });
                }
            }
        }, 300);
        return ()=>{
            A = true;
            window.clearTimeout(U);
        };
    }, [
        S,
        o,
        a,
        M,
        d
    ]);
    const C = P && P.owner === o && P.query === S ? P : null;
    const R = async (A)=>{
        const v = A.userId ?? A.id;
        if (!v || $) {
            return;
        }
        const U = az();
        const pathname = window.location.pathname;
        const de = ()=>au_1(U) && window.location.pathname === pathname;
        O(v);
        try {
            const B = bt_1.getState;
            let Z = B().chats.find((W)=>W.chat_type === 0 && W.other_user_id === v);
            if (!Z) {
                const W = await B().loadChats();
                if (!de()) {
                    return;
                }
                Z = B().chats.find((ge)=>ge.chat_type === 0 && ge.other_user_id === v);
                if (!Z && !W) {
                    aF.error("Не удалось проверить диалог. Попробуйте ещё раз.");
                    return;
                }
            }
            if (Z) {
                c("");
                m(false);
                onSelect(Z.chat_id);
                return;
            }
            const z = await aw.getProfileByUsername(v, {
                force: true
            });
            if (!de()) {
                return;
            }
            B().startDraft({
                id: v,
                name: z.displayName || A.displayName,
                username: z.username || v,
                ...bu_1(z.avatar),
                verified: z.isVerified || z.verified
            });
            c("");
            m(false);
            $_1(`/chats/new/${v}`);
        } catch  {
            if (de()) {
                aF.error("Не удалось открыть диалог. Попробуйте ещё раз.");
            }
        } finally{
            O(null);
        }
    };
    const D = new Set(cB(chats, g === "requests" ? "all" : g, h).map((A)=>A.id));
    const X = new Set(C?.users.map((A)=>A.userId ?? A.id) ?? []);
    const I = chats.filter((A)=>A.isRequest);
    const q = chats.filter((A)=>(g === "requests" ? A.isRequest : !A.isRequest && (g === "all" || (A.unreadCount ?? 0) > 0)) && (D.has(A.id) || !A.isGroup && X.has(A.user.id)));
    return u_1("div", {
        className: `${re.list} ${activeChatId || u ? re.collapsedOnMobile : ""}`,
        children: [
            u_1("div", {
                className: re.header,
                children: [
                    u_1("button", {
                        type: "button",
                        className: re.backButton,
                        onClick: ()=>$_1("/"),
                        "aria-label": "Назад",
                        children: u_1(I_1, {
                            size: 20
                        })
                    }),
                    u_1("h1", {
                        className: re.title,
                        children: "Чаты"
                    }),
                    u_1(Zc, {}),
                    u_1("button", {
                        type: "button",
                        className: re.newMessage,
                        onClick: Y,
                        "aria-label": "Новое сообщение",
                        title: "Новое сообщение",
                        children: u_1(aV, {
                            size: 20
                        })
                    })
                ]
            }),
            u_1("div", {
                className: re.searchField,
                children: [
                    u_1("svg", {
                        className: re.searchIcon,
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        "aria-hidden": "true",
                        children: u_1("g", {
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: u_1("path", {
                                d: "M7.6 13.2a6 6 0 1 0 0-12 6 6 0 0 0 0 12M12 12l2.3 2.3"
                            })
                        })
                    }),
                    u_1("input", {
                        ref: H,
                        type: "text",
                        role: "searchbox",
                        enterKeyHint: "search",
                        "aria-label": "Поиск чатов и пользователей",
                        maxLength: 100,
                        className: `${re.searchInput} ym-disable-keys`,
                        placeholder: l ? "Имя или @никнейм" : "Поиск",
                        value: h,
                        onInput: (A)=>c(A.currentTarget.value),
                        onKeyDown: (A)=>{
                            if (A.key === "Escape") {
                                A.preventDefault();
                                A.stopPropagation();
                                c("");
                                m(false);
                            }
                        }
                    }),
                    h && u_1("button", {
                        type: "button",
                        className: re.clearSearch,
                        "aria-label": "Очистить поиск чатов",
                        onClick: ()=>{
                            c("");
                            H.current?.focus();
                        },
                        children: "×"
                    })
                ]
            }),
            u_1("div", {
                className: re.filters,
                role: "group",
                "aria-label": "Фильтр чатов",
                children: [
                    u_1("button", {
                        type: "button",
                        "aria-pressed": g === "all",
                        onClick: ()=>p("all"),
                        children: "Все"
                    }),
                    I.length > 0 && u_1("button", {
                        type: "button",
                        "aria-pressed": g === "requests",
                        onClick: ()=>p("requests"),
                        children: [
                            "Запросы ",
                            I.length
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        "aria-pressed": g === "unread",
                        onClick: ()=>p("unread"),
                        children: "Непрочитанные"
                    })
                ]
            }),
            S.length >= 2 && u_1("div", {
                className: re.filters,
                role: "group",
                "aria-label": "Область поиска",
                children: [
                    u_1("button", {
                        type: "button",
                        "aria-pressed": d === "people",
                        onClick: ()=>f("people"),
                        children: "Чаты и люди"
                    }),
                    u_1("button", {
                        type: "button",
                        "aria-pressed": d === "messages",
                        onClick: ()=>f("messages"),
                        children: "Сообщения"
                    })
                ]
            }),
            u_1("div", {
                className: re.items,
                children: S.length >= 2 && d === "messages" ? F.current === o ? u_1(tl, {
                    query: h,
                    chats
                }) : u_1("p", {
                    role: "status",
                    className: re.resultHint,
                    children: [
                        x?.owner === o ? "Не удалось загрузить все чаты" : "Загружаем список чатов...",
                        x?.owner === o && u_1("button", {
                            type: "button",
                            className: re.retryButton,
                            onClick: ()=>y((A)=>A + 1),
                            children: "Повторить"
                        })
                    ]
                }) : u_1(S_1, {
                    children: [
                        S && u_1("h2", {
                            className: re.sectionTitle,
                            children: "Чаты"
                        }),
                        S && x && x.owner === o && !x.complete && u_1("div", {
                            className: re.empty,
                            role: "status",
                            children: [
                                "Не все чаты загружены ",
                                u_1("button", {
                                    type: "button",
                                    className: re.retryButton,
                                    onClick: ()=>y((A)=>A + 1),
                                    children: "Повторить загрузку чатов"
                                })
                            ]
                        }),
                        !S && chats.length === 0 && (i === "loading" || i === "idle") ? u_1("div", {
                            className: re.stateBox,
                            role: "status",
                            children: [
                                u_1("span", {
                                    className: re.spinner,
                                    "aria-label": "Загрузка"
                                }),
                                u_1("span", {
                                    className: re.stateHint,
                                    children: "Загрузка чатов…"
                                })
                            ]
                        }) : !S && chats.length === 0 && i === "error" ? u_1("div", {
                            className: re.stateBox,
                            children: [
                                u_1("p", {
                                    className: re.stateTitle,
                                    children: "Ошибка загрузки чатов"
                                }),
                                u_1("button", {
                                    type: "button",
                                    className: re.retryButton,
                                    onClick: ()=>a(),
                                    children: "Повторить"
                                })
                            ]
                        }) : !S && chats.length === 0 && i === "ready" ? u_1("div", {
                            className: re.stateBox,
                            children: [
                                u_1("p", {
                                    className: re.stateTitle,
                                    children: "Нет сообщений"
                                }),
                                s?.subscription?.isActive !== false && u_1("p", {
                                    className: re.stateHint,
                                    children: "Начните переписку первым"
                                }),
                                u_1("button", {
                                    type: "button",
                                    className: re.retryButton,
                                    onClick: Y,
                                    children: "Новое сообщение"
                                })
                            ]
                        }) : q.length === 0 ? u_1("div", {
                            className: re.empty,
                            children: S ? i === "loading" ? "Поиск по чатам…" : x && x.owner === o && !x.complete ? "В загруженных чатах не найдено" : "Ничего не найдено" : "Всё прочитано"
                        }) : q.map((A)=>u_1(Qc, {
                                chat: A,
                                active: A.id === activeChatId,
                                onClick: ()=>{
                                    c("");
                                    m(false);
                                    onSelect(A.id);
                                }
                            }, A.id)),
                        S && u_1("section", {
                            "aria-label": "Пользователи ИТД",
                            children: [
                                u_1("h2", {
                                    className: re.sectionTitle,
                                    children: "Пользователи"
                                }),
                                !C || C.status === "loading" ? u_1("div", {
                                    className: re.empty,
                                    role: "status",
                                    children: "Поиск пользователей…"
                                }) : C.status === "error" ? u_1("div", {
                                    className: re.empty,
                                    role: "status",
                                    children: [
                                        "Не удалось найти пользователей ",
                                        u_1("button", {
                                            type: "button",
                                            className: re.retryButton,
                                            onClick: ()=>y((A)=>A + 1),
                                            children: "Повторить поиск"
                                        })
                                    ]
                                }) : C.users.length === 0 ? u_1("div", {
                                    className: re.empty,
                                    role: "status",
                                    children: "Пользователи не найдены"
                                }) : u_1(S_1, {
                                    children: [
                                        C.users.map((A)=>{
                                            const v = A.userId ?? A.id;
                                            const U = bu_1(A.avatar);
                                            return u_1("button", {
                                                type: "button",
                                                className: re.item,
                                                disabled: !!$,
                                                onClick: ()=>{
                                                    R(A);
                                                },
                                                "aria-label": `Написать ${A.displayName}`,
                                                children: [
                                                    u_1("span", {
                                                        className: re.avatar,
                                                        children: u_1(tn, {
                                                            src: U.avatar,
                                                            emoji: U.avatarEmoji,
                                                            name: A.displayName,
                                                            fallbackClass: re.avatarFallback
                                                        })
                                                    }),
                                                    u_1("span", {
                                                        className: re.content,
                                                        children: [
                                                            u_1("span", {
                                                                className: re.name,
                                                                children: A.displayName
                                                            }),
                                                            u_1("span", {
                                                                className: re.preview,
                                                                children: A.username ? `@${A.username}` : "Пользователь ИТД"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, v);
                                        }),
                                        u_1("p", {
                                            className: re.resultHint,
                                            children: C.users.length >= 20 ? "Первые 20 результатов. Уточните запрос." : ""
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const window = "J77b";
const hiddenOnMobile = "Qkm1";
const composer = "ywnw";
const systemNotice = "myVf";
const historyError = "W0cM";
const cl = "WNft";
const emptyTitle = "eEXx";
const emptyText = "z3Bs";
const emptyActions = "xfv3";
const selectionBar = "BzWI";
const selectionAction = "uNXs";
const selectionLimit = "fkfS";
const selectionCancel = "Pwk7";
const selectionActionDanger = "iVGj";
const blockNotice = "wRc7";
const dropOverlay = "KhOg";
const dropOverlayBox = "al1S";
const olderHistoryError = "uY70";
const requestNotice = "KIpM";
const emptyArtwork = "aMoZ";
const Le = {
    window,
    hiddenOnMobile,
    composer,
    systemNotice,
    historyError,
    empty: cl,
    emptyTitle,
    emptyText,
    emptyActions,
    selectionBar,
    selectionAction,
    selectionLimit,
    selectionCancel,
    selectionActionDanger,
    blockNotice,
    dropOverlay,
    dropOverlayBox,
    olderHistoryError,
    requestNotice,
    emptyArtwork
};
function Nl({ chatId, peer, onBlocked }) {
    const [s, o] = d_1(false);
    async function u(i) {
        if (s) {
            return;
        }
        const a = az();
        o(true);
        try {
            if (i) {
                await b0.blockUser(peer);
            } else {
                await cq.acceptRequest(chatId);
            }
            if (!au_1(a)) {
                return;
            }
            if (i) {
                onBlocked();
            }
            await bt_1.getState().loadChats();
        } catch  {
            if (au_1(a)) {
                aF.error(i ? "Не удалось заблокировать пользователя" : "Не удалось принять запрос");
            }
        } finally{
            if (au_1(a)) {
                o(false);
            }
        }
    }
    return u_1("div", {
        className: Le.requestNotice,
        role: "region",
        "aria-label": "Запрос на переписку",
        children: [
            u_1("strong", {
                children: "Запрос на переписку"
            }),
            u_1("p", {
                children: "Вы не подписаны на этого человека. Примите запрос, чтобы ответить."
            }),
            u_1("div", {
                children: [
                    u_1(B_1, {
                        size: "sm",
                        loading: s,
                        onClick: ()=>{
                            u(false);
                        },
                        children: "Принять"
                    }),
                    u_1(B_1, {
                        size: "sm",
                        variant: "ghost",
                        disabled: s,
                        onClick: ()=>{
                            u(true);
                        },
                        children: "Заблокировать"
                    })
                ]
            })
        ]
    });
}
const Sl = "n5iD";
const Ml = "dBPe";
const searchActive = "hgL5";
const connectionNotice = "Absz";
const historySearchButton = "nzd1";
const miniPlayer = "YiPi";
const $l = "UEkr";
const Il = "gp8s";
const Al = "qLQ1";
const Ll = "Evwj";
const info = "ChwV";
const nameRow = "bjXd";
const Dl = "QOn1";
const _l = "DrhR";
const Fl = "qRex";
const statusText = "nGYj";
const statusOnline = "EQrQ";
const We = {
    header: Sl,
    backButton: Ml,
    searchActive,
    connectionNotice,
    historySearchButton,
    miniPlayer,
    avatarWrap: $l,
    avatar: Il,
    onlineDot: Al,
    avatarFallback: Ll,
    info,
    nameRow,
    identityName: Dl,
    name: _l,
    status: Fl,
    statusText,
    statusOnline
};
class Hl {
    pages = new Map;
    bytes = 0;
    revision = 0;
    maxPages;
    maxBytes;
    constructor(n = 20, r = 8 * 1024 * 1024){
        this.maxPages = n;
        this.maxBytes = r;
    }
    clear() {
        this.pages.clear();
        this.bytes = 0;
        this.revision++;
    }
    async read(n, r, s) {
        const o = n ?? "";
        const u = this.pages.get(o);
        if (u) {
            return u;
        }
        const revision = this.revision;
        const a = await r();
        if (!s() || this.revision !== revision) {
            return a;
        }
        const byteLength = new TextEncoder().encode(JSON.stringify(a)).byteLength;
        if (this.pages.size < this.maxPages && this.bytes + byteLength <= this.maxBytes) {
            this.pages.set(o, a);
            this.bytes += byteLength;
        }
        return a;
    }
}
const zl = "os9F";
const toolbar = "ld7D";
const Ul = "FsPb";
const cancel = "dpKh";
const input = "HCPx";
const clearButton = "Mugg";
const Kl = "dqZm";
const Xl = "dOYO";
const navigation = "m7IU";
const Jl = "gCQ4";
const arrows = "sBfh";
const resultMeta = "NGcU";
const resultAuthor = "H9wl";
const jumpError = "M6u9";
const up_1 = "FJ3C";
const down = "c0vq";
const Ze = {
    panel: zl,
    toolbar,
    searchField: Ul,
    cancel,
    input,
    clearButton,
    iconButton: Kl,
    more: Xl,
    navigation,
    status: Jl,
    arrows,
    resultMeta,
    resultAuthor,
    jumpError,
    up: up_1,
    down
};
function su({ chatId, onClose, onQueryChange }) {
    const s = ar_1();
    const o = bt_1((J)=>J.chats.find((V)=>V.chat_id === chatId));
    const u = cC(o ?? null, s?.id ?? null, s?.displayName ?? null);
    const [i, a] = d_1("");
    const [h, c] = d_1([]);
    const [d, f] = d_1(0);
    const l = A_1(0);
    const m = (J)=>{
        l.current = J;
        f(J);
    };
    const [g, p] = d_1(0);
    const S = A_1(0);
    const M = A_1([]);
    const current = A_1(new Hl).current;
    const [P, N] = d_1(0);
    const x = A_1(0);
    const k = `${chatId}:${s?.id ?? ""}`;
    const $ = A_1(k);
    $.current = k;
    const [O, F] = d_1(null);
    const [H, Y] = d_1(false);
    const [Q, C] = d_1(false);
    const [R, D] = d_1(false);
    const X = A_1(null);
    const I = A_1(0);
    const [q, A] = d_1(false);
    const [v, U] = d_1("");
    const oe = A_1(0);
    const de = A_1(false);
    const B = A_1(null);
    const Z = A_1(null);
    const z = ()=>{
        oe.current++;
        I.current++;
        C(false);
        D(false);
        B.current?.abort();
        de.current = false;
    };
    const W = async (J, V = oe.current)=>{
        const Me = ++I.current;
        C(true);
        D(false);
        while(X.current){
            await X.current;
        }
        if (Me !== I.current || V !== oe.current || $.current !== k) {
            return;
        }
        const me = az();
        let we = false;
        const De = bt_1.subscribe((_e, Xe)=>{
            const _e_scrollIntent = _e.scrollIntent;
            if (_e_scrollIntent && _e_scrollIntent !== Xe.scrollIntent && _e_scrollIntent.kind === "message" && _e_scrollIntent.chatId === chatId && _e_scrollIntent.messageId === J) {
                we = true;
            }
        });
        const Ve = bt_1.getState().jumpToMessage(chatId, J).catch(()=>{
            we = false;
        }).finally(De);
        X.current = Ve;
        await Ve;
        if (X.current === Ve) {
            X.current = null;
        }
        if (Me === I.current && V === oe.current && $.current === k && au_1(me)) {
            C(false);
            D(!we);
        }
    };
    const ge = ()=>{
        z();
        onClose();
    };
    const Be = (J)=>{
        S.current = 0;
        z();
        M.current = [];
        c([]);
        m(0);
        F(null);
        A(false);
        U("");
        Y(false);
        a(J);
        onQueryChange?.(J.trim().length >= 2 ? J.trim() : "");
        x.current = 0;
        N(0);
    };
    const Se = q_1(async (J, V, Me)=>{
        if (de.current || V !== oe.current) {
            return;
        }
        de.current = true;
        const me = new AbortController;
        B.current = me;
        const we = az();
        const De = ()=>!me.signal.aborted && oe.current === V && $.current === k && au_1(we);
        Y(true);
        U("");
        try {
            const Ve = new Map((J ? M.current : []).map((He)=>[
                    He.message_id,
                    He
                ]));
            let _e = J;
            let Xe = J ? x.current : 0;
            let Ye = Ve.size > 0;
            do {
                const He = await cD(Me, _e, (ze)=>current.read(ze, async ()=>(await cq.getMessages(chatId, {
                            limit: 100,
                            before: ze,
                            skipErrorToast: true
                        }, me.signal)).messages, De), De, 100, 1);
                if (!De() || He.cancelled) {
                    return;
                }
                Xe += He.scanned;
                x.current = Xe;
                N(Xe);
                for (const ze of He.hits){
                    Ve.set(ze.message_id, {
                        message_id: ze.message_id,
                        sender_id: ze.sender_id,
                        created_at: ze.created_at
                    });
                }
                const Ke = [
                    ...Ve.values()
                ];
                M.current = Ke;
                c(Ke);
                if (!Ye && Ke.length) {
                    Ye = true;
                    m(0);
                    W(Ke[0].message_id, V);
                }
                F(He.next);
                _e = He.next ?? undefined;
                if (_e) {
                    await new Promise((ze)=>setTimeout(ze, 0));
                }
            }while (_e && De())
            if (De()) {
                A(true);
            }
        } catch  {
            if (De()) {
                U("Не удалось выполнить поиск. Попробуйте ещё раз.");
            }
        } finally{
            if (oe.current === V) {
                de.current = false;
                Y(false);
            }
        }
    }, [
        chatId,
        k,
        current
    ]);
    h_1(()=>(Z.current?.focus(), ()=>{
            oe.current++;
            I.current++;
            B.current?.abort();
            current.clear();
        }), []);
    h_1(()=>{
        const J = ()=>{
            current.clear();
            z();
            M.current = [];
            c([]);
            m(0);
            F(null);
            A(false);
            Y(false);
            (Z.current?.value.trim().length ?? 0) >= 2 && (S.current++ < 2 ? (U(""), p((we)=>we + 1)) : U("Переписка изменилась. Повторите поиск."));
        };
        const V = cE(chatId, J);
        const Me = cF.addEventListener((we)=>{
            if ("chat_id" in we && we.chat_id === chatId && [
                "new_message",
                "new_messages",
                "own_messages",
                "chat_created"
            ].includes(we.type)) {
                current.clear();
            }
        });
        const me = bt_1.subscribe((we, De)=>{
            if (De.chats.some((Ve)=>Ve.chat_id === chatId) && !we.chats.some((Ve)=>Ve.chat_id === chatId)) {
                J();
            }
        });
        return ()=>{
            V();
            me();
            Me();
        };
    }, [
        chatId
    ]);
    h_1(()=>{
        const J = ++oe.current;
        B.current?.abort();
        de.current = false;
        M.current = [];
        c([]);
        m(0);
        F(null);
        U("");
        A(false);
        Y(false);
        x.current = 0;
        N(0);
        const V = i.trim();
        if (V.length < 2) {
            return;
        }
        Y(true);
        const Me = window.setTimeout(()=>{
            Se(undefined, J, V);
        }, 400);
        return ()=>{
            clearTimeout(Me);
            B.current?.abort();
        };
    }, [
        i,
        chatId,
        Se,
        onQueryChange,
        g
    ]);
    const _ = (J)=>{
        if (!h.length || H || v) {
            return;
        }
        const V = (l.current + J + h.length) % h.length;
        m(V);
        W(h[V].message_id);
    };
    const te = h[d];
    const ce = H ? P ? `Просмотрено: ${P} · найдено: ${h.length}` : "Поиск…" : v || (q ? h.length ? `${d + 1} из ${h.length}${O ? "+ · поиск не завершён" : ""}` : O ? "Поиск не завершён · совпадений пока нет" : "Ничего не найдено" : i.trim().length >= 2 ? "Поиск…" : "Введите хотя бы два символа");
    return u_1("div", {
        className: `${Ze.panel} ym-hide-content`,
        role: "search",
        "aria-label": "Поиск по переписке",
        onKeyDown: (J)=>{
            if (J.key === "Escape") {
                J.preventDefault();
                J.stopPropagation();
                ge();
            }
        },
        children: [
            u_1("div", {
                className: Ze.toolbar,
                children: [
                    u_1("div", {
                        className: Ze.searchField,
                        children: [
                            u_1(ae, {
                                size: 18
                            }),
                            u_1("input", {
                                ref: Z,
                                type: "text",
                                role: "searchbox",
                                enterKeyHint: "search",
                                className: `${Ze.input} ym-disable-keys`,
                                value: i,
                                maxLength: 200,
                                placeholder: "Поиск по сообщениям",
                                "aria-label": "Поиск по сообщениям",
                                onInput: (J)=>Be(J.currentTarget.value),
                                onKeyDown: (J)=>{
                                    if (J.key === "Enter" && !J.isComposing) {
                                        J.preventDefault();
                                        _(J.shiftKey ? -1 : 1);
                                    }
                                    if (J.key === "Escape") {
                                        J.preventDefault();
                                        J.stopPropagation();
                                        ge();
                                    }
                                }
                            }),
                            u_1("button", {
                                type: "button",
                                className: Ze.clearButton,
                                "aria-label": "Очистить поиск",
                                disabled: !i,
                                tabIndex: i ? 0 : -1,
                                style: {
                                    visibility: i ? "visible" : "hidden"
                                },
                                onClick: ()=>{
                                    Be("");
                                    Z.current?.focus();
                                },
                                children: u_1(b8, {
                                    size: 16
                                })
                            })
                        ]
                    }),
                    u_1("div", {
                        className: Ze.navigation,
                        children: [
                            u_1("p", {
                                className: Ze.status,
                                role: "status",
                                "aria-live": "polite",
                                children: ce
                            }),
                            !H && (O || v) && u_1("button", {
                                type: "button",
                                className: Ze.more,
                                onClick: ()=>{
                                    Se(O ?? undefined, oe.current, i.trim());
                                },
                                children: v ? "Повторить" : "Искать дальше"
                            }),
                            u_1("div", {
                                className: Ze.arrows,
                                "aria-busy": Q,
                                children: [
                                    u_1("button", {
                                        type: "button",
                                        className: Ze.iconButton,
                                        "aria-label": "Предыдущее совпадение",
                                        disabled: !h.length || H || !!v,
                                        onClick: ()=>_(1),
                                        children: u_1("span", {
                                            className: Ze.up,
                                            children: u_1(I_2, {
                                                size: 20
                                            })
                                        })
                                    }),
                                    u_1("button", {
                                        type: "button",
                                        className: Ze.iconButton,
                                        "aria-label": "Следующее совпадение",
                                        disabled: !h.length || H || !!v,
                                        onClick: ()=>_(-1),
                                        children: u_1("span", {
                                            className: Ze.down,
                                            children: u_1(I_2, {
                                                size: 20
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        className: Ze.cancel,
                        onClick: ge,
                        children: "Отмена"
                    })
                ]
            }),
            u_1("div", {
                className: Ze.resultMeta,
                children: te && !v && u_1(S_1, {
                    children: [
                        u_1("span", {
                            className: Ze.resultAuthor,
                            children: cG(te.sender_id, s?.id ?? null, u)
                        }),
                        u_1("time", {
                            dateTime: te.created_at,
                            children: [
                                cz(te.created_at),
                                ", ",
                                cA(te.created_at)
                            ]
                        })
                    ]
                })
            }),
            R && te && !v && u_1("div", {
                className: Ze.jumpError,
                role: "alert",
                children: [
                    u_1("span", {
                        children: "Не удалось открыть сообщение."
                    }),
                    u_1("button", {
                        type: "button",
                        className: Ze.more,
                        "aria-label": "Повторить переход к сообщению",
                        disabled: Q,
                        onClick: ()=>{
                            W(te.message_id);
                        },
                        children: "Повторить"
                    })
                ]
            })
        ]
    });
}
const iu = ({ user, chatId, isGroup, onBack, onSearchQuery })=>{
    const u = cl_1({
        user,
        isGroup
    });
    const a = ar_1()?.id;
    const h = !isGroup && user.id === a;
    const c = u_2(isGroup || h || user.deleted ? null : user.id, true, !u);
    const d = user.deleted || c?.isDeleted === true;
    const f = u ? {
        avatar: cn_1,
        avatarEmoji: undefined
    } : d ? {
        avatar: undefined,
        avatarEmoji: "👤"
    } : cH(c?.avatar, user.avatar ?? user.avatarEmoji);
    const l = u ? "ИТД" : d ? "Удалённый аккаунт" : h ? "Сохранённые сообщения" : c?.displayName || user.name;
    const m = !u && !h && !d && ay() && user.online;
    const g = a_1(c?.lastSeen, c?.gender);
    const p = az();
    const S = `${chatId}:${a ?? ""}`;
    const [M, y] = d_1("");
    const P = !!chatId && M === S;
    h_1(()=>()=>onSearchQuery?.(""), [
        S,
        onSearchQuery
    ]);
    const N = A_1(null);
    h_1(()=>y(""), [
        S
    ]);
    const x = ()=>{
        onSearchQuery?.("");
        y("");
        requestAnimationFrame(()=>N.current?.focus({
                preventScroll: true
            }));
    };
    const k = bt_1((R)=>R.typingByChat[chatId]?.expiresAt ?? 0);
    const [$, O] = d_1(false);
    h_1(()=>{
        const R = k - Date.now();
        O(R > 0);
        if (R <= 0) {
            return;
        }
        const D = window.setTimeout(()=>O(false), R + 50);
        return ()=>window.clearTimeout(D);
    }, [
        k
    ]);
    const F = bt_1((R)=>R.toggleInfoPanel);
    const H = ()=>{
        !a || K_1.getState().profile?.id !== a || !au_1(p) || (u ? $_1(`/@${cI}`) : (chatId || !isGroup && user.id) && F());
    };
    const Y = bt_1((R)=>R.wsConnected);
    const [Q, C] = d_1(()=>typeof navigator !== "undefined" && navigator.onLine === false);
    h_1(()=>{
        const R = ()=>C(navigator.onLine === false);
        window.addEventListener("offline", R);
        window.addEventListener("online", R);
        return ()=>{
            window.removeEventListener("offline", R);
            window.removeEventListener("online", R);
        };
    }, []);
    return u_1("div", {
        className: `${We.header} ${P ? We.searchActive : ""}`,
        "data-chat-topbar": true,
        children: [
            P ? u_1(su, {
                chatId,
                onClose: x,
                onQueryChange: onSearchQuery
            }, S) : u_1(S_1, {
                children: [
                    onBack && u_1("button", {
                        type: "button",
                        className: We.backButton,
                        onClick: onBack,
                        "aria-label": "Назад",
                        children: u_1(I_1, {
                            size: 20
                        })
                    }),
                    u_1("div", {
                        className: We.avatarWrap,
                        children: [
                            u_1("div", {
                                className: We.avatar,
                                children: u_1(tn, {
                                    src: f.avatar,
                                    emoji: f.avatarEmoji,
                                    name: l,
                                    fallbackClass: We.avatarFallback
                                })
                            }),
                            Y && m && u_1("span", {
                                className: We.onlineDot
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        className: We.info,
                        onClick: H,
                        disabled: !u && !chatId && !user.id,
                        title: u ? `Открыть профиль @${cI}` : undefined,
                        children: [
                            u_1("div", {
                                className: We.nameRow,
                                children: u_1(ag, {
                                    userId: isGroup || d || h ? undefined : user.id,
                                    name: l,
                                    size: "sm",
                                    className: `${We.name} ${We.identityName}`,
                                    verified: !d && !h && (c?.verified ?? c?.isVerified ?? user.verified),
                                    pin: d || h ? null : c?.pin,
                                    hasNuksta: !h && c?.hasNuksta
                                })
                            }),
                            u_1("div", {
                                className: We.status,
                                children: u ? u_1("span", {
                                    className: We.statusText,
                                    children: "Системные уведомления"
                                }) : d ? u_1("span", {
                                    className: We.statusText,
                                    children: "Аккаунт удалён"
                                }) : h ? u_1("span", {
                                    className: We.statusText,
                                    children: "Ваши заметки и файлы"
                                }) : Y ? $ ? u_1(ys, {
                                    chatId
                                }) : isGroup ? u_1("span", {
                                    className: We.statusText,
                                    children: "Группа"
                                }) : m ? u_1("span", {
                                    className: We.statusOnline,
                                    children: "в сети"
                                }) : u_1("span", {
                                    className: We.statusText,
                                    children: g
                                }) : u_1("span", {
                                    className: We.statusText,
                                    children: "Соединение…"
                                })
                            })
                        ]
                    }),
                    chatId && u_1("button", {
                        ref: N,
                        type: "button",
                        className: We.historySearchButton,
                        "aria-label": "Поиск по истории сообщений",
                        onClick: ()=>y(S),
                        children: u_1(ae, {
                            size: 20
                        })
                    })
                ]
            }),
            u_1("div", {
                className: We.miniPlayer,
                "data-chat-miniplayer": true,
                children: u_1(cJ, {})
            }),
            !Y && u_1("div", {
                className: We.connectionNotice,
                role: "status",
                children: Q ? "Нет сети. Проверьте подключение" : "Восстанавливаем связь. Сообщения могут приходить с задержкой"
            })
        ]
    });
};
const Sn = 50;
const ou = 500;
function au({ rowRef, message, onReply, onOpenMenu, isSelecting, replyDisabled = false }) {
    const [i, a] = d_1(0);
    const [isDragging, c] = d_1(false);
    const d = A_1(message);
    const f = A_1(onReply);
    const l = A_1(onOpenMenu);
    const m = A_1(isSelecting);
    d.current = message;
    f.current = onReply;
    l.current = onOpenMenu;
    m.current = isSelecting;
    h_1(()=>{
        const rowRef_current = rowRef.current;
        if (!rowRef_current) {
            return;
        }
        let S = 0;
        let M = 0;
        let y = false;
        let P = false;
        let N = 0;
        let x = null;
        let k = false;
        let $ = -Infinity;
        let O = false;
        let F = false;
        let H = 0;
        let Y = 0;
        let Q = 0;
        let C = 0;
        let R = "";
        const D = ()=>{
            if (x) {
                clearTimeout(x);
                x = null;
            }
        };
        const X = ()=>{
            y = false;
            D();
            N = 0;
            c(false);
            a(0);
        };
        const I = (z)=>{
            $ = performance.now();
            X();
            z.touches.length === 1 && (m.current || (S = z.touches[0].clientX, M = z.touches[0].clientY, y = true, P = false, N = 0, k = false, l.current && (x = setTimeout(()=>{
                x = null;
                k = true;
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
                l.current?.(d.current.id);
            }, ou))));
        };
        const q = (z)=>{
            if (!y) {
                return;
            }
            if (z.touches.length !== 1) {
                X();
                return;
            }
            const W = z.touches[0].clientX - S;
            const ge = z.touches[0].clientY - M;
            if (Math.abs(W) > 15 || Math.abs(ge) > 15) {
                D();
            }
            if (!replyDisabled) {
                if (!P) {
                    if (Math.abs(W) < 8 && Math.abs(ge) < 8) {
                        return;
                    }
                    if (Math.abs(ge) > Math.abs(W)) {
                        y = false;
                        D();
                        return;
                    }
                    P = true;
                    c(true);
                }
                if (W < 0) {
                    z.preventDefault();
                    N = Math.max(W, -80);
                    a(N);
                } else {
                    N = 0;
                    a(0);
                }
            }
        };
        const A = ()=>{
            if (y) {
                y = false;
                D();
                c(false);
                if (!k && Math.abs(N) >= Sn && f.current) {
                    f.current(d.current);
                }
                a(0);
            }
        };
        const v = (z = false)=>{
            if (!O) {
                return;
            }
            const W = z && O && F && !m.current && Q <= -Sn;
            if (F) {
                C = performance.now() + 250;
            }
            O = false;
            F = false;
            Q = 0;
            rowRef_current.style.userSelect = R;
            c(false);
            a(0);
            window.removeEventListener("mousemove", U);
            window.removeEventListener("mouseup", oe);
            window.removeEventListener("blur", de);
            W && f.current?.(d.current);
        };
        const U = (z)=>{
            if (!O) {
                return;
            }
            if (!(z.buttons & 1) || m.current) {
                v();
                return;
            }
            const W = z.clientX - H;
            const ge = z.clientY - Y;
            if (!F) {
                if (Math.max(Math.abs(W), Math.abs(ge)) < 8) {
                    return;
                }
                if (W >= 0 || Math.abs(ge) > Math.abs(W)) {
                    v();
                    return;
                }
                F = true;
                rowRef_current.style.userSelect = "none";
                c(true);
            }
            z.preventDefault();
            document.getSelection()?.removeAllRanges();
            Q = Math.max(-80, Math.min(0, W));
            a(Q);
        };
        const oe = ()=>v(true);
        const de = ()=>v();
        const B = (z)=>{
            if (z.button !== 0 || z.ctrlKey || z.metaKey || z.altKey || z.shiftKey || m.current || replyDisabled || !f.current || performance.now() - $ < 800) {
                return;
            }
            const W = z.target instanceof Element ? z.target : null;
            if (!(!W?.closest("[data-message-bubble]") || W.closest('[data-message-text],button,a,input,textarea,[role="button"],[role="slider"],img,video,audio'))) {
                R = rowRef_current.style.userSelect;
                O = true;
                F = false;
                Q = 0;
                H = z.clientX;
                Y = z.clientY;
                window.addEventListener("mousemove", U);
                window.addEventListener("mouseup", oe);
                window.addEventListener("blur", de);
            }
        };
        const Z = (z)=>{
            if (performance.now() < C) {
                z.preventDefault();
                z.stopPropagation();
            }
        };
        rowRef_current.addEventListener("touchstart", I, {
            passive: true
        });
        rowRef_current.addEventListener("touchmove", q, {
            passive: false
        });
        rowRef_current.addEventListener("touchend", A);
        rowRef_current.addEventListener("touchcancel", X);
        rowRef_current.addEventListener("mousedown", B);
        rowRef_current.addEventListener("click", Z, true);
        return ()=>{
            D();
            rowRef_current.removeEventListener("touchstart", I);
            rowRef_current.removeEventListener("touchmove", q);
            rowRef_current.removeEventListener("touchend", A);
            rowRef_current.removeEventListener("touchcancel", X);
            v();
            rowRef_current.removeEventListener("mousedown", B);
            rowRef_current.removeEventListener("click", Z, true);
        };
    }, [
        rowRef,
        replyDisabled
    ]);
    const g = Math.min(Math.abs(i) / Sn, 1);
    return {
        dragX: i,
        isDragging,
        replyOpacity: g,
        replyScale: 0.6 + 0.4 * g
    };
}
const cu = 240;
function Rr(e, n) {
    const r = new Map(n.map((i)=>[
            cK(i.reaction),
            i
        ]));
    const o = [
        ...e.flatMap((i)=>{
            const a = cK(i.view.reaction);
            const h = r.get(a);
            if (h) {
                return r.delete(a), [
                    h
                ];
            }
            return [];
        }),
        ...r.values()
    ].map((i)=>{
        const a = e.find((h)=>cK(h.view.reaction) === cK(i.reaction));
        return {
            view: i,
            leaving: false,
            ...a?.animate === false ? {
                animate: false
            } : {}
        };
    });
    const u = new Set(n.map((i)=>cK(i.reaction)));
    e.forEach((i, a)=>{
        if (!u.has(cK(i.view.reaction))) {
            o.splice(Math.min(a, o.length), 0, {
                ...i,
                leaving: true
            });
        }
    });
    return o;
}
function lu(e) {
    const n = (e ?? []).filter((i)=>i.reaction.type === "emoji" && i.count > 0);
    const r = JSON.stringify(n.map((i)=>[
            cK(i.reaction),
            i.count,
            i.chosen
        ]));
    const [s, o] = d_1(()=>({
            signature: r,
            entries: Rr([], n).map((i)=>({
                    ...i,
                    animate: false
                }))
        }));
    let u = s;
    if (s.signature !== r) {
        u = {
            signature: r,
            entries: Rr(s.entries, n)
        };
        o(u);
    }
    h_1(()=>{
        if (!u.entries.some((a)=>a.leaving)) {
            return;
        }
        const i = window.setTimeout(()=>{
            o((a)=>({
                    ...a,
                    entries: a.entries.filter((h)=>!h.leaving)
                }));
        }, cu);
        return ()=>window.clearTimeout(i);
    }, [
        u
    ]);
    return u.entries;
}
const uu = "hBB9";
const cell = "WGcq";
const single = "fDhZ";
const grid2 = "UC93";
const grid3 = "gBXU";
const grid4 = "BOIg";
const rows = "yfUY";
const vu = "bx5r";
const flush = "kOQA";
const flushWrap = "gJ2d";
const yt = {
    grid: uu,
    cell,
    single,
    grid2,
    grid3,
    grid4,
    rows,
    row: vu,
    flush,
    flushWrap
};
function ks(e, n) {
    const r = Number.isFinite(e) && e > 0 ? e : 320;
    const s = Number.isFinite(n) && n > 0 ? n : 240;
    const o = Math.min(1, 420 / r, 400 / s);
    return {
        width: Math.round(Math.max(128, r * o)),
        height: Math.round(Math.max(96, s * o))
    };
}
function wu(e) {
    if (e === 5) {
        return [
            2,
            3
        ];
    }
    const n = [];
    let r = e;
    while(r >= 3){
        n.push(3), r -= 3;
    }
    if (r > 0) {
        n.push(r);
    }
    if (n.length >= 2 && n[n.length - 1] === 1 && n[n.length - 2] === 3) {
        n[n.length - 2] = 2;
        n[n.length - 1] = 2;
    }
    return n;
}
const Tr = ({ img, index, onOpen })=>{
    const s = bt_1((h)=>h.activeChatId);
    const { ref, visible } = nn();
    const { src, refreshSrc } = cM(s, img.fileId, img.url, img.thumbUrl, visible);
    return u_1("button", {
        ref,
        type: "button",
        className: yt.cell,
        onClick: (h)=>onOpen(index, h.currentTarget),
        "aria-label": "Открыть изображение",
        children: u_1(sr, {
            src,
            pending: visible && !src && !!(img.thumbUrl || img.url),
            thumbhash: img.thumbhash,
            uploadProgress: img.uploadProgress,
            onCancel: img.onCancelUpload,
            refreshSrc: img.fileId ? refreshSrc : undefined
        })
    });
};
function ku({ images, flush }) {
    const current = A_1(cQ()).current;
    const s = cL((d)=>d.open);
    const o = A_1(null);
    if (images.length === 0) {
        return null;
    }
    const u = (d, f)=>{
        if (!cN(current)) {
            return;
        }
        const l = cO(f);
        const m = (p)=>{
            if (!cN(current) || matchMedia("(hover: hover) and (pointer: fine)").matches) {
                return null;
            }
            const S = o.current?.querySelectorAll("img")[p];
            if (S) {
                return cO(S);
            }
            return null;
        };
        const activeChatId = bt_1.getState().activeChatId;
        s(cP(activeChatId, images), d, l, m, {
            zoomable: true
        });
    };
    const images_length = images.length;
    const a = (d)=>{
        if (!flush) {
            return d;
        }
        const f = bz(images[0]?.thumbhash);
        return u_1("div", {
            className: yt.flushWrap,
            style: f ? {
                backgroundImage: `url(${f})`
            } : undefined,
            onClick: (l)=>{
                if (l.target !== l.currentTarget) {
                    return;
                }
                const m = o.current?.querySelector("img");
                if (m) {
                    u(0, m);
                }
            },
            children: d
        });
    };
    if (images_length <= 4) {
        const d = images_length === 1 ? yt.single : images_length === 2 ? yt.grid2 : images_length === 3 ? yt.grid3 : yt.grid4;
        const f = images_length === 1 ? images[0] : null;
        const l = f ? ks(f.width, f.height) : null;
        const style = l ? {
            width: `${l.width}px`,
            aspectRatio: `${l.width} / ${l.height}`
        } : undefined;
        return a(u_1("div", {
            ref: o,
            className: `${yt.grid} ${d} ${flush ? yt.flush : ""}`,
            style,
            children: images.map((g, p)=>u_1(Tr, {
                    img: g,
                    index: p,
                    onOpen: u
                }, g.id ?? p))
        }));
    }
    const h = wu(images_length);
    let c = 0;
    return a(u_1("div", {
        ref: o,
        className: `${yt.rows} ${flush ? yt.flush : ""}`,
        children: h.map((d, f)=>{
            const l = images.slice(c, c + d);
            const m = c;
            c += d;
            return u_1("div", {
                className: yt.row,
                children: l.map((g, p)=>u_1(Tr, {
                        img: g,
                        index: m + p,
                        onOpen: u
                    }, g.id ?? m + p))
            }, f);
        })
    }));
}
const Cu = "imTd";
const Nu = {
    ring: Cu
};
function ar({ progress, size = 40 }) {
    const o = 2 * Math.PI * 15;
    const u = Math.max(0, Math.min(1, progress));
    const strokeDashoffset = o * (1 - u);
    const a = size / 2;
    return u_1("svg", {
        className: Nu.ring,
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        "aria-hidden": "true",
        children: [
            u_1("circle", {
                cx: a,
                cy: a,
                r: 15,
                fill: "none",
                stroke: "rgba(255, 255, 255, 0.3)",
                strokeWidth: 3
            }),
            u_1("circle", {
                cx: a,
                cy: a,
                r: 15,
                fill: "none",
                stroke: "#fff",
                strokeWidth: 3,
                strokeLinecap: "round",
                strokeDasharray: o,
                strokeDashoffset,
                transform: `rotate(-90 ${a} ${a})`
            })
        ]
    });
}
const button = "LIBI";
const Mu = {
    button
};
function Cs({ id, url, name, className = "" }) {
    const current = A_1(cQ()).current;
    const [u, i] = d_1(false);
    const a = A_1(false);
    return u_1("button", {
        type: "button",
        className: `${Mu.button} ${className}`,
        disabled: u,
        "aria-label": `Скачать ${name}`,
        onClick: async (h)=>{
            h.stopPropagation();
            if (!a.current) {
                a.current = true;
                i(true);
                try {
                    await cR(current, bt_1.getState().activeChatId, id, url, name);
                } finally{
                    a.current = false;
                    i(false);
                }
            }
        },
        children: u_1(I_3, {
            size: 18
        })
    });
}
function Ns({ id, url, name = "Видео", thumbUrl, thumbhash, width, height, durationMs, flush, uploadProgress, onCancelUpload, messageId }) {
    const current = A_1(cQ()).current;
    const { ref, visible } = nn();
    const p = b4((Y)=>Y.open);
    const S = A_1(false);
    const [M, y] = d_1(false);
    const P = bt_1((Y)=>Y.activeChatId);
    const { src, refreshSrc } = cS(P, thumbUrl ? id : undefined, thumbUrl ?? "", visible && !!thumbUrl);
    const k = bz(thumbhash);
    const { width: width_1, height: height_1 } = ks(width, height);
    const F = typeof uploadProgress === "number";
    const H = async ()=>{
        if (F || S.current || !cN(current)) {
            return;
        }
        S.current = true;
        y(true);
        const activeChatId = bt_1.getState().activeChatId;
        try {
            const Q = await cU(activeChatId, id, url);
            if (!cN(current) || bt_1.getState().activeChatId !== activeChatId) {
                return;
            }
            p({
                url: Q,
                width,
                height,
                poster: src ?? k,
                source: activeChatId && messageId ? {
                    chatId: activeChatId,
                    messageId
                } : undefined,
                sourceRect: cO(ref.current),
                resolveCloseRect: ()=>cO(ref.current),
                resolveUrl: async ()=>{
                    if (!cN(current)) {
                        return null;
                    }
                    const C = await cU(activeChatId, id, Q);
                    if (cN(current)) {
                        return C;
                    }
                    return null;
                },
                onDownload: ()=>cR(current, activeChatId, id, Q, name)
            });
        } catch (Q) {
            if (cN(current) && !(Q instanceof Error && Q.name === "AbortError")) {
                aF.error("Не удалось открыть видео. Попробуйте ещё раз");
            }
        } finally{
            S.current = false;
            y(false);
        }
    };
    return u_1("div", {
        className: flush ? K.videoFlushWrap : undefined,
        children: u_1("div", {
            ref,
            className: `${K.videoPreview} ${flush ? K.videoPreviewFlush : ""}`,
            style: {
                aspectRatio: `${width_1}/${height_1}`,
                width: `${width_1}px`,
                minHeight: "96px",
                ...k ? {
                    backgroundImage: `url(${k})`,
                    backgroundSize: "cover"
                } : {}
            },
            children: [
                u_1("button", {
                    type: "button",
                    className: K.videoOpen,
                    "aria-label": "Открыть видео",
                    "aria-busy": M || undefined,
                    disabled: F || M,
                    onClick: H,
                    children: [
                        thumbUrl && u_1(sr, {
                            src,
                            refreshSrc,
                            thumbhash,
                            alt: ""
                        }),
                        u_1("span", {
                            className: K.videoPlayOverlay,
                            children: M ? "…" : u_1(cT, {})
                        }),
                        u_1("span", {
                            className: K.videoDuration,
                            children: durationMs ? bb(durationMs / 1000) : "Видео"
                        })
                    ]
                }),
                !F && u_1(Cs, {
                    id,
                    url,
                    name,
                    className: K.videoDownload
                }),
                F && u_1("div", {
                    className: K.uploadOverlay,
                    children: [
                        u_1("button", {
                            type: "button",
                            className: K.uploadCancel,
                            onClick: (Y)=>{
                                Y.stopPropagation();
                                onCancelUpload?.();
                            },
                            "aria-label": "Отменить отправку",
                            children: [
                                u_1(ar, {
                                    progress: uploadProgress
                                }),
                                u_1(b8, {
                                    size: 14
                                })
                            ]
                        }),
                        u_1("span", {
                            children: [
                                Math.round(uploadProgress * 100),
                                "%"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
const Eu = "VqyB";
const playBtn = "P8tI";
const cancelIcon = "zTNV";
const body = "zsOA";
const $u = "Uca5";
const metaRow = "JIzk";
const progressRow = "ZSxU";
const Lu = "r2dp";
const Tt = {
    audio: Eu,
    playBtn,
    cancelIcon,
    body,
    name: $u,
    metaRow,
    progressRow,
    time: Lu
};
function Ss({ id, url, name, size, durationMs, uploadProgress, messageId }) {
    const current = A_1(cQ()).current;
    const h = aH((k)=>k.track?.id === id);
    const c = aH((k)=>k.track?.id === id && k.isPlaying);
    const d = aH((k)=>{
        if (k.track?.id === id) {
            return k.currentTime;
        }
        return 0;
    });
    const f = aH((k)=>{
        if (k.track?.id === id) {
            return k.duration;
        }
        return 0;
    });
    const l = typeof uploadProgress === "number";
    const [m, g] = d_1(null);
    h_1(()=>{
        if (durationMs || !url) {
            return;
        }
        const k = new Audio;
        k.preload = "metadata";
        const $ = ()=>{
            if (cN(current) && isFinite(k.duration) && k.duration > 0) {
                g(k.duration);
            }
        };
        k.addEventListener("loadedmetadata", $);
        k.src = url;
        return ()=>{
            k.removeEventListener("loadedmetadata", $);
            k.removeAttribute("src");
            k.load();
        };
    }, [
        durationMs,
        url,
        current
    ]);
    const p = durationMs ? durationMs / 1000 : m ?? 0;
    const S = h ? f : durationMs ? durationMs / 1000 : 0;
    const M = h ? d : 0;
    const y = async ()=>{
        if (!cN(current)) {
            return;
        }
        if (h) {
            cX({
                id,
                url,
                name,
                durationMs
            });
            return;
        }
        const activeChatId = bt_1.getState().activeChatId;
        try {
            const $ = await cU(activeChatId, id, url);
            if (!cN(current)) {
                return;
            }
            cX({
                id,
                url: $,
                name,
                durationMs,
                source: activeChatId && messageId ? {
                    chatId: activeChatId,
                    messageId
                } : undefined,
                resolveUrl: async ()=>{
                    if (!cN(current)) {
                        return null;
                    }
                    const O = await cU(activeChatId, id, $);
                    if (cN(current)) {
                        return O;
                    }
                    return null;
                }
            });
        } catch  {}
    };
    const P = bt_1((k)=>k.cancelUpload);
    const N = (k)=>{
        k.stopPropagation();
        if (!l) {
            y();
        }
    };
    const x = (k)=>{
        k.stopPropagation();
        if (!l) {
            y();
            return;
        }
        if (messageId) {
            P(messageId);
        }
    };
    return u_1("div", {
        className: `${Tt.audio} ${h ? Tt.active : ""}`,
        onClick: N,
        children: [
            u_1("button", {
                type: "button",
                className: Tt.playBtn,
                onClick: x,
                "aria-label": l ? "Отменить отправку" : c ? "Пауза" : "Воспроизвести",
                title: l ? "Отменить отправку" : undefined,
                children: l ? u_1(S_1, {
                    children: [
                        u_1(ar, {
                            progress: uploadProgress ?? 0
                        }),
                        u_1("span", {
                            className: Tt.cancelIcon,
                            children: u_1(b8, {
                                size: 14
                            })
                        })
                    ]
                }) : c ? u_1(cV, {}) : u_1(cT, {})
            }),
            u_1("div", {
                className: Tt.body,
                children: [
                    u_1("div", {
                        className: Tt.name,
                        title: name,
                        children: name
                    }),
                    h ? u_1("div", {
                        className: Tt.progressRow,
                        children: u_1("div", {
                            className: Tt.time,
                            children: [
                                bb(M),
                                " / ",
                                bb(S)
                            ]
                        })
                    }) : u_1("div", {
                        className: Tt.metaRow,
                        children: [
                            size !== undefined ? cW(size) : null,
                            p > 0 ? bb(p) : null
                        ].filter(Boolean).join(", ")
                    })
                ]
            }),
            !l && u_1(Cs, {
                id,
                url,
                name
            })
        ]
    });
}
const cr = b1(()=>({
        values: {}
    }));
const Pu = new Map;
const Bu = new Set;
const ln = new Set;
const jn = new Map;
const Ms = (e, n)=>`${e}:${n}`;
function Du(e, n, r) {
    cr.setState((s)=>({
            values: {
                ...s.values,
                [Ms(e, n)]: r
            }
        }));
}
async function $r(e, n) {
    const r = Ms(e, n);
    if (cr.getState().values[r] || ln.has(r) || (jn.get(r) ?? 0) > Date.now()) {
        return;
    }
    const s = az();
    ln.add(r);
    try {
        await cq.markVoiceHeard(e, n);
        if (au_1(s)) {
            Du(e, n, true);
        }
    } catch  {
        if (au_1(s)) {
            jn.set(r, Date.now() + 30000);
        }
    } finally{
        if (au_1(s)) {
            ln.delete(r);
        }
    }
}
function Mn(e, n, r) {
    const s = bt_1.getState();
    if (s.activeChatId !== e) {
        return;
    }
    const o = [
        ...s.messagesByChat[e] ?? []
    ].sort((a, h)=>cY(a.message_id).localeCompare(cY(h.message_id)));
    const u = o.findIndex((a)=>a.message_id === n);
    if (u < 0) {
        return;
    }
    const i = o[u + r];
    if (i && !i.is_deleted && !i.unavailable && !i._sendStatus && i.attachments.some((a)=>a.waveform && a.mime?.startsWith("audio/"))) {
        return i;
    }
}
function Es(e, n, r, s, o) {
    const u = az();
    const i = async (a)=>{
        if (!au_1(u)) {
            return;
        }
        const h = Mn(e, n, a);
        const c = h?.attachments.find((d)=>d.waveform && d.mime?.startsWith("audio/"));
        if (!(!h || !c)) {
            try {
                const d = await cU(e, c.fileId, c.url);
                if (!au_1(u) || Mn(e, n, a)?.message_id !== h.message_id) {
                    return;
                }
                await cZ(Es(e, h.message_id, c.fileId, d, c.durationMs ?? 0));
            } catch  {}
        }
    };
    return {
        id: `voice:${e}:${n}:${r}`,
        url: s,
        name: "Голосовое сообщение",
        durationMs: o,
        source: {
            chatId: e,
            messageId: n
        },
        resolveUrl: async ()=>{
            if (au_1(u)) {
                return cU(e, r, s);
            }
            return null;
        },
        onProgress: (a)=>{
            if (au_1(u) && a >= Math.min(2, o / 1000 * 0.8)) {
                $r(e, n);
            }
        },
        onEnded: ()=>{
            if (au_1(u)) {
                $r(e, n);
                i(1);
            }
        },
        navigate: (a)=>i(a),
        canNavigate: (a)=>!!Mn(e, n, a)
    };
}
aA(()=>{
    cr.setState({
        values: {}
    });
    Pu.clear();
    Bu.clear();
    ln.clear();
    jn.clear();
});
function Hn(e, n, r, s) {
    if (!isFinite(e) || e <= 0) {
        return Math.max(1, s);
    }
    return Math.max(1, Math.floor((e + r) / (n + r)));
}
function xs(e, n) {
    if (n <= 0 || e.length === 0) {
        return [];
    }
    if (e.length === n) {
        return e;
    }
    const r = new Array(n);
    if (e.length > n) {
        for(let s = 0; s < n; s++){
            const o = Math.floor(s * e.length / n);
            const u = Math.max(o + 1, Math.floor((s + 1) * e.length / n));
            let i = 0;
            for(let a = o; a < u && a < e.length; a++){
                if (e[a] > i) {
                    i = e[a];
                }
            }
            r[s] = i;
        }
    } else {
        for(let s = 0; s < n; s++){
            const o = Math.min(e.length - 1, Math.floor(s * e.length / n));
            r[s] = e[o];
        }
    }
    return r;
}
function Rs({ bars, progress, classes }) {
    return u_1(S_1, {
        children: [
            u_1("div", {
                className: classes.layer,
                children: bars.map((s, o)=>u_1("span", {
                        className: classes.bar,
                        style: {
                            height: `${Math.max(8, s * 100)}%`
                        }
                    }, o))
            }),
            u_1("div", {
                className: `${classes.layer} ${classes.fill}`,
                style: {
                    clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`
                },
                children: bars.map((s, o)=>u_1("span", {
                        className: `${classes.bar} ${classes.barActive}`,
                        style: {
                            height: `${Math.max(8, s * 100)}%`
                        }
                    }, o))
            })
        ]
    });
}
const _u = 3;
const Fu = 2;
const Ou = 28;
const En = "Голосовое сообщение";
const Ts = ({ id, url, duration, levels, messageId })=>{
    const u = bt_1((C)=>C.activeChatId);
    const i = u && messageId ? `voice:${u}:${messageId}:${id}` : id;
    const current = A_1(cQ()).current;
    const h = aH((C)=>C.track?.id === i);
    const c = aH((C)=>C.track?.id === i && C.isPlaying);
    const d = aH((C)=>{
        if (C.track?.id === i) {
            return C.currentTime;
        }
        return 0;
    });
    const f = aH((C)=>{
        if (C.track?.id === i && C.duration > 0) {
            return C.duration;
        }
        return duration;
    });
    const l = f > 0 ? Math.min(1, d / f) : 0;
    const m = async ()=>{
        if (!cN(current)) {
            return;
        }
        const activeChatId = bt_1.getState().activeChatId;
        try {
            const R = await cU(activeChatId, id, url);
            if (!cN(current)) {
                return;
            }
            cX(activeChatId && messageId ? Es(activeChatId, messageId, id, R, duration * 1000) : {
                id,
                url: R,
                name: En,
                durationMs: duration * 1000,
                source: activeChatId && messageId ? {
                    chatId: activeChatId,
                    messageId
                } : undefined,
                resolveUrl: async ()=>{
                    if (!cN(current)) {
                        return null;
                    }
                    const D = await cU(activeChatId, id, R);
                    if (cN(current)) {
                        return D;
                    }
                    return null;
                }
            });
        } catch  {}
    };
    const g = (C)=>{
        C.stopPropagation();
        if (cN(current)) {
            if (h) {
                cX({
                    id: i,
                    url,
                    name: En,
                    durationMs: duration * 1000
                });
                return;
            }
            m();
        }
    };
    const p = A_1(null);
    const [S, M] = d_1(false);
    const y = A_1(null);
    const P = A_1(false);
    const [N, x] = d_1(0);
    h_1(()=>{
        const p_current = p.current;
        if (!p_current || typeof ResizeObserver === "undefined") {
            return;
        }
        const R = new ResizeObserver((D)=>{
            for (const X of D){
                const I = X.contentRect.width;
                x((q)=>{
                    if (Math.abs(q - I) >= 1) {
                        return I;
                    }
                    return q;
                });
            }
        });
        R.observe(p_current);
        return ()=>R.disconnect();
    }, []);
    const k = (C)=>{
        if (!cN(current)) {
            return;
        }
        const p_current = p.current;
        if (!p_current) {
            return;
        }
        const D = p_current.getBoundingClientRect();
        const X = Math.max(0, Math.min(1, (C - D.left) / D.width));
        if (f > 0) {
            c_(X * f);
        }
    };
    const $ = (C)=>{
        if (C.pointerType === "touch") {
            y.current = {
                id: C.pointerId,
                x: C.clientX,
                y: C.clientY,
                dragging: false
            };
            P.current = false;
            return;
        }
        if (c) {
            C.preventDefault();
            C.stopPropagation();
            M(true);
            k(C.clientX);
            p.current?.setPointerCapture(C.pointerId);
        }
    };
    const O = (C)=>{
        C.stopPropagation();
        if (P.current) {
            P.current = false;
            return;
        }
        cN(current) && (c || (h ? cX({
            id: i,
            url,
            name: En,
            durationMs: duration * 1000
        }) : m()));
    };
    const onPointerMove = (C)=>{
        const y_current = y.current;
        if (y_current?.id === C.pointerId) {
            const D = C.clientX - y_current.x;
            const X = C.clientY - y_current.y;
            if (!y_current.dragging) {
                if (Math.abs(X) > 8 && Math.abs(X) >= Math.abs(D)) {
                    y.current = null;
                    P.current = true;
                    return;
                }
                if (!c || Math.abs(D) < 8 || Math.abs(D) <= Math.abs(X)) {
                    return;
                }
                y_current.dragging = true;
                P.current = true;
                M(true);
                p.current?.setPointerCapture(C.pointerId);
            }
            C.stopPropagation();
            k(C.clientX);
            return;
        }
        if (S) {
            k(C.clientX);
        }
    };
    const H = (C)=>{
        y.current = null;
        M(false);
        if (p.current?.hasPointerCapture(C.pointerId)) {
            p.current.releasePointerCapture(C.pointerId);
        }
    };
    const Y = a6(()=>{
        const C = Hn(N, _u, Fu, Ou);
        if (levels && levels.length > 0) {
            return xs(levels, C);
        }
        return ju(id, C);
    }, [
        levels,
        N,
        id
    ]);
    const Q = h && d > 0 ? d : duration;
    return u_1("div", {
        className: K.voice,
        onClick: O,
        children: [
            u_1("button", {
                type: "button",
                className: K.voicePlay,
                onClick: g,
                "aria-label": c ? "Пауза" : "Воспроизвести",
                children: c ? u_1(cV, {}) : u_1(cT, {})
            }),
            u_1("div", {
                className: K.voiceMeta,
                children: [
                    u_1("div", {
                        ref: p,
                        className: K.voiceWaveform,
                        onPointerDown: $,
                        onPointerMove,
                        onPointerUp: H,
                        onPointerCancel: H,
                        role: "slider",
                        tabIndex: 0,
                        onKeyDown: (C)=>{
                            if (!h || !cN(current)) {
                                return;
                            }
                            const R = C.key === "Home" ? 0 : C.key === "End" ? f : C.key === "ArrowRight" ? Math.min(f, d + 5) : C.key === "ArrowLeft" ? Math.max(0, d - 5) : null;
                            if (R !== null) {
                                C.preventDefault();
                                C.stopPropagation();
                                c_(R);
                            }
                        },
                        "aria-valuemin": 0,
                        "aria-valuemax": Math.round(f),
                        "aria-valuenow": Math.round(d),
                        "aria-label": "Перемотать",
                        children: u_1(Rs, {
                            bars: Y,
                            progress: l,
                            classes: {
                                layer: K.voiceBars,
                                fill: K.voiceBarsFill,
                                bar: K.voiceBar,
                                barActive: K.voiceBarActive
                            }
                        })
                    }),
                    u_1("div", {
                        className: K.voiceCaption,
                        children: c$(Q)
                    })
                ]
            })
        ]
    });
};
function ju(e, n) {
    let r = 5381;
    for(let o = 0; o < e.length; o++){
        r = (r << 5) + r + e.charCodeAt(o) | 0;
    }
    const s = new Array(n);
    for(let o = 0; o < n; o++){
        r = Math.imul(r, 1664525) + 1013904223 | 0;
        const u = (r >>> 0) % 1000 / 1000;
        const i = 0.35 + 0.65 * Math.sin(o / Math.max(1, n - 1) * Math.PI);
        s[o] = Math.max(0.12, u * i);
    }
    return s;
}
const Hu = new Set([
    "exe",
    "msi",
    "msix",
    "bat",
    "cmd",
    "com",
    "scr",
    "pif",
    "cpl",
    "reg",
    "dll",
    "hta",
    "lnk",
    "gadget",
    "js",
    "jse",
    "mjs",
    "vbs",
    "vbe",
    "wsf",
    "wsh",
    "ps1",
    "psm1",
    "dmg",
    "pkg",
    "app",
    "command",
    "sh",
    "bash",
    "zsh",
    "run",
    "appimage",
    "deb",
    "rpm",
    "apk",
    "apks",
    "jar"
]);
function Ir(e) {
    const n = e.lastIndexOf(".");
    return n !== -1 && Hu.has(e.slice(n + 1).toLowerCase());
}
const $s = ({ id, url, name, mime, size, messageId, uploadProgress })=>{
    const current = A_1(cQ()).current;
    const [h, c] = d_1(false);
    const [loading, f] = d_1(false);
    const l = bt_1((M)=>M.cancelUpload);
    const m = typeof uploadProgress === "number";
    const g = d0(name);
    const p = async ()=>{
        if (cN(current)) {
            f(true);
            try {
                const M = bt_1.getState().activeChatId;
                const y = await cU(M, id, url);
                if (!cN(current)) {
                    return;
                }
                d1(y, name);
            } catch (M) {
                if (cN(current) && !(M instanceof Error && M.name === "AbortError")) {
                    aF.error("Не удалось начать скачивание. Попробуйте ещё раз");
                }
            } finally{
                if (cN(current)) {
                    f(false);
                    c(false);
                }
            }
        }
    };
    const S = (M)=>{
        M.stopPropagation();
        if (!cN(current)) {
            return;
        }
        if (m) {
            if (messageId) {
                l(messageId);
            }
            return;
        }
        if ((/^(image|video|audio)\//.test(mime) || mime === "application/pdf") && !Ir(g.name)) {
            p();
        } else {
            c(true);
        }
    };
    return u_1(S_1, {
        children: [
            u_1("div", {
                className: K.file,
                onClick: S,
                title: m ? "Отменить отправку" : `Скачать ${g.name}`,
                children: [
                    u_1("button", {
                        type: "button",
                        className: K.fileCircle,
                        onClick: S,
                        "aria-label": m ? "Отменить отправку" : "Скачать",
                        children: m ? u_1(S_1, {
                            children: [
                                u_1(ar, {
                                    progress: uploadProgress ?? 0
                                }),
                                u_1("span", {
                                    className: K.fileCancelIcon,
                                    children: u_1(b8, {
                                        size: 14
                                    })
                                })
                            ]
                        }) : u_1(I_3, {
                            size: 20
                        })
                    }),
                    u_1("div", {
                        className: K.fileBody,
                        children: [
                            u_1("span", {
                                className: K.fileName,
                                dir: "ltr",
                                children: [
                                    u_1("bdi", {
                                        dir: "auto",
                                        className: K.fileStem,
                                        children: g.stem
                                    }),
                                    u_1("bdi", {
                                        dir: "ltr",
                                        className: K.fileExtension,
                                        children: g.extension
                                    })
                                ]
                            }),
                            m ? u_1("span", {
                                className: K.fileSize,
                                role: "progressbar",
                                "aria-label": "Загрузка файла",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": Math.round(Math.max(0, Math.min(1, uploadProgress)) * 100),
                                children: [
                                    Math.round(Math.max(0, Math.min(1, uploadProgress)) * 100),
                                    "%",
                                    size !== undefined && ` · ${cW(Math.round(size * Math.max(0, Math.min(1, uploadProgress))))} из ${cW(size)}`
                                ]
                            }) : size !== undefined && u_1("span", {
                                className: K.fileSize,
                                children: cW(size)
                            })
                        ]
                    })
                ]
            }),
            h && u_1(bW, {
                title: Ir(g.name) ? "Вы скачиваете исполняемый файл" : "Потенциально опасный файл",
                message: "Такие файлы могут содержать вирусы и повредить ваше устройство или украсть данные. Открывайте только то, что пришло от людей, которым вы доверяете.",
                actions: [
                    {
                        label: "Отмена",
                        role: "cancel",
                        onClick: ()=>c(false)
                    },
                    {
                        label: "Всё равно скачать",
                        role: "destructive",
                        loading,
                        onClick: ()=>{
                            p();
                        }
                    }
                ],
                onDismiss: ()=>c(false)
            })
        ]
    });
};
const zu = ({ attachment, allAttachments, index })=>{
    const current = A_1(cQ()).current;
    const o = cL((p)=>p.open);
    const u = bt_1((p)=>p.activeChatId);
    const { ref, visible } = nn();
    const { src, refreshSrc } = cM(u, attachment.id || undefined, attachment.url, attachment.thumbUrl, visible);
    const [d, f] = d_1(null);
    const l = A_1(false);
    const m = ()=>{
        cN(current) && (l.current || (l.current = true, refreshSrc().then((p)=>{
            if (p && cN(current)) {
                f(p);
            }
        }).catch(()=>{})));
    };
    const g = (p)=>{
        if (!cN(current)) {
            return;
        }
        const S = allAttachments.map((k, i)=>{
            if (k.type === "image") {
                return {
                    att: k,
                    i
                };
            }
            return null;
        }).filter((k)=>k != null);
        const M = S.findIndex((k)=>k.i === index);
        const y = cO(p.currentTarget);
        const p_currentTarget = p.currentTarget;
        const N = Math.max(0, M);
        const x = (k)=>{
            if (!cN(current) || matchMedia("(hover: hover) and (pointer: fine)").matches || k !== N || !p_currentTarget.isConnected) {
                return null;
            }
            return cO(p_currentTarget);
        };
        o(cP(u, S.map((k, $)=>({
                id: `${index}_${$}`,
                name: k.att.name,
                fileId: k.att.id || undefined,
                url: k.att.url,
                thumbUrl: k.att.thumbUrl,
                thumbhash: k.att.thumbhash,
                width: k.att.width,
                height: k.att.height
            }))), N, y, x, {
            zoomable: true
        });
    };
    return u_1("button", {
        ref,
        type: "button",
        className: K.image,
        onClick: g,
        "aria-label": "Открыть изображение",
        children: (d ?? src) && u_1("img", {
            src: d ?? src,
            alt: "",
            draggable: false,
            onError: m
        })
    });
};
const Wu = ({ attachment, allAttachments, index, messageId })=>{
    switch(attachment.type){
        case "image":
            return u_1(zu, {
                attachment,
                allAttachments,
                index
            });
        case "video":
            return u_1(Ns, {
                messageId,
                id: attachment.id,
                uploadProgress: attachment.uploadProgress,
                onCancelUpload: ()=>bt_1.getState().cancelUpload(messageId),
                url: attachment.url,
                name: attachment.name,
                thumbUrl: attachment.thumbUrl,
                thumbhash: attachment.thumbhash,
                durationMs: attachment.durationMs,
                width: attachment.width,
                height: attachment.height
            });
        case "audio":
            return u_1(Ss, {
                id: attachment.id,
                url: attachment.url,
                name: attachment.name,
                size: attachment.size,
                durationMs: attachment.durationMs,
                uploadProgress: attachment.uploadProgress,
                messageId
            });
        case "voice":
            return u_1(Ts, {
                messageId,
                id: attachment.id,
                url: attachment.url,
                duration: attachment.duration,
                size: attachment.size,
                levels: attachment.levels
            });
        case "file":
            return u_1($s, {
                id: attachment.id,
                url: attachment.url,
                name: attachment.name,
                mime: attachment.mime,
                size: attachment.size,
                messageId,
                uploadProgress: attachment.uploadProgress
            });
    }
};
const Uu = ({ message, frameless, flushMedia })=>{
    const onCancelUpload = message.canCancelSend ? ()=>bt_1.getState().cancelUpload(message.id) : undefined;
    const message_attachments = message.attachments;
    if (!message_attachments || message_attachments.length === 0) {
        return null;
    }
    if ((frameless || flushMedia) && message_attachments.length === 1 && message_attachments[0].type === "video") {
        const a = message_attachments[0];
        return u_1(Ns, {
            messageId: message.id,
            id: a.id,
            uploadProgress: a.uploadProgress,
            onCancelUpload,
            url: a.url,
            name: a.name,
            thumbUrl: a.thumbUrl,
            durationMs: a.durationMs,
            width: a.width,
            height: a.height,
            thumbhash: a.thumbhash,
            flush: !frameless && flushMedia
        });
    }
    const u = message_attachments.filter((a)=>a.type === "image");
    const i = message_attachments.filter((a)=>a.type !== "image");
    return u_1(S_1, {
        children: [
            u.length > 0 && u_1(ku, {
                flush: flushMedia,
                images: u.map((a, h)=>({
                        sourceMessageId: message.id,
                        id: h,
                        name: a.name,
                        fileId: a.id || undefined,
                        url: a.url,
                        thumbUrl: a.thumbUrl,
                        thumbhash: a.thumbhash,
                        width: a.width,
                        height: a.height,
                        uploadProgress: a.uploadProgress,
                        onCancelUpload
                    }))
            }),
            i.map((a, h)=>u_1(Wu, {
                    attachment: a,
                    allAttachments: message_attachments,
                    index: message_attachments.indexOf(a),
                    messageId: message.id
                }, `rest_${h}`))
        ]
    });
};
const qu = "CHuM";
const Ar = {
    status: qu
};
const Vu = bf_1(()=>bg(()=>import("./index-9foMZ2v1.js"), __vite__mapDeps([
        0,
        1,
        2,
        3
    ])).then((e)=>({
            default: e.MessengerPost
        })));
function Gu({ postId }) {
    const [n, r] = d_1(()=>d2(postId) ?? null);
    const [s, o] = d_1(false);
    const [u, i] = d_1(0);
    h_1(()=>{
        const a = d2(postId);
        r(a ?? null);
        o(false);
        if (a) {
            return;
        }
        let h = true;
        d3(postId, u > 0).then((c)=>{
            h && (c ? r(c) : o(true));
        });
        return ()=>{
            h = false;
        };
    }, [
        postId,
        u
    ]);
    if (n) {
        return u_1(bd_1, {
            fallback: u_1("div", {
                className: Ar.status,
                children: "Загрузка поста…"
            }),
            children: u_1(Vu, {
                post: n
            })
        });
    }
    return u_1("div", {
        className: Ar.status,
        children: [
            s ? "Не удалось загрузить пост" : "Загрузка поста…",
            s && u_1(B_1, {
                variant: "ghost",
                size: "sm",
                onClick: ()=>i((a)=>a + 1),
                children: "Повторить"
            })
        ]
    });
}
const Ku = ()=>u_1("span", {
        role: "img",
        className: `${K.readStatus} ${K.sendingStatus}`,
        "aria-label": "Отправляется",
        children: u_1("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: [
                u_1("circle", {
                    cx: "6",
                    cy: "6",
                    r: "5",
                    stroke: "currentColor",
                    strokeWidth: "1.2"
                }),
                u_1("path", {
                    d: "M6 3v3l2 1.5",
                    stroke: "currentColor",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                })
            ]
        })
    });
const Xu = ()=>u_1("span", {
        role: "img",
        className: `${K.readStatus} ${K.failedStatus}`,
        "aria-label": "Не отправлено",
        children: u_1("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: [
                u_1("circle", {
                    cx: "6",
                    cy: "6",
                    r: "5",
                    fill: "currentColor"
                }),
                u_1("path", {
                    d: "M6 3v3.5",
                    stroke: "white",
                    strokeWidth: "1.4",
                    strokeLinecap: "round"
                }),
                u_1("circle", {
                    cx: "6",
                    cy: "8.5",
                    r: "0.8",
                    fill: "white"
                })
            ]
        })
    });
const Yu = ({ createdAt, isEdited, isOutgoing, isRead, overlay, sendStatus })=>u_1("div", {
        dir: "ltr",
        className: `${K.meta} ${overlay ? K.metaOverlay : ""}`,
        children: [
            isEdited && u_1("span", {
                className: K.edited,
                children: "изменено"
            }),
            u_1("time", {
                className: K.time,
                dateTime: createdAt,
                "aria-label": new Date(createdAt).toLocaleString("ru-RU", {
                    dateStyle: "long",
                    timeStyle: "short"
                }),
                title: new Date(createdAt).toLocaleString("ru-RU", {
                    dateStyle: "long",
                    timeStyle: "medium"
                }),
                children: cA(createdAt)
            }),
            isOutgoing && (sendStatus === "sending" ? u_1(Ku, {}) : sendStatus === "failed" ? u_1(Xu, {}) : u_1(ws, {
                read: !!isRead
            }))
        ]
    });
function Is(e, n, r) {
    return `${e}/${n}/${cK(r)}`;
}
async function As(e, n, r, s) {
    const o = az();
    await d4();
    if (!au_1(o)) {
        return;
    }
    const u = ()=>bt_1.getState().messagesByChat[e]?.find((d)=>d.message_id === n)?.reactions?.some((d)=>d.chosen && cK(d.reaction) === cK(r)) ?? false;
    const i = u();
    const a = d5(e, n, r);
    const h = u();
    const c = Is(e, n, r);
    if (!i && h && r.type === "emoji") {
        d6(c, r.emoji, s);
    } else if (i && !h) {
        d7(c);
    }
    await a;
    if (au_1(o) && !u()) {
        d7(c);
    }
}
const Ju = [
    {
        x: -54,
        y: -31,
        turn: -48,
        size: 31,
        delay: 80
    },
    {
        x: -28,
        y: -57,
        turn: -24,
        size: 28,
        delay: 105
    },
    {
        x: 14,
        y: -61,
        turn: 24,
        size: 32,
        delay: 70
    },
    {
        x: 49,
        y: -36,
        turn: 52,
        size: 30,
        delay: 95
    },
    {
        x: 58,
        y: 2,
        turn: 28,
        size: 27,
        delay: 120
    },
    {
        x: 38,
        y: 42,
        turn: -18,
        size: 29,
        delay: 90
    },
    {
        x: 5,
        y: 66,
        turn: 26,
        size: 28,
        delay: 110
    },
    {
        x: -29,
        y: 58,
        turn: -32,
        size: 25,
        delay: 135
    },
    {
        x: -55,
        y: 18,
        turn: -58,
        size: 30,
        delay: 85
    }
];
const duration = 150;
function Lr(e, n) {
    if (e.picker) {
        return {
            x: e.x - n.x,
            y: e.y - n.y,
            duration
        };
    }
    return {
        x: 0,
        y: 0,
        duration: 0
    };
}
function Zu(e, n, r, s = {
    request: (u)=>window.requestAnimationFrame(u),
    cancel: (u)=>window.cancelAnimationFrame(u)
}, o = ()=>({
        width: window.innerWidth,
        height: window.innerHeight
    })) {
    let u = false;
    let i = 0;
    let a = NaN;
    let h = NaN;
    const c = ()=>{
        if (u) {
            return;
        }
        if (!e.isConnected) {
            n.style.visibility = "hidden";
            return;
        }
        const d = e.getBoundingClientRect();
        const f = o();
        const l = d.width > 0 && d.height > 0 && d.bottom >= 0 && d.top <= f.height && d.right >= 0 && d.left <= f.width;
        const m = l ? "visible" : "hidden";
        if (n.style.visibility !== m) {
            n.style.visibility = m;
        }
        if (l) {
            const g = d.left + d.width / 2;
            const p = d.top + d.height / 2;
            if (g !== a || p !== h) {
                const S = Lr(r, {
                    x: g,
                    y: p
                });
                n.style.setProperty("--burst-x", `${g}px`);
                n.style.setProperty("--burst-y", `${p}px`);
                n.style.setProperty("--flight-x", `${S.x}px`);
                n.style.setProperty("--flight-y", `${S.y}px`);
                a = g;
                h = p;
            }
        }
        i = s.request(c);
    };
    n.style.setProperty("--arrival-time", `${Lr(r, {
        x: 0,
        y: 0
    }).duration}ms`);
    c();
    return ()=>{
        u = true;
        s.cancel(i);
    };
}
const ed = "ToRV";
const chips = "vl95";
const chipSlot = "xTFg";
const chipEntering = "S3Be";
const chip = "v98p";
const count = "sTPQ";
const chipClip = "nz3f";
const chipLeaving = "ugZh";
const emojiAnchor = "MTIW";
const emoji = "c5ue";
const emojiPulse = "cRxb";
const burstLayer = "Uamn";
const burstTravel = "KiBH";
const burstParticle = "RSjw";
const burstHero = "LdfU";
const picker = "xlyV";
const quick = "nzcF";
const vd = "ZsbR";
const bd = "hDRv";
const footer = "yYpp";
const wd = "G5ss";
const Ue = {
    wrap: ed,
    chips,
    chipSlot,
    chipEntering,
    chip,
    count,
    chipClip,
    chipLeaving,
    emojiAnchor,
    emoji,
    emojiPulse,
    burstLayer,
    burstTravel,
    burstParticle,
    burstHero,
    picker,
    quick,
    grid: vd,
    more: bd,
    footer,
    hint: wd
};
const Ls = [
    {
        emoji: "🙂",
        title: "Улыбка",
        image: 1
    },
    {
        emoji: "😭",
        title: "Рыдаю",
        image: 2
    },
    {
        emoji: "😂",
        title: "Смеюсь до слёз",
        image: 3
    },
    {
        emoji: "😁",
        title: "Смешно",
        image: 4
    },
    {
        emoji: "😊",
        title: "Радуюсь",
        image: 5
    },
    {
        emoji: "🥹",
        title: "Тронут",
        image: 6
    },
    {
        emoji: "🥺",
        title: "Пожалуйста",
        image: 7
    },
    {
        emoji: "😔",
        title: "Печально",
        image: 8
    },
    {
        emoji: "😢",
        title: "Грустно",
        image: 9
    },
    {
        emoji: "🤔",
        title: "Думаю",
        image: 10
    },
    {
        emoji: "😐",
        title: "Без эмоций",
        image: 11
    },
    {
        emoji: "🫤",
        title: "Сомневаюсь",
        image: 12
    },
    {
        emoji: "😎",
        title: "Крутой",
        image: 13
    },
    {
        emoji: "😏",
        title: "Ухмыляюсь",
        image: 14
    },
    {
        emoji: "🤓",
        title: "Умник",
        image: 15
    },
    {
        emoji: "😇",
        title: "Невиновен",
        image: 16
    },
    {
        emoji: "😋",
        title: "Вкусно",
        image: 17
    },
    {
        emoji: "🙄",
        title: "Закатываю глаза",
        image: 18
    },
    {
        emoji: "😶‍🌫️",
        title: "В облаках",
        image: 19
    },
    {
        emoji: "🫣",
        title: "Подглядываю",
        image: 20
    },
    {
        emoji: "🤪",
        title: "Дурачусь",
        image: 21
    },
    {
        emoji: "😍",
        title: "Обожаю",
        image: 22
    },
    {
        emoji: "🥰",
        title: "Влюблён",
        image: 23
    },
    {
        emoji: "😘",
        title: "Целую",
        image: 24
    },
    {
        emoji: "🥳",
        title: "Веселюсь",
        image: 25
    },
    {
        emoji: "🤮",
        title: "Тошнит",
        image: 26
    },
    {
        emoji: "😱",
        title: "В ужасе",
        image: 27
    },
    {
        emoji: "🤩",
        title: "Восторг",
        image: 28
    },
    {
        emoji: "🤡",
        title: "Клоун",
        image: 29
    },
    {
        emoji: "😡",
        title: "Злюсь",
        image: 30
    },
    {
        emoji: "😈",
        title: "Дьявол",
        image: 31
    },
    {
        emoji: "🫡",
        title: "Честь",
        image: 32
    },
    {
        emoji: "🤯",
        title: "Взрыв мозга",
        image: 33
    },
    {
        emoji: "❤️",
        title: "Сердце",
        image: 34
    },
    {
        emoji: "💔",
        title: "Разбитое сердце",
        image: 35
    },
    {
        emoji: "❤️‍🔥",
        title: "Пылающее сердце",
        image: 36
    },
    {
        emoji: "🔥",
        title: "Огонь",
        image: 37
    },
    {
        emoji: "💀",
        title: "Череп",
        image: 38
    },
    {
        emoji: "👀",
        title: "Смотрю",
        image: 39
    },
    {
        emoji: "💩",
        title: "Какашка",
        image: 40
    },
    {
        emoji: "🤷",
        title: "Не знаю",
        image: 41
    },
    {
        emoji: "👍",
        title: "Нравится",
        image: 42
    },
    {
        emoji: "👎",
        title: "Не нравится",
        image: 43
    },
    {
        emoji: "👌",
        title: "Окей",
        image: 44
    },
    {
        emoji: "🤝",
        title: "Согласен",
        image: 45
    },
    {
        emoji: "🖕",
        title: "Средний палец",
        image: 46
    },
    {
        emoji: "🙏",
        title: "Спасибо",
        image: 47
    },
    {
        emoji: "👋",
        title: "Привет",
        image: 48
    },
    {
        emoji: "⚡",
        title: "Молния",
        image: 49
    },
    {
        emoji: "💥",
        title: "Взрыв",
        image: 50
    },
    {
        emoji: "💯",
        title: "Сто из ста",
        image: 51
    },
    {
        emoji: "💋",
        title: "Поцелуй",
        image: 52
    },
    {
        emoji: "🎉",
        title: "Праздник",
        image: 53
    },
    {
        emoji: "🏆",
        title: "Кубок",
        image: 54
    },
    {
        emoji: "📝",
        title: "Пишу",
        image: 55
    }
];
function kd(e) {
    const n = Ls.find((r)=>r.emoji.normalize("NFC").replace(/\uFE0F/g, "") === e.normalize("NFC").replace(/\uFE0F/g, ""));
    if (n) {
        return `/assets/messenger/artwork/reaction-${n.image}.webp`;
    }
    return null;
}
function mn({ emoji }) {
    const n = kd(emoji);
    if (n) {
        return u_1("img", {
            src: n,
            alt: "",
            draggable: false,
            decoding: "async",
            width: 192,
            height: 192,
            style: {
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "contain"
            }
        });
    }
    return u_1(S_1, {
        children: emoji
    });
}
function Cd({ effect, targetRef }) {
    const r = A_1(null);
    b6(()=>{
        const targetRef_current = targetRef.current;
        const r_current = r.current;
        if (!(!targetRef_current || !r_current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
            return Zu(targetRef_current, r_current, effect.source);
        }
    }, [
        effect,
        targetRef
    ]);
    return aB(u_1("div", {
        ref: r,
        className: Ue.burstLayer,
        style: {
            visibility: "hidden"
        },
        "aria-hidden": "true",
        "data-reaction-burst": true,
        children: [
            u_1("span", {
                className: Ue.burstTravel,
                children: u_1("span", {
                    className: Ue.burstHero,
                    children: u_1(mn, {
                        emoji: effect.emoji
                    })
                })
            }),
            Ju.map((s, o)=>u_1("span", {
                    className: Ue.burstParticle,
                    style: {
                        "--particle-x": `${s.x}px`,
                        "--particle-y": `${s.y}px`,
                        "--particle-rotation": `${s.turn}deg`,
                        "--particle-size": `${s.size}px`,
                        "--particle-delay": `${s.delay}ms`
                    },
                    children: u_1(mn, {
                        emoji: effect.emoji
                    })
                }, o))
        ]
    }), document.body);
}
function Nd({ message, entry: { view: n, leaving: r, animate: s }, disabled }) {
    const u = A_1(null);
    const i = Is(message.chatId, message.id, n.reaction);
    const a = d8((c)=>{
        if (c.current?.key === i) {
            return c.current;
        }
        return null;
    });
    const h = n.reaction.type === "emoji" ? n.reaction.emoji : "";
    return u_1("span", {
        className: `${Ue.chipSlot} ${s !== false ? Ue.chipEntering : ""} ${r ? Ue.chipLeaving : ""}`,
        "aria-hidden": r || undefined,
        "data-reaction-leaving": r || undefined,
        children: [
            u_1("span", {
                className: Ue.chipClip,
                children: u_1("button", {
                    type: "button",
                    className: Ue.chip,
                    "aria-label": `${h}, ${n.count}`,
                    "aria-pressed": n.chosen,
                    disabled: disabled || r,
                    tabIndex: r ? -1 : undefined,
                    onTouchStart: (c)=>c.stopPropagation(),
                    onPointerDown: (c)=>c.stopPropagation(),
                    onClick: (c)=>{
                        c.stopPropagation();
                        const d = c.currentTarget.getBoundingClientRect();
                        As(message.chatId, message.id, n.reaction, {
                            x: d.left + d.width / 2,
                            y: d.top + d.height / 2
                        });
                    },
                    children: [
                        u_1("span", {
                            ref: u,
                            className: Ue.emojiAnchor,
                            "data-reaction-anchor": true,
                            children: u_1("span", {
                                className: `${Ue.emoji} ${a ? Ue.emojiPulse : ""}`,
                                children: u_1(mn, {
                                    emoji: h
                                })
                            })
                        }),
                        n.count > 1 && u_1("span", {
                            className: Ue.count,
                            children: n.count
                        }, n.count)
                    ]
                })
            }),
            a && !r && u_1(Cd, {
                effect: a,
                targetRef: u
            }, a.id)
        ]
    });
}
function Pr({ message, entries, disabled = false }) {
    if (entries.length) {
        return u_1("div", {
            className: Ue.wrap,
            "data-message-reactions": true,
            children: !!entries.length && u_1("div", {
                className: Ue.chips,
                "aria-label": "Реакции на сообщение",
                children: entries.map((s)=>u_1(Nd, {
                        message,
                        entry: s,
                        disabled
                    }, cK(s.view.reaction)))
            })
        });
    }
    return null;
}
function Sd({ message, onChosen }) {
    const { catalog, error } = d9();
    const [o, u] = d_1(false);
    h_1(()=>{
        d4();
    }, []);
    const i = Ls.flatMap((h)=>{
        const c = catalog?.reactions.find((d)=>d.type === "emoji" && cK(d) === cK({
                type: "emoji",
                emoji: h.emoji
            }));
        if (c) {
            return [
                c
            ];
        }
        return [];
    });
    const a = new Set((message.reactions ?? []).filter((h)=>h.chosen).map((h)=>cK(h.reaction)));
    return u_1("div", {
        className: Ue.picker,
        "aria-label": "Выбрать реакцию",
        children: [
            u_1("div", {
                className: o ? Ue.grid : Ue.quick,
                children: [
                    (o ? i : i.slice(0, 6)).map((h)=>u_1("button", {
                            type: "button",
                            title: h.title,
                            "aria-label": h.title,
                            "aria-pressed": a.has(cK(h)),
                            onClick: (c)=>{
                                const d = c.currentTarget.getBoundingClientRect();
                                As(message.chatId, message.id, h, {
                                    x: d.left + d.width / 2,
                                    y: d.top + d.height / 2,
                                    picker: true
                                });
                                onChosen();
                            },
                            children: u_1("span", {
                                children: u_1(mn, {
                                    emoji: h.type === "emoji" ? h.emoji : ""
                                })
                            })
                        }, cK(h))),
                    !o && i.length > 6 && u_1("button", {
                        type: "button",
                        "aria-label": "Все реакции",
                        onClick: ()=>u(true),
                        className: Ue.more,
                        children: "＋"
                    })
                ]
            }),
            !catalog && u_1("span", {
                className: Ue.hint,
                children: error ?? "Загружаем реакции…"
            }),
            o && u_1("div", {
                className: Ue.footer,
                children: u_1("button", {
                    type: "button",
                    onClick: ()=>u(false),
                    children: "Свернуть"
                })
            })
        ]
    });
}
const Md = 2880 * 60 * 1000;
function zn(e, n = da_1.now()) {
    const r = Date.parse(e.createdAt);
    return !e.unavailable && e.isOutgoing && !e.forwardedFrom && !e.entities?.some((s)=>s.type === "sticker") && e.sendStatus !== "sending" && e.sendStatus !== "failed" && Number.isFinite(r) && n - r < Md;
}
const Ed = ({ size = 18 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            u_1("path", {
                d: "M9 14L4 9L9 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            u_1("path", {
                d: "M4 9H15C17.76 9 20 11.24 20 14V20",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
const xd = ({ size = 18 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            u_1("path", {
                d: "M15 14L20 9L15 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            u_1("path", {
                d: "M20 9H9C6.24 9 4 11.24 4 14V20",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
const Br = ({ size = 18 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            u_1("rect", {
                x: "8",
                y: "8",
                width: "11",
                height: "11",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2"
            }),
            u_1("path", {
                d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            })
        ]
    });
const Rd = ({ size = 18 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            u_1("path", {
                d: "M20 11a8 8 0 1 0-2.34 5.66",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            u_1("path", {
                d: "M20 5v6h-6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
const Td = ({ isOutgoing, hasText = false, copyLabel, isFailed = false, canRestartSend = false, isSending = false, canCancelSend = false, isForwarded = false, canEdit = true, canDeleteForAllOthers = true, readOnly = false, unavailable = false, onAction })=>{
    const [m, g] = d_1(false);
    if (unavailable) {
        return u_1("div", {
            className: ve.menu,
            role: "menu",
            "aria-label": "Действия с сообщением",
            children: u_1("button", {
                role: "menuitem",
                type: "button",
                className: `${ve.item} ${ve.itemDanger}`,
                onClick: ()=>onAction("delete-me"),
                children: [
                    u_1(bD, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Удалить у себя"
                    })
                ]
            })
        });
    }
    const p = !readOnly && (isOutgoing || canDeleteForAllOthers);
    if (isFailed || isSending) {
        return u_1("div", {
            className: ve.menu,
            role: "menu",
            "aria-label": "Действия с сообщением",
            children: [
                isFailed && !readOnly && u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: ve.item,
                    onClick: ()=>onAction("retry"),
                    children: [
                        u_1(Rd, {
                            size: 18
                        }),
                        u_1("span", {
                            children: canRestartSend ? "Отправить заново" : "Повторить отправку"
                        })
                    ]
                }),
                (isFailed || canCancelSend) && u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: `${ve.item} ${ve.itemDanger}`,
                    onClick: ()=>onAction("cancel"),
                    children: [
                        u_1(bD, {
                            size: 18
                        }),
                        u_1("span", {
                            children: isFailed ? "Удалить" : "Отменить отправку"
                        })
                    ]
                }),
                isSending && !canCancelSend && u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: ve.item,
                    disabled: true,
                    children: "Отправляется..."
                }),
                hasText && u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: ve.item,
                    onClick: ()=>onAction("copy"),
                    children: [
                        u_1(Br, {
                            size: 18
                        }),
                        u_1("span", {
                            children: copyLabel ?? "Скопировать текст"
                        })
                    ]
                })
            ]
        });
    }
    if (m) {
        return u_1("div", {
            className: ve.menu,
            role: "menu",
            "aria-label": "Действия с сообщением",
            children: [
                u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: ve.item,
                    onClick: ()=>g(false),
                    children: [
                        u_1(I_1, {
                            size: 16
                        }),
                        u_1("span", {
                            children: "Назад"
                        })
                    ]
                }),
                p && u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: `${ve.item} ${ve.itemDanger}`,
                    onClick: ()=>onAction("delete-all"),
                    children: [
                        u_1(bD, {
                            size: 18
                        }),
                        u_1("span", {
                            children: "Удалить у всех"
                        })
                    ]
                }),
                u_1("button", {
                    role: "menuitem",
                    type: "button",
                    className: `${ve.item} ${ve.itemDanger}`,
                    onClick: ()=>onAction("delete-me"),
                    children: [
                        u_1(bD, {
                            size: 18
                        }),
                        u_1("span", {
                            children: "Удалить у себя"
                        })
                    ]
                })
            ]
        });
    }
    return u_1("div", {
        className: ve.menu,
        role: "menu",
        "aria-label": "Действия с сообщением",
        children: [
            !readOnly && u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("reply"),
                children: [
                    u_1(Ed, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Ответить"
                    })
                ]
            }),
            hasText && u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("copy"),
                children: [
                    u_1(Br, {
                        size: 18
                    }),
                    u_1("span", {
                        children: copyLabel ?? "Скопировать текст"
                    })
                ]
            }),
            isOutgoing && !readOnly && !isForwarded && canEdit && u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("edit"),
                children: [
                    u_1(aV, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Редактировать"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("forward"),
                children: [
                    u_1(xd, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Переслать"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: `${ve.item} ${ve.itemDanger}`,
                onClick: ()=>{
                    if (p) {
                        g(true);
                    } else {
                        onAction("delete-me");
                    }
                },
                children: [
                    u_1(bD, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Удалить"
                    })
                ]
            }),
            u_1("button", {
                role: "menuitem",
                type: "button",
                className: ve.item,
                onClick: ()=>onAction("select"),
                children: [
                    u_1(I_4, {
                        size: 18
                    }),
                    u_1("span", {
                        children: "Выбрать"
                    })
                ]
            })
        ]
    });
};
const $d = ({ menuRef, pos, closing, message, onClose, onReply, onStartSelection, onAction, canDeleteForAllOthers, readOnly = false })=>(h_1(()=>{
        if (closing || !pos.visible || !menuRef || typeof menuRef !== "object" || !menuRef.current) {
            return;
        }
        const menuRef_current = menuRef.current;
        menuRef_current.querySelector("button:not([disabled])")?.focus({
            preventScroll: true
        });
        const f = new MutationObserver(()=>{
            if (!menuRef_current.contains(document.activeElement)) {
                const l = menuRef_current.querySelector('[role="menu"] button:not([disabled])') ?? menuRef_current.querySelector("button:not([disabled])");
                l?.focus({
                    preventScroll: true
                });
                l?.scrollIntoView({
                    block: "nearest",
                    inline: "nearest"
                });
            }
        });
        f.observe(menuRef_current, {
            childList: true,
            subtree: true
        });
        return ()=>f.disconnect();
    }, [
        pos.visible,
        closing,
        menuRef
    ]), aB(u_1("div", {
        ref: menuRef,
        "data-message-menu": true,
        inert: !!closing || !pos.visible,
        "aria-hidden": !!closing || !pos.visible,
        className: `${K.menuLayer} ${closing ? K.menuPopOut : pos.visible ? K.menuPopIn : ""} ym-hide-content`,
        style: {
            position: "fixed",
            maxHeight: pos.maxHeight,
            top: pos.top ?? "auto",
            bottom: pos.bottom ?? "auto",
            left: pos.left ?? "auto",
            right: pos.right ?? "auto",
            margin: 0,
            visibility: pos.visible ? "visible" : "hidden",
            transformOrigin: pos.origin ?? "left top",
            zIndex: 1000,
            alignItems: message.isOutgoing ? "flex-end" : "flex-start"
        },
        onClick: (d)=>d.stopPropagation(),
        onContextMenu: (d)=>d.preventDefault(),
        onKeyDown: (d)=>{
            if (![
                "Tab",
                "ArrowDown",
                "ArrowUp",
                "Home",
                "End"
            ].includes(d.key)) {
                return;
            }
            const l = [
                ...d.currentTarget.querySelectorAll("button:not([disabled])")
            ];
            if (!l.length) {
                return;
            }
            const m = l.indexOf(document.activeElement);
            let g = m;
            if (d.key === "Home") {
                g = 0;
            } else if (d.key === "End") {
                g = l.length - 1;
            } else if (d.key === "ArrowDown") {
                g = (m + 1) % l.length;
            } else if (d.key === "ArrowUp") {
                g = (m - 1 + l.length) % l.length;
            } else if (d.shiftKey && m <= 0) {
                g = l.length - 1;
            } else if (!d.shiftKey && m === l.length - 1) {
                g = 0;
            } else {
                return;
            }
            d.preventDefault();
            d.stopPropagation();
            l[g]?.focus({
                preventScroll: true
            });
        },
        children: [
            !readOnly && message.sendStatus !== "sending" && message.sendStatus !== "failed" && u_1(Sd, {
                message,
                onChosen: onClose
            }),
            u_1(Td, {
                unavailable: message.unavailable,
                isOutgoing: message.isOutgoing,
                hasText: !!message.text,
                copyLabel: message.selectedText ? "Скопировать выделенное" : undefined,
                isFailed: message.sendStatus === "failed",
                canRestartSend: message.canRestartSend,
                isSending: message.sendStatus === "sending",
                canCancelSend: message.canCancelSend,
                isForwarded: !!message.forwardedFrom,
                canEdit: zn(message),
                canDeleteForAllOthers,
                readOnly,
                onAction: (d)=>{
                    if (message.unavailable && d !== "delete-me") {
                        onClose();
                        return;
                    }
                    if (readOnly && [
                        "reply",
                        "edit",
                        "retry",
                        "delete-all"
                    ].includes(d)) {
                        onClose();
                        return;
                    }
                    if (d === "reply" && onReply) {
                        onReply(message);
                    } else if (d === "select" && onStartSelection) {
                        onStartSelection(message.id);
                    } else if (onAction) {
                        onAction(d, message);
                    }
                    onClose();
                }
            })
        ]
    }), document.body));
const Id = new Set([
    ".",
    ",",
    "!",
    "?",
    ";",
    ":"
]);
const Dr = {
    ")": "(",
    "]": "[",
    "}": "{"
};
function Ps(e) {
    const n = {
        ")": 0,
        "]": 0,
        "}": 0
    };
    for (const s of e){
        for (const [o, u] of Object.entries(Dr)){
            s === o ? n[o]++ : s === u && n[o]--;
        }
    }
    let e_length = e.length;
    while(e_length > 0){
        const s = e[e_length - 1];
        if (Id.has(s)) {
            e_length--;
            continue;
        }
        if (Object.hasOwn(Dr, s) && n[s] > 0) {
            n[s]--;
            e_length--;
            continue;
        }
        break;
    }
    return {
        urlText: e.slice(0, e_length),
        trailing: e.slice(e_length)
    };
}
const pn = "itd:notice-purchase";
function Bs(e) {
    try {
        const n = new URL(e);
        if (![
            "https://xn--d1ah4a.com",
            "https://stage.xn--d1ah4a.com"
        ].includes(n.origin) || n.username || n.password || n.hash || n.pathname !== "/chats" || [
            ...n.searchParams
        ].length !== 1) {
            return null;
        }
        if (n.searchParams.get("subscription") === "self") {
            return {
                href: "/chats?subscription=self",
                label: "Продлить подписку"
            };
        }
        const r = n.searchParams.get("gift");
        if (r && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r)) {
            return {
                href: `/chats?gift=${r.toLowerCase()}`,
                label: "Продлить подарок"
            };
        }
    } catch  {}
    return null;
}
const Ds = /(?:https?:\/\/|www\.)(?:(?![,;](?:https?:\/\/|www\.))[^\s<>"'«»“”])+/giu;
const Ad = /(?:https?:\/\/|www\.)[^\s<>"']+|@[A-Za-z0-9_]{1,32}/giu;
function _s(e) {
    const n = e.toLowerCase().startsWith("www.") ? `https://${e}` : e;
    try {
        const r = new URL(n);
        if (r.protocol !== "http:" && r.protocol !== "https:") {
            return null;
        }
        const s = new TextEncoder().encode(r.href);
        const o = String.fromCharCode(...s);
        return `/external?url=${encodeURIComponent(btoa(o))}`;
    } catch  {
        return null;
    }
}
function Fs(e, n = false) {
    const r = [];
    let s = 0;
    for (const o of e.matchAll(n ? Ad : Ds)){
        const u = o.index ?? 0;
        if (u > s) {
            r.push(e.slice(s, u));
        }
        const i = o[0];
        if (!n && /[\p{L}\p{N}_@]/u.test(e[u - 1] ?? "")) {
            r.push(i);
            s = u + i.length;
            continue;
        }
        if (i.startsWith("@")) {
            if ([
                e[u - 1] ?? "",
                e[u + i.length] ?? ""
            ].some((l)=>/[\p{L}\p{N}_@]/u.test(l))) {
                r.push(i);
            } else {
                const l = `/@${encodeURIComponent(i.slice(1))}`;
                r.push(u_1("a", {
                    href: l,
                    className: K.messageLink,
                    onClick: (m)=>{
                        m.stopPropagation();
                        if (!m.ctrlKey && !m.metaKey && !m.shiftKey && !m.altKey && m.button === 0) {
                            m.preventDefault();
                            $_1(l);
                        }
                    },
                    children: i
                }, `${u}:${i}`));
            }
            s = u + i.length;
            continue;
        }
        const { urlText: a, trailing: h } = Ps(i);
        const c = n ? Bs(a) : null;
        if (c) {
            const f = e.startsWith("Йоу! Подарочный месяц НУКСТЫ,") && c.href === "/chats?subscription=self";
            r.push(u_1("a", {
                href: c.href,
                className: f ? K.purchaseAction : K.messageLink,
                onClick: (l)=>{
                    l.stopPropagation();
                    if (!l.ctrlKey && !l.metaKey && !l.shiftKey && !l.altKey && l.button === 0) {
                        l.preventDefault();
                        window.dispatchEvent(new CustomEvent(pn, {
                            detail: a
                        }));
                    }
                },
                children: f ? "Оплатить подписку" : c.label
            }, `${u}:${a}`));
            if (h) {
                r.push(h);
            }
            s = u + i.length;
            continue;
        }
        const d = _s(a);
        if (d && a) {
            r.push(u_1("a", {
                href: d,
                target: "_blank",
                rel: "noopener noreferrer",
                className: K.messageLink,
                onClick: (f)=>f.stopPropagation(),
                children: a
            }, `${u}:${a}`));
            if (h) {
                r.push(h);
            }
        } else {
            r.push(i);
        }
        s = u + i.length;
    }
    if (s < e.length) {
        r.push(e.slice(s));
    }
    return r;
}
function Ld({ source, children }) {
    const [r, s] = d_1(null);
    const o = A_1(null);
    const u = r === source;
    b6(()=>{
        u && o.current?.focus({
            preventScroll: true
        });
    }, [
        u
    ]);
    if (u) {
        return u_1("span", {
            ref: o,
            tabIndex: -1,
            children
        });
    }
    return u_1("button", {
        type: "button",
        className: K.spoiler,
        "aria-label": "Показать скрытый текст",
        onClick: (i)=>{
            i.stopPropagation();
            s(source);
        },
        children: "••••"
    });
}
const Pd = [
    {
        text: `Спасибо тебе, ведь ты сделал счастливее еще одного пользователя ИТД!!
В твоем профиле появился новый пин, беги смотреть`,
        emoji: "🎁",
        pin: "/pins/nuksta-gift-giver.gif",
        label: "Пин за подаренную НУКСТУ"
    },
    {
        text: "Вам подарили НУКСТУ",
        emoji: "💎",
        pin: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
        label: "Пин НУКСТЫ"
    }
];
function Bd(e) {
    const n = Pd.find((s)=>e.startsWith(`${s.text} ${s.emoji}
`));
    if (!n) {
        return null;
    }
    const r = n.text.length + 1 + n.emoji.length;
    return u_1(S_1, {
        children: [
            n.text,
            " ",
            u_1("img", {
                className: K.giftNoticePin,
                src: n.pin,
                alt: n.label,
                width: 18,
                height: 18
            }),
            Fs(dc_1(e.slice(r), 8), true)
        ]
    });
}
function Dd(e, n = [], r = false) {
    const s = db(e, n);
    if (!s.length) {
        return r && Bd(e) || Fs(dc_1(e, 8), r);
    }
    const o = [];
    for (const c of e.matchAll(Ds)){
        const d = c.index ?? 0;
        if (/[\p{L}\p{N}_@]/u.test(e[d - 1] ?? "")) {
            continue;
        }
        const { urlText: f } = Ps(c[0]);
        if (!s.some((l)=>l.type === "text_link" && l.offset < d + f.length && l.offset + l.length > d)) {
            o.push({
                offset: d,
                length: f.length,
                url: f
            });
        }
    }
    const u = [
        ...new Set([
            0,
            e.length,
            ...s.flatMap((c)=>[
                    c.offset,
                    c.offset + c.length
                ]),
            ...o.flatMap((c)=>[
                    c.offset,
                    c.offset + c.length
                ])
        ])
    ].sort((c, d)=>c - d);
    const i = (c, d)=>u.filter((f)=>f >= c && f < d).map((f)=>{
            const l = Math.min(d, u[u.indexOf(f) + 1] ?? d);
            const m = s.filter((y)=>y.offset <= f && y.offset + y.length >= l);
            const g = m.some((y)=>y.type === "code");
            let p = dc_1(e.slice(f, l), 8);
            const S = m.find((y)=>y.type === "text_link") ?? o.find((y)=>y.offset <= f && y.offset + y.length >= l);
            const M = !g && S?.url ? _s(S.url) : null;
            if (M) {
                p = u_1("a", {
                    href: M,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: K.messageLink,
                    title: S.url,
                    onClick: (y)=>y.stopPropagation(),
                    children: p
                });
            }
            if (g) {
                p = u_1("code", {
                    className: K.inlineCode,
                    children: p
                });
            }
            if (m.some((y)=>y.type === "bold")) {
                p = u_1("strong", {
                    children: p
                });
            }
            if (m.some((y)=>y.type === "italic")) {
                p = u_1("em", {
                    children: p
                });
            }
            if (m.some((y)=>y.type === "underline")) {
                p = u_1("u", {
                    children: p
                });
            }
            if (m.some((y)=>y.type === "strike")) {
                p = u_1("s", {
                    children: p
                });
            }
            return u_1(S_1, {
                children: p
            }, f);
        });
    const a = [];
    let h = 0;
    for (const [c, d] of dd_1(e, n)){
        c > h && a.push(i(h, c)), a.push(u_1(Ld, {
            source: e,
            children: i(c, d)
        }, `spoiler:${c}:${d}`)), h = d;
    }
    if (h < e.length) {
        a.push(i(h, e.length));
    }
    return a;
}
function _d(e, n) {
    const r = n.trim().normalize("NFC");
    if (r.length < 2) {
        return e;
    }
    const s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[её]/gi, "[её]").replace(/[ \u00a0\u202f]/g, "[   ]");
    let o = 0;
    const u = (i)=>{
        if (Array.isArray(i)) {
            return i.map(u);
        }
        if (typeof i === "string") {
            const a = i.normalize("NFC");
            const h = [
                ...a.matchAll(new RegExp(s, "giu"))
            ];
            if (!h.length) {
                return i;
            }
            const c = [];
            let d = 0;
            for (const f of h){
                const l = f.index;
                c.push(a.slice(d, l), u_1("mark", {
                    className: K.searchHit,
                    children: f[0]
                }, `hit-${o++}`));
                d = l + f[0].length;
            }
            c.push(a.slice(d));
            return c;
        }
        if (de(i)) {
            const a = i;
            return df_1(a, {}, u(a.props.children));
        }
        return i;
    };
    return u(e);
}
function Fd(e) {
    if (e.text && e.text.length > 0 || e.replyTo) {
        return false;
    }
    const e_attachments = e.attachments;
    if (!e_attachments || e_attachments.length === 0) {
        return false;
    }
    if (e_attachments.length === 1 && e_attachments[0].type === "video") {
        return true;
    }
    return e_attachments.every((r)=>r.type === "image");
}
const Os = new RegExp("^(?:\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2,8}\\u{E007F}|\\p{Regional_Indicator}{2}|[0-9#*]\\uFE0F?\\u20E3|\\p{Extended_Pictographic}\\uFE0F?\\p{Emoji_Modifier}?(?:\\u200D\\p{Extended_Pictographic}\\uFE0F?\\p{Emoji_Modifier}?)*)$", "u");
const _r = (e)=>Os.test(e) && !/^[©®™]$/u.test(e);
const Fr = typeof Intl.Segmenter === "function" ? new Intl.Segmenter(undefined, {
    granularity: "grapheme"
}) : null;
function Od(e) {
    if (!Fr) {
        const r = e.trim();
        const s = new RegExp(Os.source.slice(1, -1), "gu");
        let o = 0;
        let u = 0;
        for (const i of r.matchAll(s)){
            if (!/^\s*$/u.test(r.slice(u, i.index)) || !_r(i[0]) || ++o > 6) {
                return 0;
            }
            u = i.index + i[0].length;
        }
        if (/^\s*$/u.test(r.slice(u))) {
            return o;
        }
        return 0;
    }
    const n = [
        ...Fr.segment(e.trim())
    ].map((r)=>r.segment).filter((r)=>!/^\s+$/u.test(r));
    if (n.length > 0 && n.length <= 6 && n.every(_r)) {
        return n.length;
    }
    return 0;
}
function jd(e) {
    const n = A_1(e);
    n.current = e;
    const r = A_1(0);
    const s = A_1(false);
    b6(()=>()=>{
            r.current++;
        }, []);
    return async ()=>{
        if (!e || s.current) {
            return;
        }
        const r_current = r.current;
        const u = az();
        const i = K_1.getState().profile?.id;
        const pathname = window.location.pathname;
        const h = ()=>r_current === r.current && n.current === e && au_1(u) && K_1.getState().profile?.id === i && window.location.pathname === pathname;
        s.current = true;
        try {
            const c = await aw.getProfileByUsername(e, {
                silent: true
            });
            if (!h()) {
                return;
            }
            if (c.id === e && c.username && !c.isDeleted) {
                $_1(`/@${encodeURIComponent(c.username)}`);
            } else {
                aF.error("Профиль пользователя недоступен");
            }
        } catch  {
            if (h()) {
                aF.error("Не удалось открыть профиль");
            }
        } finally{
            s.current = false;
        }
    };
}
function Hd(e) {
    const n = document.getSelection();
    if (!e || !n || n.isCollapsed || !n.rangeCount) {
        return;
    }
    const r = n.getRangeAt(0);
    if (!e.contains(r.startContainer) || !e.contains(r.endContainer)) {
        return;
    }
    const s = n.toString();
    if (s.trim()) {
        return s;
    }
}
const thumbnail = "afh3";
const Wd = {
    thumbnail
};
function js({ chatId, attachment }) {
    const { ref, visible } = nn();
    const o = attachment?.type === "image" ? attachment : null;
    const { src, refreshSrc } = cS(chatId, o?.id, o?.thumbUrl || o?.url || "", visible && !!o);
    if (o) {
        return u_1("span", {
            ref,
            className: Wd.thumbnail,
            "aria-hidden": "true",
            children: u_1(sr, {
                src,
                refreshSrc,
                thumbhash: o.thumbhash,
                alt: ""
            })
        });
    }
    return null;
}
const Ud = ({ onToggleSelection, authorName, message, searchQuery = "", menuOpen, menuPoint = null, onOpenMenu, onCloseMenu, onReply, isSelecting, isSelected, onStartSelection, onAction, canDeleteForAllOthers, readOnly = false, onReplyClick, groupPosition = "solo" })=>{
    const { text, isOutgoing, isRead, isEdited, createdAt, forwardedFrom, replyTo, sendStatus } = message;
    const F = readOnly || !!message.unavailable;
    const H = !message.attachments?.length && !message.sharedPostId ? Od(text ?? "") : 0;
    const Y = A_1(null);
    const Q = A_1(null);
    const menuRef = A_1(null);
    const R = A_1(false);
    const [D, X] = d_1();
    const I = jd(forwardedFrom?.senderId);
    h_1(()=>{
        R.current && !menuOpen && (!document.activeElement || document.activeElement === document.body || document.activeElement.closest("[data-message-menu]")) && Y.current?.focus({
            preventScroll: true
        });
        R.current = menuOpen;
    }, [
        menuOpen
    ]);
    const q = (V)=>{
        cancelClose();
        X(Hd(Q.current?.querySelector("[data-message-text]") ?? null));
        const Me = Q.current?.getBoundingClientRect();
        onOpenMenu(V, Me ? {
            x: isOutgoing ? Me.right : Me.left,
            y: Me.bottom
        } : null);
    };
    const { dragX, isDragging, replyOpacity, replyScale } = au({
        rowRef: Y,
        message,
        onReply: F ? undefined : onReply,
        replyDisabled: F,
        onOpenMenu: q,
        isSelecting
    });
    const { closing, requestClose, cancelClose } = or({
        open: menuOpen,
        onClosed: onCloseMenu
    });
    const z = ir({
        open: menuOpen,
        interactive: !closing,
        point: menuPoint,
        menuRef,
        anchorRef: Q,
        align: isOutgoing ? "end" : "start",
        onClose: requestClose
    });
    const W = H > 0 && !replyTo && !forwardedFrom;
    const ge = Fd(message) || !!message.sharedPostId && !text || W;
    const Be = !ge && (groupPosition === "solo" || groupPosition === "last");
    const Se = lu(message.reactions);
    const _ = Se.length > 0;
    const te = _ && Se.every((V)=>V.leaving);
    const ce = message.attachments ?? [];
    const J = !!text && ce.length > 0 && (ce.every((V)=>V.type === "image") || ce.length === 1 && ce[0].type === "video") && !replyTo && !forwardedFrom;
    return u_1("div", {
        ref: Y,
        role: isSelecting && !message.unavailable ? "checkbox" : "group",
        "aria-checked": isSelecting && !message.unavailable ? isSelected : undefined,
        "aria-label": isOutgoing ? "Вы" : authorName || "Собеседник",
        tabIndex: 0,
        onContextMenu: (V)=>{
            V.preventDefault();
            V.stopPropagation();
            cancelClose();
            q(message.id);
        },
        onKeyDown: (V)=>{
            if (V.target === Y.current) {
                if (isSelecting) {
                    if ((V.key === " " || V.key === "Enter") && !message.unavailable) {
                        V.preventDefault();
                        onToggleSelection?.(message.id);
                    }
                    return;
                }
                if (V.key === "ContextMenu" || V.shiftKey && V.key === "F10" || V.key === "Enter") {
                    V.preventDefault();
                    q(message.id);
                }
            }
        },
        className: `${K.row} ${isOutgoing ? K.outgoing : K.incoming} ${menuOpen ? K.menuOpen : ""} ${isSelecting ? K.selecting : ""} ${isSelected ? K.selected : ""}`,
        children: [
            u_1("div", {
                className: K.replyIndicator,
                style: {
                    opacity: replyOpacity,
                    transform: `scale(${replyScale})`
                },
                "aria-hidden": "true",
                children: u_1("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: u_1("path", {
                        d: "M10 9V5l-7 7 7 7v-4c5 0 8.5 1.5 11 5-1-5-4-10-11-11z",
                        fill: "currentColor"
                    })
                })
            }),
            u_1("div", {
                className: `${K.selectMark} ${isSelecting ? K.selectMarkVisible : ""}`,
                "aria-hidden": "true",
                children: isSelected ? u_1("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: u_1("path", {
                        d: "M3 8.5L6.5 12L13 5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }) : null
            }),
            u_1("div", {
                "data-bubble": true,
                inert: isSelecting || undefined,
                className: K.bubbleWrap,
                style: {
                    transform: `translateX(${dragX}px)`,
                    transition: isDragging ? "none" : "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)"
                },
                onContextMenu: (V)=>{
                    V.preventDefault();
                    V.stopPropagation();
                    cancelClose();
                    q(message.id);
                },
                children: [
                    u_1("div", {
                        ref: Q,
                        "data-message-bubble": true,
                        className: [
                            K.bubble,
                            _ ? K.bubbleWithReactions : "",
                            isOutgoing ? K.bubbleOut : K.bubbleIn,
                            K[`group_${groupPosition}`],
                            ge ? K.bubbleFrameless : "",
                            W ? K.bubbleEmoji : "",
                            J ? K.bubbleCaption : "",
                            message.sharedPostId ? K.bubbleSharedPost : ""
                        ].filter(Boolean).join(" "),
                        children: [
                            Be && u_1("span", {
                                className: K.tail,
                                "aria-hidden": "true",
                                children: u_1(Xi, {
                                    size: 10,
                                    flipped: isOutgoing
                                })
                            }),
                            forwardedFrom && u_1("div", {
                                className: K.forwardedHeader,
                                children: u_1("button", {
                                    type: "button",
                                    className: K.forwardedLabel,
                                    disabled: !forwardedFrom.senderId,
                                    onClick: (V)=>{
                                        V.stopPropagation();
                                        I();
                                    },
                                    children: dg(forwardedFrom)
                                })
                            }),
                            replyTo && u_1("div", {
                                className: `${K.replyBlock} ${isOutgoing ? K.replyBlockOut : K.replyBlockIn}`,
                                role: "button",
                                tabIndex: replyTo.unavailable ? -1 : 0,
                                "aria-disabled": replyTo.unavailable || undefined,
                                onClick: (V)=>{
                                    if (!(isSelecting || replyTo.unavailable)) {
                                        V.stopPropagation();
                                        onReplyClick?.(replyTo.id);
                                    }
                                },
                                onKeyDown: (V)=>{
                                    if (!(![
                                        "Enter",
                                        " "
                                    ].includes(V.key) || isSelecting || replyTo.unavailable)) {
                                        V.preventDefault();
                                        V.stopPropagation();
                                        onReplyClick?.(replyTo.id);
                                    }
                                },
                                children: [
                                    u_1("div", {
                                        className: K.replyAccentBar
                                    }),
                                    u_1(js, {
                                        chatId: message.chatId,
                                        attachment: replyTo.attachment
                                    }, replyTo.id),
                                    u_1("div", {
                                        className: K.replyContent,
                                        children: [
                                            u_1("span", {
                                                className: K.replyAuthorName,
                                                children: replyTo.authorName
                                            }),
                                            u_1("span", {
                                                className: K.replyPreviewText,
                                                children: replyTo.preview || "Вложение"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            message.sharedPostId && u_1(Gu, {
                                postId: message.sharedPostId
                            }),
                            u_1(Uu, {
                                message,
                                frameless: ge,
                                flushMedia: J
                            }),
                            (()=>{
                                const V = u_1(Yu, {
                                    createdAt,
                                    isEdited,
                                    isOutgoing,
                                    isRead,
                                    overlay: ge && !W && !message.sharedPostId && !_,
                                    sendStatus
                                });
                                const Me = text ? u_1("div", {
                                    dir: "auto",
                                    className: `${K.text} ${message.unavailable ? K.unavailableText : ""} ${H ? K.emojiText : ""}`,
                                    "data-emoji-count": H || undefined,
                                    children: [
                                        u_1("span", {
                                            "data-message-text": true,
                                            children: message.unavailable ? "Не удалось прочитать сообщение" : _d(Dd(text, message.entities, message.authorId === aL), searchQuery)
                                        }),
                                        !_ && V
                                    ]
                                }) : !_ && V;
                                return u_1(S_1, {
                                    children: [
                                        Me,
                                        _ ? u_1("div", {
                                            className: `${K.reactionFooterMotion} ${Se.every((me)=>me.animate !== false) ? K.reactionFooterEntering : ""} ${te ? K.reactionFooterLeaving : ""}`,
                                            "data-reaction-footer-motion": true,
                                            children: u_1("div", {
                                                className: K.reactionFooterClip,
                                                children: u_1("div", {
                                                    className: K.reactionFooter,
                                                    "data-reaction-footer": true,
                                                    children: [
                                                        u_1(Pr, {
                                                            message,
                                                            entries: Se,
                                                            disabled: F || isSelecting
                                                        }),
                                                        V
                                                    ]
                                                })
                                            })
                                        }) : u_1(Pr, {
                                            message,
                                            entries: Se,
                                            disabled: F || isSelecting
                                        })
                                    ]
                                });
                            })()
                        ]
                    }),
                    isOutgoing && sendStatus === "failed" && !F && u_1("button", {
                        type: "button",
                        className: K.sendFailure,
                        "aria-label": message.canRestartSend ? "Отправить заново" : "Повторить отправку",
                        onClick: (V)=>{
                            V.stopPropagation();
                            onAction?.("retry", message);
                        },
                        children: [
                            "Не отправлено. ",
                            u_1("span", {
                                children: message.canRestartSend ? "Отправить заново" : "Повторить"
                            })
                        ]
                    })
                ]
            }),
            menuOpen && z && u_1($d, {
                readOnly: F,
                menuRef,
                pos: z,
                closing,
                message: D ? {
                    ...message,
                    selectedText: D
                } : message,
                onClose: requestClose,
                onReply,
                onStartSelection,
                onAction,
                canDeleteForAllOthers
            })
        ]
    });
};
const qd = bC(Ud);
const Vd = 3600 * 1000;
function Gd(e) {
    const n = [];
    e.forEach((r, s)=>{
        const o = e[s - 1];
        const u = new Date(r.createdAt);
        const i = r.clientKey ?? r.id;
        if (!o || !dh_1(o.createdAt, r.createdAt)) {
            n.push({
                kind: "day",
                key: `day-${u.getFullYear()}-${u.getMonth()}-${u.getDate()}`,
                date: r.createdAt
            });
        } else if (u.getTime() - Date.parse(o.createdAt) >= Vd) {
            n.push({
                kind: "pause",
                key: `pause-${i}`,
                date: r.createdAt
            });
        }
        n.push({
            kind: "msg",
            key: i,
            index: s
        });
    });
    return n;
}
function Kd({ messagesRef, selectedIds, setSelectedIds }) {
    const s = A_1(selectedIds);
    s.current = selectedIds;
    const o = A_1(false);
    return {
        handleItemMouseDown: q_1((i, a)=>{
            if (a.button !== 0 || a.target?.closest("[data-bubble]")) {
                return;
            }
            const { clientX, clientY } = a;
            const d = new Set(s.current);
            let f = false;
            let l = i;
            const m = (S)=>{
                const messagesRef_current = messagesRef.current;
                const y = Math.min(i, S);
                const P = Math.max(i, S);
                const N = new Set(d);
                for(let x = y; x <= P; x++){
                    if (messagesRef_current[x] && !messagesRef_current[x].unavailable) {
                        N.add(messagesRef_current[x].id);
                    }
                }
                setSelectedIds(N);
            };
            const g = (S)=>{
                if (!f) {
                    const N = S.clientX - clientX;
                    const x = S.clientY - clientY;
                    if (Math.abs(N) < 5 && Math.abs(x) < 5) {
                        return;
                    }
                    if (Math.abs(N) > Math.abs(x)) {
                        window.removeEventListener("mousemove", g);
                        window.removeEventListener("mouseup", p);
                        return;
                    }
                    f = true;
                    document.getSelection()?.removeAllRanges();
                    document.body.style.userSelect = "none";
                    m(i);
                }
                const y = document.elementFromPoint(S.clientX, S.clientY)?.closest("[data-message-index]");
                if (!y) {
                    return;
                }
                const P = Number(y.dataset.messageIndex);
                if (!(isNaN(P) || P === l)) {
                    l = P;
                    m(P);
                }
            };
            const p = ()=>{
                if (f) {
                    m(l);
                    document.body.style.userSelect = "";
                    document.getSelection()?.removeAllRanges();
                    o.current = true;
                    setTimeout(()=>{
                        o.current = false;
                    }, 80);
                }
                window.removeEventListener("mousemove", g);
                window.removeEventListener("mouseup", p);
            };
            window.addEventListener("mousemove", g);
            window.addEventListener("mouseup", p);
        }, [
            setSelectedIds
        ]),
        dragJustFinishedRef: o
    };
}
const unreadDivider = "x04O";
const Yd = "Bnyg";
const emptyState = "WSxS";
const loadingStatus = "IWTb";
const virtualContent = "Fsyu";
const virtualItem = "Me3H";
const enterUp = "CoVY";
const enterDown = "ldxt";
const daySeparator = "Ro6T";
const jumpFlash = "hWZm";
const floatingDate = "kJZo";
const announcement = "WEPr";
const mt = {
    unreadDivider,
    list: Yd,
    emptyState,
    loadingStatus,
    virtualContent,
    virtualItem,
    enterUp,
    enterDown,
    daySeparator,
    jumpFlash,
    floatingDate,
    announcement
};
function ah({ scrollEl, messagesRef, rowsRef, observedElsRef }) {
    const [o, u] = d_1(()=>new Map);
    const i = A_1(null);
    const [a, h] = d_1(false);
    const c = A_1(false);
    c.current = a;
    const [flashId, f] = d_1(null);
    const l = A_1(undefined);
    const m = A_1(null);
    const flash = q_1((M)=>{
        const P = messagesRef.current.find((N)=>N.id === M)?.clientKey ?? M;
        m.current = P;
        u((N)=>{
            if (N.get(P) === "shown") {
                return N;
            }
            const x = new Map(N);
            x.set(P, "shown");
            return x;
        });
        f(M);
        clearTimeout(l.current);
        l.current = window.setTimeout(()=>{
            l.current = undefined;
            m.current = null;
            f(null);
        }, 1700);
    }, []);
    h_1(()=>()=>{
            clearTimeout(l.current);
        }, []);
    const seedAllShown = q_1(()=>{
        u(()=>{
            const M = new Map;
            for (const y of rowsRef.current){
                M.set(y.key, "shown");
            }
            return M;
        });
    }, []);
    h_1(()=>{
        if (!scrollEl || a) {
            return;
        }
        const M = ()=>h(true);
        scrollEl.addEventListener("wheel", M, {
            passive: true
        });
        scrollEl.addEventListener("touchmove", M, {
            passive: true
        });
        scrollEl.addEventListener("keydown", M);
        return ()=>{
            scrollEl.removeEventListener("wheel", M);
            scrollEl.removeEventListener("touchmove", M);
            scrollEl.removeEventListener("keydown", M);
        };
    }, [
        scrollEl,
        a
    ]);
    h_1(()=>{
        const M = scrollEl;
        if (!M) {
            return;
        }
        const y = new Map;
        const P = new Set;
        let N = 0;
        const x = ()=>{
            N = 0;
            if (!(y.size === 0 && P.size === 0)) {
                u(($)=>{
                    let O = false;
                    const F = new Map($);
                    for (const H of P){
                        if (F.delete(H)) {
                            O = true;
                        }
                    }
                    for (const [H, Y] of y){
                        if (!F.has(H)) {
                            F.set(H, H === m.current ? "shown" : Y);
                            O = true;
                        }
                    }
                    if (O) {
                        return F;
                    }
                    return $;
                });
                y.clear();
                P.clear();
            }
        };
        const k = new IntersectionObserver(($)=>{
            for (const O of $){
                const H = O.target.dataset.animKey;
                if (H) {
                    if (O.isIntersecting) {
                        if (!c.current) {
                            y.set(H, "shown");
                        } else {
                            const { rootBounds: Y, boundingClientRect: Q } = O;
                            let C = "up";
                            if (Y) {
                                const R = Y.top + Y.height / 2;
                                C = Q.top + Q.height / 2 >= R ? "up" : "down";
                            }
                            y.set(H, C);
                        }
                        P.delete(H);
                    } else {
                        P.add(H);
                        y.delete(H);
                    }
                }
            }
            if ((y.size > 0 || P.size > 0) && N === 0) {
                N = requestAnimationFrame(x);
            }
        }, {
            root: M,
            threshold: 0.01
        });
        i.current = k;
        for (const $ of observedElsRef.current.values()){
            k.observe($);
        }
        return ()=>{
            k.disconnect();
            i.current = null;
            if (N) {
                cancelAnimationFrame(N);
            }
        };
    }, [
        scrollEl
    ]);
    return {
        flash,
        flashId,
        enterObserverRef: i,
        enterClassFor: (M)=>{
            switch(o.get(M)){
                case "down":
                    return mt.enterDown;
                case "up":
                    return mt.enterUp;
                case "shown":
                    return;
                default:
                    return;
            }
        },
        seedAllShown
    };
}
const xn = 320;
function ch({ scrollRef, messagesRef }) {
    const r = A_1(null);
    const s = A_1(null);
    const o = A_1(null);
    const u = q_1(()=>{
        if (o.current) {
            clearTimeout(o.current);
            o.current = null;
        }
        r.current?.remove();
        r.current = null;
        s.current = null;
        const c = scrollRef.current?.firstElementChild;
        if (c) {
            c.style.transition = "";
            c.style.transform = "";
            c.style.willChange = "";
        }
    }, []);
    const i = q_1((c)=>{
        const scrollRef_current = scrollRef.current;
        if (!scrollRef_current || !scrollRef_current.parentElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }
        u();
        const f = scrollRef_current.cloneNode(true);
        f.style.position = "absolute";
        f.style.inset = "0";
        f.style.overflow = "hidden";
        f.style.zIndex = "3";
        f.style.pointerEvents = "none";
        const backgroundColor = getComputedStyle(scrollRef_current.parentElement).backgroundColor;
        f.style.background = backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)" ? backgroundColor : "var(--chatWindow)";
        f.setAttribute("aria-hidden", "true");
        scrollRef_current.parentElement.appendChild(f);
        f.scrollTop = scrollRef_current.scrollTop;
        r.current = f;
        s.current = c;
    }, [
        u
    ]);
    h_1(()=>(di_1((c, d)=>{
            const f = messagesRef.current[0];
            if (!(!f || f.chatId !== c)) {
                i(d);
            }
        }), ()=>{
            di_1(null);
            u();
        }), [
        i,
        u
    ]);
    const runSlide = q_1(()=>{
        const scrollRef_current = scrollRef.current;
        const r_current = r.current;
        const s_current = s.current;
        const l = scrollRef_current?.firstElementChild;
        if (!scrollRef_current || !r_current || !s_current || !l) {
            u();
            return;
        }
        const c_clientHeight = scrollRef_current.clientHeight;
        l.style.transition = "none";
        l.style.willChange = "transform";
        l.style.transform = `translateY(${s_current === "older" ? -c_clientHeight : c_clientHeight}px)`;
        requestAnimationFrame(()=>{
            l.style.transition = `transform ${xn}ms ease-in-out`;
            l.style.transform = "translateY(0px)";
            r_current.style.transition = `transform ${xn}ms ease-in-out`;
            r_current.style.transform = `translateY(${s_current === "older" ? c_clientHeight : -c_clientHeight}px)`;
            o.current = window.setTimeout(()=>u(), xn + 40);
        });
    }, [
        u
    ]);
    const awaitScrollEnd = q_1((c, d)=>{
        let c_scrollTop = c.scrollTop;
        let l = 0;
        let m = 0;
        const g = ()=>{
            if (!c.isConnected) {
                return;
            }
            m++;
            const c_scrollTop_1 = c.scrollTop;
            if (c_scrollTop_1 === c_scrollTop) {
                l++;
            } else {
                l = 0;
                c_scrollTop = c_scrollTop_1;
            }
            if (m > 6 && l >= 3 || m > 600) {
                d();
                return;
            }
            requestAnimationFrame(g);
        };
        requestAnimationFrame(g);
    }, []);
    return {
        runSlide,
        cleanupSlide: u,
        awaitScrollEnd
    };
}
function lh({ scrollIntent, scrollRef, messagesRef, rowsRef, pinToBottomRef, getMeasuredHeights, estimatedRowHeight, slide, flash, seedAllShown }) {
    const { runSlide, cleanupSlide, awaitScrollEnd } = slide;
    const m = bt_1((N)=>N.consumeScrollIntent);
    const g = A_1(null);
    const p = A_1(0);
    const S = A_1(0);
    const M = q_1((N, x, k = "auto")=>{
        const $ = rowsRef.current.findIndex((C)=>C.kind === "msg" && messagesRef.current[C.index]?.id === x);
        if ($ < 0) {
            return;
        }
        const O = getMeasuredHeights();
        let H = parseFloat(getComputedStyle(N).paddingTop) || 0;
        for(let C = 0; C < $; C++){
            H += O.get(rowsRef.current[C].key) ?? estimatedRowHeight;
        }
        const Y = O.get(rowsRef.current[$].key) ?? estimatedRowHeight;
        const Q = N.scrollHeight - N.clientHeight;
        N.scrollTo({
            top: Math.max(0, Math.min(H - (N.clientHeight - Y) / 2, Q)),
            behavior: k
        });
    }, [
        getMeasuredHeights
    ]);
    const y = q_1((N, x, k = "auto", $, O = 0)=>{
        const F = N.querySelector(`[data-message-id="${CSS.escape(x)}"]`);
        if (!F) {
            return false;
        }
        if ($ === "start") {
            const H = parseFloat(getComputedStyle(N).paddingTop) || 0;
            const Y = N.parentElement && parseFloat(getComputedStyle(N.parentElement).getPropertyValue("--chat-composer-height")) || 80;
            const Q = N.clientHeight - H - Y - F.getBoundingClientRect().height;
            const C = Math.max(Math.min(0, Q), Math.min(O, Math.max(0, Q)));
            N.scrollTo({
                top: N.scrollTop + F.getBoundingClientRect().top - N.getBoundingClientRect().top - H - C,
                behavior: k
            });
        } else {
            F.scrollIntoView({
                block: "center",
                behavior: k
            });
        }
        return true;
    }, []);
    const P = q_1((N)=>{
        const scrollRef_current = scrollRef.current;
        if (!scrollRef_current) {
            return;
        }
        const matches = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const $ = ()=>{
            if (g.current?.token === N.token) {
                g.current = null;
            }
            m(N.token);
        };
        if (N.kind === "bottom") {
            if (N.windowReplaced || matches) {
                scrollRef_current.scrollTop = scrollRef_current.scrollHeight;
                requestAnimationFrame(()=>{
                    scrollRef_current.scrollTop = scrollRef_current.scrollHeight;
                    requestAnimationFrame(()=>{
                        scrollRef_current.scrollTop = scrollRef_current.scrollHeight;
                        runSlide();
                        $();
                    });
                });
            } else {
                scrollRef_current.scrollTo({
                    top: scrollRef_current.scrollHeight,
                    behavior: "smooth"
                });
                $();
            }
            return;
        }
        const N_messageId = N.messageId;
        if (!N_messageId || !messagesRef.current.some((Q)=>Q.id === N_messageId)) {
            cleanupSlide();
            scrollRef_current.scrollTop = scrollRef_current.scrollHeight;
            $();
            return;
        }
        if (!N.windowReplaced && !matches) {
            if (N.highlight) {
                flash(N_messageId);
            }
            if (!y(scrollRef_current, N_messageId, "smooth")) {
                M(scrollRef_current, N_messageId, "smooth");
            }
            awaitScrollEnd(scrollRef_current, ()=>{
                if (g.current?.token !== N.token) {
                    return;
                }
                let Q = 0;
                let C = 0;
                const R = ()=>{
                    if (!(g.current?.token !== N.token || !scrollRef_current.isConnected)) {
                        if (y(scrollRef_current, N_messageId)) {
                            C++;
                        } else {
                            M(scrollRef_current, N_messageId);
                        }
                        if (C >= 2 || ++Q >= 10) {
                            $();
                            return;
                        }
                        requestAnimationFrame(R);
                    }
                };
                R();
            });
            return;
        }
        M(scrollRef_current, N_messageId);
        let F = 0;
        let H = 0;
        const Y = ()=>{
            if (g.current?.token !== N.token || !scrollRef_current.isConnected) {
                return;
            }
            F++;
            const scrollRef_current_scrollTop = scrollRef_current.scrollTop;
            if (y(scrollRef_current, N_messageId, "auto", N.align, N.viewportOffset)) {
                H = N.viewportOffset === undefined || Math.abs(scrollRef_current.scrollTop - scrollRef_current_scrollTop) < 0.5 ? H + 1 : 0;
            } else {
                H = 0;
                M(scrollRef_current, N_messageId);
            }
            const C = N.viewportOffset !== undefined;
            if (H >= (C ? 4 : 2) && (!C || F >= 6) || F >= (C ? 30 : 10)) {
                runSlide();
                if (N.highlight) {
                    flash(N_messageId);
                }
                $();
                return;
            }
            requestAnimationFrame(Y);
        };
        requestAnimationFrame(Y);
    }, [
        m,
        M,
        y,
        awaitScrollEnd,
        flash,
        runSlide,
        cleanupSlide
    ]);
    b6(()=>{
        if (!(!scrollIntent || scrollIntent.token === p.current)) {
            p.current = scrollIntent.token;
            g.current = scrollIntent;
            pinToBottomRef.current = scrollIntent.kind === "bottom";
            S.current = Date.now() + (scrollIntent.kind === "message" && !scrollIntent.windowReplaced ? 1500 : 700);
            if (scrollIntent.windowReplaced) {
                seedAllShown();
            }
            P(scrollIntent);
        }
    }, [
        scrollIntent
    ]);
    h_1(()=>{
        const scrollRef_current = scrollRef.current;
        if (!scrollRef_current) {
            return;
        }
        const x = ()=>{
            const g_current = g.current;
            if (g_current) {
                g.current = null;
                pinToBottomRef.current = false;
                S.current = 0;
                scrollRef_current.scrollTo({
                    top: scrollRef_current.scrollTop,
                    behavior: "instant"
                });
                cleanupSlide();
                m(g_current.token);
            }
        };
        const k = (O)=>{
            if ([
                "ArrowUp",
                "ArrowDown",
                "PageUp",
                "PageDown",
                "Home",
                "End",
                " "
            ].includes(O.key)) {
                x();
            }
        };
        const $ = (O)=>{
            if (O.target === scrollRef_current) {
                x();
            }
        };
        scrollRef_current.addEventListener("wheel", x, {
            passive: true
        });
        scrollRef_current.addEventListener("touchstart", x, {
            passive: true
        });
        scrollRef_current.addEventListener("keydown", k);
        scrollRef_current.addEventListener("pointerdown", $);
        return ()=>{
            scrollRef_current.removeEventListener("wheel", x);
            scrollRef_current.removeEventListener("touchstart", x);
            scrollRef_current.removeEventListener("keydown", k);
            scrollRef_current.removeEventListener("pointerdown", $);
            g.current = null;
        };
    }, [
        scrollRef,
        cleanupSlide,
        m
    ]);
    return {
        pendingIntentRef: g,
        suppressPaginateUntilRef: S
    };
}
const uh = 200;
const dh = 40;
function hh({ scrollEl, onMessageVisible, observedElsRef, enabled = true, bottomInset = 0, canRead }) {
    const i = A_1(null);
    const a = A_1(new Set);
    const h = A_1(null);
    const c = A_1(onMessageVisible);
    c.current = onMessageVisible;
    const d = q_1(()=>{
        h.current = null;
        const l = Array.from(a.current);
        a.current.clear();
        if (document.hidden || !document.hasFocus() || canRead?.() === false || l.length === 0) {
            return;
        }
        let m = l[0];
        for (const g of l){
            if (dj(g, m)) {
                m = g;
            }
        }
        c.current?.(m);
    }, [
        canRead
    ]);
    const f = typeof onMessageVisible === "function";
    h_1(()=>{
        const l = scrollEl;
        if (!l || !enabled || !f) {
            return;
        }
        const m = new IntersectionObserver((p)=>{
            if (!(document.hidden || !document.hasFocus() || canRead?.() === false)) {
                for (const S of p){
                    if (!S.isIntersecting) {
                        continue;
                    }
                    const M = Math.min(dh, Math.max(1, S.boundingClientRect.height * 0.5));
                    if (S.intersectionRect.height < M) {
                        continue;
                    }
                    const y = S.target;
                    if (y.dataset.messageOwn === "true") {
                        continue;
                    }
                    const N = y.dataset.messageId;
                    if (N) {
                        a.current.add(N);
                    }
                }
                if (a.current.size > 0 && !h.current) {
                    h.current = window.setTimeout(d, uh);
                }
            }
        }, {
            root: l,
            rootMargin: `-${parseFloat(getComputedStyle(l).paddingTop) || 0}px 0px -${bottomInset}px 0px`,
            threshold: [
                0,
                0.01,
                0.05,
                0.1,
                0.25,
                0.5,
                1
            ]
        });
        i.current = m;
        for (const p of observedElsRef.current.values()){
            m.observe(p);
        }
        const g = ()=>{
            if (h.current) {
                window.clearTimeout(h.current);
            }
            h.current = null;
            a.current.clear();
            if (!document.hidden && document.hasFocus()) {
                m.disconnect();
                for (const p of observedElsRef.current.values()){
                    m.observe(p);
                }
            }
        };
        window.addEventListener("focus", g);
        window.addEventListener("blur", g);
        document.addEventListener("visibilitychange", g);
        return ()=>{
            window.removeEventListener("focus", g);
            window.removeEventListener("blur", g);
            document.removeEventListener("visibilitychange", g);
            m.disconnect();
            i.current = null;
            if (h.current) {
                clearTimeout(h.current);
                h.current = null;
            }
            d();
        };
    }, [
        scrollEl,
        d,
        enabled,
        bottomInset,
        f
    ]);
    return {
        observerRef: i
    };
}
const qt = 62;
const gap = 0;
const Rn = 200;
const Or = 300;
const jr = 180 * 1000;
function mh(e, n) {
    const r = e[n];
    const s = e[n - 1];
    const o = e[n + 1];
    const u = new Date(r.createdAt).getTime();
    const i = !!s && s.authorId === r.authorId && dh_1(s.createdAt, r.createdAt) && u - new Date(s.createdAt).getTime() <= jr;
    const a = !!o && o.authorId === r.authorId && dh_1(o.createdAt, r.createdAt) && new Date(o.createdAt).getTime() - u <= jr;
    if (!i && !a) {
        return "solo";
    }
    if (i && a) {
        return "middle";
    }
    if (i) {
        return "last";
    }
    return "first";
}
const ph = ({ authorName, messages, onReply, onAction, canDeleteForAllOthers, readOnly = false, hasMore, isLoadingMore, onLoadMore, selectedIds, setSelectedIds, onMessageVisible, scrollIntent, hasNewer, isLoadingNewer, onLoadNewer, onDistanceFromBottomChange, onReplyClick, messagesReady = true, loadError = false, bottomSpacer = 80, firstUnreadId, searchQuery, emptyMessage })=>{
    const O = A_1(az());
    const F = A_1(!!(messages[0] && dk(messages[0].chatId)));
    if (scrollIntent || messagesReady && !dk(messages[0]?.chatId ?? "")) {
        F.current = false;
    }
    const H = A_1(messagesReady);
    H.current = messagesReady && !scrollIntent && !F.current;
    const Y = !messagesReady || !!scrollIntent?.windowReplaced || F.current;
    const [Q, C] = d_1(null);
    const R = A_1(null);
    const D = A_1();
    h_1(()=>{
        const E = messages.at(-1);
        const R_current = R.current;
        R.current = E ? {
            chat: E.chatId,
            id: E.id
        } : null;
        if (!E || !R_current || R_current.chat !== E.chatId) {
            C(null);
            return;
        }
        if (R_current.id === E.id || !messagesReady || hasNewer || scrollIntent || document.hidden || !document.hasFocus()) {
            return;
        }
        const le = messages.findIndex((ue)=>ue.id === R_current.id);
        if (le < 0) {
            return;
        }
        const length = messages.slice(le + 1).filter((ue)=>!ue.isOutgoing && !ue.unavailable).length;
        if (!length) {
            return;
        }
        const Fe = length === 1 ? `${authorName || "Собеседник"}: новое сообщение` : `Новых сообщений: ${length}`;
        clearTimeout(D.current);
        C({
            id: E.id,
            text: Fe
        });
        D.current = setTimeout(()=>C((ue)=>{
                if (ue?.id === E.id) {
                    return null;
                }
                return ue;
            }), 3000);
    }, [
        messages,
        messagesReady,
        hasNewer,
        scrollIntent,
        authorName
    ]);
    h_1(()=>()=>clearTimeout(D.current), []);
    const X = A_1(null);
    const I = A_1(0);
    const q = A_1(null);
    const A = A_1(0);
    const v = A_1(!F.current);
    const U = A_1(0);
    const oe = A_1(false);
    const de = A_1(false);
    const [B, Z] = d_1(null);
    const z = B?.id ?? null;
    const [W, ge] = d_1(null);
    const Be = q_1((E)=>{
        X.current = E;
        ge(E);
    }, []);
    const onOpenMenu = q_1((E, ae)=>{
        Z({
            id: E,
            point: ae ?? null
        });
    }, []);
    const onCloseMenu = q_1(()=>{
        Z(null);
    }, []);
    const onStartSelection = q_1((E)=>{
        setSelectedIds((ae)=>{
            if (ae.has(E)) {
                return ae;
            }
            const le = new Set(ae);
            le.add(E);
            return le;
        });
    }, [
        setSelectedIds
    ]);
    const ce = q_1((E)=>{
        setSelectedIds((ae)=>{
            const le = new Set(ae);
            if (le.has(E)) {
                le.delete(E);
            } else {
                le.add(E);
            }
            return le;
        });
    }, [
        setSelectedIds
    ]);
    const J = selectedIds.size > 0;
    const V = A_1(messages);
    V.current = messages;
    const { handleItemMouseDown, dragJustFinishedRef } = Kd({
        messagesRef: V,
        selectedIds,
        setSelectedIds
    });
    const we = a6(()=>Gd(messages), [
        messages
    ]);
    const De = A_1(we);
    De.current = we;
    const getItemKey = q_1((E)=>we[E]?.key ?? E, [
        we
    ]);
    const { virtualItems, totalSize, measureElement, getMeasuredHeights } = dl_1({
        itemCount: we.length,
        estimatedItemHeight: qt,
        overscan: 8,
        gap,
        getItemKey,
        scrollElement: W,
        deferResizeUpdates: true
    });
    const Ke = A_1(new Map);
    const ze = A_1(null);
    b6(()=>{
        const ze_current = ze.current;
        if (!ze_current || !J) {
            ze.current = null;
            return;
        }
        const le = [
            ...W?.querySelectorAll("[data-message-id]") ?? []
        ].find((xe)=>xe.dataset.messageId === ze_current)?.querySelector('[role="checkbox"]');
        if (le) {
            ze.current = null;
            le.focus({
                preventScroll: true
            });
            le.scrollIntoView({
                block: "nearest"
            });
        }
    }, [
        virtualItems,
        J,
        W
    ]);
    const Dt = (E)=>{
        if (E.defaultPrevented) {
            return;
        }
        if (!J && W && E.target instanceof HTMLElement && (E.target === W || E.target.getAttribute("role") === "group") && [
            "ArrowUp",
            "ArrowDown",
            "PageUp",
            "PageDown",
            "Home",
            "End"
        ].includes(E.key)) {
            E.preventDefault();
            W.focus({
                preventScroll: true
            });
            if (E.key === "Home") {
                W.scrollTop = 0;
            } else if (E.key === "End") {
                W.scrollTop = W.scrollHeight;
            } else {
                W.scrollTop += E.key === "ArrowUp" ? -40 : E.key === "ArrowDown" ? 40 : (E.key === "PageUp" ? -1 : 1) * W.clientHeight * 0.8;
            }
            return;
        }
        if (!J || !(E.target instanceof HTMLElement) || E.target.getAttribute("role") !== "checkbox") {
            return;
        }
        if (E.key === "Escape") {
            E.preventDefault();
            setSelectedIds(new Set);
            return;
        }
        if (![
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End"
        ].includes(E.key)) {
            return;
        }
        E.preventDefault();
        const ae = messages.filter((Re)=>!Re.unavailable);
        const le = E.target.closest("[data-message-id]")?.dataset.messageId;
        const xe = ae.findIndex((Re)=>Re.id === le);
        const Fe = E.key === "Home" ? ae[0] : E.key === "End" ? ae.at(-1) : ae[xe + (E.key === "ArrowUp" ? -1 : 1)];
        if (!Fe || !W) {
            return;
        }
        ze.current = Fe.id;
        const ue = [
            ...W.querySelectorAll("[data-message-id]")
        ].find((Re)=>Re.dataset.messageId === Fe.id)?.querySelector('[role="checkbox"]');
        if (ue) {
            ze.current = null;
            ue.focus({
                preventScroll: true
            });
            ue.scrollIntoView({
                block: "nearest"
            });
            return;
        }
        const ye = getMeasuredHeights();
        let Oe = 0;
        for (const Re of we){
            if (Re.kind === "msg" && messages[Re.index]?.id === Fe.id) {
                break;
            }
            Oe += ye.get(Re.key) ?? qt;
        }
        W.scrollTop = Oe;
    };
    const ct = A_1(null);
    const je = A_1({
        height: 0,
        viewport: 0
    });
    const Je = q_1(()=>{
        const X_current = X.current;
        const ae = V.current[0]?.chatId;
        if (!X_current?.isConnected || X_current.clientHeight === 0 || ae && bt_1.getState().activeChatId !== ae) {
            return;
        }
        if (!X_current || v.current) {
            ct.current = null;
            if (ae && H.current) {
                dm_1(ae, null, O.current);
            }
            return;
        }
        const E_firstElementChild = X_current.firstElementChild;
        if (!E_firstElementChild) {
            return;
        }
        const top = X_current.getBoundingClientRect().top;
        const top_1 = E_firstElementChild.getBoundingClientRect().top;
        const ue = parseFloat(getComputedStyle(X_current).paddingTop) || 0;
        const ye = top + ue;
        const Oe = X_current.parentElement && parseFloat(getComputedStyle(X_current.parentElement).getPropertyValue("--chat-composer-height")) || 80;
        const Re = top + X_current.clientHeight - Oe;
        const Ft = [
            ...Ke.current.values()
        ].map((vt)=>{
            const sn = vt;
            const lr = sn.getBoundingClientRect();
            const ur = top + ue + lr.top - top_1 - X_current.scrollTop;
            return {
                item: sn,
                top: ur,
                bottom: ur + lr.height
            };
        }).filter((vt)=>vt.item.dataset.messageId && vt.bottom > ye && vt.top < Re).sort((vt, sn)=>vt.top - sn.top);
        const St = Ft.find((vt)=>vt.top >= ye) ?? Ft[0];
        if (St?.item.dataset.messageId) {
            ct.current = {
                messageId: St.item.dataset.messageId,
                viewportOffset: St.top - ye
            };
            if (ae && H.current) {
                dm_1(ae, {
                    messageId: St.item.dataset.messageId,
                    offset: St.top - ye
                }, O.current);
            }
        }
    }, []);
    const ke = A_1(null);
    const Rt = A_1(false);
    const ht = A_1(false);
    const [et, j] = d_1(false);
    const canRead = q_1(()=>!ht.current, []);
    h_1(()=>{
        let E = false;
        let ae = false;
        const le = ()=>{
            if (document.hidden || !document.hasFocus()) {
                if (ke.current === null) {
                    ke.current = V.current.at(-1)?.id ?? "";
                    Rt.current = v.current;
                }
                ht.current = true;
                j(true);
                v.current = false;
                Je();
                return;
            }
            if (ke.current === null || ae) {
                return;
            }
            const ke_current = ke.current;
            const V_current = V.current;
            const ue = V_current.findIndex((Re)=>Re.id === ke_current);
            const ye = V_current.slice(ue + 1).some((Re)=>!Re.isOutgoing);
            const Oe = V_current[0]?.chatId;
            ke.current = null;
            ae = true;
            (async ()=>{
                try {
                    if (ye && Oe && Rt.current) {
                        await bt_1.getState().loadChats();
                        if (E || document.hidden || !document.hasFocus()) {
                            return;
                        }
                        await bt_1.getState().loadMessages(Oe, {
                            forceNetwork: true
                        });
                    }
                } finally{
                    ae = false;
                    if (!E && !document.hidden && document.hasFocus()) {
                        ht.current = false;
                        j(false);
                    }
                }
            })();
        };
        window.addEventListener("blur", le);
        window.addEventListener("focus", le);
        document.addEventListener("visibilitychange", le);
        if (document.hidden || !document.hasFocus()) {
            le();
        }
        return ()=>{
            E = true;
            window.removeEventListener("blur", le);
            window.removeEventListener("focus", le);
            document.removeEventListener("visibilitychange", le);
        };
    }, [
        Je
    ]);
    const fe = q_1(()=>{
        const X_current = X.current;
        const ae = v.current ? null : ct.current;
        const le = X_current?.firstElementChild;
        if (!X_current || !le || !ae) {
            return false;
        }
        let xe;
        for (const ue of Ke.current.values()){
            const ye = ue;
            if (ye.dataset.messageId === ae.messageId) {
                xe = ye.getBoundingClientRect().top - le.getBoundingClientRect().top;
                break;
            }
        }
        if (xe === undefined) {
            const ue = getMeasuredHeights();
            let ye = 0;
            for (const Oe of De.current){
                if (Oe.kind === "msg" && V.current[Oe.index]?.id === ae.messageId) {
                    xe = ye;
                    break;
                }
                ye += ue.get(Oe.key) ?? qt;
            }
        }
        if (xe === undefined) {
            return false;
        }
        const Fe = xe - X_current.scrollTop - ae.viewportOffset;
        if (Math.abs(Fe) > 0.5) {
            X_current.scrollTop += Fe;
        }
        U.current = X_current.scrollTop;
        return true;
    }, [
        getMeasuredHeights
    ]);
    const { flash, flashId, enterObserverRef, enterClassFor, seedAllShown } = ah({
        scrollEl: W,
        messagesRef: V,
        rowsRef: De,
        observedElsRef: Ke
    });
    const slide = ch({
        scrollRef: X,
        messagesRef: V
    });
    const { pendingIntentRef, suppressPaginateUntilRef } = lh({
        scrollIntent,
        scrollRef: X,
        messagesRef: V,
        rowsRef: De,
        pinToBottomRef: v,
        getMeasuredHeights,
        estimatedRowHeight: qt,
        slide,
        flash,
        seedAllShown
    });
    b6(()=>{
        const X_current = X.current;
        if (!X_current) {
            return;
        }
        if (pendingIntentRef.current) {
            ct.current = null;
            I.current = messages.length;
            q.current = messages[0]?.id ?? null;
            A.current = X_current.scrollHeight;
            U.current = X_current.scrollTop;
            onDistanceFromBottomChange?.(X_current.scrollHeight - X_current.scrollTop - X_current.clientHeight);
            return;
        }
        const ae = messages[0]?.id ?? null;
        const le = messages.length > I.current;
        const xe = q.current !== null && ae !== q.current;
        if (le && xe) {
            if (!fe()) {
                const ue = X_current.scrollHeight - A.current;
                X_current.scrollTop = X_current.scrollTop + ue;
            }
        } else {
            if (!v.current && ct.current) {
                fe();
            } else {
                v.current && (I.current === 0 || !le ? X_current.scrollTop = X_current.scrollHeight : X_current.scrollTo({
                    top: X_current.scrollHeight,
                    behavior: "smooth"
                }));
            }
        }
        Je();
        I.current = messages.length;
        q.current = ae;
        A.current = X_current.scrollHeight;
        U.current = X_current.scrollTop;
        je.current = {
            height: X_current.scrollHeight,
            viewport: X_current.clientHeight
        };
        onDistanceFromBottomChange?.(X_current.scrollHeight - X_current.scrollTop - X_current.clientHeight);
    }, [
        messages.length,
        totalSize,
        bottomSpacer,
        fe,
        Je
    ]);
    b6(()=>{
        if (!pendingIntentRef.current) {
            Je();
        }
    }, [
        virtualItems,
        Je
    ]);
    h_1(()=>{
        if (!W) {
            return;
        }
        const E = new ResizeObserver(()=>{
            if (!pendingIntentRef.current) {
                if (v.current) {
                    W.scrollTop = W.scrollHeight;
                } else {
                    fe();
                }
                Je();
                U.current = W.scrollTop;
                je.current = {
                    height: W.scrollHeight,
                    viewport: W.clientHeight
                };
            }
        });
        E.observe(W);
        return ()=>{
            E.disconnect();
        };
    }, [
        W,
        fe,
        Je,
        pendingIntentRef
    ]);
    h_1(()=>{
        const E = W;
        if (!E) {
            return;
        }
        let ae;
        let le;
        const xe = ()=>{
            const E_scrollTop = E.scrollTop;
            const je_current = je.current;
            if (!pendingIntentRef.current && Math.abs(E_scrollTop - U.current) > 1) {
                ct.current = null;
            }
            if (!pendingIntentRef.current && E_scrollTop < U.current - 1 && je_current.height === E.scrollHeight && je_current.viewport === E.clientHeight) {
                v.current = false;
            }
            U.current = E_scrollTop;
            je.current = {
                height: E.scrollHeight,
                viewport: E.clientHeight
            };
            const St = E.scrollHeight - E_scrollTop - E.clientHeight;
            onDistanceFromBottomChange?.(St);
            if (St < 5 && !hasNewer) {
                v.current = true;
            }
            if (!pendingIntentRef.current) {
                Je();
            }
            const vt = Date.now() < suppressPaginateUntilRef.current;
            if (!vt && onLoadMore && E_scrollTop < Rn && hasMore && !isLoadingMore && !oe.current) {
                oe.current = true;
                ae = requestAnimationFrame(()=>{
                    le = requestAnimationFrame(()=>{
                        ae = undefined;
                        le = undefined;
                        if (!E.isConnected || E.scrollTop >= Rn || pendingIntentRef.current) {
                            oe.current = false;
                            return;
                        }
                        Je();
                        onLoadMore();
                    });
                });
            }
            if (E_scrollTop > Rn + 100) {
                oe.current = false;
            }
            if (!vt && onLoadNewer && hasNewer && St < Or && !isLoadingNewer && !de.current) {
                de.current = true;
                onLoadNewer();
            }
            if (St > Or + 100) {
                de.current = false;
            }
        };
        const Fe = ()=>{
            v.current = false;
        };
        const ue = (Re)=>{
            if (Re.deltaY < 0) {
                Fe();
            }
        };
        const ye = (Re)=>{
            if ([
                "ArrowUp",
                "PageUp",
                "Home"
            ].includes(Re.key)) {
                Fe();
            }
        };
        const Oe = (Re)=>{
            if (Re.target === E) {
                Fe();
            }
        };
        E.addEventListener("scroll", xe, {
            passive: true
        });
        E.addEventListener("wheel", ue, {
            passive: true
        });
        E.addEventListener("touchmove", Fe, {
            passive: true
        });
        E.addEventListener("keydown", ye);
        E.addEventListener("pointerdown", Oe);
        return ()=>{
            if (ae !== undefined) {
                cancelAnimationFrame(ae);
            }
            if (le !== undefined) {
                cancelAnimationFrame(le);
            }
            E.removeEventListener("scroll", xe);
            E.removeEventListener("wheel", ue);
            E.removeEventListener("touchmove", Fe);
            E.removeEventListener("keydown", ye);
            E.removeEventListener("pointerdown", Oe);
        };
    }, [
        W,
        hasMore,
        isLoadingMore,
        onLoadMore,
        hasNewer,
        isLoadingNewer,
        onLoadNewer,
        onDistanceFromBottomChange,
        suppressPaginateUntilRef,
        Je
    ]);
    h_1(()=>{
        if (!isLoadingMore) {
            oe.current = false;
        }
    }, [
        isLoadingMore
    ]);
    h_1(()=>{
        if (!isLoadingNewer) {
            de.current = false;
        }
    }, [
        isLoadingNewer
    ]);
    const { observerRef } = hh({
        scrollEl: W,
        onMessageVisible,
        observedElsRef: Ke,
        enabled: messagesReady && !scrollIntent && !et,
        canRead,
        bottomInset: bottomSpacer
    });
    const pe = q_1((E, ae)=>{
        const Ke_current = Ke.current;
        const xe = Ke_current.get(ae);
        if (xe === E) {
            measureElement(E, ae);
            return;
        }
        measureElement(E, ae);
        if (xe) {
            observerRef.current?.unobserve(xe);
            enterObserverRef.current?.unobserve(xe);
            Ke_current.delete(ae);
        }
        if (E) {
            Ke_current.set(ae, E);
            observerRef.current?.observe(E);
            enterObserverRef.current?.observe(E);
        }
    }, [
        measureElement,
        observerRef,
        enterObserverRef
    ]);
    const Ae = A_1(new Map);
    const Ee = q_1((E)=>{
        let ae = Ae.current.get(E);
        if (!ae) {
            ae = (le)=>pe(le, E);
            Ae.current.set(E, ae);
        }
        return ae;
    }, [
        pe
    ]);
    const Te = W?.scrollTop ?? 0;
    const nt = getMeasuredHeights();
    const Ht = virtualItems.find((E)=>E.start + (nt.get(E.key) ?? qt) > Te);
    const gt = Ht ? we[Ht.index] : undefined;
    const rn = gt ? gt.kind === "msg" ? messages[gt.index]?.createdAt : gt.date : undefined;
    return u_1("div", {
        ref: Be,
        "data-message-list": true,
        className: mt.list,
        tabIndex: 0,
        "aria-label": "Сообщения",
        "aria-busy": Y && !loadError,
        onClick: ()=>Z(null),
        onKeyDown: Dt,
        children: [
            W?.parentElement && Y && !loadError && aB(u_1("div", {
                className: mt.loadingStatus,
                role: "status",
                children: "Загрузка сообщений…"
            }), W.parentElement),
            W?.parentElement && aB(u_1("div", {
                className: mt.announcement,
                role: "status",
                "aria-live": "polite",
                "aria-atomic": "true",
                children: Q && u_1("span", {
                    children: Q.text
                }, Q.id)
            }), W.parentElement),
            Te > 40 && rn && !!W && W.scrollHeight - Te - W.clientHeight > 80 && W.parentElement && aB(u_1("div", {
                className: mt.floatingDate,
                "aria-hidden": "true",
                "data-floating-date": true,
                children: u_1("span", {
                    children: cz(rn)
                })
            }), W.parentElement),
            messages.length === 0 ? messagesReady ? u_1("div", {
                className: mt.emptyState,
                children: u_1("p", {
                    children: emptyMessage ?? (readOnly ? "Здесь появятся уведомления ИТД" : "Напишите первое сообщение")
                })
            }) : null : u_1("div", {
                className: mt.virtualContent,
                inert: Y || undefined,
                "aria-hidden": Y || undefined,
                style: {
                    visibility: Y ? "hidden" : undefined,
                    height: `calc(${totalSize}px + var(--chat-composer-height, ${Math.max(0, bottomSpacer - 8)}px) + 8px)`
                },
                children: virtualItems.map((E)=>{
                    const ae = we[E.index];
                    if (!ae) {
                        return null;
                    }
                    if (ae.kind !== "msg") {
                        return u_1("div", {
                            ref: Ee(E.index),
                            className: mt.virtualItem,
                            style: {
                                transform: `translateY(${E.start}px)`
                            },
                            "data-anim-key": ae.key,
                            "data-message-own": "false",
                            children: u_1("div", {
                                className: enterClassFor(ae.key),
                                children: u_1("div", {
                                    className: mt.daySeparator,
                                    children: u_1("span", {
                                        children: ae.kind === "day" ? cz(ae.date) : cA(ae.date)
                                    })
                                })
                            })
                        }, E.key);
                    }
                    const le = messages[ae.index];
                    if (!le) {
                        return null;
                    }
                    const xe = mh(messages, ae.index);
                    const Fe = xe === "first" || xe === "middle";
                    return u_1("div", {
                        ref: Ee(E.index),
                        className: mt.virtualItem,
                        style: {
                            transform: `translateY(${E.start}px)`
                        },
                        "data-message-index": ae.index,
                        "data-message-id": le.id,
                        "data-anim-key": le.clientKey ?? le.id,
                        "data-message-own": le.isOutgoing ? "true" : "false",
                        onMouseDown: (ue)=>handleItemMouseDown(ae.index, ue),
                        onClick: ()=>{
                            dragJustFinishedRef.current || (document.getSelection()?.toString().length ?? 0) > 0 || J && !le.unavailable && ce(le.id);
                        },
                        children: u_1("div", {
                            className: [
                                enterClassFor(le.clientKey ?? le.id),
                                flashId === le.id ? mt.jumpFlash : ""
                            ].filter(Boolean).join(" "),
                            style: {
                                paddingBottom: Fe ? "2px" : "6px"
                            },
                            children: [
                                le.id === firstUnreadId && u_1("div", {
                                    className: mt.unreadDivider,
                                    children: "Непрочитанные сообщения"
                                }),
                                u_1(qd, {
                                    authorName,
                                    searchQuery,
                                    readOnly,
                                    message: le,
                                    menuOpen: z === le.id,
                                    menuPoint: z === le.id ? B?.point : null,
                                    onOpenMenu,
                                    onCloseMenu,
                                    onReply,
                                    onAction,
                                    onReplyClick,
                                    canDeleteForAllOthers,
                                    isSelecting: J,
                                    isSelected: selectedIds.has(le.id),
                                    onStartSelection,
                                    onToggleSelection: ce,
                                    groupPosition: xe
                                })
                            ]
                        })
                    }, E.key);
                })
            })
        ]
    });
};
function gh(e) {
    if (/^(image|video|audio)\//.test(e.type)) {
        return new File([
            e
        ], e.name, {
            type: "application/octet-stream",
            lastModified: e.lastModified
        });
    }
    return e;
}
function vh(e, n) {
    return e.key === "Enter" && !e.shiftKey && !e.isComposing && e.keyCode !== 229 && (n || e.ctrlKey || e.metaKey);
}
class bh {
    pressed;
    suppressUntil = 0;
    actions;
    now;
    constructor(n, r = ()=>performance.now()){
        this.actions = n;
        this.now = r;
    }
    press(n) {
        if (this.pressed) {
            return;
        }
        this.suppressUntil = 0;
        const r = {
            id: n,
            started: false,
            timer: setTimeout(()=>{
                if (this.pressed === r) {
                    r.started = true;
                    this.suppressUntil = this.now() + 1000;
                    this.actions.onStart();
                }
            }, 220)
        };
        this.pressed = r;
    }
    release(n, r = false) {
        const pressed = this.pressed;
        if (!(!pressed || pressed.id !== n)) {
            clearTimeout(pressed.timer);
            this.pressed = undefined;
            if (pressed.started) {
                this.suppressUntil = this.now() + 1000;
                (r ? this.actions.onCancel : this.actions.onRelease)();
            }
        }
    }
    cancel() {
        if (this.pressed) {
            this.release(this.pressed.id, true);
        }
    }
    ignoreClick(n) {
        return n > 0 && this.now() < this.suppressUntil;
    }
}
function yh(e, n) {
    const r = A_1(n);
    r.current = n;
    const s = A_1();
    if (!s.current) {
        s.current = new bh({
            onStart: ()=>r.current.onStart(),
            onRelease: ()=>r.current.onRelease(),
            onCancel: ()=>r.current.onCancel()
        });
    }
    h_1(()=>{
        const s_current = s.current;
        const u = (h)=>s_current.release(h.pointerId, h.type === "pointercancel");
        const i = ()=>s_current.cancel();
        const a = ()=>{
            if (document.hidden) {
                i();
            }
        };
        document.addEventListener("pointerup", u, true);
        document.addEventListener("pointercancel", u, true);
        window.addEventListener("blur", i);
        document.addEventListener("visibilitychange", a);
        return ()=>{
            document.removeEventListener("pointerup", u, true);
            document.removeEventListener("pointercancel", u, true);
            window.removeEventListener("blur", i);
            document.removeEventListener("visibilitychange", a);
            s_current.cancel();
        };
    }, [
        e
    ]);
    return s.current;
}
class wh {
    urls = new Map;
    create;
    revoke;
    constructor(n = (s)=>URL.createObjectURL(s), r = (s)=>URL.revokeObjectURL(s)){
        this.create = n;
        this.revoke = r;
    }
    update(n) {
        const r = new Set(n);
        for (const [s, o] of this.urls){
            if (!r.has(s)) {
                this.revoke(o);
                this.urls.delete(s);
            }
        }
        for (const s of n){
            if (s.type.startsWith("image/") && !this.urls.has(s)) {
                this.urls.set(s, this.create(s));
            }
        }
        return new Map(this.urls);
    }
    clear() {
        this.update([]);
    }
}
function kh(e) {
    const n = A_1(null);
    if (!n.current) {
        n.current = new wh;
    }
    const [r, s] = d_1(new Map);
    b6(()=>{
        s(n.current.update(e));
    }, [
        e
    ]);
    b6(()=>()=>n.current.clear(), []);
    return r;
}
function Hr(e) {
    return /[^\p{White_Space}\p{Default_Ignorable_Code_Point}\u2800\u3164\uFFA0]/u.test(e);
}
const Tn = [
    {
        id: "none",
        label: "Нет",
        icon: "none",
        color: "#8e8e93"
    },
    {
        id: "chipmunk",
        label: "Бурундук",
        icon: "rabbit",
        color: "#ff9500"
    },
    {
        id: "robot",
        label: "Робот",
        icon: "robot",
        color: "#8e8e93"
    },
    {
        id: "stadium",
        label: "Стадион",
        icon: "speaker",
        color: "#30b0c7"
    },
    {
        id: "demon",
        label: "Демон",
        icon: "flame",
        color: "#ff3b30"
    },
    {
        id: "autotune",
        label: "Автотюн",
        icon: "wave",
        color: "#af52de"
    },
    {
        id: "intercom",
        label: "Домофон",
        icon: "antenna",
        color: "#a2845e"
    },
    {
        id: "karaoke",
        label: "Караоке",
        icon: "mic",
        color: "#ff2d55"
    }
];
const zr = {
    none: [
        "M12,2C6.47,2 2,6.47 2,12s4.47,10 10,10 10,-4.47 10,-10S17.53,2 12,2zM4,12c0,-4.42 3.58,-8 8,-8 1.85,0 3.55,0.63 4.9,1.69L5.69,16.9C4.63,15.55 4,13.85 4,12zM12,20c-1.85,0 -3.55,-0.63 -4.9,-1.69L18.31,7.1C19.37,8.45 20,10.15 20,12c0,4.42 -3.58,8 -8,8z"
    ],
    rabbit: [
        "M4.5,9.5m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0",
        "M9,5.5m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0",
        "M15,5.5m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0",
        "M19.5,9.5m-2.5,0a2.5,2.5 0,1 1,5 0a2.5,2.5 0,1 1,-5 0",
        "M17.34,14.86c-0.87,-1.02 -1.6,-1.89 -2.48,-2.91 -0.46,-0.54 -1.05,-1.08 -1.75,-1.32 -0.11,-0.04 -0.22,-0.07 -0.33,-0.09 -0.25,-0.04 -0.52,-0.04 -0.78,-0.04s-0.53,0 -0.79,0.05c-0.11,0.02 -0.22,0.05 -0.33,0.09 -0.7,0.24 -1.28,0.78 -1.75,1.32 -0.87,1.02 -1.6,1.89 -2.48,2.91 -1.31,1.31 -2.92,2.76 -2.62,4.79 0.29,1.02 1.02,2.03 2.33,2.32 0.73,0.15 3.06,-0.44 5.54,-0.44h0.18c2.48,0 4.81,0.58 5.54,0.44 1.31,-0.29 2.04,-1.31 2.33,-2.32 0.31,-2.04 -1.3,-3.49 -2.61,-4.8z"
    ],
    robot: [
        "M19.43,12.98c0.04,-0.32 0.07,-0.64 0.07,-0.98c0,-0.34 -0.03,-0.66 -0.07,-0.98l2.11,-1.65c0.19,-0.15 0.24,-0.42 0.12,-0.64l-2,-3.46c-0.09,-0.16 -0.26,-0.25 -0.44,-0.25c-0.06,0 -0.12,0.01 -0.17,0.03l-2.49,1c-0.52,-0.4 -1.08,-0.73 -1.69,-0.98l-0.38,-2.65C14.46,2.18 14.25,2 14,2h-4c-0.25,0 -0.46,0.18 -0.49,0.42l-0.38,2.65c-0.61,0.25 -1.17,0.59 -1.69,0.98l-2.49,-1c-0.06,-0.02 -0.12,-0.03 -0.18,-0.03c-0.17,0 -0.34,0.09 -0.43,0.25l-2,3.46c-0.13,0.22 -0.07,0.49 0.12,0.64l2.11,1.65c-0.04,0.32 -0.07,0.65 -0.07,0.98c0,0.33 0.03,0.66 0.07,0.98l-2.11,1.65c-0.19,0.15 -0.24,0.42 -0.12,0.64l2,3.46c0.09,0.16 0.26,0.25 0.44,0.25c0.06,0 0.12,-0.01 0.17,-0.03l2.49,-1c0.52,0.4 1.08,0.73 1.69,0.98l0.38,2.65c0.03,0.24 0.24,0.42 0.49,0.42h4c0.25,0 0.46,-0.18 0.49,-0.42l0.38,-2.65c0.61,-0.25 1.17,-0.59 1.69,-0.98l2.49,1c0.06,0.02 0.12,0.03 0.18,0.03c0.17,0 0.34,-0.09 0.43,-0.25l2,-3.46c0.12,-0.22 0.07,-0.49 -0.12,-0.64L19.43,12.98zM12,15.5c-1.93,0 -3.5,-1.57 -3.5,-3.5s1.57,-3.5 3.5,-3.5s3.5,1.57 3.5,3.5S13.93,15.5 12,15.5z"
    ],
    speaker: [
        "M3,9v6h4l5,5L12,4L7,9L3,9zM16.5,12c0,-1.77 -1.02,-3.29 -2.5,-4.03v8.05c1.48,-0.73 2.5,-2.25 2.5,-4.02zM14,3.23v2.06c2.89,0.86 5,3.54 5,6.71s-2.11,5.85 -5,6.71v2.06c4.01,-0.91 7,-4.49 7,-8.77S18.01,4.14 14,3.23z"
    ],
    flame: [
        "M13.5,0.67s0.74,2.65 0.74,4.8c0,2.06 -1.35,3.73 -3.41,3.73 -2.07,0 -3.63,-1.67 -3.63,-3.73l0.03,-0.36C5.21,7.51 4,10.62 4,14c0,4.42 3.58,8 8,8s8,-3.58 8,-8C20,8.61 17.41,3.8 13.5,0.67zM11.71,19c-1.78,0 -3.22,-1.4 -3.22,-3.14 0,-1.62 1.05,-2.76 2.81,-3.12 1.77,-0.36 3.6,-1.21 4.62,-2.58 0.39,1.29 0.59,2.65 0.59,4.04 0,2.65 -2.15,4.8 -4.8,4.8z"
    ],
    wave: [
        "M7,18h2L9,6L7,6v12zM11,22h2L13,2h-2v20zM3,14h2v-4L3,10v4zM15,18h2L17,6h-2v12zM19,10v4h2v-4h-2z"
    ],
    antenna: [
        "M19.23,15.26l-2.54,-0.29c-0.59,-0.07 -1.18,0.14 -1.6,0.55l-1.81,1.81c-2.84,-1.45 -5.18,-3.79 -6.63,-6.62l1.82,-1.82c0.41,-0.41 0.62,-1 0.55,-1.59l-0.29,-2.52c-0.12,-0.97 -0.94,-1.7 -1.92,-1.7H5.03c-1.09,0 -2,0.91 -1.92,2 0.63,8.24 7.18,14.78 15.41,15.41 1.09,0.08 2,-0.83 2,-1.92v-1.74c0.01,-0.97 -0.72,-1.79 -1.69,-1.91z"
    ],
    mic: [
        "M12,14c1.66,0 2.99,-1.34 2.99,-3L15,5c0,-1.66 -1.34,-3 -3,-3S9,3.34 9,5v6c0,1.66 1.34,3 3,3zM17.3,11c0,3 -2.54,5.1 -5.3,5.1S6.7,14 6.7,11L5,11c0,3.41 2.72,6.23 6,6.72L11,21h2v-3.28c3.28,-0.48 6,-3.3 6,-6.72h-1.7z"
    ]
};
const slot = "raOy";
const trigger = "lRCG";
const reveal = "Ey58";
const expanded = "sElf";
const clip = "cDz1";
const current = "H4lO";
const Rh = "aGw9";
const heading = "Rnts";
const $h = "tOJH";
const Ih = "LtmR";
const option = "hJ3R";
const icon = "ELz7";
const Ph = "y9D9";
const ot = {
    slot,
    trigger,
    reveal,
    expanded,
    clip,
    current,
    panel: Rh,
    heading,
    close: $h,
    grid: Ih,
    option,
    icon,
    spinner: Ph
};
const Wn = new Set;
aA(()=>{
    for (const e of [
        ...Wn
    ]){
        e();
    }
});
function Bh({ icon }) {
    const n = zr[icon] ?? zr.none;
    return u_1("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: n.map((d, s)=>u_1("path", {
                d
            }, s))
    });
}
function Dh({ selected, processing, onSelect }) {
    const [s, o] = d_1("closed");
    const u = A_1("closed");
    const i = A_1(null);
    const a = A_1(null);
    const h = s === "opening" || s === "open";
    const c = s === "closing";
    const d = dn_1();
    const f = A_1(null);
    const l = Tn.find((y)=>y.id === selected) ?? Tn[0];
    const m = (y)=>{
        u.current = y;
        o(y);
    };
    const g = ()=>{
        if (i.current !== null) {
            cancelAnimationFrame(i.current);
        }
        if (a.current !== null) {
            window.clearTimeout(a.current);
        }
        i.current = null;
        a.current = null;
    };
    const p = ()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const S = ()=>{
        g();
        if (p() || u.current === "closing") {
            m("open");
            return;
        }
        m("opening");
        i.current = requestAnimationFrame(()=>{
            i.current = requestAnimationFrame(()=>{
                i.current = null;
                if (u.current === "opening") {
                    m("open");
                }
            });
        });
    };
    const M = ()=>{
        g();
        f.current?.focus();
        if (p()) {
            m("closed");
            return;
        }
        m("closing");
        a.current = window.setTimeout(()=>{
            a.current = null;
            if (u.current === "closing") {
                m("closed");
            }
        }, 180);
    };
    h_1(()=>{
        const y = ()=>{
            g();
            m("closed");
        };
        const P = window.matchMedia("(prefers-reduced-motion: reduce)");
        const N = ()=>{
            if (P.matches) {
                g();
                m(u.current === "opening" || u.current === "open" ? "open" : "closed");
            }
        };
        Wn.add(y);
        P.addEventListener("change", N);
        return ()=>{
            Wn.delete(y);
            P.removeEventListener("change", N);
            g();
        };
    }, []);
    return u_1("div", {
        className: ot.slot,
        onKeyDown: (y)=>{
            if (h && y.key === "Escape") {
                y.preventDefault();
                y.stopPropagation();
                M();
            }
        },
        children: [
            u_1("button", {
                ref: f,
                type: "button",
                className: ot.trigger,
                "aria-label": "Изменить голос",
                "aria-describedby": `${d}-current`,
                "aria-expanded": h,
                "aria-controls": d,
                onClick: ()=>{
                    if (u.current === "opening" || u.current === "open") {
                        return M();
                    }
                    return S();
                },
                children: [
                    u_1("span", {
                        children: "Изменить голос"
                    }),
                    u_1("span", {
                        id: `${d}-current`,
                        className: ot.current,
                        children: selected === "none" ? "Без эффекта" : l.label
                    }),
                    u_1("span", {
                        className: ot.icon,
                        "aria-hidden": "true",
                        children: processing ? u_1("span", {
                            className: ot.spinner
                        }) : u_1(I_5, {
                            size: 16
                        })
                    })
                ]
            }),
            s !== "closed" && u_1("div", {
                className: `${ot.reveal} ${s === "open" ? ot.expanded : ""}`,
                "data-effect-panel-state": s,
                inert: c,
                "aria-hidden": c || undefined,
                children: u_1("div", {
                    className: ot.clip,
                    children: u_1("div", {
                        id: d,
                        className: ot.panel,
                        role: "group",
                        "aria-label": "Эффекты голоса",
                        children: [
                            u_1("div", {
                                className: ot.heading,
                                children: [
                                    u_1("span", {
                                        children: "Эффекты голоса"
                                    }),
                                    u_1("button", {
                                        type: "button",
                                        className: ot.close,
                                        "aria-label": "Закрыть эффекты голоса",
                                        disabled: c,
                                        onClick: M,
                                        children: u_1(b8, {
                                            size: 16
                                        })
                                    })
                                ]
                            }),
                            u_1("div", {
                                className: ot.grid,
                                children: Tn.map((y)=>u_1("button", {
                                        type: "button",
                                        className: ot.option,
                                        "aria-label": y.label,
                                        "aria-pressed": selected === y.id,
                                        "aria-busy": selected === y.id && processing,
                                        disabled: c,
                                        onClick: ()=>{
                                            if (!(u.current === "closing" || u.current === "closed")) {
                                                M();
                                                onSelect(y.id);
                                            }
                                        },
                                        children: [
                                            u_1("span", {
                                                className: ot.icon,
                                                "aria-hidden": "true",
                                                children: selected === y.id && processing ? u_1("span", {
                                                    className: ot.spinner
                                                }) : u_1(Bh, {
                                                    icon: y.icon
                                                })
                                            }),
                                            u_1("span", {
                                                children: y.label
                                            })
                                        ]
                                    }, y.id))
                            })
                        ]
                    })
                })
            })
        ]
    });
}
class _h {
    generation = 0;
    disposed = false;
    consumed = false;
    state;
    original;
    options;
    constructor(n, r){
        this.original = n;
        this.options = r;
        this.state = this.originalState();
    }
    originalState(error = null) {
        return {
            selected: "none",
            processing: false,
            result: {
                ...this.original,
                previewBlob: this.original.blob
            },
            error
        };
    }
    getState() {
        return this.state;
    }
    current() {
        return !this.disposed && !this.consumed && this.options.isCurrent();
    }
    publish(n) {
        if (this.current()) {
            this.state = n;
            this.options.onChange(n);
        }
    }
    async select(n) {
        if (!this.current()) {
            return false;
        }
        if (this.state.selected === n && !this.state.error) {
            return true;
        }
        const r = ++this.generation;
        this.options.processor.cancel();
        if (n === "none") {
            this.publish(this.originalState());
            return true;
        }
        this.publish({
            selected: n,
            processing: true,
            result: null,
            error: null
        });
        try {
            const result = await this.options.processor.process(this.original, n);
            if (!this.current() || r !== this.generation) {
                return false;
            }
            return this.publish({
                selected: n,
                processing: false,
                result,
                error: null
            }), true;
        } catch (s) {
            if (!(!this.current() || r !== this.generation)) {
                this.publish(this.originalState(s instanceof Error ? s.message : "Не удалось обработать запись"));
            }
            return false;
        }
    }
    consumeForSend() {
        if (!this.current() || this.state.processing || !this.state.result) {
            return null;
        }
        return this.consumed = true, this.state.result;
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.generation++;
            this.options.processor.dispose();
        }
    }
}
const Hs = 512 * 1024 * 1024;
const zs = 64 * 1024 * 1024;
function Wr(e) {
    return Number.isSafeInteger(e) && e > 0 && zs + e * 32 <= Hs;
}
function Fh(e) {
    return Number.isSafeInteger(e) && e > 0 && e <= Math.floor((Hs - zs) / 32) + 48000 * 3;
}
const Ot = ()=>new DOMException("Запись закрыта", "AbortError");
const Ur = ()=>new Error("Эффекты недоступны для такой длинной записи; исходная запись сохранена");
const Oh = 180000;
class jh {
    generation = 0;
    disposed = false;
    worker = null;
    deadline = null;
    rejectDeadline = null;
    rejectJob = null;
    context = null;
    decoded = null;
    decoding = null;
    async decode(n) {
        const generation = this.generation;
        if (this.decoded?.source === n.blob) {
            return this.decoded;
        }
        if (this.decoding) {
            await this.decoding.catch(()=>{});
            if (this.disposed || generation !== this.generation) {
                throw Ot();
            }
            return this.decode(n);
        }
        const s = (async ()=>{
            const o = await n.blob.arrayBuffer();
            if (this.disposed || generation !== this.generation) {
                throw Ot();
            }
            const u = window.AudioContext ?? window.webkitAudioContext;
            if (!u) {
                throw new Error("Браузер не поддерживает обработку записи");
            }
            const i = new u({
                sampleRate: 48000
            });
            this.context = i;
            try {
                const a = await i.decodeAudioData(o);
                if (this.disposed || generation !== this.generation) {
                    throw Ot();
                }
                if (a.sampleRate !== 48000 || a.numberOfChannels > 2 || a.numberOfChannels < 1) {
                    throw new Error("Неподдерживаемый формат записи");
                }
                if (!Wr(a.length)) {
                    throw Ur();
                }
                const channels = Array.from({
                    length: a.numberOfChannels
                }, (d, f)=>a.getChannelData(f));
                const c = {
                    source: n.blob,
                    channels,
                    sampleRate: a.sampleRate
                };
                this.decoded = c;
                return c;
            } finally{
                if (this.context === i) {
                    this.context = null;
                }
                if (i.state !== "closed") {
                    await i.close().catch(()=>{});
                }
            }
        })().finally(()=>{
            if (this.decoding === s) {
                this.decoding = null;
            }
        });
        this.decoding = s;
        return s;
    }
    async process(n, r) {
        const generation = this.generation;
        const o = new Promise((u, i)=>{
            this.rejectDeadline = i;
            this.deadline = setTimeout(()=>{
                if (generation === this.generation) {
                    this.cancel(new Error("Обработка заняла слишком много времени; исходная запись сохранена"));
                }
            }, Oh);
        });
        try {
            return await Promise.race([
                this.perform(n, r, generation),
                o
            ]);
        } finally{
            if (generation === this.generation) {
                if (this.deadline !== null) {
                    clearTimeout(this.deadline);
                }
                this.deadline = null;
                this.rejectDeadline = null;
            }
        }
    }
    async perform(n, effect, s) {
        if (this.disposed) {
            throw Ot();
        }
        if (!Wr(Math.ceil(n.durationSec * 48000))) {
            throw Ur();
        }
        if (!new Audio().canPlayType("audio/ogg;codecs=opus")) {
            throw new Error("Этот браузер не поддерживает эффекты голоса. Можно отправить без эффекта.");
        }
        if (typeof Worker === "undefined") {
            throw new Error("Браузер не поддерживает обработку записи");
        }
        const o = await this.decode(n);
        if (this.disposed || s !== this.generation) {
            throw Ot();
        }
        const u = o.channels.map((a)=>a.slice().buffer);
        const i = new Worker(new URL("/assets/worker-B6m_-KGh.js", import.meta.url), {
            type: "module",
            name: "voice-effects"
        });
        this.worker = i;
        try {
            return await new Promise((a, h)=>{
                this.rejectJob = h;
                i.onmessage = (d)=>{
                    if (this.disposed || s !== this.generation) {
                        h(Ot());
                        return;
                    }
                    const d_data = d.data;
                    if (d_data.id !== s) {
                        return;
                    }
                    if ("error" in d_data) {
                        h(new Error(d_data.error));
                        return;
                    }
                    if (!(d_data.ogg instanceof ArrayBuffer) || !(d_data.wav instanceof ArrayBuffer) || !(d_data.waveform instanceof ArrayBuffer) || d_data.waveform.byteLength !== 100 || !Fh(d_data.sampleCount)) {
                        h(new Error("Не удалось подготовить запись"));
                        return;
                    }
                    const l = new Uint8Array(d_data.waveform);
                    a({
                        blob: new Blob([
                            d_data.ogg
                        ], {
                            type: "audio/ogg"
                        }),
                        previewBlob: new Blob([
                            d_data.wav
                        ], {
                            type: "audio/wav"
                        }),
                        mime: "audio/ogg",
                        durationSec: d_data.sampleCount / 48000,
                        waveformSamples: l,
                        waveformLevels: dp_1(l)
                    });
                };
                i.onerror = ()=>h(new Error("Не удалось обработать запись. Попробуйте другой эффект."));
                i.onmessageerror = ()=>h(new Error("Не удалось подготовить запись"));
                const c = {
                    id: s,
                    effect,
                    channels: u,
                    sampleRate: o.sampleRate
                };
                i.postMessage(c, u);
            });
        } finally{
            i.terminate();
            if (this.worker === i) {
                this.worker = null;
                this.rejectJob = null;
            }
        }
    }
    cancel(n = Ot()) {
        this.generation++;
        if (this.deadline !== null) {
            clearTimeout(this.deadline);
        }
        this.deadline = null;
        this.rejectDeadline?.(n);
        this.rejectDeadline = null;
        if (this.context && this.context.state !== "closed") {
            this.context.close().catch(()=>{});
        }
        this.worker?.terminate();
        this.worker = null;
        this.rejectJob?.(n);
        this.rejectJob = null;
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.cancel();
            this.decoded = null;
            this.context?.close().catch(()=>{});
            this.context = null;
        }
    }
}
function Hh(e) {
    const n = e?.name ?? "";
    const r = e?.message ?? "";
    if (n === "NotAllowedError" || n === "SecurityError" || /permission|denied/i.test(r)) {
        return "Доступ к микрофону запрещён. Разрешите его в настройках браузера";
    }
    if (n === "NotFoundError" || n === "DevicesNotFoundError" || /device.*not found/i.test(r)) {
        return "Микрофон не найден. Подключите его и попробуйте снова";
    }
    if (n === "NotReadableError" || n === "TrackStartError" || /could not start audio source/i.test(r)) {
        return "Не удалось включить микрофон. Проверьте, не занят ли он другой программой";
    }
    if (n === "NotSupportedError" || /not supported/i.test(r)) {
        return "Этот браузер не поддерживает запись голоса";
    }
    return "Не удалось записать голосовое сообщение. Проверьте микрофон и попробуйте снова";
}
const inputBar = "aY19";
const textInputBar = "IGfm";
const Uh = "uJ6e";
const voiceInputBar = "nC5K";
const textareaWrap = "vzMP";
const attachPreviewRow = "iKLc";
const lengthHint = "fMH8";
const replyHeader = "A0wy";
const textareaShell = "N6LE";
const subscriptionGate = "NBaz";
const replyClosing = "SLKE";
const voiceReply = "FTqC";
const replyAccent = "Sy6U";
const replyText = "opLV";
const replyAuthor = "ZGIl";
const replyPreview = "sjTo";
const replyClose = "V6f0";
const textarea = "ishT";
const textareaWithEmoji = "iYTL";
const textareaWithCounter = "EhVt";
const emojiControl = "Cv8f";
const emojiButton = "IjDU";
const characterCount = "op18";
const characterCountWarning = "hMGx";
const sendButton = "ZXzF";
const sendAsFiles = "B89g";
const attachChip = "vq3Z";
const attachThumb = "aJYC";
const attachFile = "nJHT";
const attachDocument = "JW4t";
const attachFileBody = "wD3z";
const attachFileIcon = "RdmM";
const attachFileSize = "tNIa";
const attachFileStem = "cbat";
const attachFileName = "ubKw";
const recordingArea = "reen";
const recordingDot = "ax4U";
const recordingTimer = "kkjY";
const liveWaveform = "udap";
const liveBar = "SYX0";
const recordStopButton = "l94D";
const recordedPreview = "h36z";
const previewPlayBtn = "xhEl";
const previewWaveform = "UKQq";
const previewBars = "sNs5";
const previewBarsFill = "nnLV";
const previewBar = "QXNM";
const previewBarActive = "xJzF";
const previewDuration = "ISt4";
const attachRemove = "XrHl";
const voiceWorkspace = "oHYa";
const effectStatus = "IhSn";
const ee = {
    inputBar,
    textInputBar,
    iconButton: Uh,
    voiceInputBar,
    textareaWrap,
    attachPreviewRow,
    lengthHint,
    replyHeader,
    textareaShell,
    subscriptionGate,
    replyClosing,
    voiceReply,
    replyAccent,
    replyText,
    replyAuthor,
    replyPreview,
    replyClose,
    textarea,
    textareaWithEmoji,
    textareaWithCounter,
    emojiControl,
    emojiButton,
    characterCount,
    characterCountWarning,
    sendButton,
    sendAsFiles,
    attachChip,
    attachThumb,
    attachFile,
    attachDocument,
    attachFileBody,
    attachFileIcon,
    attachFileSize,
    attachFileStem,
    attachFileName,
    recordingArea,
    recordingDot,
    recordingTimer,
    liveWaveform,
    liveBar,
    recordStopButton,
    recordedPreview,
    previewPlayBtn,
    previewWaveform,
    previewBars,
    previewBarsFill,
    previewBar,
    previewBarActive,
    previewDuration,
    attachRemove,
    voiceWorkspace,
    effectStatus
};
const Un = new Set;
aA(()=>{
    for (const e of [
        ...Un
    ]){
        e();
    }
});
const Hf = 1;
const qr = 3;
const Vr = 3;
const qn = ({ size = 20 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        children: u_1("path", {
            d: "M3 20L21 12L3 4V10L15 12L3 14V20Z",
            fill: "currentColor"
        })
    });
const zf = ({ stopRequested = false, onSendVoice, onTyping, onActive, onExit })=>{
    const [u] = d_1(az);
    const i = A_1(true);
    const a = A_1(null);
    const h = A_1(null);
    const [c, d] = d_1(0);
    const f = A_1(null);
    const [l, m] = d_1(null);
    const [g, p] = d_1("starting");
    const [S, onLevels] = d_1([]);
    const [y, onTime] = d_1(0);
    const [N, x] = d_1(null);
    const [k, $] = d_1(null);
    const [O, F] = d_1(false);
    const [H, Y] = d_1(0);
    const Q = A_1(null);
    const C = A_1(false);
    const R = A_1(null);
    const D = ()=>i.current && au_1(u);
    const X = (_)=>{
        R.current?.pause();
        F(false);
        Y(0);
        if (h.current) {
            URL.revokeObjectURL(h.current);
        }
        const te = _ ? URL.createObjectURL(_) : null;
        h.current = te;
        $(te);
    };
    h_1(()=>{
        if (!au_1(u)) {
            i.current = false;
            return;
        }
        i.current = true;
        const _ = new dq;
        Q.current = _;
        _.setListener({
            onState: (ce, J)=>{
                if (!D()) {
                    if (ce === "recording" || ce === "requesting") {
                        _.cancel();
                    }
                    return;
                }
                if (ce === "recording") {
                    p("recording");
                    onActive();
                }
                if (ce === "error") {
                    aF.error(Hh(J));
                    onExit();
                }
            },
            onLevels,
            onTime
        });
        const te = ()=>{
            if (i.current) {
                i.current = false;
                _.cancel();
                a.current?.dispose();
                a.current = null;
                if (f.current !== null) {
                    window.clearInterval(f.current);
                }
                f.current = null;
                R.current?.pause();
                R.current?.removeAttribute("src");
                R.current?.load();
                R.current = null;
                if (h.current) {
                    URL.revokeObjectURL(h.current);
                }
                h.current = null;
                Q.current = null;
            }
        };
        Un.add(te);
        b9();
        _.start();
        return ()=>{
            Un.delete(te);
            te();
        };
    }, []);
    h_1(()=>{
        if (!l?.processing) {
            return;
        }
        d(0);
        const _ = Date.now();
        const te = window.setInterval(()=>{
            if (D()) {
                d(Math.floor((Date.now() - _) / 1000));
            }
        }, 1000);
        f.current = te;
        return ()=>{
            window.clearInterval(te);
            if (f.current === te) {
                f.current = null;
            }
        };
    }, [
        l?.processing,
        l?.selected
    ]);
    h_1(()=>{
        if (g !== "recording" || !i.current || !au_1(u)) {
            return;
        }
        onTyping?.("record_voice");
        const _ = window.setInterval(()=>{
            i.current && au_1(u) && onTyping?.("record_voice");
        }, 4100);
        return ()=>window.clearInterval(_);
    }, [
        g,
        onTyping,
        u
    ]);
    const I = A_1(null);
    const [q, A] = d_1(40);
    h_1(()=>{
        if (g !== "recording") {
            return;
        }
        const I_current = I.current;
        if (!I_current) {
            return;
        }
        const te = ()=>{
            const I_current_clientWidth = I_current.clientWidth;
            if (I_current_clientWidth > 0) {
                A(Hn(I_current_clientWidth, qr, Vr, 40));
            }
        };
        te();
        const ce = new ResizeObserver(te);
        ce.observe(I_current);
        return ()=>ce.disconnect();
    }, [
        g
    ]);
    const v = A_1(null);
    const [U, oe] = d_1(40);
    h_1(()=>{
        if (g !== "recorded") {
            return;
        }
        const v_current = v.current;
        if (!v_current) {
            return;
        }
        const te = ()=>{
            const v_current_clientWidth = v_current.clientWidth;
            if (v_current_clientWidth > 0) {
                oe(Hn(v_current_clientWidth, qr, Vr, 40));
            }
        };
        te();
        const ce = new ResizeObserver(te);
        ce.observe(v_current);
        return ()=>ce.disconnect();
    }, [
        g
    ]);
    h_1(()=>{
        const R_current = R.current;
        if (!R_current || !k) {
            return;
        }
        const te = ()=>{
            b9();
            F(true);
        };
        const ce = ()=>F(false);
        const J = ()=>{
            F(false);
            Y(0);
        };
        const V = ()=>{
            const R_current_duration = R_current.duration;
            if (isFinite(R_current_duration) && R_current_duration > 0) {
                Y(R_current.currentTime / R_current_duration);
            }
        };
        R_current.addEventListener("play", te);
        R_current.addEventListener("pause", ce);
        R_current.addEventListener("ended", J);
        R_current.addEventListener("timeupdate", V);
        return ()=>{
            R_current.removeEventListener("play", te);
            R_current.removeEventListener("pause", ce);
            R_current.removeEventListener("ended", J);
            R_current.removeEventListener("timeupdate", V);
        };
    }, [
        k
    ]);
    const de = async ()=>{
        if (!D() || C.current) {
            return;
        }
        C.current = true;
        const _ = await Q.current?.stop();
        if (!D()) {
            return;
        }
        if (!_) {
            onExit();
            return;
        }
        if (_.durationSec < Hf) {
            aF.error("Запись слишком короткая. Запишите хотя бы одну секунду");
            onExit();
            return;
        }
        const te = new _h(_, {
            processor: new jh,
            isCurrent: D,
            onChange: (ce)=>{
                m(ce);
                X(ce.result?.previewBlob ?? null);
            }
        });
        a.current = te;
        m(te.getState());
        X(_.blob);
        x(_);
        p("recorded");
    };
    const B = ()=>{
        a.current?.dispose();
        Q.current?.cancel();
        onExit();
    };
    h_1(()=>{
        stopRequested && (g === "starting" ? (Q.current?.cancel(), onExit()) : g === "recording" && de());
    }, [
        stopRequested,
        g
    ]);
    const Z = ()=>{
        a.current?.dispose();
        X(null);
        onExit();
    };
    const z = ()=>{
        if (!D()) {
            return;
        }
        if (!N || !onSendVoice) {
            Z();
            return;
        }
        const _ = a.current?.consumeForSend();
        if (!_) {
            return;
        }
        const te = dr_1(_.waveformSamples);
        onSendVoice(_.blob, _.durationSec, te);
        Z();
    };
    const W = ()=>{
        if (!D() || l?.processing) {
            return;
        }
        const R_current = R.current;
        R_current && (R_current.paused ? R_current.play().catch(()=>{}) : R_current.pause());
    };
    const onSelect = (_)=>{
        D() && a.current?.select(_);
    };
    const Be = l?.result ?? N;
    const Se = (_)=>{
        if (!D() || l?.processing || !Be) {
            return;
        }
        const R_current = R.current;
        if (!R_current) {
            return;
        }
        const ce = Math.max(0, Math.min(1, _));
        try {
            R_current.currentTime = ce * Be.durationSec;
            Y(ce);
        } catch  {}
    };
    if (g === "recording") {
        const _ = S.slice(-q);
        const te = _.length < q ? [
            ...new Array(q - _.length).fill(0),
            ..._
        ] : _;
        return u_1("div", {
            className: `${ee.inputBar} ${ee.voiceInputBar}`,
            children: [
                u_1("button", {
                    type: "button",
                    className: ee.iconButton,
                    onClick: B,
                    "aria-label": "Отменить запись",
                    children: u_1(b8, {
                        size: 20
                    })
                }),
                u_1("div", {
                    className: ee.recordingArea,
                    children: [
                        u_1("span", {
                            className: ee.recordingDot,
                            "aria-hidden": "true"
                        }),
                        u_1("span", {
                            className: ee.recordingTimer,
                            children: c$(y)
                        }),
                        u_1("div", {
                            ref: I,
                            className: ee.liveWaveform,
                            "aria-hidden": "true",
                            children: te.map((ce, J)=>u_1("span", {
                                    className: ee.liveBar,
                                    style: {
                                        height: `${Math.max(8, ce * 100)}%`
                                    }
                                }, J))
                        })
                    ]
                }),
                u_1("button", {
                    type: "button",
                    className: `${ee.iconButton} ${ee.recordStopButton}`,
                    onClick: de,
                    "aria-label": "Остановить запись",
                    children: u_1(I_6, {
                        size: 20
                    })
                })
            ]
        });
    }
    if (g === "recorded" && Be) {
        const _ = xs(Be.waveformLevels, U);
        return u_1("div", {
            className: ee.voiceWorkspace,
            "data-voice-preview": true,
            children: [
                u_1(Dh, {
                    selected: l?.selected ?? "none",
                    processing: l?.processing ?? false,
                    onSelect
                }),
                l?.processing ? u_1("p", {
                    className: ee.effectStatus,
                    role: "status",
                    children: [
                        "Подготовка записи… ",
                        u_1("span", {
                            "aria-live": "off",
                            children: [
                                c,
                                " с"
                            ]
                        })
                    ]
                }) : l?.error ? u_1("p", {
                    className: ee.effectStatus,
                    role: "status",
                    children: l.error.includes("исходная запись сохранена") || l.error.includes("не поддерживает") ? l.error : "Не удалось применить эффект. Выбран режим «Нет»."
                }) : null,
                u_1("div", {
                    className: `${ee.inputBar} ${ee.voiceInputBar}`,
                    children: [
                        u_1("button", {
                            type: "button",
                            className: ee.iconButton,
                            onClick: Z,
                            "aria-label": "Удалить запись",
                            children: u_1(bD, {
                                size: 20
                            })
                        }),
                        u_1("div", {
                            className: ee.recordedPreview,
                            children: [
                                u_1("button", {
                                    type: "button",
                                    className: ee.previewPlayBtn,
                                    onClick: W,
                                    disabled: l?.processing,
                                    "aria-label": O ? "Пауза" : "Воспроизвести",
                                    children: O ? u_1(cV, {}) : u_1(cT, {})
                                }),
                                u_1("div", {
                                    ref: v,
                                    className: ee.previewWaveform,
                                    role: "slider",
                                    tabIndex: l?.processing ? -1 : 0,
                                    "aria-label": "Перемотать запись",
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    "aria-valuenow": Math.round(H * 100),
                                    "aria-disabled": l?.processing || undefined,
                                    onPointerDown: (te)=>{
                                        const ce = te.currentTarget.getBoundingClientRect();
                                        Se((te.clientX - ce.left) / ce.width);
                                    },
                                    onKeyDown: (te)=>{
                                        const ce = te.key === "Home" ? 0 : te.key === "End" ? 1 : te.key === "ArrowRight" ? H + 0.05 : te.key === "ArrowLeft" ? H - 0.05 : null;
                                        if (ce !== null) {
                                            te.preventDefault();
                                            Se(ce);
                                        }
                                    },
                                    children: u_1(Rs, {
                                        bars: _,
                                        progress: H,
                                        classes: {
                                            layer: ee.previewBars,
                                            fill: ee.previewBarsFill,
                                            bar: ee.previewBar,
                                            barActive: ee.previewBarActive
                                        }
                                    })
                                }),
                                u_1("span", {
                                    className: ee.previewDuration,
                                    children: c$(O || H > 0 ? Be.durationSec * H : Be.durationSec)
                                })
                            ]
                        }),
                        k && u_1("audio", {
                            ref: R,
                            src: k,
                            preload: "metadata"
                        }),
                        u_1("button", {
                            type: "button",
                            className: `${ee.iconButton} ${ee.sendButton}`,
                            onClick: z,
                            disabled: l?.processing,
                            "aria-busy": l?.processing,
                            "aria-label": "Отправить",
                            children: u_1(qn, {
                                size: 20
                            })
                        })
                    ]
                })
            ]
        });
    }
    return null;
};
const Gr = 240;
const Vt = 4096;
const Wf = 256;
aA(()=>{
    Ge.clear();
});
function It(e) {
    if (typeof e.cloneNode !== "function") {
        e.style.height = `${Math.min(e.scrollHeight, Gr)}px`;
        return;
    }
    const n = e.cloneNode(false);
    const r = getComputedStyle(e);
    n.removeAttribute("id");
    n.removeAttribute("name");
    n.tabIndex = -1;
    n.setAttribute("aria-hidden", "true");
    n.value = e.value;
    n.style.cssText = "position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;height:auto;min-height:0;max-height:none;transition:none;";
    for (const s of [
        "font",
        "line-height",
        "letter-spacing",
        "padding",
        "border",
        "box-sizing",
        "white-space",
        "word-break",
        "overflow-wrap",
        "scrollbar-gutter"
    ]){
        n.style.setProperty(s, r.getPropertyValue(s));
    }
    n.style.width = `${e.getBoundingClientRect().width}px`;
    (e.parentElement ?? document.body).append(n);
    try {
        e.style.height = `${Math.min(n.scrollHeight, Gr)}px`;
    } finally{
        n.remove();
    }
}
function Kr(e, n, r) {
    return u_1("div", {
        className: `${ee.replyHeader} ${n ? ee.replyClosing : ""}`,
        inert: n || undefined,
        children: [
            u_1("div", {
                className: ee.replyAccent
            }),
            e.chatId && u_1(js, {
                chatId: e.chatId,
                attachment: e.attachment
            }, e.chatId + e.text),
            u_1("div", {
                className: ee.replyText,
                children: [
                    u_1("span", {
                        className: ee.replyAuthor,
                        children: [
                            "В ответ ",
                            e.author
                        ]
                    }),
                    u_1("span", {
                        className: ee.replyPreview,
                        children: e.text
                    })
                ]
            }),
            u_1("button", {
                type: "button",
                className: ee.replyClose,
                onClick: r,
                "aria-label": "Отменить ответ",
                children: u_1(b8, {
                    size: 16
                })
            })
        ]
    });
}
const Xr = 10;
const Uf = ({ emojiOwnerId, promotedDraftKey, draftKey, onSend, onSendVoice, onTyping, reply, onCancelReply, editing, onCancelEdit, onEditLast, textareaRef, addFilesRef, subscriptionRequired = false, onSubscriptionRequired })=>{
    const [p, S] = d_1("");
    const M = A_1(reply);
    const [y, P] = d_1(false);
    if (reply) {
        M.current = reply;
    }
    b6(()=>{
        if (reply) {
            P(false);
            return;
        }
        if (!M.current) {
            return;
        }
        P(true);
        const j = setTimeout(()=>{
            M.current = null;
            P(false);
        }, 220);
        return ()=>clearTimeout(j);
    }, [
        reply
    ]);
    const N = reply ?? (y ? M.current : null);
    const x = dn_1();
    const [k, $] = d_1([]);
    const [O, F] = d_1(false);
    h_1(()=>{
        if (!k.length) {
            F(false);
        }
    }, [
        k.length
    ]);
    const [H, Y] = d_1(false);
    const Q = A_1(null);
    b6(()=>{
        Q.current = null;
        Y(false);
    }, [
        draftKey,
        editing?.id
    ]);
    const C = kh(k);
    h_1(()=>{
        for (const j of k){
            ds_1(j);
        }
    }, [
        k
    ]);
    const R = A_1(null);
    b6(()=>{
        if (R.current) {
            It(R.current);
        }
    }, [
        p,
        editing?.id
    ]);
    b6(()=>{
        const R_current = R.current;
        if (!R_current || typeof ResizeObserver === "undefined") {
            return;
        }
        let width = R_current.getBoundingClientRect().width;
        const fe = new ResizeObserver(()=>{
            const width_1 = R_current.getBoundingClientRect().width;
            if (!(Math.abs(width_1 - width) < 1)) {
                width = width_1;
                It(R_current);
            }
        });
        fe.observe(R_current);
        return ()=>fe.disconnect();
    }, [
        draftKey
    ]);
    const D = A_1(null);
    const X = (j)=>{
        R.current = j;
        if (textareaRef) {
            textareaRef.current = j;
        }
    };
    const I = !!editing;
    const q = subscriptionRequired && !I;
    const A = ()=>{
        if (q) {
            return onSubscriptionRequired?.(), true;
        }
        return false;
    };
    const v = A_1(I);
    b6(()=>{
        v.current = I;
    }, [
        I
    ]);
    const [U, oe] = d_1("idle");
    const [stopRequested, B] = d_1(false);
    const Z = yh(draftKey, {
        onStart: ()=>{
            B(false);
            oe("starting");
        },
        onRelease: ()=>B(true),
        onCancel: ()=>oe("idle")
    });
    const z = A_1(draftKey);
    b6(()=>{
        if (z.current !== draftKey) {
            z.current = draftKey;
            oe("idle");
        }
    }, [
        draftKey
    ]);
    const W = A_1("");
    const ge = A_1(false);
    const Be = A_1(null);
    const Se = A_1(p);
    const _ = A_1("");
    const current = A_1(az()).current;
    const ce = A_1(false);
    const J = A_1(draftKey);
    const V = A_1(new Map);
    const Me = A_1(0);
    const me = A_1(null);
    b6(()=>{
        Se.current = p;
    }, [
        p
    ]);
    const we = (j)=>{
        if (me.current) {
            clearTimeout(me.current);
        }
        if (au_1(current)) {
            cm_1.saveDraft(draftKey, j);
        }
    };
    h_1(()=>{
        const j = ()=>{
            if (!au_1(current)) {
                return;
            }
            const se = V.current.get(draftKey) ?? draftKey;
            cm_1.saveDraft(se, Ge.get(se) ?? _.current);
        };
        window.addEventListener("pagehide", j);
        document.addEventListener("visibilitychange", j);
        return ()=>{
            window.removeEventListener("pagehide", j);
            document.removeEventListener("visibilitychange", j);
        };
    }, [
        draftKey
    ]);
    b6(()=>{
        if (!au_1(current)) {
            return;
        }
        const J_current = J.current;
        if (J_current !== draftKey && J_current === promotedDraftKey) {
            const Ce = Ge.get(J_current) ?? _.current;
            V.current.set(J_current, draftKey);
            J.current = draftKey;
            Me.current++;
            ce.current = true;
            Ge.delete(J_current);
            Ge.set(draftKey, Ce);
            _.current = Ce;
            cm_1.moveDraft(J_current, draftKey, Ce);
            return;
        }
        if (J_current !== draftKey) {
            if (me.current) {
                clearTimeout(me.current);
                me.current = null;
            }
            cm_1.saveDraft(J_current, Ge.get(J_current) ?? _.current);
        }
        J.current = draftKey;
        const se = ++Me.current;
        ce.current = false;
        const fe = Ge.get(draftKey);
        _.current = fe ?? "";
        Se.current = "";
        S("");
        if (fe !== undefined) {
            if (v.current) {
                W.current = fe;
            } else {
                S(fe);
                requestAnimationFrame(()=>{
                    if (R.current) {
                        It(R.current);
                    }
                });
            }
            return;
        }
        cm_1.loadDraft(draftKey).then((Ce)=>{
            if (!au_1(current) || se !== Me.current || J.current !== draftKey || ce.current) {
                return;
            }
            const Qe = Ce ?? "";
            if (!Ge.has(draftKey)) {
                Ge.set(draftKey, Qe);
                _.current = Qe;
                if (v.current) {
                    W.current = Qe;
                } else {
                    S(Qe);
                    requestAnimationFrame(()=>{
                        if (R.current) {
                            It(R.current);
                        }
                    });
                }
            }
        });
    }, [
        draftKey
    ]);
    h_1(()=>()=>{
            Me.current += 1;
            if (me.current) {
                clearTimeout(me.current);
                me.current = null;
            }
            if (!au_1(current)) {
                return;
            }
            const j = V.current.get(draftKey) ?? draftKey;
            cm_1.saveDraft(j, Ge.get(j) ?? _.current);
        }, [
        draftKey
    ]);
    b6(()=>{
        const j = editing ? `${draftKey}:${editing.id}` : null;
        if (Be.current !== j) {
            Be.current = j;
            if (editing) {
                if (!ge.current) {
                    W.current = Ge.get(draftKey) ?? _.current;
                }
                ge.current = true;
                S(editing.text);
                const se = R.current;
                if (se) {
                    se.focus();
                    se.setSelectionRange(editing.text.length, editing.text.length);
                    It(se);
                }
                return;
            }
            if (ge.current) {
                ge.current = false;
                S(W.current);
                W.current = "";
                requestAnimationFrame(()=>{
                    if (R.current) {
                        It(R.current);
                    }
                });
            }
        }
    }, [
        editing,
        draftKey
    ]);
    b6(()=>{
        if (!editing?.removed) {
            return;
        }
        const Se_current = Se.current;
        const W_current = W.current;
        const fe = W_current && W_current !== Se_current ? `${Se_current}

${W_current}` : Se_current;
        W.current = fe;
        _.current = fe;
        Ge.set(draftKey, fe);
        cm_1.saveDraft(draftKey, fe);
        aF.success("Сообщение удалено. Ваш текст остался в поле ввода");
        onCancelEdit?.();
    }, [
        editing?.removed,
        draftKey
    ]);
    const De = (j)=>{
        const se = Array.from(j);
        const fe = [];
        for (const Ce of se){
            if (k.length + fe.length >= Xr) {
                aF.error(`Максимум ${Xr} файлов`);
                break;
            }
            if (Ce.size > MAX_FILE_SIZE) {
                aF.error(`Файл слишком большой: ${Ce.name}`);
                continue;
            }
            if (Ce.size === 0) {
                aF.error(`Файл пустой: ${Ce.name}`);
                continue;
            }
            fe.push(Ce);
        }
        if (fe.length !== 0) {
            $((Ce)=>[
                    ...Ce,
                    ...fe
                ]);
        }
    };
    const Ve = (j)=>{
        $((se)=>se.filter((fe, Ce)=>Ce !== j));
    };
    b6(()=>{
        const j = (se)=>{
            if (!(se.key !== "Escape" || se.defaultPrevented || se.isComposing || U !== "idle" || [
                ...document.querySelectorAll('[data-message-menu], [role="dialog"], aside[aria-label="Информация о чате"][aria-hidden="false"]')
            ].some((Ce)=>!Ce.hasAttribute("inert") && Ce.getAttribute("aria-hidden") !== "true" && Ce.getClientRects().length > 0 && getComputedStyle(Ce).visibility !== "hidden"))) {
                if (I) {
                    onCancelEdit?.();
                } else if (reply) {
                    onCancelReply?.();
                } else if (k.length) {
                    $([]);
                } else {
                    return;
                }
                se.preventDefault();
            }
        };
        window.addEventListener("keydown", j);
        return ()=>window.removeEventListener("keydown", j);
    }, [
        I,
        reply,
        k.length,
        U,
        onCancelEdit,
        onCancelReply
    ]);
    const _e = ()=>{
        if (Q.current || A()) {
            return;
        }
        if (p.length > Vt) {
            aF.error(`Максимум ${Vt} символов`);
            return;
        }
        const j = Hr(p) ? p.trim() : "";
        if (I) {
            if (!j && !editing?.hasAttachments) {
                aF.error("Сообщение не может быть пустым. Удалите его через меню или отмените редактирование");
                return;
            }
        } else if (!j && k.length === 0) {
            return;
        }
        R.current?.focus({
            preventScroll: true
        });
        if (I) {
            if (j === editing?.text.trim()) {
                onCancelEdit?.();
                return;
            }
            const se = {};
            Q.current = se;
            Y(true);
            (async ()=>{
                try {
                    await onSend(j, []) !== false && au_1(current) && Q.current === se && onCancelEdit?.();
                } catch  {
                    if (au_1(current) && Q.current === se) {
                        aF.error("Не удалось сохранить сообщение. Попробуйте снова");
                    }
                } finally{
                    if (au_1(current) && Q.current === se) {
                        Q.current = null;
                        Y(false);
                    }
                }
            })();
            return;
        }
        onSend(j, O ? k.map(gh) : k);
        if (!I) {
            if (!au_1(current)) {
                return;
            }
            Ge.set(draftKey, "");
            _.current = "";
            ce.current = true;
            if (me.current) {
                clearTimeout(me.current);
                me.current = null;
            }
            cm_1.deleteDraft(draftKey);
        }
        S("");
        $([]);
        if (R.current) {
            R.current.style.height = "";
        }
    };
    h_1(()=>{
        if (addFilesRef) {
            addFilesRef.current = (j)=>{
                if (!(I || U === "active" || q)) {
                    De(j);
                }
            };
        }
    });
    const onPaste = (j)=>{
        if (q) {
            j.preventDefault();
            A();
            return;
        }
        const se = j.clipboardData?.files;
        if (!(j.clipboardData?.getData("text/plain") ?? "") && !I && se && se.length > 0) {
            j.preventDefault();
            De(se);
            return;
        }
    };
    const Ye = ()=>{
        A() || D.current?.click();
    };
    const He = (j = 0)=>{
        if (!(Z.ignoreClick(j) || A())) {
            B(false);
            oe("starting");
        }
    };
    const onEmojiSelect = (j)=>{
        if (!au_1(current) || A()) {
            return;
        }
        const R_current = R.current;
        const fe = R_current?.value ?? Se.current;
        const Ce = R_current?.selectionStart ?? fe.length;
        const Qe = R_current?.selectionEnd ?? Ce;
        const tt = `${fe.slice(0, Ce)}${j.emoji}${fe.slice(Qe)}`;
        if (tt.length > Vt) {
            aF.error(`Максимум ${Vt} символов`);
            return;
        }
        if (R_current && typeof document.execCommand === "function") {
            R_current.focus({
                preventScroll: true
            });
            R_current.setSelectionRange(Ce, Qe);
            try {
                if (document.execCommand("insertText", false, j.emoji) && R_current.value === tt) {
                    Se.current = tt;
                    ct({
                        currentTarget: R_current
                    });
                    return;
                }
            } catch  {}
        }
        Se.current = tt;
        S(tt);
        if (!I) {
            ce.current = true;
            if (!au_1(current)) {
                return;
            }
            _.current = tt;
            Ge.set(draftKey, tt);
            we(tt);
        }
        onTyping?.();
        requestAnimationFrame(()=>{
            if (!R_current) {
                return;
            }
            const lt = Ce + j.emoji.length;
            R_current.focus();
            R_current.setSelectionRange(lt, lt);
            It(R_current);
        });
    };
    const onChange = (j)=>{
        const files = j.currentTarget.files;
        if (files && files.length > 0) {
            De(files);
        }
        if (D.current) {
            D.current.value = "";
        }
    };
    const Dt = (j)=>{
        const matches = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (vh(j, matches)) {
            j.preventDefault();
            _e();
            return;
        }
        if (j.key === "Escape" && I) {
            j.preventDefault();
            j.stopPropagation();
            onCancelEdit?.();
            return;
        }
        if (j.key === "ArrowUp" && !I && onEditLast && p.length === 0 && k.length === 0) {
            j.preventDefault();
            onEditLast();
        }
    };
    const ct = (j)=>{
        if (q) {
            return;
        }
        const j_currentTarget = j.currentTarget;
        const se_value = j_currentTarget.value;
        S(se_value);
        if (!I) {
            ce.current = true;
            if (!au_1(current)) {
                return;
            }
            _.current = se_value;
            Ge.set(draftKey, se_value);
            we(se_value);
        }
        It(j_currentTarget);
        j_currentTarget.value.length > 0 && onTyping?.();
    };
    const je = Hr(p);
    const Je = k.length > 0;
    const ke = Vt - p.length;
    const Rt = ke <= Wf;
    const ht = ke < 0;
    const et = I ? je || (editing?.hasAttachments ?? false) : je || Je;
    return u_1(S_1, {
        children: [
            U === "active" && N && !I && u_1("div", {
                className: ee.voiceReply,
                children: Kr(N, y, onCancelReply)
            }),
            U !== "idle" && u_1(zf, {
                stopRequested,
                onSendVoice,
                onTyping,
                onActive: ()=>oe("active"),
                onExit: ()=>oe("idle")
            }),
            U !== "active" && u_1("div", {
                className: `${ee.inputBar} ${ee.textInputBar}`,
                children: [
                    u_1("input", {
                        ref: D,
                        type: "file",
                        multiple: true,
                        hidden: true,
                        onChange
                    }),
                    I ? u_1("span", {
                        className: ee.iconButton,
                        style: {
                            visibility: "hidden"
                        },
                        "aria-hidden": "true"
                    }) : u_1("button", {
                        type: "button",
                        className: ee.iconButton,
                        onClick: Ye,
                        "aria-label": "Прикрепить",
                        children: u_1(dt_1, {
                            size: 20
                        })
                    }),
                    u_1("div", {
                        className: ee.textareaWrap,
                        children: [
                            !I && Je && u_1(S_1, {
                                children: [
                                    u_1("div", {
                                        className: ee.attachPreviewRow,
                                        children: k.map((j, se)=>{
                                            const fe = C.get(j);
                                            const Ce = !fe || O;
                                            const Qe = d0(j.name);
                                            return u_1("div", {
                                                className: `${ee.attachChip} ${Ce ? ee.attachDocument : ""}`,
                                                children: [
                                                    fe && !O ? u_1("img", {
                                                        src: fe,
                                                        alt: "",
                                                        className: ee.attachThumb
                                                    }) : u_1("div", {
                                                        className: ee.attachFile,
                                                        children: [
                                                            u_1("span", {
                                                                className: ee.attachFileIcon,
                                                                "aria-hidden": "true",
                                                                children: u_1(dt_1, {
                                                                    size: 20
                                                                })
                                                            }),
                                                            u_1("div", {
                                                                className: ee.attachFileBody,
                                                                children: [
                                                                    u_1("span", {
                                                                        className: ee.attachFileName,
                                                                        title: Qe.name,
                                                                        children: [
                                                                            u_1("bdi", {
                                                                                className: ee.attachFileStem,
                                                                                children: Qe.stem
                                                                            }),
                                                                            u_1("bdi", {
                                                                                dir: "ltr",
                                                                                children: Qe.extension
                                                                            })
                                                                        ]
                                                                    }),
                                                                    u_1("span", {
                                                                        className: ee.attachFileSize,
                                                                        children: cW(j.size)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    u_1("button", {
                                                        type: "button",
                                                        className: ee.attachRemove,
                                                        onClick: ()=>Ve(se),
                                                        "aria-label": "Удалить вложение",
                                                        children: u_1(b8, {
                                                            size: 12
                                                        })
                                                    })
                                                ]
                                            }, `${qf(j)}_${se}`);
                                        })
                                    }),
                                    k.some((j)=>/^(image|video|audio)\//.test(j.type)) && u_1("label", {
                                        className: ee.sendAsFiles,
                                        children: [
                                            u_1("input", {
                                                type: "checkbox",
                                                checked: O,
                                                onChange: (j)=>F(j.currentTarget.checked)
                                            }),
                                            u_1("span", {
                                                children: [
                                                    "Отправить как файлы",
                                                    O && u_1("small", {
                                                        children: "Без сжатия. Метаданные файлов сохраняются"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            I && editing ? u_1("div", {
                                className: ee.replyHeader,
                                children: [
                                    u_1("div", {
                                        className: ee.replyAccent
                                    }),
                                    u_1("div", {
                                        className: ee.replyText,
                                        children: [
                                            u_1("span", {
                                                className: ee.replyAuthor,
                                                children: "Редактирование"
                                            }),
                                            u_1("span", {
                                                className: ee.replyPreview,
                                                children: editing.text || "Пустое сообщение"
                                            })
                                        ]
                                    }),
                                    u_1("button", {
                                        type: "button",
                                        className: ee.replyClose,
                                        onClick: onCancelEdit,
                                        "aria-label": "Отменить редактирование",
                                        children: u_1(b8, {
                                            size: 16
                                        })
                                    })
                                ]
                            }) : N ? Kr(N, y, onCancelReply) : null,
                            u_1("div", {
                                className: ee.textareaShell,
                                children: [
                                    q && u_1("button", {
                                        type: "button",
                                        className: ee.subscriptionGate,
                                        onClick: A,
                                        "aria-label": "Узнать об отправке сообщений"
                                    }),
                                    u_1("textarea", {
                                        dir: "auto",
                                        "aria-label": I ? "Редактировать сообщение" : "Сообщение",
                                        ref: X,
                                        className: `${ee.textarea} ${ee.textareaWithEmoji} ${Rt ? ee.textareaWithCounter : ""} ym-disable-keys`,
                                        placeholder: I ? "Редактировать сообщение..." : "Напишите сообщение...",
                                        value: p,
                                        rows: 1,
                                        "aria-invalid": ht || undefined,
                                        "aria-describedby": ht ? x : undefined,
                                        readOnly: q || H,
                                        "aria-busy": H,
                                        inputMode: q ? "none" : undefined,
                                        onClick: A,
                                        onFocus: (j)=>{
                                            if (q) {
                                                j.currentTarget.blur();
                                                A();
                                            }
                                        },
                                        onInput: ct,
                                        onKeyDown: Dt,
                                        onPaste
                                    }),
                                    u_1("div", {
                                        className: ee.emojiControl,
                                        children: u_1(du_1, {
                                            containInChat: true,
                                            native: true,
                                            recentScope: `messenger:${emojiOwnerId ?? "anonymous"}`,
                                            onEmojiSelect,
                                            buttonClassName: ee.emojiButton,
                                            size: 20,
                                            interaction: "click",
                                            canOpen: ()=>!A(),
                                            mobileAlignToViewportEnd: true
                                        })
                                    }),
                                    Rt && u_1("span", {
                                        className: `${ee.characterCount} ${ke <= 50 ? ee.characterCountWarning : ""}`,
                                        title: `Осталось символов: ${ke}`,
                                        children: ke
                                    })
                                ]
                            }),
                            ht && u_1("p", {
                                id: x,
                                className: ee.lengthHint,
                                role: "status",
                                children: "Лимит сообщения: 4096 символов. Сократите текст или отправьте его частями."
                            }),
                            I && !et && u_1("p", {
                                className: ee.lengthHint,
                                role: "status",
                                children: "Сообщение не может быть пустым. Удалите его через меню или отмените редактирование"
                            })
                        ]
                    }),
                    I ? u_1("button", {
                        type: "button",
                        className: `${ee.iconButton} ${ee.sendButton}`,
                        onClick: _e,
                        disabled: !et || H || ht,
                        "aria-label": "Сохранить",
                        children: u_1(qn, {
                            size: 20
                        })
                    }) : et ? u_1("button", {
                        type: "button",
                        className: `${ee.iconButton} ${ee.sendButton}`,
                        onClick: _e,
                        "aria-label": "Отправить",
                        disabled: ht,
                        onPointerDown: (j)=>{
                            if (document.activeElement === R.current) {
                                j.preventDefault();
                            }
                        },
                        children: u_1(qn, {
                            size: 20
                        })
                    }) : u_1("button", {
                        type: "button",
                        className: ee.iconButton,
                        onClick: (j)=>He(j.detail),
                        onPointerDown: (j)=>{
                            if (!(j.button !== 0 || j.isPrimary === false || A())) {
                                Z.press(j.pointerId);
                            }
                        },
                        style: {
                            touchAction: "none",
                            userSelect: "none"
                        },
                        "aria-label": "Голосовое сообщение",
                        title: "Нажмите для записи или удерживайте и отпустите для прослушивания",
                        children: u_1(dv, {
                            size: 20
                        })
                    })
                ]
            })
        ]
    });
};
function qf(e) {
    return `${e.name}_${e.size}_${e.lastModified}`;
}
const sheet = "byvU";
const Gf = "bTIE";
const closeButton = "kOg4";
const Xf = "THhS";
const search = "ZvOm";
const Jf = "uVp2";
const Qf = "suBR";
const Zf = "mx1r";
const rowSelected = "AQ04";
const tm = "TxLP";
const nm = "VMqn";
const checkbox = "WrjC";
const checkboxOn = "o7qX";
const confirm = "sfkq";
const om = "Zk3D";
const rt = {
    sheet,
    header: Gf,
    closeButton,
    title: Xf,
    search,
    list: Jf,
    empty: Qf,
    row: Zf,
    rowSelected,
    avatar: tm,
    name: nm,
    checkbox,
    checkboxOn,
    confirm,
    hint: om
};
const am = ({ chats, excludeChatId, count, onConfirm, onCancel })=>{
    const [u, i] = d_1("");
    const [a, h] = d_1(new Set);
    const [c, d] = d_1(false);
    const [f, l] = d_1(false);
    const [m, g] = d_1([]);
    const [p, S] = d_1([]);
    const [M, y] = d_1(false);
    const [P, N] = d_1(false);
    const [x, k] = d_1(0);
    const $ = ar_1()?.id;
    const O = A_1(true);
    h_1(()=>()=>{
            O.current = false;
        }, []);
    const F = u.trim();
    h_1(()=>{
        if (F.length < 2 || !$) {
            g([]);
            y(false);
            N(false);
            return;
        }
        let C = true;
        const R = az();
        g([]);
        y(false);
        N(true);
        const D = setTimeout(()=>{
            s_1.globalSearch(F.slice(0, 100), 20, 1).then((X)=>{
                if (!C || !au_1(R)) {
                    return;
                }
                const I = new Set;
                const q = [];
                for (const A of X.users){
                    const v = A.userId ?? A.id;
                    if (!(!v || v === $ || v === aL || I.has(v))) {
                        I.add(v);
                        if (!chats.some((U)=>U.id === excludeChatId && U.user.id === v)) {
                            q.push({
                                id: `user:${v}`,
                                user: {
                                    id: v,
                                    name: A.displayName,
                                    username: A.username ?? "",
                                    ...bu_1(A.avatar)
                                }
                            });
                        }
                    }
                }
                g(q);
            }).catch(()=>{
                if (C && au_1(R)) {
                    y(true);
                }
            }).finally(()=>{
                if (C && au_1(R)) {
                    N(false);
                }
            });
        }, 300);
        return ()=>{
            C = false;
            clearTimeout(D);
        };
    }, [
        F,
        $,
        excludeChatId,
        x
    ]);
    const H = a6(()=>{
        const C = new Map;
        for (const D of [
            ...chats,
            ...p
        ]){
            if (D.id !== excludeChatId && !D.user.deleted && !cl_1(D)) {
                C.set(D.id, D);
            }
        }
        for (const D of m){
            if (![
                ...C.values()
            ].some((X)=>X.user.id === D.user.id)) {
                C.set(D.id, D);
            }
        }
        const R = new Set(m.map((D)=>D.user.id));
        return [
            ...C.values()
        ].filter((D)=>!F || dw(D, F) || R.has(D.user.id));
    }, [
        chats,
        p,
        m,
        F,
        excludeChatId
    ]);
    const Y = (C)=>{
        if (!a.has(C) && a.size >= 20) {
            aF.error("Можно выбрать до 20 получателей");
            return;
        }
        if (a.has(C)) {
            S((D)=>D.filter((X)=>X.id !== C));
        }
        const R = m.find((D)=>D.id === C);
        if (R && !a.has(C)) {
            S((D)=>[
                    ...D.filter((X)=>a.has(X.id)),
                    R
                ]);
        }
        h((D)=>{
            const X = new Set(D);
            if (X.has(C)) {
                X.delete(C);
            } else {
                X.add(C);
            }
            return X;
        });
    };
    const Q = async ()=>{
        if (c || a.size === 0) {
            return;
        }
        const C = az();
        const R = ()=>O.current && au_1(C);
        d(true);
        try {
            const D = [];
            const X = [];
            for (const q of a){
                if (!R()) {
                    return;
                }
                if (!q.startsWith("user:")) {
                    D.push(q);
                    continue;
                }
                try {
                    const A = await cq.createDirectChat(q.slice(5));
                    if (!R()) {
                        return;
                    }
                    D.push(A.chat_id);
                    S((v)=>v.map((U)=>{
                            if (U.id === q) {
                                return {
                                    ...U,
                                    id: A.chat_id
                                };
                            }
                            return U;
                        }));
                } catch  {
                    X.push(q);
                }
            }
            if (!R()) {
                return;
            }
            h(new Set([
                ...D,
                ...X
            ]));
            if (X.length) {
                l(true);
                aF.error("Не удалось открыть часть диалогов. Сообщения ещё не отправлены");
                return;
            }
            const I = await onConfirm([
                ...new Set(D)
            ]);
            if (!R()) {
                return;
            }
            if (typeof I === "object" && I) {
                h(new Set(I.failedTargetIds));
                l(true);
            } else if (I === false) {
                l(true);
            }
        } catch  {
            if (R()) {
                l(true);
            }
        } finally{
            if (R()) {
                d(false);
            }
        }
    };
    return aB(u_1(aq, {
        title: "Переслать сообщения",
        onClose: onCancel,
        showHeader: false,
        frameless: false,
        className: `${rt.sheet} ym-hide-content`,
        children: [
            u_1("div", {
                className: rt.header,
                children: [
                    u_1("button", {
                        type: "button",
                        className: rt.closeButton,
                        onClick: onCancel,
                        "aria-label": "Закрыть",
                        children: u_1(b8, {
                            size: 18
                        })
                    }),
                    u_1("span", {
                        className: rt.title,
                        children: [
                            "Переслать ",
                            count,
                            " ",
                            cm(count, [
                                "сообщение",
                                "сообщения",
                                "сообщений"
                            ])
                        ]
                    })
                ]
            }),
            u_1("input", {
                type: "text",
                className: `${rt.search} ym-disable-keys`,
                placeholder: "Чат или пользователь",
                maxLength: 100,
                value: u,
                onInput: (C)=>i(C.currentTarget.value)
            }),
            u_1("div", {
                className: rt.list,
                children: [
                    P && u_1("p", {
                        role: "status",
                        className: rt.hint,
                        children: "Ищем пользователей..."
                    }),
                    M && u_1("p", {
                        role: "status",
                        className: rt.hint,
                        children: [
                            "Не удалось найти пользователей ",
                            u_1("button", {
                                type: "button",
                                onClick: ()=>k((C)=>C + 1),
                                children: "Повторить"
                            })
                        ]
                    }),
                    f && u_1("p", {
                        role: "status",
                        children: "Не всё отправлено. Выбраны чаты, в которые нужно повторить пересылку"
                    }),
                    H.length === 0 ? u_1("div", {
                        className: rt.empty,
                        children: "Ничего не найдено"
                    }) : H.map((C)=>{
                        const R = a.has(C.id);
                        return u_1("button", {
                            type: "button",
                            "aria-pressed": R,
                            className: `${rt.row} ${R ? rt.rowSelected : ""}`,
                            disabled: c,
                            onClick: ()=>Y(C.id),
                            children: [
                                u_1("div", {
                                    className: rt.avatar,
                                    "aria-hidden": true,
                                    children: u_1(tn, {
                                        src: C.user.avatar,
                                        emoji: C.user.avatarEmoji,
                                        name: C.user.name
                                    })
                                }),
                                u_1("span", {
                                    className: rt.name,
                                    children: C.user.name
                                }),
                                u_1("span", {
                                    className: `${rt.checkbox} ${R ? rt.checkboxOn : ""}`,
                                    children: R && u_1(I, {
                                        size: 12
                                    })
                                })
                            ]
                        }, C.id);
                    })
                ]
            }),
            u_1("button", {
                type: "button",
                className: rt.confirm,
                disabled: c || a.size === 0,
                onClick: Q,
                children: [
                    u_1(aY, {
                        size: 16
                    }),
                    u_1("span", {
                        children: [
                            "Переслать ",
                            a.size > 0 ? `(${a.size})` : ""
                        ]
                    })
                ]
            })
        ]
    }), document.body);
};
function cm(e, n) {
    const r = e % 10;
    const s = e % 100;
    if (r === 1 && s !== 11) {
        return n[0];
    }
    if (r >= 2 && r <= 4 && (s < 10 || s >= 20)) {
        return n[1];
    }
    return n[2];
}
const fab = "RvDf";
const hidden = "asN7";
const dm = "Yhxg";
const $n = {
    fab,
    hidden,
    badge: dm
};
const hm = ({ visible, unreadCount, onClick })=>u_1("button", {
        type: "button",
        className: `${$n.fab} ${visible ? "" : $n.hidden}`,
        onClick,
        "aria-label": "К последним сообщениям",
        "aria-hidden": !visible,
        tabIndex: visible ? 0 : -1,
        children: [
            u_1("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                "aria-hidden": "true",
                children: u_1("path", {
                    d: "M6 9l6 6 6-6",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }),
            unreadCount > 0 && u_1("span", {
                className: $n.badge,
                children: unreadCount > 99 ? "99+" : unreadCount
            })
        ]
    });
const gn = 100;
function fm(e) {
    if (e.size <= gn) {
        return e;
    }
    return new Set([
        ...e
    ].slice(0, gn));
}
const mm = ({ count, deleting, confirmOpen, setConfirmOpen, showDeleteForAll, onForward, onDelete, onCancel })=>u_1("div", {
        className: Le.selectionBar,
        "data-chat-topbar": true,
        "aria-busy": deleting || undefined,
        children: [
            u_1("span", {
                className: Le.selectionLimit,
                role: "status",
                "aria-label": `Выбрано ${count}, максимум ${gn}`,
                children: [
                    count,
                    "/",
                    gn
                ]
            }),
            confirmOpen ? u_1(S_1, {
                children: [
                    showDeleteForAll && u_1("button", {
                        type: "button",
                        disabled: deleting,
                        "aria-label": `Удалить у всех (${count})`,
                        className: `${Le.selectionAction} ${Le.selectionActionDanger}`,
                        onClick: ()=>onDelete(true),
                        children: [
                            u_1(bD, {
                                size: 18
                            }),
                            u_1("span", {
                                children: "У всех"
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        disabled: deleting,
                        "aria-label": `Удалить у себя (${count})`,
                        className: `${Le.selectionAction} ${Le.selectionActionDanger}`,
                        onClick: ()=>onDelete(false),
                        children: [
                            u_1(bD, {
                                size: 18
                            }),
                            u_1("span", {
                                children: "У себя"
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        disabled: deleting,
                        className: Le.selectionCancel,
                        onClick: ()=>setConfirmOpen(false),
                        "aria-label": "Назад",
                        children: [
                            u_1(b8, {
                                size: 20
                            }),
                            u_1("span", {
                                children: "Назад"
                            })
                        ]
                    })
                ]
            }) : u_1(S_1, {
                children: [
                    u_1("button", {
                        type: "button",
                        disabled: deleting,
                        "aria-label": `Переслать (${count})`,
                        className: Le.selectionAction,
                        onClick: onForward,
                        children: [
                            u_1(aY, {
                                size: 18
                            }),
                            u_1("span", {
                                children: "Переслать"
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        disabled: deleting,
                        "aria-label": `Удалить (${count})`,
                        className: `${Le.selectionAction} ${Le.selectionActionDanger}`,
                        onClick: ()=>{
                            if (showDeleteForAll) {
                                setConfirmOpen(true);
                            } else {
                                onDelete(false);
                            }
                        },
                        children: [
                            u_1(bD, {
                                size: 18
                            }),
                            u_1("span", {
                                children: "Удалить"
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        disabled: deleting,
                        className: Le.selectionCancel,
                        onClick: onCancel,
                        "aria-label": "Отмена",
                        children: [
                            u_1(b8, {
                                size: 20
                            }),
                            u_1("span", {
                                children: "Отмена"
                            })
                        ]
                    })
                ]
            })
        ]
    });
function pm(e, n) {
    const r = A_1(null);
    const [isDragOver, o] = d_1(false);
    const u = A_1(0);
    const i = (f)=>!!f.dataTransfer && Array.from(f.dataTransfer.types).includes("Files");
    const handleDragEnter = (f)=>{
        if (i(f)) {
            f.preventDefault();
            if (e) {
                u.current += 1;
                o(true);
            }
        }
    };
    const handleDragOver = (f)=>{
        if (i(f)) {
            f.preventDefault();
        }
    };
    const handleDragLeave = (f)=>{
        if (i(f)) {
            u.current = Math.max(0, u.current - 1);
            if (u.current === 0) {
                o(false);
            }
        }
    };
    const handleDrop = (f)=>{
        if (!i(f) || (f.preventDefault(), u.current = 0, o(false), !e)) {
            return;
        }
        const l = f.dataTransfer?.files;
        l && l.length > 0 && r.current?.(l);
    };
    h_1(()=>{
        u.current = 0;
        o(false);
    }, [
        n
    ]);
    return {
        addFilesRef: r,
        isDragOver,
        handleDragEnter,
        handleDragOver,
        handleDragLeave,
        handleDrop
    };
}
const gm = 12;
function vm(e, n) {
    const r = A_1(null);
    b6(()=>{
        const r_current = r.current;
        if (!r_current) {
            return;
        }
        const o = r_current.querySelector("[data-chat-topbar]");
        if (!o) {
            r_current.style.removeProperty("--chat-top-inset");
            return;
        }
        const u = ()=>{
            const h = o.offsetHeight + gm;
            const c = parseFloat(r_current.style.getPropertyValue("--chat-top-inset"));
            const d = `${h}px`;
            if (r_current.style.getPropertyValue("--chat-top-inset") !== d) {
                const f = r_current.querySelector("[data-message-list]");
                const l = f?.scrollTop ?? 0;
                r_current.style.setProperty("--chat-top-inset", d);
                if (f && l > 0 && Number.isFinite(c)) {
                    f.scrollTop = l + h - c;
                }
            }
        };
        u();
        let i = 0;
        const a = new ResizeObserver(()=>{
            if (!i) {
                i = requestAnimationFrame(()=>{
                    i = 0;
                    u();
                });
            }
        });
        a.observe(o);
        return ()=>{
            a.disconnect();
            cancelAnimationFrame(i);
        };
    }, [
        e,
        n
    ]);
    return r;
}
function bm(e, n) {
    const [r, s] = d_1(80);
    b6(()=>{
        const o = e.current?.querySelector("[data-chat-composer]");
        if (!o) {
            return;
        }
        let u = 0;
        const i = ()=>{
            const c = Math.ceil(o.getBoundingClientRect().height);
            if (c > 0) {
                const d = e.current;
                const f = d?.querySelector("[data-message-list]");
                const l = !!f && f.scrollHeight - f.scrollTop - f.clientHeight <= 2;
                d?.style.setProperty("--chat-composer-height", `${c}px`);
                if (f && l) {
                    f.scrollTop = f.scrollHeight;
                }
            }
            return c;
        };
        const a = i();
        if (a > 0) {
            s(a);
        }
        const h = new ResizeObserver(()=>{
            const c = i();
            cancelAnimationFrame(u);
            u = requestAnimationFrame(()=>{
                if (c > 0) {
                    s((d)=>{
                        if (d === c) {
                            return d;
                        }
                        return c;
                    });
                }
            });
        });
        h.observe(o);
        return ()=>{
            h.disconnect();
            cancelAnimationFrame(u);
        };
    }, [
        e,
        n
    ]);
    return r;
}
function ym(e, n, r, s) {
    const [fabVisible, u] = d_1(false);
    const i = A_1(false);
    const a = A_1(0);
    const h = A_1(!!e);
    h.current = !!e;
    const c = q_1((l, m)=>{
        const g = l > 40 || m;
        if (g !== i.current) {
            i.current = g;
            u(g);
        }
    }, []);
    const handleDistFromBottom = q_1((l)=>{
        a.current = l;
        c(l, h.current);
        s?.(l <= 40 && !h.current);
    }, [
        c,
        s
    ]);
    h_1(()=>{
        c(a.current, !!e);
        s?.(a.current <= 40 && !e);
    }, [
        e,
        c,
        s
    ]);
    h_1(()=>{
        i.current = false;
        u(false);
    }, [
        n
    ]);
    const handleFabClick = q_1(()=>{
        i.current = false;
        u(false);
        r?.();
    }, [
        r
    ]);
    return {
        fabVisible,
        handleDistFromBottom,
        handleFabClick
    };
}
function wm(e) {
    const n = document.createElement("textarea");
    n.value = e;
    n.style.position = "fixed";
    n.style.opacity = "0";
    n.setAttribute("readonly", "");
    document.body.appendChild(n);
    n.select();
    const r = document.execCommand("copy");
    n.remove();
    return r;
}
async function km(e) {
    try {
        let n = false;
        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(e);
                n = true;
            } catch  {}
        }
        if (!n) {
            n = wm(e);
        }
        if (!n) {
            throw new Error("copy command failed");
        }
        aF.success("Текст скопирован");
    } catch  {
        aF.error("Не удалось скопировать текст");
    }
}
function Cm({ chatId, messages, onDeleteMessage, onDeleteSelected, onForwardSelected, onRetryMessage }) {
    const i = A_1(new Set);
    i.current = new Set(messages.filter((I)=>I.unavailable).map((I)=>I.id));
    const [a, h] = d_1(new Set);
    const c = q_1((I)=>{
        h((q)=>{
            const A = typeof I === "function" ? I(q) : I;
            const v = [
                ...A
            ].filter((U)=>!i.current.has(U));
            return fm(v.length === A.size ? A : new Set(v));
        });
    }, []);
    const d = A_1({
        id: chatId
    });
    if (d.current.id !== chatId) {
        d.current = {
            id: chatId
        };
    }
    const f = A_1(false);
    const [deleting, m] = d_1(false);
    const [forwardPickerOpen, p] = d_1(false);
    const S = A_1(dx());
    const M = A_1(false);
    const y = q_1((I)=>{
        if (I && !M.current) {
            S.current = dx();
        }
        M.current = I;
        p(I);
    }, []);
    const [P, N] = d_1(null);
    const [editingMessage, k] = d_1(null);
    const [$, O] = d_1(false);
    const F = a.size > 0;
    const H = q_1(()=>c(new Set), []);
    const handleBulkDelete = async (I)=>{
        if (f.current) {
            return;
        }
        const q = Array.from(a);
        if (q.length === 0 || !onDeleteSelected) {
            return;
        }
        const d_current = d.current;
        f.current = true;
        m(true);
        try {
            const v = new Set(await onDeleteSelected(q, I));
            if (d.current !== d_current) {
                return;
            }
            O(false);
            c((U)=>new Set([
                    ...U
                ].filter((oe)=>!v.has(oe))));
        } catch  {
            if (d.current === d_current) {
                aF.error("Не удалось удалить сообщения. Попробуйте снова");
            }
        } finally{
            f.current = false;
            m(false);
        }
    };
    const handleForwardConfirm = async (I)=>{
        const q = P ?? Array.from(a);
        if (q.length === 0 || I.length === 0) {
            return;
        }
        const S_current = S.current;
        const d_current = d.current;
        const U = await onForwardSelected?.(q, I, S_current);
        if (S_current !== S.current || d_current !== d.current || !M.current) {
            return false;
        }
        if (U === false || typeof U === "object") {
            return U;
        }
        return y(false), N(null), P === null && H(), true;
    };
    const closeForwardPicker = ()=>{
        y(false);
        N(null);
    };
    const handleMessageAction = q_1((I, q)=>{
        if (!(q.unavailable && I !== "delete-me")) {
            if (I === "cancel") {
                bt_1.getState().cancelUpload(q.id);
                return;
            }
            if (!((q.sendStatus === "sending" || q.sendStatus === "failed") && ![
                "copy",
                "retry"
            ].includes(I))) {
                if (I === "edit") {
                    if (!zn(q)) {
                        return;
                    }
                    k(q);
                } else {
                    if (I === "forward") {
                        N([
                            q.id
                        ]);
                        y(true);
                    } else if (I === "delete-me") {
                        onDeleteMessage?.(q.id, false);
                    } else if (I === "delete-all") {
                        onDeleteMessage?.(q.id, true);
                    } else if (I === "copy" && q.text) {
                        km(q.selectedText ?? q.text);
                    } else {
                        I === "retry" && onRetryMessage?.(q.id);
                    }
                }
            }
        }
    }, [
        onDeleteMessage,
        onRetryMessage
    ]);
    const handleCancelEdit = q_1(()=>k(null), []);
    const handleEditLast = q_1(()=>{
        for(let I = messages.length - 1; I >= 0; I--){
            const q = messages[I];
            if (q.isOutgoing && zn(q) && !(q.sendStatus === "sending" || q.sendStatus === "failed") && q.text?.trim()) {
                k(q);
                return;
            }
        }
    }, [
        messages
    ]);
    h_1(()=>{
        c(new Set);
        k(null);
        N(null);
        y(false);
        O(false);
    }, [
        chatId
    ]);
    h_1(()=>{
        if (chatId) {
            return cE(chatId, (I)=>{
                if (!I || I.type === "message_edited") {
                    return;
                }
                const q = I.type === "history_cleared" || I.type === "chat_deleted";
                const A = new Set(I.message_ids ?? (I.message_id ? [
                    I.message_id
                ] : []));
                if (!(!q && !A.size)) {
                    c((v)=>{
                        const U = new Set([
                            ...v
                        ].filter((oe)=>!q && !A.has(oe)));
                        if (U.size === v.size) {
                            return v;
                        }
                        return U;
                    });
                    N((v)=>v?.filter((U)=>!q && !A.has(U)) ?? null);
                    k((v)=>{
                        if (v && (q || A.has(v.id))) {
                            return {
                                ...v,
                                removedDuringEdit: true
                            };
                        }
                        return v;
                    });
                }
            });
        }
    }, [
        chatId
    ]);
    h_1(()=>{
        if (a.size === 0 && $) {
            O(false);
        }
    }, [
        a.size,
        $
    ]);
    h_1(()=>{
        if (!F) {
            return;
        }
        const I = (q)=>{
            if (q.key === "Escape") {
                H();
            }
        };
        window.addEventListener("keydown", I);
        return ()=>window.removeEventListener("keydown", I);
    }, [
        F,
        H
    ]);
    return {
        selectedIds: a,
        setSelectedIds: c,
        isSelecting: F,
        clearSelection: H,
        forwardPickerOpen,
        setForwardPickerOpen: y,
        forwardOverrideIds: P,
        editingMessage,
        setEditingMessage: k,
        bulkDeleteConfirmOpen: $,
        deleting,
        setBulkDeleteConfirmOpen: O,
        handleBulkDelete,
        handleForwardConfirm,
        closeForwardPicker,
        handleMessageAction,
        handleCancelEdit,
        handleEditLast
    };
}
let Mt = null;
aA(()=>{
    Mt = null;
});
function Nm(e, n) {
    Mt = null;
    if (!(!e.ownerId || !e.peerId || !e.chatId || !au_1(n))) {
        Mt = {
            ...e,
            session: n
        };
    }
}
function Sm(e) {
    const n = Mt;
    Mt = null;
    return !!n && au_1(n.session) && n.ownerId === e.ownerId && n.peerId === e.peerId && n.chatId === e.chatId;
}
function In(e, n) {
    if (Mt && (e && Mt.ownerId !== e || n !== `/chats/${Mt.chatId}` || !au_1(Mt.session))) {
        Mt = null;
    }
}
const Ws = "itd-recipient-warning-dismissed";
const vn = (e)=>/^[0-9a-f-]{36}$/i.test(e);
function Us() {
    try {
        const e = JSON.parse(b7.getItem(Ws) ?? "[]");
        if (Array.isArray(e)) {
            return e.filter((n)=>typeof n === "string" && n.length === 73).slice(-100);
        }
        return [];
    } catch  {
        return [];
    }
}
function Mm(e, n) {
    return vn(e) && vn(n) && Us().includes(`${e.toLowerCase()}:${n.toLowerCase()}`);
}
function Em(e, n) {
    if (!vn(e) || !vn(n)) {
        return;
    }
    const r = `${e.toLowerCase()}:${n.toLowerCase()}`;
    b7.setItem(Ws, JSON.stringify([
        ...Us().filter((s)=>s !== r),
        r
    ].slice(-100)));
}
const Yr = "itd-subscription-notice-shown";
const Jr = (e)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e);
function xm(e, n) {
    if (!Jr(e) || !Jr(n) || e === n) {
        return false;
    }
    const r = `${e.toLowerCase()}:${n.toLowerCase()}`;
    let s = [];
    try {
        const o = JSON.parse(b7.getItem(Yr) ?? "[]");
        if (Array.isArray(o)) {
            s = o.filter((u)=>typeof u === "string" && u.length === 73).slice(-2000);
        }
    } catch  {}
    if (s.includes(r)) {
        return false;
    }
    return b7.setItem(Yr, JSON.stringify([
        ...s,
        r
    ].slice(-2000))), true;
}
function Rm(e, n = 80) {
    if (e.length > n) {
        return `${e.slice(0, n - 1)}…`;
    }
    return e;
}
const Tm = ({ chat, messages, composerKey, onSend, onRecipientWarningDismissed, recipientWarningHandoffChatId, onSendVoice, onTyping, onBack, replyingTo, onReply, onCancelReply, textareaRef, hasMore, isLoadingMore, olderLoadError, onLoadMore, onDeleteMessage, onDeleteSelected, onEditMessage, onForwardSelected, onRetryMessage, availableChats, onMessageVisible, participants, scrollIntent, onReplyClick, hasNewer, isLoadingNewer, onLoadNewer, onScrollToBottomClick, onLiveBottomChange, blockNotice, onUnblock, unblocking, messagesReady, firstUnreadId, loadError, chatRequested, chatLoading, onRetryLoad })=>{
    const Z = cl_1(chat);
    const z = ar_1();
    const [W, ge] = d_1({
        chatId: "",
        query: ""
    });
    const onSearchQuery = q_1((ue)=>{
        const ye = chat?.id ?? "";
        ge((Oe)=>{
            if (Oe.chatId === ye && Oe.query === ue) {
                return Oe;
            }
            return {
                chatId: ye,
                query: ue
            };
        });
    }, [
        chat?.id
    ]);
    const [Se, _] = d_1(null);
    const [te, ce] = d_1(null);
    const J = A_1(null);
    const V = A_1(undefined);
    const Me = A_1(false);
    const me = chat ? `${z?.id}:${chat.isGroup ? `group:${chat.id}` : `dm:${chat.user.id}`}` : undefined;
    const we = `${z?.id}:${z?.subscription?.isActive}:${me}`;
    const De = A_1(we);
    b6(()=>(De.current = we, ()=>{
            De.current = "";
        }), [
        we
    ]);
    const Ve = chat?.isGroup;
    const _e = chat?.user.id;
    const { selectedIds, setSelectedIds, isSelecting, clearSelection, forwardPickerOpen, setForwardPickerOpen, forwardOverrideIds, editingMessage, bulkDeleteConfirmOpen, deleting, setBulkDeleteConfirmOpen, handleBulkDelete, handleForwardConfirm, closeForwardPicker, handleMessageAction, handleCancelEdit, handleEditLast } = Cm({
        chatId: chat?.id,
        messages,
        onDeleteMessage: (ue, ye)=>{
            (!Z || !ye) && onDeleteMessage?.(ue, ye);
        },
        onDeleteSelected: (ue, ye)=>{
            if ((!Z || !ye) && onDeleteSelected) {
                return onDeleteSelected(ue, ye);
            }
            return Promise.resolve([]);
        },
        onForwardSelected,
        onRetryMessage: Z ? undefined : onRetryMessage
    });
    const Qe = !Z && !chat?.isGroup;
    const tt = (ue, ye)=>{
        if (!(Z && [
            "reply",
            "edit",
            "retry",
            "delete-all"
        ].includes(ue))) {
            handleMessageAction(ue, ye);
        }
    };
    const lt = !!chat && !Z && !chat.isGroup && chat.user.id !== z?.id && z?.subscription?.isActive === false;
    const jt = ()=>{
        _("access-info");
    };
    h_1(()=>(dy(({ code })=>{
            if (code === "nuksta_required") {
                _("access-info");
                if (!Me.current) {
                    Me.current = true;
                    K_1.getState().fetchProfile().catch(()=>{});
                }
            }
        }), ()=>dy(null)), []);
    b6(()=>{
        if (V.current !== me) {
            V.current = me;
            J.current = null;
            ce(null);
            _(null);
        }
        if (chat?.id && chat.id === recipientWarningHandoffChatId && !chat.isGroup && z?.id && Sm({
            ownerId: z.id,
            peerId: chat.user.id,
            chatId: chat.id
        })) {
            J.current = me ?? null;
            ce(me ?? null);
        }
    }, [
        me,
        chat?.id,
        chat?.isGroup,
        chat?.user.id,
        z?.id,
        recipientWarningHandoffChatId
    ]);
    const _t = ()=>{
        J.current = me ?? null;
        ce(me ?? null);
        if (z?.id && chat) {
            Em(z.id, chat.user.id);
            onRecipientWarningDismissed?.(z.id, chat.user.id);
        }
    };
    const it = ()=>{
        if (!chat?.id || chat.isGroup || Z || chat.user.deleted || chat.user.id === z?.id || z?.subscription?.isActive !== true) {
            return;
        }
        const ue = we;
        const ye = chat.user.id;
        aw.getProfileByUsername(ye, {
            force: true,
            silent: true
        }).then((Oe)=>{
            if (!(De.current !== ue || Oe.hasNuksta !== false)) {
                _((Re)=>Re ?? "recipient-warning");
            }
        }).catch(()=>{});
    };
    h_1(()=>{
        !lt || !z?.id || !_e || chat?.user.deleted || chat?.isRequest || Se === null && xm(z.id, _e) && _("access-info");
    }, [
        lt,
        z?.id,
        _e,
        chat?.user.deleted,
        chat?.isRequest,
        Se
    ]);
    h_1(()=>{
        if (!me || !_e || Z || chat?.user.deleted || chat?.isRequest || Ve || _e === z?.id || z?.subscription?.isActive !== true || z.id && Mm(z.id, _e) || te === me || J.current === me) {
            return;
        }
        const ue = we;
        let ye = false;
        aw.getProfileByUsername(_e, {
            force: true,
            silent: true
        }).then((Oe)=>{
            ye || De.current === ue && J.current !== me && Oe.hasNuksta === false && _((Re)=>Re ?? "recipient-warning");
        }).catch(()=>{});
        return ()=>{
            ye = true;
        };
    }, [
        me,
        Ve,
        _e,
        z?.id,
        z?.subscription?.isActive,
        te,
        we,
        Z,
        chat?.user.deleted,
        chat?.isRequest
    ]);
    const w = !!chat && !chat.isRequest && !chat.user.deleted && !Z && !(blockNotice && !chat.isGroup) && !editingMessage && !lt;
    const { addFilesRef, isDragOver, handleDragEnter, handleDragOver, handleDragLeave, handleDrop } = pm(w, chat?.id);
    const { fabVisible, handleDistFromBottom, handleFabClick } = ym(hasNewer, chat?.id, onScrollToBottomClick, onLiveBottomChange);
    const E = vm(isSelecting, chat?.id);
    const ae = bm(E, chat?.id);
    if (!chat) {
        return u_1("div", {
            className: `${Le.window} ${Le.empty} ${chatRequested ? "" : Le.hiddenOnMobile}`,
            children: [
                !chatRequested && u_1("img", {
                    className: Le.emptyArtwork,
                    src: "/assets/messenger/artwork/choose-chat.webp",
                    alt: "",
                    width: 640,
                    height: 640
                }),
                u_1("p", {
                    className: Le.emptyTitle,
                    role: chatRequested ? "status" : undefined,
                    children: chatRequested ? chatLoading ? "Загрузка чата" : "Чат недоступен" : "Выберите чат"
                }),
                u_1("p", {
                    className: Le.emptyText,
                    children: chatRequested ? chatLoading ? "Подождите немного" : "Вернитесь к списку или откройте другой чат" : "Откройте один из диалогов слева, чтобы начать общение."
                }),
                chatRequested && u_1("div", {
                    className: Le.emptyActions,
                    children: [
                        !chatLoading && loadError && onRetryLoad && u_1(B_1, {
                            onClick: onRetryLoad,
                            children: "Повторить"
                        }),
                        u_1(B_1, {
                            variant: "secondary",
                            onClick: onBack,
                            children: "К списку чатов"
                        })
                    ]
                })
            ]
        });
    }
    const le = replyingTo ? {
        author: replyingTo.isOutgoing ? "Вы" : participants?.[replyingTo.authorId] ?? chat.user.name,
        chatId: replyingTo.chatId,
        attachment: replyingTo.attachments?.find((ue)=>ue.type === "image"),
        text: Rm(dz(cx(replyingTo.text, replyingTo.entities), replyingTo.attachments))
    } : null;
    const xe = selectedIds.size > 0 && messages.filter((ue)=>selectedIds.has(ue.id)).every((ue)=>ue.isOutgoing);
    const showDeleteForAll = !Z && (Qe || xe);
    return u_1("div", {
        ref: E,
        className: `${Le.window} ${Le.activeOnMobile}`,
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            isSelecting ? u_1(mm, {
                count: selectedIds.size,
                deleting,
                confirmOpen: bulkDeleteConfirmOpen,
                setConfirmOpen: setBulkDeleteConfirmOpen,
                showDeleteForAll,
                onForward: ()=>setForwardPickerOpen(true),
                onDelete: handleBulkDelete,
                onCancel: clearSelection
            }) : u_1(iu, {
                user: chat.user,
                chatId: chat.id,
                isGroup: chat.isGroup,
                onBack,
                onSearchQuery
            }),
            u_1(ph, {
                authorName: chat?.isGroup ? undefined : chat?.user.name,
                searchQuery: W.chatId === chat.id ? W.query : "",
                messages,
                onReply: Z ? undefined : onReply,
                onAction: tt,
                readOnly: Z,
                canDeleteForAllOthers: Qe,
                hasMore,
                isLoadingMore,
                onLoadMore,
                selectedIds,
                setSelectedIds,
                onMessageVisible: chat.isRequest ? undefined : onMessageVisible,
                scrollIntent,
                hasNewer,
                isLoadingNewer,
                onLoadNewer,
                onDistanceFromBottomChange: handleDistFromBottom,
                onReplyClick,
                messagesReady,
                loadError,
                firstUnreadId,
                emptyMessage: lt ? "Пока здесь нет сообщений" : undefined,
                bottomSpacer: ae + 8
            }, chat.id),
            onScrollToBottomClick && u_1(hm, {
                visible: fabVisible,
                unreadCount: chat.unreadCount ?? 0,
                onClick: handleFabClick
            }),
            loadError && u_1("div", {
                className: Le.historyError,
                role: "alert",
                children: [
                    u_1("p", {
                        children: "Не удалось загрузить переписку"
                    }),
                    u_1("button", {
                        type: "button",
                        onClick: onRetryLoad,
                        children: "Повторить"
                    })
                ]
            }),
            olderLoadError && u_1("div", {
                className: `${Le.historyError} ${Le.olderHistoryError}`,
                role: "alert",
                children: [
                    u_1("p", {
                        children: "Не удалось загрузить старые сообщения"
                    }),
                    u_1("button", {
                        type: "button",
                        disabled: isLoadingMore,
                        onClick: onLoadMore,
                        children: "Повторить загрузку истории"
                    })
                ]
            }),
            u_1("div", {
                "data-chat-composer": true,
                className: Le.composer,
                children: Z ? u_1("div", {
                    className: Le.systemNotice,
                    children: "Системные уведомления ИТД. Ответить в этот чат нельзя."
                }) : chat.user.deleted || blockNotice === "deleted" ? u_1("div", {
                    className: Le.blockNotice,
                    role: "status",
                    children: "Аккаунт удалён"
                }) : blockNotice && !chat.isGroup ? u_1("div", {
                    className: Le.blockNotice,
                    role: "status",
                    children: [
                        blockNotice === "me" ? "Вы заблокировали этого пользователя" : blockNotice === "privacy" ? "Пользователь ограничил круг тех, кто может ему писать" : "Пользователь ограничил вам отправку сообщений",
                        blockNotice === "me" && onUnblock && u_1(B_1, {
                            variant: "ghost",
                            size: "sm",
                            loading: unblocking,
                            onClick: onUnblock,
                            children: "Разблокировать"
                        })
                    ]
                }) : chat.isRequest ? u_1(Nl, {
                    chatId: chat.id,
                    peer: chat.user.id,
                    onBlocked: ()=>window.dispatchEvent(new CustomEvent("itd:message-access-changed", {
                            detail: chat.user.id
                        }))
                }) : lt && !editingMessage ? u_1("div", {
                    className: Le.blockNotice,
                    role: "status",
                    children: [
                        "Отправка сообщений доступна с ИТД НУКСТА",
                        u_1(B_1, {
                            variant: "ghost",
                            size: "sm",
                            onClick: jt,
                            children: "Оформить подписку"
                        })
                    ]
                }) : u_1(Uf, {
                    emojiOwnerId: z?.id,
                    draftKey: chat.id || composerKey || "",
                    promotedDraftKey: chat.id && composerKey?.startsWith("draft:") ? composerKey : undefined,
                    onSend: (ue, ye, Oe)=>{
                        if (editingMessage) {
                            const Re = ue.trim();
                            const Ft = (editingMessage.attachments?.length ?? 0) > 0;
                            if (Re.length === 0 && !Ft) {
                                return undefined;
                            }
                            return onEditMessage?.(editingMessage.id, Re);
                        }
                        onSend(ue, ye, Oe);
                        it();
                    },
                    onSendVoice: onSendVoice ? (ue, ye, Oe)=>{
                        onSendVoice(ue, ye, Oe);
                        it();
                    } : undefined,
                    onTyping,
                    reply: editingMessage ? null : le,
                    onCancelReply,
                    editing: editingMessage ? {
                        id: editingMessage.id,
                        removed: editingMessage.removedDuringEdit,
                        text: editingMessage.text ?? "",
                        hasAttachments: (editingMessage.attachments?.length ?? 0) > 0
                    } : null,
                    onCancelEdit: handleCancelEdit,
                    onEditLast: handleEditLast,
                    textareaRef,
                    addFilesRef,
                    subscriptionRequired: lt,
                    onSubscriptionRequired: jt
                }, `message-input:${composerKey ?? chat.id}`)
            }),
            !Z && Se === "access-info" && u_1(dA, {
                onDismiss: ()=>_(null),
                onSubscribe: ()=>_("self-purchase")
            }),
            !Z && Se === "self-purchase" && u_1(bd_1, {
                fallback: null,
                children: u_1(bH, {
                    isOpen: true,
                    onClose: ()=>_(null)
                })
            }),
            !Z && Se === "recipient-warning" && u_1(dB, {
                displayName: chat.user.name,
                onDismiss: ()=>{
                    _t();
                    _(null);
                },
                onGift: ()=>{
                    _t();
                    _("gift-purchase");
                }
            }),
            !Z && Se === "gift-purchase" && u_1(bd_1, {
                fallback: null,
                children: u_1(bG, {
                    isOpen: true,
                    recipient: {
                        id: chat.user.id,
                        name: chat.user.name,
                        username: chat.user.username !== chat.user.id ? chat.user.username : undefined,
                        avatar: chat.user.avatar ?? null
                    },
                    onClose: ()=>_(null),
                    onSucceeded: ()=>{
                        _t();
                        _(null);
                        aw.invalidateProfileCache(chat.user.id);
                        if (chat.user.username) {
                            aw.invalidateProfileCache(chat.user.username);
                        }
                        aw.getProfileByUsername(chat.user.id, {
                            force: true
                        }).catch(()=>{});
                    }
                })
            }),
            forwardPickerOpen && availableChats && u_1(am, {
                chats: availableChats,
                excludeChatId: chat.id,
                count: forwardOverrideIds?.length ?? selectedIds.size,
                onConfirm: handleForwardConfirm,
                onCancel: closeForwardPicker
            }),
            isDragOver && w && u_1("div", {
                className: Le.dropOverlay,
                "aria-hidden": "true",
                children: u_1("div", {
                    className: Le.dropOverlayBox,
                    children: "Отпустите, чтобы прикрепить файлы"
                })
            })
        ]
    });
};
const Qr = ({ att, dataAttr })=>{
    const r = bt_1((a)=>a.activeChatId);
    const { src } = cS(r, att.id || undefined, att.thumbUrl ?? att.url);
    const o = a6(()=>bz(att.thumbhash), [
        att.thumbhash
    ]);
    const [u, i] = d_1(false);
    h_1(()=>{
        i(false);
    }, [
        src
    ]);
    if (!src || u) {
        return u_1("div", {
            style: {
                width: "100%",
                height: "100%",
                display: "block",
                ...o ? {
                    backgroundImage: `url(${o})`,
                    backgroundSize: "100% 100%"
                } : {}
            },
            ...dataAttr ? {
                "data-chatinfo-image": true
            } : {}
        });
    }
    return u_1("img", {
        src,
        alt: "",
        loading: "lazy",
        onError: ()=>i(true),
        style: o ? {
            backgroundImage: `url(${o})`,
            backgroundSize: "100% 100%"
        } : undefined,
        ...dataAttr ? {
            "data-chatinfo-image": true
        } : {}
    });
};
const $m = "o0b7";
const panelOpen = "WlWS";
const inner = "ldyE";
const Lm = "IxtN";
const Pm = "kAGl";
const Bm = "R5U4";
const profileHeader = "olqf";
const profileAvatar = "EAdv";
const profileAvatarFallback = "ZvHx";
const profileOnlineDot = "jgp7";
const profileNameRow = "WbpK";
const profileName = "cmjV";
const profileUsername = "xfDb";
const profileStatus = "xGju";
const profileStatusOnline = "JTw4";
const tabs = "YuyT";
const tab = "TnJL";
const tabActive = "OePj";
const Km = "vg0x";
const Xm = "cfTC";
const mediaGrid = "kUDN";
const mediaCell = "hHKf";
const playOverlay = "xgWs";
const Zm = "l7Gc";
const mediaCellWrap = "DssY";
const showInChat = "NQoQ";
const listRow = "qBho";
const showInChatRow = "jwn7";
const listRowBody = "m3at";
const loadMore = "vex6";
const profileLink = "DQXk";
const chatActionsTrigger = "LKen";
const chatActionsMenu = "ORET";
const be = {
    panel: $m,
    panelOpen,
    inner,
    header: Lm,
    title: Pm,
    close: Bm,
    profileHeader,
    profileAvatar,
    profileAvatarFallback,
    profileOnlineDot,
    profileNameRow,
    profileName,
    profileUsername,
    profileStatus,
    profileStatusOnline,
    tabs,
    tab,
    tabActive,
    content: Km,
    list: Xm,
    mediaGrid,
    mediaCell,
    playOverlay,
    empty: Zm,
    mediaCellWrap,
    showInChat,
    listRow,
    showInChatRow,
    listRowBody,
    loadMore,
    profileLink,
    chatActionsTrigger,
    chatActionsMenu
};
const qs = ({ size = 15 })=>u_1("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [
            u_1("path", {
                d: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.4-.7L4 21l1.7-4.1a8.5 8.5 0 1 1 15.3-5.4z",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinejoin: "round"
            }),
            u_1("path", {
                d: "M9 11.5h5.5M12 8.8l2.7 2.7-2.7 2.7",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
const lp = ({ thumbhash })=>{
    const n = a6(()=>bz(thumbhash), [
        thumbhash
    ]);
    return u_1("div", {
        style: {
            width: "100%",
            height: "100%",
            display: "block",
            ...n ? {
                backgroundImage: `url(${n})`,
                backgroundSize: "100% 100%"
            } : {}
        }
    });
};
function up({ items, onShowInChat, scrollRoot }) {
    const s = cL((c)=>c.open);
    const o = b4((c)=>c.open);
    const current = A_1(cQ()).current;
    const i = A_1(null);
    const a = items.filter((c)=>c.att.type === "image");
    const h = (c, d)=>{
        if (!cN(current)) {
            return;
        }
        const f = cO(d);
        const l = Math.max(0, a.indexOf(c));
        const m = (p)=>{
            if (!cN(current) || matchMedia("(hover: hover) and (pointer: fine)").matches) {
                return null;
            }
            const i_current = i.current;
            if (!i_current) {
                return null;
            }
            const M = i_current.querySelectorAll("[data-chatinfo-image]")[p];
            if (M) {
                return M.scrollIntoView({
                    behavior: "instant",
                    block: "nearest"
                }), cO(M, scrollRoot.current);
            }
            return null;
        };
        const activeChatId = bt_1.getState().activeChatId;
        s(cP(activeChatId, a.map((p)=>({
                id: p.key,
                sourceMessageId: p.messageId,
                name: p.att.name,
                fileId: p.att.id || undefined,
                url: p.att.url,
                thumbUrl: p.att.thumbUrl,
                thumbhash: p.att.thumbhash,
                width: p.att.width,
                height: p.att.height
            }))), l, f, m, {
            zoomable: true
        });
    };
    return u_1("div", {
        className: be.mediaGrid,
        ref: i,
        children: items.map((c)=>u_1("div", {
                "data-chatinfo-message": c.messageId,
                className: be.mediaCellWrap,
                children: [
                    c.att.type === "image" ? u_1("button", {
                        type: "button",
                        "aria-label": "Открыть изображение",
                        className: be.mediaCell,
                        onClick: (d)=>{
                            if (!cN(current)) {
                                return;
                            }
                            const f = d.currentTarget.querySelector("img");
                            h(c, f ?? d.currentTarget);
                        },
                        children: u_1(Qr, {
                            att: c.att,
                            dataAttr: true
                        })
                    }) : u_1("button", {
                        type: "button",
                        "aria-label": "Открыть видео",
                        className: be.mediaCell,
                        onClick: (d)=>{
                            if (!cN(current)) {
                                return;
                            }
                            const c_att = c.att;
                            const d_currentTarget = d.currentTarget;
                            const sourceRect = cO(d_currentTarget, scrollRoot.current);
                            const poster = dC(c_att.id || undefined, c_att.thumbUrl ?? "") ?? bz(c_att.thumbhash);
                            const activeChatId = bt_1.getState().activeChatId;
                            cU(activeChatId, c_att.id, c_att.url).then((S)=>{
                                if (cN(current)) {
                                    o({
                                        source: activeChatId ? {
                                            chatId: activeChatId,
                                            messageId: c.messageId
                                        } : undefined,
                                        url: S,
                                        resolveUrl: async ()=>{
                                            if (cN(current)) {
                                                return cU(activeChatId, c_att.id, S);
                                            }
                                            return null;
                                        },
                                        width: c_att.width,
                                        height: c_att.height,
                                        poster,
                                        sourceRect,
                                        resolveCloseRect: ()=>{
                                            if (cN(current)) {
                                                return cO(d_currentTarget, scrollRoot.current);
                                            }
                                            return null;
                                        }
                                    });
                                }
                            }).catch(()=>{});
                        },
                        children: [
                            c.att.thumbUrl ? u_1(Qr, {
                                att: c.att
                            }) : u_1(lp, {
                                thumbhash: c.att.thumbhash
                            }),
                            u_1("span", {
                                className: be.playOverlay,
                                children: u_1(cT, {})
                            })
                        ]
                    }),
                    u_1("button", {
                        type: "button",
                        className: be.showInChat,
                        title: "Показать в чате",
                        "aria-label": "Показать в чате",
                        onClick: ()=>onShowInChat(c.messageId),
                        children: u_1(qs, {
                            size: 13
                        })
                    })
                ]
            }, c.key))
    });
}
const dp = bf_1(()=>bg(()=>import("./index-BkCPVE8D.js"), __vite__mapDeps([
        4,
        1,
        2,
        5
    ])).then((e)=>({
            default: e.ConfirmModal
        })));
const hp = bf_1(()=>bg(()=>import("./index-Clij3ZzC.js"), __vite__mapDeps([
        6,
        1,
        2,
        7,
        8
    ])).then((e)=>({
            default: e.ReportModal
        })));
function fp({ chat, profile }) {
    const r = ar_1()?.id;
    const [s, o] = d_1(null);
    const [u, i] = d_1(false);
    const [a, h] = d_1(null);
    const [c, d] = d_1(false);
    const [f, l] = d_1(null);
    const m = A_1(null);
    const g = A_1(null);
    const p = A_1(true);
    h_1(()=>()=>{
            p.current = false;
        }, []);
    const onClosed = q_1(()=>{
        l(null);
        m.current?.focus({
            preventScroll: true
        });
    }, []);
    const { closing, requestClose, cancelClose } = or({
        open: !!f,
        onClosed
    });
    const N = ir({
        open: !!f,
        interactive: !closing,
        point: f,
        menuRef: g,
        onClose: requestClose
    });
    h_1(()=>{
        N?.visible && !closing && g.current?.querySelector("button:not(:disabled)")?.focus({
            preventScroll: true
        });
    }, [
        N?.visible,
        closing
    ]);
    if (!chat) {
        return null;
    }
    const chat_other_user_id = chat.other_user_id;
    const k = chat.chat_type === 0 && !!chat_other_user_id && chat_other_user_id !== r && !dD(chat) && !chat.other_user_deleted && !profile?.isDeleted;
    const $ = a ?? profile?.interaction?.isBlocking ?? false;
    const O = az();
    const F = ()=>{
        const D = bt_1.getState();
        return p.current && au_1(O) && (chat.chat_id ? D.activeChatId === chat.chat_id : !D.activeChatId && D.draftUser?.id === chat_other_user_id);
    };
    const H = ()=>{
        const D = m.current?.getBoundingClientRect();
        if (D) {
            cancelClose();
            l({
                x: D.right,
                y: D.bottom + 6
            });
            d(false);
            if (k && chat_other_user_id) {
                aw.getProfileByUsername(chat_other_user_id, {
                    force: true,
                    silent: true
                }).then((X)=>{
                    if (F()) {
                        d(X.hasNuksta === false && X.subscription?.isActive !== true && !X.isDeleted);
                    }
                }).catch(()=>{});
            }
        }
    };
    const Y = (D)=>{
        l(null);
        if (F()) {
            D();
        }
    };
    const Q = async ()=>{
        if (!(u || !F())) {
            i(true);
            try {
                await bt_1.getState().toggleMuted(chat.chat_id);
            } finally{
                if (F()) {
                    i(false);
                }
            }
        }
    };
    const onConfirm = async ()=>{
        if (!(!chat_other_user_id || !F())) {
            try {
                if ($) {
                    await b0.unblockUser(chat_other_user_id);
                } else {
                    await b0.blockUser(chat_other_user_id);
                }
                if (F()) {
                    h(!$);
                    window.dispatchEvent(new CustomEvent("itd:message-access-changed", {
                        detail: chat_other_user_id
                    }));
                }
            } catch (D) {
                if (F()) {
                    aF.error("Не удалось изменить блокировку");
                }
                throw D;
            }
        }
    };
    const R = (D, X, I = false)=>u_1("button", {
            role: "menuitem",
            type: "button",
            className: ve.item,
            disabled: I,
            onClick: ()=>Y(X),
            children: D
        });
    return u_1(S_1, {
        children: [
            u_1("button", {
                ref: m,
                type: "button",
                className: be.chatActionsTrigger,
                "aria-label": "Действия с чатом",
                "aria-haspopup": "menu",
                "aria-expanded": !!f && !closing,
                onClick: H,
                children: u_1("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: [
                        u_1("circle", {
                            cx: "5",
                            cy: "12",
                            r: "2"
                        }),
                        u_1("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2"
                        }),
                        u_1("circle", {
                            cx: "19",
                            cy: "12",
                            r: "2"
                        })
                    ]
                })
            }),
            f && N && aB(u_1("div", {
                ref: g,
                role: "menu",
                "aria-label": "Действия с чатом",
                "aria-hidden": closing || !N.visible,
                inert: closing || !N.visible,
                className: `${ve.menu} ${closing ? ve.menuOut : N.visible ? ve.menuIn : ""} ${be.chatActionsMenu}`,
                style: {
                    position: "fixed",
                    top: N.top,
                    left: N.left,
                    maxHeight: N.maxHeight,
                    visibility: N.visible ? "visible" : "hidden",
                    transformOrigin: N.origin,
                    zIndex: 1000
                },
                onKeyDown: (D)=>{
                    if (![
                        "ArrowDown",
                        "ArrowUp",
                        "Home",
                        "End",
                        "Tab"
                    ].includes(D.key)) {
                        return;
                    }
                    const X = [
                        ...g.current.querySelectorAll("button:not(:disabled)")
                    ];
                    if (!X.length) {
                        return;
                    }
                    const I = X.indexOf(document.activeElement);
                    const q = D.key === "Home" ? 0 : D.key === "End" ? X.length - 1 : (I + (D.key === "ArrowUp" || D.key === "Tab" && D.shiftKey ? -1 : 1) + X.length) % X.length;
                    D.preventDefault();
                    X[q]?.focus({
                        preventScroll: true
                    });
                },
                children: [
                    profile?.username && !profile.isDeleted && R("Открыть профиль", ()=>$_1(`/@${encodeURIComponent(profile.username)}`)),
                    chat.chat_id && R(chat.is_muted ? "Включить уведомления" : "Выключить уведомления", ()=>{
                        Q();
                    }, u),
                    k && R("Подарить НУКСТУ", ()=>{
                        if (c) {
                            window.dispatchEvent(new CustomEvent(pn, {
                                detail: `https://xn--d1ah4a.com/chats?gift=${chat_other_user_id}`
                            }));
                        }
                    }, !c),
                    k && R($ ? "Разблокировать" : "Заблокировать", ()=>o("block")),
                    k && R("Пожаловаться на пользователя", ()=>o("report"))
                ]
            }), document.body),
            s && u_1(bd_1, {
                fallback: null,
                children: s === "report" && chat_other_user_id ? u_1(hp, {
                    targetType: "user",
                    targetId: chat_other_user_id,
                    onClose: ()=>o(null)
                }) : u_1(dp, {
                    title: $ ? "Разблокировать пользователя?" : "Заблокировать пользователя?",
                    message: $ ? "Пользователь снова сможет писать вам, если это разрешено настройками приватности." : "Пользователь не сможет писать вам. История переписки сохранится.",
                    confirmText: $ ? "Разблокировать" : "Заблокировать",
                    danger: !$,
                    onConfirm,
                    onClose: ()=>o(null)
                })
            })
        ]
    });
}
function mp({ chatDto, profile }) {
    const r = dD(chatDto);
    const s = chatDto?.other_user_deleted === true || profile?.isDeleted === true;
    const o = chatDto && chatDto.chat_type === 0 ? chatDto.other_user_id ?? null : null;
    const u = bt_1((p)=>{
        if (o) {
            return p.onlineUsers.has(o);
        }
        return false;
    });
    const i = bt_1((p)=>p.wsConnected);
    const a = !!chatDto && chatDto.chat_type !== 0;
    const h = r ? "ИТД" : s ? "Удалённый аккаунт" : profile?.displayName || chatDto?.title || (a ? "Группа" : "Чат");
    const c = r ? cI : s ? null : profile?.username ?? null;
    const d = !r && !s && dE(i, u);
    const { avatar, avatarEmoji } = r ? {
        avatar: cn_1,
        avatarEmoji: undefined
    } : s ? {
        avatar: undefined,
        avatarEmoji: "👤"
    } : cH(profile?.avatar, chatDto?.avatar);
    const m = r ? "Системные уведомления" : s ? "Аккаунт удалён" : a ? "Группа" : i ? d ? "в сети" : a_1(profile?.lastSeen, profile?.gender) : "Соединение...";
    const g = q_1(()=>{
        if (c) {
            $_1(`/@${c}`);
        }
    }, [
        c
    ]);
    return u_1("div", {
        className: be.profileHeader,
        children: [
            u_1("button", {
                type: "button",
                className: `${be.profileAvatar} ${be.profileLink}`,
                onClick: g,
                disabled: !c,
                "aria-label": "Открыть профиль",
                children: [
                    u_1(tn, {
                        src: avatar,
                        emoji: avatarEmoji,
                        name: h,
                        fallbackClass: be.profileAvatarFallback
                    }),
                    !a && d && u_1("span", {
                        className: be.profileOnlineDot
                    })
                ]
            }),
            u_1("div", {
                className: be.profileNameRow,
                children: [
                    u_1("button", {
                        type: "button",
                        className: `${be.profileName} ${be.profileLink}`,
                        onClick: g,
                        disabled: !c,
                        children: u_1(ag, {
                            userId: r || s || a ? undefined : o ?? undefined,
                            name: h,
                            size: "md",
                            verified: r || !s && (profile?.verified ?? profile?.isVerified),
                            pin: s || r ? null : profile?.pin,
                            hasNuksta: !r && profile?.hasNuksta
                        })
                    }),
                    u_1(fp, {
                        chat: chatDto,
                        profile
                    }, chatDto?.chat_id || chatDto?.other_user_id)
                ]
            }),
            c && u_1("button", {
                type: "button",
                className: `${be.profileUsername} ${be.profileLink}`,
                onClick: g,
                children: [
                    "@",
                    c
                ]
            }),
            u_1("span", {
                className: `${be.profileStatus} ${!a && d ? be.profileStatusOnline : ""}`,
                children: m
            })
        ]
    });
}
const pp = [
    {
        key: "media",
        label: "Медиа"
    },
    {
        key: "files",
        label: "Файлы"
    },
    {
        key: "music",
        label: "Музыка"
    },
    {
        key: "voice",
        label: "Голосовые"
    }
];
const gp = {
    media: 0,
    files: 1,
    music: 2,
    voice: 3
};
const an = 40;
const vp = {
    media: "Нет медиа",
    files: "Нет файлов",
    music: "Нет музыки",
    voice: "Нет голосовых"
};
function bp() {
    const e = A_1(null);
    const n = A_1(true);
    h_1(()=>()=>{
            n.current = false;
        }, []);
    const r = bt_1((v)=>v.infoPanelOpen);
    const s = bt_1((v)=>v.infoPanelTab);
    const o = bt_1((v)=>v.setInfoPanelTab);
    const i = bt_1((v)=>v.closeInfoPanel);
    const a = bt_1((v)=>v.activeChatId);
    const h = A_1({
        open: r,
        chatId: a,
        tab: s
    });
    h.current = {
        open: r,
        chatId: a,
        tab: s
    };
    const c = bt_1((v)=>v.jumpToMessage);
    const d = bt_1((v)=>{
        if (v.activeChatId) {
            return v.chats.find((U)=>U.chat_id === v.activeChatId) ?? null;
        }
        return null;
    });
    const f = bt_1((v)=>v.draftUser);
    const l = d ?? (!a && f ? {
        chat_id: "",
        chat_type: 0,
        other_user_id: f.id,
        other_user_deleted: f.deleted,
        title: f.name,
        avatar: f.avatar ?? f.avatarEmoji ?? null,
        last_message: null,
        other_read_message_id: null,
        unread_count: 0,
        is_pinned: false,
        is_muted: false
    } : null);
    const m = l && l.chat_type === 0 ? l.other_user_id ?? null : null;
    const profile = u_2(m, r && l?.other_user_deleted !== true);
    const p = r;
    const [S, M] = d_1(r);
    b6(()=>{
        if (!r) {
            return;
        }
        const v = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const location_href = location.href;
        const oe = crypto.randomUUID();
        history.pushState({
            ...history.state,
            itdChatInfo: oe
        }, "", location_href);
        const de = ()=>{
            if (history.state?.itdChatInfo !== oe) {
                i();
            }
        };
        const B = (z)=>{
            if (!(z.defaultPrevented || z.isComposing)) {
                if (z.key === "Escape") {
                    z.preventDefault();
                    z.stopPropagation();
                    i();
                } else if (z.key === "Tab" && matchMedia("(max-width: 1173px)").matches) {
                    const W = [
                        ...e.current?.querySelectorAll('button:not(:disabled),a[href],[tabindex="0"]') ?? []
                    ].filter((Se)=>Se.getClientRects().length > 0);
                    const ge = W[0];
                    const Be = W.at(-1);
                    if (ge && Be && (z.shiftKey ? document.activeElement === ge : document.activeElement === Be)) {
                        z.preventDefault();
                        (z.shiftKey ? Be : ge).focus();
                    }
                }
            }
        };
        const Z = requestAnimationFrame(()=>e.current?.querySelector("button")?.focus({
                preventScroll: true
            }));
        window.addEventListener("popstate", de);
        window.addEventListener("keydown", B);
        return ()=>{
            cancelAnimationFrame(Z);
            window.removeEventListener("popstate", de);
            window.removeEventListener("keydown", B);
            if (location.href === location_href && history.state?.itdChatInfo === oe) {
                history.back();
            }
            if (v?.isConnected && (!document.activeElement || document.activeElement === document.body || e.current?.contains(document.activeElement))) {
                v.focus({
                    preventScroll: true
                });
            }
        };
    }, [
        r,
        i
    ]);
    b6(()=>{
        if (r) {
            M(true);
            return;
        }
        const v = window.setTimeout(()=>M(false), 340);
        return ()=>clearTimeout(v);
    }, [
        r
    ]);
    const [y, P] = d_1({});
    const N = A_1(y);
    N.current = y;
    const x = A_1(new Map);
    const k = q_1(async (v, U, oe)=>{
        const de = az();
        const B = `${v}:${U}`;
        const Z = (x.current.get(B) ?? 0) + 1;
        x.current.set(B, Z);
        const z = ()=>n.current && au_1(de) && x.current.get(B) === Z && h.current.open && h.current.chatId === v && h.current.tab === U;
        P((W)=>({
                ...W,
                [B]: {
                    items: W[B]?.items ?? [],
                    nextBefore: W[B]?.nextBefore ?? null,
                    status: "loading"
                }
            }));
        try {
            const W = oe ? an : Math.max(an, N.current[B]?.items.length ?? 0);
            const ge = [];
            const Be = new Set;
            let Se = oe ?? undefined;
            let _ = null;
            const te = Math.ceil(W / an) + 4;
            for(let ce = 0; ce < te; ce++){
                if (!z()) {
                    return;
                }
                const J = await cq.getChatMedia(v, gp[U], {
                    before: Se,
                    limit: an
                });
                if (!z()) {
                    return;
                }
                for (const V of J.items){
                    dF([
                        V.file
                    ]), ge.push({
                        key: `${V.message_id}:${V.file.fileId}`,
                        messageId: V.message_id,
                        att: dG(V.file)
                    });
                }
                _ = J.next_before;
                if (oe || ge.length >= W || !_) {
                    break;
                }
                if (Be.has(_) || ce === te - 1) {
                    throw Error("Media pagination did not advance");
                }
                Be.add(_);
                Se = _;
            }
            P((ce)=>{
                const J = ce[B]?.items ?? [];
                const V = oe ? J : [];
                const Me = new Set(V.map((me)=>me.key));
                return {
                    ...ce,
                    [B]: {
                        items: [
                            ...V,
                            ...ge.filter((me)=>{
                                if (Me.has(me.key)) {
                                    return false;
                                }
                                return Me.add(me.key), true;
                            })
                        ],
                        nextBefore: _,
                        status: "ready"
                    }
                };
            });
        } catch  {
            if (!z()) {
                return;
            }
            P((W)=>({
                    ...W,
                    [B]: {
                        items: W[B]?.items ?? [],
                        nextBefore: W[B]?.nextBefore ?? null,
                        status: "error"
                    }
                }));
        }
    }, []);
    h_1(()=>{
        if (!(!r || !a)) {
            k(a, s, null);
        }
    }, [
        r,
        a,
        s,
        k
    ]);
    h_1(()=>{
        if (!(!r || !a)) {
            return cE(a, (v)=>{
                if (v?.type !== "message_edited") {
                    if (v?.type === "message_deleted" || v?.type === "messages_deleted") {
                        const U = new Set(v.message_ids ?? (v.message_id ? [
                            v.message_id
                        ] : []));
                        const oe = `${a}:${s}`;
                        x.current.set(oe, (x.current.get(oe) ?? 0) + 1);
                        P((de)=>{
                            if (de[oe]) {
                                return {
                                    ...de,
                                    [oe]: {
                                        ...de[oe],
                                        items: de[oe].items.filter((B)=>!U.has(B.messageId)),
                                        status: "ready"
                                    }
                                };
                            }
                            return de;
                        });
                        return;
                    }
                    k(a, s, null);
                }
            });
        }
    }, [
        r,
        a,
        s,
        k
    ]);
    const $ = a ? y[`${a}:${s}`] : undefined;
    const O = $?.items ?? [];
    const F = $?.status === "loading";
    const H = q_1((v)=>{
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            c(activeChatId, v);
        }
    }, [
        c
    ]);
    const Y = ()=>{
        if (a && $?.nextBefore && !F) {
            k(a, s, $.nextBefore);
        }
    };
    const Q = ()=>{
        if (a && !F) {
            k(a, s, null);
        }
    };
    const C = A_1(null);
    const onScroll = ()=>{
        const C_current = C.current;
        if (!C_current) {
            return;
        }
        if (C_current.scrollHeight - C_current.scrollTop - C_current.clientHeight < 200) {
            Y();
        }
    };
    h_1(()=>{
        const C_current = C.current;
        !C_current || !a || !$ || $.status !== "ready" || !$.nextBefore || C_current.scrollHeight <= C_current.clientHeight + 40 && k(a, s, $.nextBefore);
    }, [
        $,
        a,
        s,
        k
    ]);
    const D = O.filter((v)=>v.att.type === "image" || v.att.type === "video");
    const X = A_1(null);
    const onTouchStart = (v)=>{
        const U = v.touches[0];
        X.current = {
            x: U.clientX,
            y: U.clientY
        };
    };
    const onTouchMove = (v)=>{
        const X_current = X.current;
        if (!X_current) {
            return;
        }
        const oe = v.touches[0];
        const de = oe.clientX - X_current.x;
        const B = oe.clientY - X_current.y;
        if (de > 60 && Math.abs(B) < de * 0.6) {
            X.current = null;
            i();
        }
    };
    const onTouchEnd = ()=>{
        X.current = null;
    };
    return u_1("aside", {
        ref: e,
        "aria-label": "Информация о чате",
        "aria-hidden": !p,
        inert: !p,
        className: `${be.panel} ${p ? be.panelOpen : ""}`,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        children: S && u_1("div", {
            className: be.inner,
            children: [
                u_1("div", {
                    className: be.header,
                    children: [
                        u_1("span", {
                            className: be.title,
                            children: "Информация о чате"
                        }),
                        u_1("button", {
                            type: "button",
                            className: be.close,
                            onClick: i,
                            "aria-label": "Закрыть",
                            children: u_1(b8, {
                                size: 20
                            })
                        })
                    ]
                }),
                u_1(mp, {
                    chatDto: l,
                    profile
                }),
                u_1("div", {
                    className: be.tabs,
                    role: "group",
                    "aria-label": "Вложения чата",
                    children: pp.map((v)=>u_1("button", {
                            type: "button",
                            "aria-pressed": s === v.key,
                            className: `${be.tab} ${s === v.key ? be.tabActive : ""}`,
                            onClick: ()=>o(v.key),
                            children: v.label
                        }, v.key))
                }),
                u_1("div", {
                    className: be.content,
                    ref: C,
                    onScroll,
                    children: O.length === 0 ? F ? null : $?.status === "error" ? u_1("div", {
                        className: be.empty,
                        children: [
                            "Не удалось загрузить",
                            u_1("button", {
                                type: "button",
                                className: be.loadMore,
                                onClick: Q,
                                children: "Повторить"
                            })
                        ]
                    }) : u_1("div", {
                        className: be.empty,
                        children: vp[s]
                    }) : u_1(S_1, {
                        children: [
                            s === "media" ? u_1(up, {
                                items: D,
                                onShowInChat: H,
                                scrollRoot: C
                            }) : u_1("div", {
                                className: be.list,
                                children: O.map((v)=>u_1("div", {
                                        className: be.listRow,
                                        children: [
                                            u_1("div", {
                                                className: be.listRowBody,
                                                children: [
                                                    v.att.type === "file" && u_1($s, {
                                                        id: v.att.id,
                                                        url: v.att.url,
                                                        name: v.att.name,
                                                        mime: v.att.mime,
                                                        size: v.att.size
                                                    }),
                                                    v.att.type === "audio" && u_1(Ss, {
                                                        messageId: v.messageId,
                                                        id: v.att.id,
                                                        url: v.att.url,
                                                        name: v.att.name,
                                                        size: v.att.size,
                                                        durationMs: v.att.durationMs
                                                    }),
                                                    v.att.type === "voice" && u_1(Ts, {
                                                        messageId: v.messageId,
                                                        id: v.att.id,
                                                        url: v.att.url,
                                                        duration: v.att.duration,
                                                        size: v.att.size,
                                                        levels: v.att.levels
                                                    })
                                                ]
                                            }),
                                            u_1("button", {
                                                type: "button",
                                                className: be.showInChatRow,
                                                title: "Показать в чате",
                                                "aria-label": "Показать в чате",
                                                onClick: ()=>H(v.messageId),
                                                children: u_1(qs, {})
                                            })
                                        ]
                                    }, v.key))
                            }),
                            $?.status === "error" && u_1("div", {
                                className: be.empty,
                                children: [
                                    "Не удалось загрузить",
                                    u_1("button", {
                                        type: "button",
                                        className: be.loadMore,
                                        onClick: Q,
                                        children: "Повторить"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function yp({ gift, subscription }) {
    const r = ar_1();
    const s = r?.id;
    const [o, u] = d_1(null);
    const i = A_1(0);
    h_1(()=>{
        let h = true;
        u(null);
        i.current++;
        const c = async (f)=>{
            const l = Bs(f);
            const m = ++i.current;
            const g = az();
            if (!l || !s) {
                return;
            }
            const p = ()=>h && m === i.current && au_1(g);
            const S = new URL(l.href, location.origin).searchParams.get("gift");
            if (!S) {
                if (p()) {
                    u("self");
                }
                return;
            }
            if (!(S === s || S === aL)) {
                try {
                    const M = await aw.getProfileByUsername(S, {
                        force: true
                    });
                    if (!p()) {
                        return;
                    }
                    if (M.id !== S) {
                        throw Error("recipient_mismatch");
                    }
                    u({
                        id: M.id,
                        name: M.displayName || M.username,
                        username: M.username,
                        avatar: M.avatar
                    });
                } catch  {
                    if (p()) {
                        aF.error("Не удалось открыть получателя подарка. Попробуйте ещё раз.");
                    }
                }
            }
        };
        const d = (f)=>{
            const f_detail = f.detail;
            if (typeof f_detail === "string") {
                c(f_detail);
            }
        };
        window.addEventListener(pn, d);
        if (gift && subscription === undefined) {
            c(`https://xn--d1ah4a.com/chats?gift=${encodeURIComponent(gift)}`);
        } else if (subscription === "self" && gift === undefined) {
            c("https://xn--d1ah4a.com/chats?subscription=self");
        }
        return ()=>{
            h = false;
            i.current++;
            window.removeEventListener(pn, d);
        };
    }, [
        s,
        gift,
        subscription
    ]);
    const a = ()=>{
        i.current++;
        u(null);
        const h = new URL(location.href);
        h.searchParams.delete("gift");
        h.searchParams.delete("subscription");
        history.replaceState(history.state, "", h.pathname + h.search + h.hash);
    };
    if (o) {
        return u_1(bd_1, {
            fallback: null,
            children: o === "self" ? u_1(bH, {
                isOpen: true,
                onClose: a
            }) : u_1(bG, {
                isOpen: true,
                recipient: o,
                onClose: a
            })
        });
    }
    return null;
}
function wp(e, n, r) {
    return new Promise((s, o)=>{
        let u;
        let i;
        let a = false;
        const h = (f)=>{
            if (!a) {
                a = true;
                u?.();
                clearTimeout(i);
                r.removeEventListener("abort", c);
                if (f) {
                    o(f);
                } else {
                    s();
                }
            }
        };
        const c = ()=>h(new DOMException("Chat navigation cancelled", "AbortError"));
        const d = (f)=>{
            if (r.aborted || f.activeChatId !== n) {
                c();
                return;
            }
            if (!f.openingChat) {
                h();
            }
        };
        r.addEventListener("abort", c, {
            once: true
        });
        u = e.subscribe(d);
        i = setTimeout(()=>h(Error("Initial chat load timed out")), 20000);
        d(e.getState());
    });
}
function kp(e, n, r) {
    const [s, o] = d_1({
        ownerId: e,
        peerId: n,
        notice: null
    });
    const [u, i] = d_1(0);
    const [a, h] = d_1(false);
    const c = `${e}:${n}`;
    const d = A_1(c);
    b6(()=>{
        d.current = c;
        h(false);
    }, [
        c
    ]);
    h_1(()=>{
        if (!n || !e) {
            return;
        }
        const l = az();
        let m = false;
        let g = false;
        let p = 0;
        let S = 0;
        const M = (notice)=>o({
                ownerId: e,
                peerId: n,
                notice
            });
        const y = ()=>!m && d.current === c && au_1(l);
        const P = async (O = false)=>{
            if (!y() || g || document.visibilityState === "hidden" || !O && Date.now() - S < 1000) {
                return;
            }
            g = true;
            S = Date.now();
            try {
                const H = await aw.getProfileByUsername(n, {
                    force: true,
                    silent: true
                });
                if (!y() || p !== p) {
                    return;
                }
                const Y = H.isDeleted === true;
                ax({
                    ownerId: e,
                    peerId: n,
                    session: l,
                    displayName: H.displayName,
                    deleted: Y,
                    avatar: H.avatar
                });
                M(Y ? "deleted" : H.interaction?.isBlocking ? "me" : H.interaction?.isBlockedBy ? "them" : H.canMessage === false ? "privacy" : null);
            } catch  {} finally{
                g = false;
            }
        };
        const N = dH((O)=>{
            if (!(!y() || O.chatId !== r)) {
                p++;
                M(O.notice);
            }
        });
        const x = ()=>{
            P();
        };
        P(true);
        const k = window.setInterval(x, 30000);
        const $ = (O)=>{
            if (O.detail === n) {
                i((F)=>F + 1);
            }
        };
        window.addEventListener("itd:message-access-changed", $);
        window.addEventListener("focus", x);
        document.addEventListener("visibilitychange", x);
        return ()=>{
            m = true;
            N();
            window.clearInterval(k);
            window.removeEventListener("itd:message-access-changed", $);
            window.removeEventListener("focus", x);
            document.removeEventListener("visibilitychange", x);
        };
    }, [
        e,
        n,
        r,
        u,
        c
    ]);
    const unblock = q_1(async ()=>{
        if (!n || a) {
            return;
        }
        const l = az();
        h(true);
        try {
            await b0.unblockUser(n);
            if (d.current === c && au_1(l)) {
                i((m)=>m + 1);
            }
        } catch  {
            if (d.current === c && au_1(l)) {
                aF.error("Не удалось разблокировать пользователя. Попробуйте снова");
            }
        } finally{
            if (d.current === c && au_1(l)) {
                h(false);
            }
        }
    }, [
        n,
        a,
        c
    ]);
    return {
        notice: s.ownerId === e && s.peerId === n ? s.notice : null,
        unblock,
        unblocking: a
    };
}
const Cp = ({ chatId, draftUserId, gift, subscription, message })=>{
    const u = ar_1();
    const i = u?.id ?? null;
    h_1(()=>{
        if (!i) {
            return;
        }
        const w = az();
        let ne = true;
        U_1.post("/messenger/entry", {}, {
            skipErrorToast: true
        }).then(async ()=>{
            if (ne && au_1(w)) {
                await K_1.getState().fetchProfile();
            }
        }).catch(()=>{});
        return ()=>{
            ne = false;
        };
    }, [
        i
    ]);
    const a = u?.displayName ?? null;
    const h = A_1(true);
    const c = A_1(null);
    b6(()=>{
        In(i, window.location.pathname);
        c.current = null;
    }, [
        i,
        draftUserId,
        chatId
    ]);
    const d = (w, ne)=>{
        const pe = i;
        const Ae = az();
        const pathname = window.location.pathname;
        if (!(!pe || !h.current || K_1.getState().profile?.id !== pe || pathname !== `/chats/new/${ne}`)) {
            w().then((Te)=>{
                if (!Te || !pe || !h.current || !au_1(Ae) || K_1.getState().profile?.id !== pe || window.location.pathname !== pathname) {
                    return;
                }
                const c_current = c.current;
                if (c_current?.ownerId === pe && c_current.peerId === ne) {
                    Nm({
                        ownerId: pe,
                        peerId: ne,
                        chatId: Te
                    }, Ae);
                }
                $_1(`/chats/${Te}`, true);
                In(K_1.getState().profile?.id, window.location.pathname);
            }).catch(()=>{});
        }
    };
    const f = bt_1((w)=>w.chats);
    const l = bt_1((w)=>w.activeChatId);
    const m = bt_1((w)=>w.messagesByChat);
    const g = bt_1((w)=>w.readCursors);
    const p = bt_1((w)=>w.onlineUsers);
    const S = bt_1((w)=>w.draftUser);
    const M = bt_1((w)=>w.confirmedDraft);
    const y = bt_1((w)=>w.setActiveChat);
    const P = bt_1((w)=>w.clearDraft);
    const N = bt_1((w)=>w.sendMessage);
    const x = bt_1((w)=>w.sendVoiceMessage);
    const k = bt_1((w)=>w.retryMessage);
    const $ = bt_1((w)=>w.sendFirstMessage);
    const O = bt_1((w)=>w.sendFirstVoice);
    const F = bt_1((w)=>w.sendTyping);
    const H = bt_1((w)=>w.editMessage);
    const Y = bt_1((w)=>w.deleteMessage);
    const Q = bt_1((w)=>w.bulkDeleteMessages);
    const C = bt_1((w)=>w.forwardMessages);
    const R = bt_1((w)=>w.markRead);
    const D = bt_1((w)=>w.setChatAtLiveBottom);
    const X = bt_1((w)=>w.loadMoreMessages);
    const I = bt_1((w)=>w.hasMoreByChat);
    const q = bt_1((w)=>w.isLoadingMoreByChat);
    const A = bt_1((w)=>w.olderLoadErrorByChat);
    const v = bt_1((w)=>w.jumpToMessage);
    const U = bt_1((w)=>w.loadNewerMessages);
    const oe = bt_1((w)=>w.exitToLatest);
    const de = bt_1((w)=>w.requestScrollToBottom);
    const B = bt_1((w)=>w.scrollIntent);
    const Z = bt_1((w)=>w.hasNewerByChat);
    const z = bt_1((w)=>w.isLoadingNewerByChat);
    const W = bt_1((w)=>w.init);
    const ge = bt_1((w)=>w.dispose);
    const Be = bt_1((w)=>w.closeInfoPanel);
    const Se = bt_1((w)=>w.infoPanelOpen);
    const _ = bp_1();
    h_1(()=>{
        if (_) {
            Be();
        }
    }, [
        _,
        l,
        Be
    ]);
    const [te, ce] = d_1(null);
    const J = A_1(0);
    const V = A_1(null);
    h_1(()=>cy((w)=>{
            const ne = chatId ?? l;
            if (w.chat_id === ne) {
                ce((pe)=>{
                    const Ae = pe?.id ?? V.current;
                    if (w.type === "history_cleared" || w.type === "chat_deleted" || w.type === "message_deleted" && w.message_id === Ae || w.type === "messages_deleted" && Ae && w.message_ids?.includes(Ae)) {
                        return J.current++, V.current = null, ne && cm_1.saveReplyDraft(ne, null), null;
                    }
                    return pe;
                });
            }
        }), [
        l,
        chatId
    ]);
    const Me = A_1(null);
    const onReply = q_1((w)=>{
        J.current++;
        V.current = w.id;
        ce(w);
        cm_1.saveReplyDraft(w.chatId, w.id);
        Me.current?.focus();
    }, []);
    const we = q_1(()=>{
        J.current++;
        V.current = null;
        ce(null);
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            cm_1.saveReplyDraft(activeChatId, null);
        }
    }, []);
    const onLoadMore = q_1(()=>{
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            X(activeChatId);
        }
    }, [
        X
    ]);
    const Ve = q_1(()=>{
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            U(activeChatId);
        }
    }, [
        U
    ]);
    const _e = q_1((w)=>{
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            v(activeChatId, w);
        }
    }, [
        v
    ]);
    const Xe = q_1(()=>{
        const w = bt_1.getState();
        const w_activeChatId = w.activeChatId;
        w_activeChatId && (w.isJumpedByChat[w_activeChatId] ? oe(w_activeChatId) : de(w_activeChatId));
    }, [
        oe,
        de
    ]);
    const Ye = q_1((w)=>{
        const activeChatId = bt_1.getState().activeChatId;
        if (activeChatId) {
            D(activeChatId, w);
        }
    }, [
        D
    ]);
    h_1(()=>(h.current = true, W().catch(()=>{}), ()=>{
            h.current = false;
            In(K_1.getState().profile?.id, window.location.pathname);
            ge();
        }), []);
    const He = A_1(true);
    h_1(()=>{
        const He_current = He.current;
        He.current = false;
        const ne = chatId ?? null;
        let pe = false;
        const Ae = new AbortController;
        const Ee = az();
        const Te = message && /^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(message) ? message : null;
        (async ()=>{
            if (Te) {
                try {
                    await W();
                } catch  {
                    return;
                }
                if (pe || !au_1(Ee)) {
                    return;
                }
            }
            if (He_current && ne || bt_1.getState().activeChatId !== ne) {
                await y(ne);
                if (pe || !au_1(Ee)) {
                    return;
                }
                ce(null);
            }
            if (ne && Te && !pe && au_1(Ee) && bt_1.getState().activeChatId === ne) {
                await wp(bt_1, ne, Ae.signal);
                if (!pe && au_1(Ee)) {
                    await v(ne, Te);
                }
            }
        })().catch(()=>{
            if (!pe && au_1(Ee)) {
                aF.error("Не удалось открыть сообщение. Повторите переход");
            }
        });
        if (ne && bt_1.getState().draftUser) {
            P();
        }
        return ()=>{
            pe = true;
            Ae.abort();
        };
    }, [
        chatId,
        message,
        y,
        P,
        v,
        W
    ]);
    h_1(()=>{
        const w = ++J.current;
        V.current = null;
        ce(null);
        if (!i || !chatId) {
            return;
        }
        const ne = chatId;
        const pe = az();
        const Ae = ()=>J.current === w && au_1(pe);
        (async ()=>{
            const Ee = await cm_1.loadReplyDraft(ne);
            if (!(!Ee || !Ae())) {
                V.current = Ee;
                try {
                    const Te = await dI(ne, ()=>cq.getMessagesAround(ne, Ee, 1, {
                            skipErrorToast: true
                        }), Ae);
                    if (!Ae()) {
                        return;
                    }
                    const nt = Te.messages.find((gt)=>gt.message_id === Ee && !gt.is_deleted && !gt.unavailable);
                    if (!nt) {
                        cm_1.saveReplyDraft(ne, null);
                        return;
                    }
                    const Ht = bt_1.getState().chats.find((gt)=>gt.chat_id === ne);
                    ce(dJ(nt, ne, i, {
                        participants: cC(Ht ?? null, i, a)
                    }));
                } catch (Te) {
                    if (Ae() && Te?.status === 404) {
                        V.current = null;
                        cm_1.saveReplyDraft(ne, null);
                    }
                }
            }
        })();
        return ()=>{
            J.current === w && J.current++;
        };
    }, [
        chatId,
        i
    ]);
    h_1(()=>{
        if (!draftUserId || !i || S?.id === draftUserId) {
            return;
        }
        const w = az();
        const ne = i;
        let pe = false;
        aw.getProfileByUsername(draftUserId, {
            silent: true,
            force: true
        }).then((Ae)=>{
            if (!(pe || !au_1(w) || K_1.getState().profile?.id !== ne)) {
                bt_1.getState().startDraft({
                    id: Ae.id,
                    name: Ae.displayName,
                    username: Ae.username,
                    ...bu_1(Ae.avatar),
                    verified: Ae.isVerified || Ae.verified
                });
            }
        }).catch(()=>{
            if (!(pe || !au_1(w) || K_1.getState().profile?.id !== ne)) {
                aF.error("Не удалось открыть диалог. Попробуйте найти пользователя ещё раз");
                $_1("/chats", true);
            }
        });
        return ()=>{
            pe = true;
        };
    }, [
        draftUserId,
        S?.id,
        i
    ]);
    h_1(()=>{
        if (draftUserId && M?.peerId === draftUserId && f.some((w)=>w.chat_id === M.chatId)) {
            d(()=>Promise.resolve(M.chatId), draftUserId);
        }
    }, [
        draftUserId,
        M,
        f,
        i
    ]);
    const Ke = a6(()=>{
        const ne = f.filter((Ee)=>Ee.chat_type !== 0 || Ee.other_user_id !== i).map((Ee)=>{
            const Te = dK(Ee, p);
            if (Te.user.id === i) {
                Te.user.online = false;
            }
            if (Te.lastMessage && Ee.last_message) {
                Te.lastMessage.isOutgoing = Ee.last_message.sender_id === i;
                Te.lastMessage.isRead = !!Ee.other_read_message_id && !!Ee.last_message.id && dj(Ee.other_read_message_id, Ee.last_message.id);
            }
            return Te;
        });
        const pe = ne.filter((Ee)=>Ee.isPinned);
        const Ae = ne.filter((Ee)=>!Ee.isPinned);
        return [
            ...pe,
            ...Ae
        ];
    }, [
        f,
        p,
        i
    ]);
    const ze = a6(()=>Ke.find((w)=>w.id === (chatId ?? l)) ?? null, [
        Ke,
        l,
        chatId
    ]);
    const Dt = !!ze || !!draftUserId && S?.id === draftUserId;
    const ct = a6(()=>f.find((w)=>w.chat_id === (chatId ?? l)) ?? null, [
        f,
        l,
        chatId
    ]);
    const je = a6(()=>cC(ct, i, a), [
        ct,
        i,
        a
    ]);
    const Je = a6(()=>{
        if (!l) {
            return [];
        }
        const w = m[l] ?? [];
        const ne = g[l] ?? {};
        let pe = null;
        for (const [Te, nt] of Object.entries(ne)){
            if (Te !== i && (!pe || dj(nt, pe))) {
                pe = nt;
            }
        }
        const Ae = new Map;
        for (const Te of w){
            Ae.set(Te.message_id, Te);
        }
        const resolveOriginal = (Te)=>Ae.get(Te);
        return w.map((Te)=>{
            const nt = dJ(Te, l, i, {
                resolveOriginal,
                participants: je
            });
            if (nt.isOutgoing && pe) {
                nt.isRead = dL(Te.message_id, pe);
            }
            return nt;
        }).reverse();
    }, [
        l,
        m,
        g,
        i,
        je
    ]);
    const ke = !!draftUserId;
    const Rt = a6(()=>{
        if (ke && S) {
            return {
                id: "",
                user: S,
                isGroup: false
            };
        }
        return null;
    }, [
        ke,
        S
    ]);
    const ht = a6(()=>{
        if (!ke || !draftUserId) {
            return [];
        }
        return (m[`draft:${draftUserId}`] ?? []).map((ne)=>dJ(ne, "", i, {
                participants: je
            })).reverse();
    }, [
        ke,
        draftUserId,
        m,
        i,
        je
    ]);
    const et = ke ? Rt : ze;
    const messages = ke ? ht : Je;
    const se = bt_1((w)=>w.messagesStatus);
    const fe = bt_1((w)=>w.openingChat);
    const firstUnreadId = bt_1((w)=>{
        if (l) {
            return w.firstUnreadByChat[l];
        }
    });
    const messagesReady = ke || !!l && !fe && se[l] === "ready";
    const tt = et && !et.isGroup && et.user.id !== i ? et.user.id : null;
    const { notice, unblock, unblocking } = kp(i, tt, ke && draftUserId ? `draft:${draftUserId}` : l ?? "");
    const it = te?.chatId === (chatId ?? l) ? te : null;
    return u_1("div", {
        className: `${dM.messenger} ym-hide-content`,
        children: [
            u_1(yp, {
                gift,
                subscription
            }, i),
            u_1("div", {
                className: `${dM.container} ${Se ? dM.containerWithPanel : ""}`,
                children: [
                    u_1(nl, {
                        chats: Ke,
                        activeChatId: l,
                        onSelect: (w)=>{
                            ce(null);
                            $_1(`/chats/${w}`, true);
                        }
                    }, `chat-list:${i}`),
                    u_1(Tm, {
                        chat: et,
                        messages,
                        composerKey: ke && draftUserId ? `draft:${draftUserId}` : et && !et.isGroup ? `draft:${et.user.id}` : undefined,
                        recipientWarningHandoffChatId: chatId,
                        messagesReady,
                        firstUnreadId,
                        loadError: !!l && se[l] === "error",
                        chatRequested: !!chatId || !!draftUserId,
                        chatLoading: ke ? S?.id !== draftUserId : !!chatId && (fe || !se[chatId] || se[chatId] === "loading" || se[chatId] === "idle"),
                        onRetryLoad: ()=>{
                            if (l) {
                                y(l);
                            }
                        },
                        blockNotice: notice,
                        onUnblock: unblock,
                        unblocking,
                        onSend: (w, ne, pe)=>{
                            if (ke && draftUserId) {
                                d(()=>$(draftUserId, w, ne, pe), draftUserId);
                                return;
                            }
                            if (l) {
                                N(l, w, it?.id ?? null, ne, pe);
                                we();
                            }
                        },
                        onSendVoice: (w, ne, pe)=>{
                            if (ke && draftUserId) {
                                d(()=>O(draftUserId, w, ne, pe), draftUserId);
                                return;
                            }
                            if (l) {
                                x(l, w, ne, pe, it?.id ?? null);
                                we();
                            }
                        },
                        onRecipientWarningDismissed: (w, ne)=>{
                            if (draftUserId === ne && i === w) {
                                c.current = {
                                    ownerId: w,
                                    peerId: ne
                                };
                            }
                        },
                        onRetryMessage: (w)=>{
                            if (ke && draftUserId) {
                                d(()=>k(w), draftUserId);
                            } else {
                                k(w);
                            }
                        },
                        onTyping: (w)=>{
                            if (!ke && l) {
                                F(l, w);
                            }
                        },
                        onBack: ()=>{
                            ce(null);
                            if (ke) {
                                P();
                            }
                            $_1("/chats", true);
                        },
                        replyingTo: it,
                        onReply,
                        onCancelReply: we,
                        participants: je,
                        textareaRef: Me,
                        hasMore: l ? I[l] ?? false : false,
                        isLoadingMore: l ? q[l] ?? false : false,
                        olderLoadError: !!l && !!A?.[l],
                        onLoadMore,
                        hasNewer: !ke && l ? Z[l] ?? false : false,
                        isLoadingNewer: !ke && l ? z[l] ?? false : false,
                        onLoadNewer: ke ? undefined : Ve,
                        scrollIntent: !ke && B && B.chatId === l ? B : null,
                        onReplyClick: ke ? undefined : _e,
                        onScrollToBottomClick: ke ? undefined : Xe,
                        onLiveBottomChange: !ke && l ? Ye : undefined,
                        availableChats: Ke,
                        onDeleteMessage: (w, ne)=>{
                            if (l) {
                                Y(l, w, ne);
                            }
                        },
                        onDeleteSelected: (w, ne)=>{
                            if (l) {
                                return Q(l, w, ne);
                            }
                            return Promise.resolve([]);
                        },
                        onEditMessage: (w, ne)=>{
                            if (l) {
                                return H(l, w, ne);
                            }
                            return Promise.resolve(false);
                        },
                        onForwardSelected: (w, ne, pe)=>{
                            if (l) {
                                return C(l, w, ne, pe);
                            }
                            return false;
                        },
                        onMessageVisible: (w)=>{
                            if (l) {
                                R(l, w).catch(()=>{});
                            }
                        }
                    }),
                    Dt && u_1(bp, {}, `chat-info:${i}`)
                ]
            })
        ]
    });
};
function Np({ reset }) {
    const [n, r] = d_1(false);
    const s = async ()=>{
        if (n) {
            return;
        }
        r(true);
        const o = az();
        const u = bt_1.getState();
        try {
            const i = await u.loadChats();
            if (!au_1(o)) {
                return;
            }
            const a = !u.activeChatId || await u.loadMessages(u.activeChatId, {
                forceNetwork: true
            });
            if (i && a && au_1(o)) {
                reset();
            }
        } catch  {} finally{
            r(false);
        }
    };
    return u_1("div", {
        className: dM.messenger,
        children: u_1("div", {
            className: dM.container,
            children: u_1(c3, {
                kind: "server",
                title: "Не удалось открыть переписку",
                description: "Попробуйте загрузить её ещё раз. Сохранённые черновики останутся на месте.",
                action: u_1(B_1, {
                    loading: n,
                    onClick: ()=>{
                        s();
                    },
                    children: "Попробовать снова"
                })
            })
        })
    });
}
function Sp({ children }) {
    return u_1(dN, {
        fallback: ({ resetError })=>u_1(Np, {
                reset: resetError
            }),
        children
    });
}
function Dp(e) {
    const n = ar_1()?.id;
    return u_1(Sp, {
        children: u_1(Cp, {
            ...e
        })
    }, n ?? "");
}
export { Dp as default };
