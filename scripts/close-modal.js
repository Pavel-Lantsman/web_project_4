
function closePopupWithEscape(event) {
  const key = event.key;
  if (key === "Escape") {
    toggleModal(document.querySelector(".modal_opened"));
  }
}


function closePopupOverlayClickOut(event) {
  if (
    event.target.classList.contains("modal_opened") ||
    event.target.classList.contains("modal__image-wrapper")
  ) {
    toggleModal(event.target);
  }
}



