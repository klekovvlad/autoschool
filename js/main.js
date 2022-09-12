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

const popupButton = document.querySelectorAll('.modal');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');
const popupClose = document.querySelector('.popup__close');

popupButton.forEach(openPopup => {
    openPopup.addEventListener('click', () => {
      popup.classList.toggle('popup-open');
      popupBody.classList.toggle('popup__body-open');
    })
});
popupClose.addEventListener('click', () => {
  popup.classList.toggle('popup-open');
  popupBody.classList.toggle('popup__body-open');
})

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

jQuery(function($){
  $("#phone").mask("+7 (999) 999-99-99");
});

jQuery(document).ready(function($) {

  $(".form").submit(function() {
  var str = $(this).serialize();
    $.ajax({
    type: "POST",
    url: "/contact.php",
    data: str,
    success: function(msg) {
    if(msg == 'OK') {
    result = '<b style="display: block; text-align: center; font-size: 18px; font-family: Inter-Bold">Спасибо</b><br><span style="display: block; margin: 10px auto; text-align: center; font-size: 1em;">Ожидайте звонка менеджера</span>';
    $(".fields").hide();
    } else {
    result = msg;
    }
    $('.note').html(result);
    }
    });
    return false;
    });
});