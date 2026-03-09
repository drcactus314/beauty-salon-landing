const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
    breakpoints: {
    670: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.pagination',
    bulletClass:'pagination__button',
    bulletActiveClass:'pagination__button--active',
  },

  navigation: {
    nextEl: '.services-section__button.next',
    prevEl: '.services-section__button.prev',
  },
});
