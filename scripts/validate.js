
const fieldset = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

function showInputError(formElement, inputElement, settings) {
  // Select each error message element using its unique id name + -error
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);
  // Replace the content of the error message with HTMLObjectElement.validationMessage
  errorElement.textContent = inputElement.validationMessage;
  // Show the error message
  errorElement.classList.add(settings.errorClass);
}

function hideInputError(formElement, inputElement, settings) {
  // Find each error message element using its unique class name
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(settings.inputErrorClass);
  // Hide the error message
  errorElement.classList.remove(settings.errorClass);
  // Reset the error
  errorElement.textContent = "";
}

function checkInputValidity(formElement, inputElement, settings) {
  //if else statement whether form is valid or not 26:43
  if (!inputElement.validity.valid) {
    // If NOT (!), show the error element. The error message itself is the function's parameter
    // The parameter of showInputError() is now a form, which contains a field to be checked
    showInputError(formElement, inputElement, settings);
  } else {
    // If it's valid, hide the error element
    hideInputError(formElement, inputElement, settings);
  }
}

function toggleButtonState(inputList, buttonElement, settings) {
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );

  if (hasInvalidInput){
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  }  else  {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}


function setEventListeners(formElement, settings) {
  // Find all fields inside the form, and make an array from them using the Array.from() method
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );


  // call to check the button state in the very beginning
  toggleButtonState(inputList, buttonElement, settings);

  // iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", function () {
      //"input" event handler on a form makes its validation instant
      checkInputValidity(formElement, inputElement, settings);

      // call to check check it whenever any field input is changed
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

function enableValidation(settings) {
  // find all forms with the specified class in DOM, and make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  // iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElement, settings);
  });
}


enableValidation(fieldset);

