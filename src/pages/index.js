
import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
    addCardButton,
    addCardForm,
    avatarForm,
    cardTemplate,
    editButton,
    editForm,
    inputInfo,
    inputName,
    pageSettings,
    userAvatarButton,
    popupProfile,
    popupPreviewImage,
    popupAddCard,
    popupAvatar,
    popupDelete,
    userName,
    userInfo,
    userAvatar,
    cardGallery
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
    renderer: (item) => {
        return createCard({ item });
    }
}, cardGallery);

const userInfoInstance = new UserInfo({ userName: userName, userInfo: userInfo }, userAvatar);


Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
        userInfoInstance.setUserInfo(userData);
        currentUserInfo = userData;
        pageGallery.renderItems(cardData);
    })
    .catch(err => {
        console.log(err);
    });


//functions
function createCard({ item }) {
    const card = new Card({
            item,
            handleCardClick: ({ name, link }) => {
                popupImage.open({ name, link });
            }
        },
        cardTemplate,
        handleDeleteClick, handleLikeClick);
    return card.generateCard(currentUserInfo);
}

function handleAvatarFormSubmit() {
    const data = popupForAvatar.getInputValues();
    api.editProfilePhoto(data.avatar).then(() => {
            userInfoInstance.setUserInfo(data.avatar);
            popupForAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
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
    api.deleteCard(data).then(() => {
            data.removeCard();
            deletePopup.close('Yes');
        })
        .catch((err) => {
            console.log(err);
        })
}

function handleProfileFormSubmit() {
    api.setUserInfo(popupEditProfile.getInputValues())
        .then((res) => {
            userInfoInstance.setUserInfo(res);
            popupEditProfile.close();
        })
        .catch((err) => {
            console.log(err);
        })
}

function handleAddCardFormSubmit() {
    const getValues = popupAddCardForm.getInputValues();
    const data = { name: getValues.title, link: getValues.url };
    api.sendCardData(data)
        .then((item) => {
            pageGallery.addItem(item);
            popupAddCardForm.close();
        })
        .catch((err) => {
            console.log(err);
        })
}


//popup
const popupEditProfile = new PopupWithForm(popupProfile, handleProfileFormSubmit);
popupEditProfile.setEventListeners();

const popupAddCardForm = new PopupWithForm(popupAddCard, handleAddCardFormSubmit);
popupAddCardForm.setEventListeners();

const popupImage = new PopupWithImage(popupPreviewImage);
popupImage.setEventListeners();

const deletePopup = new PopupWithForm(popupDelete, handleDeleteCardFormSubmit);
deletePopup.setEventListeners();

const popupForAvatar = new PopupWithForm(popupAvatar, handleAvatarFormSubmit);
popupForAvatar.setEventListeners();


// validators
const popupAddCardValid = new FormValidator(pageSettings, addCardForm);
popupAddCardValid.enableValidation();

const popupProfileValid = new FormValidator(pageSettings, editForm);
popupProfileValid.enableValidation();

const avatarPopupValid = new FormValidator(pageSettings, avatarForm);
avatarPopupValid.enableValidation();


//event listeners
editButton.addEventListener('click', () => {
    popupProfileValid.resetValidation();
    popupEditProfile.open();
    const userActualInfo = userInfoInstance.getUserInfo();
    inputName.value = userActualInfo.name;
    inputInfo.value = userActualInfo.about;
});

addCardButton.addEventListener('click', () => {
    popupAddCardValid.resetValidation();
    popupAddCardForm.open();
});

userAvatarButton.addEventListener('click', () => {
    avatarPopupValid.resetValidation();
    popupForAvatar.open();
});