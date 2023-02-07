const swiperLoop = new Swiper(
  "#banner .swiper, #testimonials .swiper, .m-client .swiper, #client .swiper, #people .swiper",
  {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  }
);

const swiper = new Swiper(".m-category.swiper, #vision .swiper", {
  direction: "horizontal",
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
