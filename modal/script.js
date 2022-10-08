const btnOpenModal = document.querySelector('.js-open-modal')
const btnCloseModal = document.querySelector('.js-close-modal')
const modal = document.querySelector('.modal')

function openModal() {
  modal.classList.add('active')
}
btnOpenModal.addEventListener('click', openModal)


function closeModal() {
  modal.classList.remove('active')
}
btnCloseModal.addEventListener('click', closeModal)
