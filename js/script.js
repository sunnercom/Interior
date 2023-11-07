var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-one",
    prevEl: ".prev-one",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    }
  }
});

var swiper = new Swiper(".mySwiper-two", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-two",
    prevEl: ".prev-two",
  },
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    }
  }
});