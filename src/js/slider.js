const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
        },
  },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  
});