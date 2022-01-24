
function closePopupWithEscape(event) {
  const key = event.key;
  if (key === "Escape") {
    closeModal(document.querySelector(".modal_opened"));
  }
}


function closePopupOverlayClickOut(event) {
  if (
    event.target.classList.contains("modal_opened") ||
    event.target.classList.contains(`modal__image-wrapper`)
  ) {
    closeModal(event.target);
  }
}

function openModal(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", closePopupWithEscape);
  document.addEventListener("click", closePopupOverlayClickOut);
}

function closeModal(popup) {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", closePopupWithEscape);
  document.removeEventListener("click", closePopupOverlayClickOut);
}

