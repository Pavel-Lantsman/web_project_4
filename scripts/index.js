const openButton = document.querySelector('.profile__edit-button')
const closeButton = document.querySelector('.modal__close-button')

const modal = document.querySelector('.modal')
const form = document.querySelector('.form')

const inputName = document.querySelector('.form__input_type_name')
const inputJob = document.querySelector('.form__input_type_job')

const userNameElement = document.querySelector('.profile__name')
const userJobElement = document.querySelector('.profile__title')


function visibilityModal() {
    modalDefaultInfo()
    modal.classList.toggle('modal_opened')
}


function modalDefaultInfo() {
    inputName.value = userNameElement.textContent
    inputJob.value = userJobElement.textContent
}

function handleSubmit(e) {
    e.preventDefault();
    const nameValue = inputName.value
    const jobValue = inputJob.value
    userNameElement.textContent = nameValue
    userJobElement.textContent = jobValue
    visibilityModal()
}

form.addEventListener('submit', handleSubmit);
openButton.addEventListener('click', visibilityModal)
closeButton.addEventListener('click', visibilityModal)
