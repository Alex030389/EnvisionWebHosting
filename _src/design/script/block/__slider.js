//////////////////////////////////////////// slider
(() => {

  // reviews swiper
  if (document.querySelector('[data-reviews-swiper]')) {
    const reviewsSwiper = new Swiper('[data-reviews-swiper]', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: '.reviews__swiper-btn-next',
        prevEl: '.reviews__swiper-btn-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 1,
        }
      }
    });
  }

})();
