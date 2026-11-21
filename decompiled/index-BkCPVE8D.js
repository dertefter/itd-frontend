import { d as d_1, aB, u as u_1, B, aq } from "./index-B4ySybtH.js";
const content = "XnGX";
const title = "jfIU";
const subtitle = "tMqM";
const actions = "iq1E";
const a = {
    content,
    title,
    subtitle,
    actions
};
export function ConfirmModal({ title, message, confirmText = "Подтвердить", cancelText = "Отмена", danger = false, onConfirm, onClose }) {
    const [e, s] = d_1(false);
    const m = async ()=>{
        if (!e) {
            s(true);
            try {
                await onConfirm();
                onClose();
            } catch  {
                s(false);
            }
        }
    };
    return aB(u_1(aq, {
        onClose,
        showHeader: false,
        children: u_1("div", {
            className: a.content,
            children: [
                u_1("h2", {
                    className: a.title,
                    children: title
                }),
                u_1("p", {
                    className: a.subtitle,
                    children: message
                }),
                u_1("div", {
                    className: a.actions,
                    children: [
                        u_1(B, {
                            variant: "secondary",
                            onClick: (i)=>{
                                i.stopPropagation();
                                onClose();
                            },
                            children: cancelText
                        }),
                        u_1(B, {
                            variant: danger ? "danger" : "primary",
                            onClick: (i)=>{
                                i.stopPropagation();
                                m();
                            },
                            disabled: e,
                            loading: e,
                            children: confirmText
                        })
                    ]
                })
            ]
        })
    }), document.body);
}
