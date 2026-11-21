import { ar, d as d_1, h, as, at, au, av, aw, ax, ay, az, aA } from "./index-B4ySybtH.js";
const o = new Map;
aA(()=>{
    o.clear();
});
export function u(t, n = true, s = true) {
    const a = ar()?.id;
    const u = az();
    const r = a && t ? `${u}:${a}:${t}` : "";
    const [, f] = d_1(0);
    h(()=>{
        if (!r || !t || !n) {
            return;
        }
        let l = o.get(r);
        if (!l) {
            if (o.size >= 20) {
                for (const [i, g] of o){
                    if (!g.listeners.size) {
                        o.delete(i);
                        break;
                    }
                }
            }
            l = {
                profile: null,
                updatedAt: 0,
                revision: 0,
                listeners: new Set
            };
            o.set(r, l);
        }
        const v = ()=>f((i)=>i + 1);
        l.listeners.add(v);
        const m = (i = false)=>{
            if (!au(u) || o.get(r) !== e || e.pending || !i && Date.now() - e.updatedAt <= 60000) {
                return;
            }
            if (i && e.profile) {
                e.profile = av(e.profile, false);
                e.listeners.forEach((c)=>c());
            }
            const e_revision = e.revision;
            const b = aw.getProfileByUsername(t, {
                force: true,
                silent: true
            }).then((c)=>{
                if (!(!au(u) || o.get(r) !== e || e.revision !== e_revision)) {
                    e.profile = av(c);
                    if (a && t !== a && c.displayName) {
                        ax({
                            ownerId: a,
                            peerId: t,
                            displayName: c.displayName,
                            session: u
                        });
                    }
                    e.updatedAt = Date.now();
                    e.listeners.forEach((z)=>z());
                }
            }).catch(()=>{}).finally(()=>{
                if (e.pending === b) {
                    e.pending = undefined;
                }
            });
            e.pending = b;
        };
        const h = ()=>{
            e.revision++;
            e.updatedAt = 0;
            e.pending = undefined;
            if (e.profile) {
                e.profile = av(e.profile, false);
            }
            e.listeners.forEach((i)=>i());
            m(true);
        };
        const $ = s ? as(h) : ()=>{};
        const A = s ? at((i)=>{
            if (!i || i === t) {
                h();
            }
        }) : ()=>{};
        const y = ()=>{
            if (document.visibilityState === "visible") {
                h();
            }
        };
        const S = s ? setInterval(()=>{
            if (typeof document === "undefined" || document.visibilityState === "visible") {
                m(true);
            }
        }, 30000) : undefined;
        m(s);
        if (s && typeof document !== "undefined") {
            document.addEventListener("visibilitychange", y);
        }
        v();
        return ()=>{
            $();
            A();
            clearInterval(S);
            e.listeners.delete(v);
            if (typeof document !== "undefined") {
                document.removeEventListener("visibilitychange", y);
            }
        };
    }, [
        r,
        t,
        n,
        u,
        s
    ]);
    const p = r && n ? o.get(r) : undefined;
    if (p?.profile) {
        return av(p.profile, ay() && p.listeners.size > 0);
    }
    return null;
}
export function a(t, n) {
    return `${n === "male" ? "был" : n === "female" ? "была" : "был(а)"} ${f(t) ?? "недавно"}`;
}
function w(t, n, s, a) {
    const u = Math.abs(t);
    const r = u % 10;
    const f = u % 100;
    if (f >= 11 && f <= 19) {
        return a;
    }
    if (r === 1) {
        return n;
    }
    if (r >= 2 && r <= 4) {
        return s;
    }
    return a;
}
export function f(t) {
    if (!t) {
        return null;
    }
    switch(t.unit){
        case "just_now":
            return "только что";
        case "minutes":
            {
                const n = t.value ?? 1;
                const s = w(n, "минуту", "минуты", "минут");
                return `${n} ${s} назад`;
            }
        case "hours":
            {
                const n = t.value ?? 1;
                const s = w(n, "час", "часа", "часов");
                return `${n} ${s} назад`;
            }
        case "recently":
            return "недавно";
        case "this_week":
            return "на этой неделе";
        case "this_month":
            return "в этом месяце";
        case "long_ago":
            return "давно";
        default:
            return null;
    }
}
