var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    dragSize : 50,
  },
  autoplay:{
    delay : 4000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween : 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});