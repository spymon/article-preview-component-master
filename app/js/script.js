const btnBx = document.querySelector('.btnBx')
const btnSci = document.querySelector('.btn__sci')

console.log(btnSci)

btnSci.addEventListener('click', function () {
  btnBx.classList.toggle('active')
})
