const swiper = new Swiper('.swiper .swiper-container', {
    direction: 'horizontal',
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true
        },
    
    initialSlide: 0,
    speed: 400,
    spaceBetween: 100,
});