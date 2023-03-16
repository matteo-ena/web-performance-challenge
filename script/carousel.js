setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}, 1000);