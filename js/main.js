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

const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach(question => {
    question.addEventListener('click', () => {
        question.childNodes[3].classList.toggle('faq__answer-open');
        question.childNodes[1].classList.toggle('arrow-open');
    })
})

$('.feedback__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });