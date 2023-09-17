document.onload= screenSize()

function screenSize(){
  let width = window.innerWidth;
  let count = 3;

  if (width <=576) {
    count = 2;
  }
  
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
    slidesPerView: count,
    spaceBetween : 18,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


};
