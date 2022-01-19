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

const modalImageCaption = previewImage.querySelector(".modal__image-caption");
const modalImageContainer = previewImage.querySelector(".modal__image-container");


function createPlaceElement(data) {
    const place = placeTemplate.cloneNode(true);
    const cardImage = place.querySelector(".elements__image");
    place.querySelector(".elements__text").textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;

    place.querySelector(".elements__heart").addEventListener("click", (evt) => {
        evt.target.classList.toggle("elements__heart_active");
    });

    place.querySelector(".elements__trash").addEventListener("click", () => {
        place.remove();
    });

    cardImage.addEventListener("click", () => {
        modalImageCaption.textContent = data.name;
        modalImageContainer.src = data.link;
        toggleModal(previewImage);
    });
    return place;
}


initialCards.reverse().forEach((initialCardData) => {
    placeList.prepend(createPlaceElement(initialCardData));
});

function submitProfileForm(e) {
    e.preventDefault();
    userNameElement.textContent = inputName.value;
    userJobElement.textContent = inputJob.value;
    toggleModal(editProfilePopup)
}

function submitNewPlaceForm(e) {
    e.preventDefault();
    const insertPlace = createPlaceElement({
        name: inputPlace.value,
        link: inputLink.value,
    });
    placeList.prepend(insertPlace);
    toggleModal(addNewPlacePopup);
}

function toggleModal(popup) {
    popup.classList.toggle('modal_opened');
}

function modalDefaultInfo() {
    inputName.value = userNameElement.textContent;
    inputJob.value = userJobElement.textContent;
    inputPlace.value = "";
    inputLink.value = "";
}

const closeAllBtns = document.querySelectorAll(".modal__close-button");
closeAllBtns.forEach(btn => btn.addEventListener('click', (evt) => {
    toggleModal(evt.target.closest('.modal'))
}));


profileForm.addEventListener("submit", submitProfileForm);
placeForm.addEventListener("submit", submitNewPlaceForm);

openProfileEditButton.addEventListener("click",() => modalDefaultInfo());
openProfileEditButton.addEventListener("click",() => toggleModal(editProfilePopup));

addNewPlacePopupButton.addEventListener("click",() => modalDefaultInfo());
addNewPlacePopupButton.addEventListener("click",() => toggleModal(addNewPlacePopup));


