
function closePopupWithEscape(event) {
  const key = event.key;
  if (key == "Escape") {
    closeModal(document.querySelector(".modal_open"));
  }
}


function closePopupOverlayClickOut(event) {
  if (
    event.target.classList.contains("modal_open") ||
    event.target.classList.contains(`modal__image-wrapper`)
  ) {
    closeModal(event.target);
  }
}



