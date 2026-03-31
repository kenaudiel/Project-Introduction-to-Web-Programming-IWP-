const menuButton = document.querySelector('.navbar__menu');
const navbarMobile = document.querySelector('.navbar__mobile__div');

menuButton.addEventListener('click', () => {
    navbarMobile.classList.toggle('active');
});