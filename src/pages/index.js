import "./index.css";

import initialCards from "../utils/initialCards.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  editProfilePopup,
  addNewPlacePopup,
  previewImagePopup,
  placeForm,
  profileForm,
  userNameElement,
  userJobElement,
  inputName,
  inputJob,
  openProfileEditButton,
  addNewPlacePopupButton,
  placesList,
  placeTemplate,
  fieldset,
} from "../utils/constants.js";


const elementsList = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  placeTemplate
);

function renderCard(data) {
  const card = new Card(data, placeTemplate, handleImagePreview);
  placesList.prepend(card.render());
}

function handleImagePreview(link, name) {
  previewImage.open(link, name);
}

elementsList.renderer();


const previewImage = new PopupWithImage(previewImagePopup);
previewImage.setEventListeners();


const addPlacePopup = new PopupWithForm(addNewPlacePopup, submitNewPlaceForm);
addPlacePopup.setEventListeners();

function submitNewPlaceForm(data) {
  const place =  { name: data.place, link: data.link };

  renderCard(place);
  elementsList.addItem(place);
  addPlacePopup.close();
  placeFormValidator.disableSubmitButton();
}


const userInfo = new UserInfo({
  userNameElement: userNameElement,
  userJobElement: userJobElement,
});

const profileModal = new PopupWithForm(editProfilePopup, submitProfileForm);
profileModal.setEventListeners();

function submitProfileForm(data) {
  userInfo.setUserInfo(
    { inputName: data.name, inputJob: data.job }
  );
  profileModal.close();
  profileFormValidator.disableSubmitButton();
}

function currentProfileName() {
  const inputData = userInfo.getUserInfo();
  inputName.value = inputData.name;
  inputJob.value = inputData.job;
}

const placeFormValidator = new FormValidator(fieldset, placeForm);
placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(fieldset, profileForm);
profileFormValidator.enableValidation();


openProfileEditButton.addEventListener("click", () => {
  currentProfileName();
  profileModal.open();

});

addNewPlacePopupButton.addEventListener("click", () => {
  addPlacePopup.open();
});