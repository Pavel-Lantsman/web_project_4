import initialCards from "./initial-cards.js";
import FormValidator from "./FormValidator";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";

//wrapper modals
const editProfilePopup = document.querySelector(".modal_type_edit-profile");
const addNewPlacePopup = document.querySelector(".modal_type_add-place");
const previewImage = document.querySelector(".modal_type_preview-image");

//wrapper for popup forms
const profileForm = editProfilePopup.querySelector(".form");
const placeForm = addNewPlacePopup.querySelector(".form-add-place");

//select profile name and info:
const userNameElement = document.querySelector(".profile__name");
const userJobElement = document.querySelector(".profile__title");

//input data in modal/popup forms
const inputName = document.querySelector(".form__input_type_name");
const inputJob = document.querySelector(".form__input_type_job");

const inputPlace = addNewPlacePopup.querySelector(".form__input_type_place");
const inputLink = addNewPlacePopup.querySelector(".form__input_type_link");

// buttons
const openProfileEditButton = document.querySelector(".profile__edit-button");
const addNewPlacePopupButton = document.querySelector(".profile__add-button");

//place=elements template
const placeList = document.querySelector(".elements__list");
const placeTemplate = document.querySelector(".elements-template").content.querySelector(".elements__element");

// const modalImageCaption = previewImage.querySelector(".modal__image-caption");
// const modalImageContainer = previewImage.querySelector(".modal__image-container");


initialCards.reverse().forEach((initialCardData) => {
    renderCard(initialCardData);
});

function renderCard(data) {
    const card = new Card(data, placeTemplate);
    placeList.prepend(card.render());
}

function submitProfileForm(e) {
    e.preventDefault();
    userNameElement.textContent = inputName.value;
    userJobElement.textContent = inputJob.value;
    closeModal(editProfilePopup);
    disableButton(e.submitter);
}

function disableButton(button) {
    button.disabled = true;
    button.classList.add("form__button_disabled");
}

function submitNewPlaceForm(e) {
    e.preventDefault();
    const insertPlace = createPlaceElement({
        name: inputPlace.value,
        link: inputLink.value,
    });
    renderCard(insertPlace);
    closeModal(addNewPlacePopup);
    e.target.reset();
    disableButton(e.submitter);
}

const formSelector = ".form";
const fieldset = {
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

const getFormsList = Array.from(document.querySelectorAll(formSelector));

getFormsList.forEach((formElement) => {
    const form = new FormValidator(fieldset, formElement);

    form.enableValidation();
});


const closeAllBtns = document.querySelectorAll(".modal__close-button");
closeAllBtns.forEach(btn => btn.addEventListener('click', (evt) => {
    closeModal(evt.target.closest('.modal'))
}));

// const popups = document.querySelectorAll('.popup')

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup)
//         }
//         if (evt.target.classList.contains('popup__close')) {
//             closePopup(popup)
//         }
//     })
// })



profileForm.addEventListener("submit", submitProfileForm);
placeForm.addEventListener("submit", submitNewPlaceForm);


openProfileEditButton.addEventListener("click",() => {
    inputName.value = userNameElement.textContent;
    inputJob.value = userJobElement.textContent;
    openModal(editProfilePopup);
});

addNewPlacePopupButton.addEventListener("click",() => {
    openModal(addNewPlacePopup);
});




