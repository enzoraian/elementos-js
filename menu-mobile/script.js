const header = document.querySelector('.header')
const btnMobile = document.querySelector('.btn-mobile')


function toggleMenu() {
  header.classList.toggle('nav-open')
}

btnMobile.addEventListener('click', toggleMenu)
