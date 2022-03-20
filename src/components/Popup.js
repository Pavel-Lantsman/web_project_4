export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("click", this._handleOverlayClose);
  }

  close() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("click", this._handleOverlayClose);
  }

  _handleEscClose = (event) => {
    const key = event.key;
    if (key === "Escape") {
      this.close();
    }
  };

  // _handleEscClose(evt) {
  //   if (evt.key === 'Escape') {
  //     this.close()
  //   }
  // }
  //
  // open() {
  //   this._element.classList.add('popup_open');
  //   document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  // }
  //
  // close() {
  //   this._element.classList.remove('popup_open');
  //   document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));

  _handleOverlayClose = (event) => {
    if (
      event.target.classList.contains("modal_opened") ||
      event.target.classList.contains(`modal__image-wrapper`)
    ) {
      this.close();
    }
  };

  setEventListeners() {
    const closeButton = this._popup.querySelector(".modal__close-button");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }

}

export class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close()
    }
  }

  open() {
    this._element.classList.add('popup_open');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._element.classList.remove('popup_open');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  setEventListeners() {
    this._element.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    })
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target !== evt.currentTarget) {
        return
      }
      this.close();
    })
  }
}