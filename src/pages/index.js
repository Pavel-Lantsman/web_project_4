import "./index.css";


import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  initialCards,
  editProfilePopup,
  addNewPlacePopup,
  previewImagePopup,
  placeForm,
  profileForm,
  avatarForm,
  userNameElement,
  userJobElement,
  inputName,
  inputJob,
  openProfileEditButton,
  addNewPlacePopupButton,
  placesList,
  placeTemplate,
  fieldset,
  userAvatarElement,
  deleteCard,
  submitCard,
  submitInfo,
  submitAvatar,
  avatarPopup, userName, userInfo, userAvatar
} from "../utils/constants.js";

let currentUserInfo = {};

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "5204ef9a-1e82-4858-b856-dcc259ab4642",
    "Content-Type": "application/json"
  }
});

const pageGallery = new Section({
    items: [],
    renderer: (item) => {
        return createCard({ item });
    }
}, placesList);

const userInfoInstance = new UserInfo({
  userName: userName,
  userInfo: userInfo},
    userAvatar);

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
      userInfoInstance.setUserInfo(userData);
      userInfoInstance.setUserAvatar(userData.avatar);
      currentUserInfo = userData;
      pageGallery.renderItems(cardData);
    })
    .catch(err => {
      console.log(err);
    });

function createCard({ item }) {
    const card = new Card({
            item,
            handleCardClick: ({ name, link }) => {
                popupImage.open({ name, link });
            }
        },
        placeTemplate,
        handleDeleteClick, handleLikeClick);
    const cardElement = card.generateCard(currentUserInfo);
    return cardElement;
}

function handleLikeClick(data, isLiked) {
    if (isLiked) {
        api.likeDelete(data)
            .then((res) => {
                data.updateLike(res);
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        api.likeAdd(data)
            .then((res) => {
                data.updateLike(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


function handleDeleteClick(data) {
    deletePopup.openWithData(data);
}

function handleDeleteCardFormSubmit(data) {
    api.deleteCard(data).then((res) => {
        data.removeCard();
        deletePopup.close('Yes');
    })
        .catch((err) => {
            console.log(err);
        })
}

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const deletePopup = new PopupWithForm('.popup_type_delete', handleDeleteCardFormSubmit);
deletePopup.setEventListeners();




