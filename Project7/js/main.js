$("ul").on("click", ".header-link", function () {
  $("ul .header-link").removeClass("active"); //удаляем класс во всех вкладках
  $(this).addClass("active"); //добавляем класс текущей (нажатой)
});

$(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });
});


function menuToggle() {
  var nav = document.querySelector('.menu-overlay');
  nav.classList.toggle('active');

  var nav = document.querySelector('.header__menu-btn');
  nav.classList.toggle('active');

  var nav = document.querySelector('.slider-top');
  nav.classList.toggle('active');

  // var nav = document.querySelector('.footer');
  // nav.classList.toggle('active');
}