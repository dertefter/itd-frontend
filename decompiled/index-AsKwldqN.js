import { u, ap, aq } from "./index-B4ySybtH.js";
const modal = "kyYf";
const c = {
    modal
};
export function C({ isOpen, onClose, onVerify }) {
    if (!isOpen) {
        return null;
    }
    const onVerify_1 = (l)=>{
        onVerify(l);
        onClose();
    };
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    return u(aq, {
        onClose,
        showHeader: false,
        className: c.modal,
        frameless: true,
        children: u(ap, {
            onVerify: onVerify_1,
            onError: ()=>{},
            theme
        })
    });
}
