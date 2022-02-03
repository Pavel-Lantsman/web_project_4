
export function closePopupWithEscape(event) {
    const key = event.key;
    if (key === "Escape") {
        closeModal(document.querySelector(".modal_open"));
    }
}

export function closePopupOverlayClickOut(event) {
    if (
        event.target.classList.contains("modal_open") ||
        event.target.classList.contains(`modal__image-wrapper`)
    ) {
        closeModal(event.target);
    }
}

export function openModal(popup) {
    popup.classList.add("modal_open");
    document.addEventListener("keydown", closePopupWithEscape);
    document.addEventListener("click", closePopupOverlayClickOut);
}

export function closeModal(popup) {
    popup.classList.remove("modal_open");
    document.removeEventListener("keydown", closePopupWithEscape);
    document.removeEventListener("click", closePopupOverlayClickOut);
}