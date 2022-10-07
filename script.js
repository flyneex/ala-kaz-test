const swiper = new Swiper('.swiper-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper1 = new Swiper('.swiper-partners', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 7,
    spaceBetween: 15,
    autoplay: {
        delay: 3000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1680: {
            slidesPerView: 7,
            spaceBetween: 15,
        }
      },
  });
 