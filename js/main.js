const menuMobile = document.querySelector('.header__nav');
const menuButton = document.querySelector('.mobile__button');
const menuLinks = document.querySelectorAll('.nav__link');


menuButton.addEventListener('click', () => {
    menuButton.childNodes[3].classList.toggle('out');
    menuButton.childNodes[1].classList.toggle('topline');
    menuButton.childNodes[5].classList.toggle('bottomline');
    menuButton.classList.toggle('fixed');
    menuMobile.classList.toggle('mobile__menu-open');
})


menuLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        menuMobile.classList.toggle('mobile__menu-open');
        menuButton.childNodes[3].classList.toggle('out');
        menuButton.childNodes[1].classList.toggle('topline');
        menuButton.childNodes[5].classList.toggle('bottomline');
        menuButton.classList.toggle('fixed');
    });
});