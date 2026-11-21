import { d, h as h_1, aJ, aB, u as u_1, aq } from "./index-B4ySybtH.js";
const modal = "SeIR";
const changelog = "slRd";
const entry = "rjOb";
const entryHeader = "O4uI";
const version = "o2Zl";
const date = "szKs";
const changes = "An7H";
const change = "ebnx";
const singleChange = "hvyD";
const releaseCopy = "nzym";
const note = "KjlK";
const loading = "F6uG";
const divider = "RG30";
const s = {
    modal,
    changelog,
    entry,
    entryHeader,
    version,
    date,
    changes,
    change,
    singleChange,
    releaseCopy,
    note,
    loading,
    divider
};
export function ChangelogModal({ isOpen, onClose }) {
    const [i, h] = d([]);
    const [g, t] = d(true);
    h_1(()=>{
        if (!isOpen) {
            return;
        }
        let e = false;
        aJ.getChangelog().then((l)=>{
            if (!e) {
                h(l);
                t(false);
            }
        }).catch(()=>{
            if (!e) {
                t(false);
            }
        });
        return ()=>{
            e = true;
        };
    }, [
        isOpen
    ]);
    if (isOpen) {
        return aB(u_1(aq, {
            onClose,
            title: "Что нового",
            size: "default",
            className: s.modal,
            children: u_1("div", {
                className: s.changelog,
                children: g ? u_1("div", {
                    className: s.loading,
                    children: "Загрузка..."
                }) : i.map((e, l)=>u_1("div", {
                        className: s.entry,
                        children: [
                            u_1("div", {
                                className: s.entryHeader,
                                children: [
                                    u_1("span", {
                                        className: s.version,
                                        children: [
                                            "v",
                                            e.version
                                        ]
                                    }),
                                    u_1("span", {
                                        className: s.date,
                                        children: e.date
                                    })
                                ]
                            }),
                            e.version === "1.3.0" ? u_1("div", {
                                className: s.releaseCopy,
                                children: e.changes.map((c, o)=>u_1("p", {
                                        className: s.singleChange,
                                        children: c
                                    }, o))
                            }) : e.changes.length === 1 && !e.changes[0].startsWith("•") ? u_1("p", {
                                className: s.singleChange,
                                children: e.changes[0]
                            }) : u_1("ul", {
                                className: s.changes,
                                children: e.changes.map((c, o)=>u_1("li", {
                                        className: s.change,
                                        children: c
                                    }, o))
                            }),
                            e.note && u_1("p", {
                                className: s.note,
                                children: e.note
                            }),
                            l < i.length - 1 && u_1("div", {
                                className: s.divider
                            })
                        ]
                    }, e.version))
            })
        }), document.body);
    }
    return null;
}
export { ChangelogModal as default };
