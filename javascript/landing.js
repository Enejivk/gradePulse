const menu = document.getElementById('toggle-nav')
const menuButton = document.getElementById('menu-btn')
const closeButton = document.getElementById('close-Btn')
console.log(closeButton);


const toggleButton = () => {
  menu.classList.toggle('toggle-nav')
}
menuButton.addEventListener('click', toggleButton)
closeButton.addEventListener('click', toggleButton)
