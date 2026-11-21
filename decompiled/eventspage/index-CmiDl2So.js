import { ak, h as h_1, $, al, u as u_1 } from "./index-B4ySybtH.js";
const page = "d67E";
const header = "LJ9v";
const status = "Ha50";
const t = {
    page,
    header,
    status
};
export function EventsPage({ path }) {
    const { event, loaded, error } = ak();
    const a = loaded && event?.visible === true;
    h_1(()=>{
        if (a) {
            $(al.route, true);
        }
    }, [
        a
    ]);
    if (a) {
        return null;
    }
    return u_1("section", {
        className: t.page,
        "data-route": path,
        "aria-labelledby": "event-heading",
        children: [
            u_1("header", {
                className: t.header,
                children: u_1("h1", {
                    id: "event-heading",
                    children: "Ивент"
                })
            }),
            u_1("p", {
                className: t.status,
                role: "status",
                children: error ? "Не удалось загрузить ивент. Повторим при восстановлении связи." : loaded ? "Сейчас нет активного ивента." : "Загружаем ивент…"
            })
        ]
    });
}
