const card = document.querySelector('.card')
const btnSci = document.querySelector('.btn__sci')

console.log(btnSci)

btnSci.addEventListener('click', function () {
  card.classList.toggle('active')
  if (card.classList.contains('active')) {
    btnSci.setAttribute('aria-expanded', 'true')
  } else {
    btnSci.setAttribute('aria-expanded', 'false')
  }
})
