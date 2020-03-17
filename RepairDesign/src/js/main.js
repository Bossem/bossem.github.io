/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  
  // Функция добавляет класс "modal--visible"
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  // Функция закрывает модальное окно клавишей "Escape"
  const escapeBtn = (event) => {
    if (modal.classList.contains('modal--visible')) {
      if (event.which == 27) {
        switchModal();
      };
    };
  };

  // Функция закрывает модальное окно при клике вне модального окна
  const clickFreeSpace = (e) => {
    if (e.target.classList.contains('modal')) {
      switchModal();
    };
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', escapeBtn);  
  modal.addEventListener('click', clickFreeSpace);
}); */

/*$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });

}); */

$(document).ready(function () {
  let modal = $('.modal');
  let modalBtn = $('[data-toggle=modal]');
  let closeBtn = $('.modal__close');
  let scrollUpBtn = $('.scrollup');

  //Подключение библиотеки анимации
  // new WOW().init();

  modalBtn.click( () => {
    modal.toggleClass('modal--visible');
  });

  closeBtn.click( () => {
    modal.toggleClass('modal--visible');
  });

  $(document).keydown((event) => {
    if (modal.hasClass('modal--visible')) {
      if (event.which == 27) {
        modal.toggleClass('modal--visible');
      };
    };
  });

  modal.click((e) => {
    if (modal.is(e.target) && modal.has(e.target).length === 0) {
      modal.toggleClass('modal--visible');
    };
  });

  $(window).scroll( () => {
    if ($(this).scrollTop() > 150) {
      scrollUpBtn.addClass('scrollup--visible');
      scrollUpBtn.fadeIn();
    } else {
      scrollUpBtn.fadeOut();
      scrollUpBtn.removeClass('scrollup--visible');
    }    
  });

  scrollUpBtn.click( () => {
    $('html').animate({scrollTop : 0}, 900);
});

// Инициализация слайдера "Завершенные проекты"
var mySwiper1 = new Swiper ('.swiper1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Инициализация слайдеров "6 шагов до цели"
var mySwiper2 = new Swiper ('.swiper2', {
  controller: {
    control: [mySwiper3],
  },
    pagination: {
      el: '.pagination-top',
      type: 'fraction',
    },
  });
var mySwiper3 = new Swiper ('.swiper3', {
  controller: {
    control: [mySwiper2],
  },
  pagination: {
    el: '.pagination-bottom',
  },  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

getAllSteps = $('.steps-content__step');
getAllSwipers = $('.swiper2__item');
getPrevClick = $('.swiper2-prev');
getNextClick = $('.swiper2-next');

// Переключение активного разеда по кнопке вперед
getNextClick.click( () => {
  if (mySwiper3.activeIndex === 0) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--1').addClass('active');
  }
  if (mySwiper3.activeIndex === 1) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--2').addClass('active');
  }
  if (mySwiper3.activeIndex === 2) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--3').addClass('active');
  }
  if (mySwiper3.activeIndex === 3) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--4').addClass('active');
  }
  if (mySwiper3.activeIndex === 4) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--5').addClass('active');
  }
  if (mySwiper3.activeIndex === 5) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--6').addClass('active');
  }
});

// Переключение активного разеда по кнопке назад
getPrevClick.click( () => {
  if (mySwiper3.activeIndex === 0) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--1').addClass('active');
  }
  if (mySwiper3.activeIndex === 1) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--2').addClass('active');
  }
  if (mySwiper3.activeIndex === 2) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--3').addClass('active');
  }
  if (mySwiper3.activeIndex === 3) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--4').addClass('active');
  }
  if (mySwiper3.activeIndex === 4) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--5').addClass('active');
  }
  if (mySwiper3.activeIndex === 5) {
    getAllSteps.each(function (indes, element) {
      $(element).removeClass('active');    
    });
    $('.steps-content__step--6').addClass('active');
  }
});

// Переключение слайдеров нажатием на раздел
$('.steps-content__step--1').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--1').addClass('active');
  mySwiper3.slideTo(0, 700); 
});

$('.steps-content__step--2').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--2').addClass('active');
  mySwiper3.slideTo(1, 700); 
});
$('.steps-content__step--3').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--3').addClass('active');
  mySwiper3.slideTo(2, 700); 
});
$('.steps-content__step--4').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--4').addClass('active');
  mySwiper3.slideTo(3, 700); 
});
$('.steps-content__step--5').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--5').addClass('active');
  mySwiper3.slideTo(4, 700); 
});
$('.steps-content__step--6').click( () => {
  getAllSteps.each(function (indes, element) {
    $(element).removeClass('active');    
  });
  $('.steps-content__step--6').addClass('active');
  mySwiper3.slideTo(5, 700); 
});


var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');
next.css('left', prev.width() + 20 + bullets.width() + 20);
bullets.css('left', prev.width() + 20);


var nextSteps = $('.swiper2-next');
var prevSteps = $('.swiper2-prev');
var bulletsSteps = $('.pagination-bottom');
nextSteps.css('left', prevSteps.width() + 20 + bulletsSteps.width() + 20);
bulletsSteps.css('left', prevSteps.width() + 20);




// Запуск анимации при скролле
var documentEl = $(document);

// Анимация секции "Завершенные проекты"
var projects = $('.projects');
var animateProjects = $('.animateProjects');
var startAnimateProjects = projects.offset().top/3;
documentEl.scroll( () => {
  if (documentEl.scrollTop() > startAnimateProjects) {
    animateProjects.addClass('myFadeInUp');
  }
});

// Анимация секции "Онлайн контроль"
var control = $('.control');
var animateControl = $('.animateControl');
var startAnimateControl = control.offset().top/3;
documentEl.scroll( () => {
  if (documentEl.scrollTop() > startAnimateControl) {
    animateControl.addClass('myFadeInUp');
  }
});

// Анимация секции "Виды ремонта"
var types = $('.types');
var animateTypes = $('.animateTypes');
var startAnimateTypes = types.offset().top;
documentEl.scroll( () => {
  if (documentEl.scrollTop() > startAnimateTypes) {
    animateTypes.addClass('myFadeInUp');
  }
});

// Анимация секции "Дизайн проект"
var design = $('.design');
var animateDesign = $('.animateDesign');
var startAnimateDesign = design.offset().top;
documentEl.scroll( () => {
  if (documentEl.scrollTop() > startAnimateDesign) {
    animateDesign.addClass('myFadeInUp');
  }
});

// Анимация секции "6 шагов до цели"
var steps = $('.steps');
var animateSteps = $('.animateSteps');
var startAnimateSteps = steps.offset().top;
documentEl.scroll( () => {
  if (documentEl.scrollTop() > startAnimateSteps) {
    animateSteps.addClass('myFadeInUp');
  }
});

});