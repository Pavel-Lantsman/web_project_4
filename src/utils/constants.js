
export const pageSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_active"
};

//popup
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAddCard = document.querySelector('.popup_type_addCard');
export const popupPreviewImage = document.querySelector('.popup_type_image');
export const popupDelete = document.querySelector('.popup_type_delete');
export const popupAvatar = document.querySelector('.popup_type_avatar');

// popup forms
export const editForm = document.querySelector('.popup__form-profile');
export const addCardForm = document.querySelector('.popup__form-addCard');
export const avatarForm = document.querySelector('.popup__form-avatar');


//input data fields in forms
export const inputName = document.querySelector('.popup__input_value_name');
export const inputInfo = document.querySelector('.popup__input_value_about');

//card template
export const cardTemplate = document.querySelector(".card-template").content;

//buttons
export const editButton = document.querySelector('.user__edit-button');
export const addCardButton = document.querySelector('.user__add-button');
export const userAvatarButton = document.querySelector('.user__avatar-wrapper');

//user data
export const userName = document.querySelector('.user__name');
export const userInfo = document.querySelector('.user__info');
export const userAvatar = document.querySelector('.user__avatar');

//card gallery
export const cardGallery = document.querySelector('.gallery');
