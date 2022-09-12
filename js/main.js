const menuMobile = document.querySelector('.header__nav');
const menuButton = document.querySelector('.mobile__button');
const menuLinks = document.querySelectorAll('.nav__link');

function buttonAnimate() {
    menuButton.childNodes[3].classList.toggle('out');
    menuButton.childNodes[1].classList.toggle('topline');
    menuButton.childNodes[5].classList.toggle('bottomline');
    menuButton.classList.toggle('fixed');
    menuMobile.classList.toggle('mobile__menu-open');
}

menuButton.addEventListener('click', () => {
    buttonAnimate();
})

menuLinks.forEach(elem => {
    elem.addEventListener('click', () => {
      buttonAnimate();
    });
});

const faqQuestion = document.querySelectorAll('.faq__question');

faqQuestion.forEach(question => {
    question.addEventListener('click', () => {
        question.childNodes[5].classList.toggle('faq__answer-open');
        question.childNodes[3].classList.toggle('arrow-open');
    })
});

const header = document.querySelector('.header');
const main = document.querySelector('.main');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let scrollPosition = 100;
  
  if(document.body.scrollTop > scrollPosition || document.documentElement.scrollTop > scrollPosition) {
    header.classList.add('header-fixed');
    main.classList.add('main-top');
  };
};

$('.feedback__slider').slick({
    infinite: false,
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
