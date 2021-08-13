$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.detalis-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.detalis-tabs__top-item').removeClass('detalis-tabs__top-item--active');
    $(this).addClass('detalis-tabs__top-item--active');

    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');
  });

  $('.product-filter__button').on('click', function () {
    $('.product-filter').slideToggle();
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true
  });

  $('.detalis-slide__min').slick({
    asNavFor: '.detalis-slide__max',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    draggable: false
  });

  $('.detalis-slide__max').slick({
    asNavFor: '.detalis-slide__min',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.related__slider').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/slider-arrow-left.svg"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/slider-arrow-right.svg"></button>',
     responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 867,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
  });

  $('.detalis-one__item-num').styler();

  $('.filter-star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px"
  });

  $('.star').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px"
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

