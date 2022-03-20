// wrapper modals
export const editProfilePopup = document.querySelector(".modal_type_edit-profile");
export const addNewPlacePopup = document.querySelector(".modal_type_add-place");
export const previewImagePopup = document.querySelector(".modal_type_preview-image");
export const avatarPopup = document.querySelector(".modal_type_edit-avatar");

// wrapper forms
export const placeForm = document.querySelector(".form-add-place");
export const profileForm = document.querySelector(".form-profile");
export const avatarForm = document.querySelector(".form_type_edit-avatar");



// profile name,info, avatar:
export const userName = document.querySelector(".profile__name");
export const userInfo = document.querySelector(".profile__title");
export const userAvatar = document.querySelector(".profile__avatar");


// input data fields in forms
export const inputName = document.querySelector(".form__input_type_name");
export const inputJob = document.querySelector(".form__input_type_job");

// buttons
export const openProfileEditButton = document.querySelector(".profile__edit-button");
export const addNewPlacePopupButton = document.querySelector(".profile__add-button");
export const submitCard = placeForm.querySelector(".form__button");
export const submitInfo = profileForm.querySelector(".form__button");
export const submitAvatar = avatarForm.querySelector(".form__button");



// place - elements - template
export const placesList = document.querySelector(".elements__list");
export const placeTemplate = document.querySelector(".elements-template").content;


const imageModal = document.querySelector('.modal_type_image');
export const deleteCard = document.querySelector(".modal_type_delete");


export const fieldset = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

export const initialCards = [];



