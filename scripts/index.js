const openButton = document.querySelector('.profile__edit-button')
const closeButton = document.querySelector('.modal__close-button')

const modal = document.querySelector('.modal')
const form = document.querySelector('.form')

const inputName = document.querySelector('.form__input_type_name')
const inputJob = document.querySelector('.form__input_type_job')

const userNameElement = document.querySelector('.profile__name')
const userJobElement = document.querySelector('.profile__title')


function closeModal() {
    modal.classList.remove('modal_opened')
}

function openModal() {
    const userName = userNameElement.textContent
    const userJob = userJobElement.textContent
    inputName.value = userName
    inputJob.value = userJob
    modal.classList.add('modal_opened')
}

function handleSubmit(e) {
    e.preventDefault();
    const nameValue = inputName.value
    const jobValue = inputJob.value
    userNameElement.textContent = nameValue
    userJobElement.textContent = jobValue
    closeModal()
}

form.addEventListener('submit', handleSubmit);
openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)