var swiper = new Swiper(".mySwiper", {  
  effect: "coverflow",  
  grabCursor: true,  
  centeredSlides: true,  
  slidesPerView: "auto",  
  coverflowEffect: {  
      rotate: 15,  
      stretch: 0,  
      depth: 300,  
      modifier: 1,  
      slideShadows: true,  
  },  
  loop: true,  
});

// Inicialización del swiper para las películas destacadas
var swiperFeatured = new Swiper(".mySwiperFeatured", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
});
