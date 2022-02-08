import initialCards from "./initialCards.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";

// wrapper modals
const editProfilePopup = document.querySelector(".modal_type_edit-profile");
const addNewPlacePopup = document.querySelector(".modal_type_add-place");

// wrapper for popup forms
const profileForm = editProfilePopup.querySelector(".form-profile");
const placeForm = addNewPlacePopup.querySelector(".form-add-place");

// select profile name and info:
const userNameElement = document.querySelector(".profile__name");
const userJobElement = document.querySelector(".profile__title");

// input data fields in modal/popup forms
const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");

const inputPlace = addNewPlacePopup.querySelector(".form__input_type_place");
const inputLink = addNewPlacePopup.querySelector(".form__input_type_link");

// buttons
const openProfileEditButton = document.querySelector(".profile__edit-button");
const addNewPlacePopupButton = document.querySelector(".profile__add-button");

// place - elements - template
const placesList = document.querySelector(".elements__list");
const templateSelector = ".elements__element";


initialCards.reverse().forEach((initialCardData) => {
  renderCard(initialCardData);
});

function renderCard(data) {
  const card = new Card(data, templateSelector);
  placesList.prepend(card.render());
}


function submitProfileForm(e) {
  e.preventDefault();
  userNameElement.textContent = inputName.value;
  userJobElement.textContent = inputJob.value;
  closeModal(editProfilePopup);
  editProfileFormValidator.disableButton(e.submitter);
}

function submitNewPlaceForm(e) {
  e.preventDefault();

  const place = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  renderCard(place);
  closeModal(addNewPlacePopup);
  e.target.reset();
  addCardFormValidator.disableButton(e.submitter);
}

const fieldset = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

const  addCardFormValidator = new FormValidator(fieldset,placeForm);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(fieldset, profileForm);
editProfileFormValidator.enableValidation();

const closeButtons = document.querySelectorAll(".modal__close-button");
closeButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    closeModal(event.target.closest(".modal"));
  })
);

openProfileEditButton.addEventListener("click",() => {
  inputName.value = userNameElement.textContent;
  inputJob.value = userJobElement.textContent;
  openModal(editProfilePopup);
});

addNewPlacePopupButton.addEventListener("click", () =>
  openModal(addNewPlacePopup)
);

profileForm.addEventListener("submit", submitProfileForm);

placeForm.addEventListener("submit", submitNewPlaceForm);