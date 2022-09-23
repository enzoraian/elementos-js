const allAccordions = document.querySelectorAll('.js-accordion')

allAccordions.forEach((accordion) => {

  accordion.addEventListener('click', () => {
    let pai = accordion.parentElement
    pai.classList.toggle('active')
  })
})