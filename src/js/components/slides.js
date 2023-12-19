// SWIPERS: OFFERS & USEFUL
let commonProperties = {
  grabCursor: true,
  spaceBetween: 32,

  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
}


// OFFERS
let offersSwiper = new Swiper('.offers-swiper', {
  ...commonProperties, // объеденили объекты

  mousewheel: {
    sensitivity: 10, // чувствительность колеса мыши
    eventsTarget: '.offers-swiper', // класс обьекта, на котором сработает событие прокрутки мыши
  },
  breakpoints: {
    651: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1001: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
    },
  },
})


// USEFUL
let usefulSwiper = new Swiper('.useful-swiper', {
  ...commonProperties,
  slidesPerGroup: 1,

  mousewheel: {
    sensitivity: 10,
    eventsTarget: '.useful-swiper',
  },

  breakpoints: {
    651: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 2,
    },
  },
})


if(window.matchMedia('(max-width: 651px)').matches) { // (matches вернет true, если состояние документа 0-650px)
  offersSwiper.destroy(); // 0-650px свайпер не работает
  usefulSwiper.destroy();
}


