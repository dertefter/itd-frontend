import { al, K, aw, X as X_1, a1, ak, h as h_1, $ as $_1, R as R_1, u as u_1, A as A_1, ai, bn } from "./index-B4ySybtH.js";
const h = (e)=>e.slice(al.route.length).replace(/^\//, "");
function x(e, n) {
    if (e.length > 512 || n.length > 2048 || /[\\#?]/.test(e) || e.includes("..") || e.startsWith("/") || n && !n.startsWith("?")) {
        return null;
    }
    return `${al.route}${e ? `/${e}` : ""}${n}`;
}
const k = (e)=>typeof e === "string" && /^\/(?!\/)/.test(e);
let g = 0;
async function H(e) {
    if (typeof e !== "string" || K.getState().profile?.id !== e) {
        return;
    }
    const n = ++g;
    for (const a of [
        0,
        750,
        2000
    ]){
        if (a) {
            await new Promise((t)=>setTimeout(t, a));
        }
        if (n !== g || K.getState().profile?.id !== e) {
            return;
        }
        try {
            const t = await aw.getMyProfile();
            if (n !== g || K.getState().profile?.id !== e || t.id !== e) {
                return;
            }
            t.halloween = X_1(t.halloween);
            K.getState().setProfile(t);
            if (t.username) {
                aw.updateProfileCache(t.username, {
                    halloween: t.halloween
                });
            }
            a1.getState().replaceAuthorHalloween(e, t.halloween);
            window.dispatchEvent(new CustomEvent("halloween-profile-refreshed", {
                detail: e
            }));
        } catch  {}
    }
}
function M(e, n, a, t) {
    if (e && a?.visible) {
        return "active";
    }
    if (n && t?.visible) {
        return "checking";
    }
    if (!e || n) {
        return "loading";
    }
    return "closed";
}
const shell = "JdXw";
const viewport = "w7VM";
const waiting = "NaxR";
const frame = "JSXQ";
const c = {
    shell,
    viewport,
    waiting,
    frame
};
const y = (e)=>{
    if (typeof e === "string") {
        return e;
    }
    return "";
};
export const EventFrame = ()=>{
    const { loaded, event, lastEvent, error } = ak();
    const r = M(loaded, error, event, lastEvent);
    const o = r === "checking";
    h_1(()=>{
        if (r === "closed") {
            $_1(R_1.EVENT, true);
        }
    }, [
        r
    ]);
    switch(r){
        case "closed":
            return null;
        case "loading":
            return u_1("div", {
                className: c.shell,
                children: u_1("p", {
                    className: c.waiting,
                    role: "status",
                    children: error ? "Не удалось проверить доступ к ивенту. Повторим при восстановлении связи." : "Загружаем ивент…"
                })
            });
        default:
            return u_1("div", {
                className: c.shell,
                "aria-busy": o,
                children: [
                    u_1("div", {
                        className: c.viewport,
                        inert: o || undefined,
                        children: u_1(X, {})
                    }),
                    o && u_1("p", {
                        className: c.waiting,
                        role: "status",
                        children: "Проверяем доступ к ивенту…"
                    })
                ]
            });
    }
};
function X() {
    const e = A_1(null);
    const current = A_1(`${al.framePath}/${h(window.location.pathname)}${window.location.search}`).current;
    const a = A_1(h(window.location.pathname));
    const t = A_1(window.location.search);
    h_1(()=>{
        const r = (s)=>bn(e.current, s);
        const o = (s, i)=>{
            a.current = s;
            t.current = i;
            const f = x(s, i);
            if (!(!f || f === window.location.pathname + window.location.search)) {
                history.replaceState(null, "", f);
            }
        };
        const p = (s)=>{
            if (s.origin !== window.location.origin || s.source !== e.current?.contentWindow) {
                return;
            }
            const s_data = s.data;
            switch(s_data?.type){
                case "itd-event:auth-request":
                    r(s_data.expired === true);
                    return;
                case "itd-event:path":
                    o(y(s_data.path), y(s_data.search));
                    return;
                case "itd-event:navigate":
                    if (k(s_data.path)) {
                        $_1(s_data.path);
                    }
                    return;
                case "itd-event:profile-changed":
                    if (typeof s_data.profileId === "string") {
                        H(s_data.profileId);
                    }
                    return;
                case "itd-event:settings-changed":
                    window.dispatchEvent(new Event("halloween-settings-changed"));
                    return;
            }
        };
        const S = ai(()=>{
            r(false);
        });
        window.addEventListener("message", p);
        return ()=>{
            S();
            window.removeEventListener("message", p);
        };
    }, []);
    h_1(()=>{
        const r = h(window.location.pathname);
        const search = window.location.search;
        if (!(r === a.current && search === t.current)) {
            a.current = r;
            t.current = search;
            e.current?.contentWindow?.postMessage({
                type: "itd-event:goto",
                path: r,
                search
            }, window.location.origin);
        }
    });
    return u_1("iframe", {
        ref: e,
        className: c.frame,
        src: current,
        title: `Ивент «${al.title}»`,
        sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
    });
}
