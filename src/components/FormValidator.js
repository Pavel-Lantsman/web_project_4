
export default class FormValidator {
  constructor(fieldset, formElement) {
    this._inputSelector = fieldset.inputSelector;
    this._submitButtonSelector = fieldset.submitButtonSelector;
    this._inactiveButtonClass = fieldset.inactiveButtonClass;
    this._inputErrorClass = fieldset.inputErrorClass;
    this._errorClass = fieldset.errorClass;
    this._formElement = formElement;
  }



  _showInputError(inputElement, validationMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._errorClass);
  }



  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }



  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, inputElement.validationMessage);
    }
  }

  _getInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }



  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }



  _toggleButtonState(inputList) {
    if (this._getInvalidInput(inputList)) {
      this.disableSubmitButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }



  enableValidation() {
    this._formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}