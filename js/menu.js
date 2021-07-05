const dropMenu = document.querySelector('#drop')
const dropMenuLink = document.querySelectorAll('.nav-list__link')
const open = () => {
    dropMenu.classList.toggle('open')
}

dropMenu.addEventListener('click', open)

dropMenuLink.forEach(link => {
    link.addEventListener('click', open)
})