const card = document.querySelector('.card')
const btnSci = document.querySelector('.btn__sci')

console.log(btnSci)

btnSci.addEventListener('click', function () {
  card.classList.toggle('active')
})
