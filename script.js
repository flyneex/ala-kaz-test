const menuBtn = document.querySelector('.menubar'),
      menuSide = document.querySelector('.mobile-menu'),
      crossBtn = document.querySelector('.mobile-cross')
      // crossBtn = window.getComputedStyle(elementCross, ':after')

menuBtn.addEventListener('click', asideMenu)
function asideMenu() {
  menuSide.classList.toggle('active-menu')
}

crossBtn.addEventListener('click', function() {
  menuSide.classList.remove('active-menu')
})

document.addEventListener('mouseup', e => {
  if (!menuSide.contains(e.target)) {
    menuSide.classList.remove('active-menu')
  }
})

$(".phone_mask").mask("+7 (999) 999-99-99");

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 140) {
    document.querySelector('header').classList.add('fixed_stick')
  } else {
    document.querySelector('header').classList.remove('fixed_stick')
  }
})

const swiper = new Swiper('.swiper-testimonials', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: 530,
      depth: 80,
      scale: 1,
      modifier: 1,
      slideShadows: false,
    },
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    // delay: 3000
    // },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiper1 = new Swiper('.swiper-partners', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 7,
    spaceBetween: 15,
    autoplay: {
    delay: 3000
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    pagination: {
      el: '.swiper-pagination',
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
 