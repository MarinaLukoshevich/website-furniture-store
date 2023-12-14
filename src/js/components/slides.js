// CATALOG
let catalogSwiper = new Swiper('.catalog-swiper', {
  // direction: 'horizontal', // без изменений
  // slideClass: 'catalog__slide', // без изменений
  grabCursor: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 32,

  grid: {
    rows: 3,
    fill: 'row',
  },

  pagination: {
    el: ".catalog__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
})




// OFFERS
let offersSwiper = new Swiper('.offers-swiper', {
  grabCursor: true,
  spaceBetween: 32,

  // доступность
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  // управлять с клавиатуры стрелками
  keyboard: {
    enabled: true,
  },

  mousewheel: {
    sensitivity: 10, // чувствительность колеса мыши
    eventsTarget: '.offers-swiper', // класс обьекта, на котором сработает событие прокрутки мыши
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    321: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    769: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
    },
  },
})
// на разрешении 320px - 0px отключить свайпер
window.matchMedia('(min-width: 321px)').matches || offersSwiper.disable();





// USEFUL
let usefulSwiper = new Swiper('.useful-swiper', {
  grabCursor: true,
  spaceBetween: 32,
  slidesPerGroup: 1,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    sensitivity: 10,
    eventsTarget: '.useful-swiper',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    321: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 2,
    },
  },
})
window.matchMedia('(min-width: 321px)').matches || usefulSwiper.disable();









