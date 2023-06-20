var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
      pagination: {
        el: ".swiper-pagination-p",
        clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });