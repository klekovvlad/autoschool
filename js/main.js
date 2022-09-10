const menuMobile = document.querySelector('.header__nav');
const menuButton = document.querySelector('.header__logo');
const menuLinks = document.querySelectorAll('.nav__link');

menuButton.addEventListener('click', () => {
    menuMobile.classList.toggle('header__nav-open');
    menuButton.classList.toggle('close');
});

menuLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        menuMobile.classList.toggle('header__nav-open');
        menuButton.classList.toggle('close');
    });
});