// ---- Animate H1 ----
const animate_head = document.querySelector('h1')
const header = document.querySelector('header')

header.addEventListener('mouseover',()=>{
    animate_head.classList.toggle('animate__shakeX')
})

// ---- Search -----
const btn_search = document.querySelector('.btn_search')
const bar_search = document.querySelector('.bar_search')

btn_search.addEventListener('click',()=>{
    bar_search.classList.toggle('active')
    btn_search.classList.toggle('bx-x')
})

// ----- Login -----

const btn_user = document.querySelector('.btn_user')
const login = document.querySelector('.login_user')

btn_user.addEventListener('click',()=>{
    login.classList.toggle('active')
    btn_user.classList.toggle('bx-x')
})

//---- menu nav mobile -----

const btn_menu = document.querySelector('.btn_menu')
const nav = document.querySelector('nav')

btn_menu.addEventListener('click',()=>{
  nav.classList.toggle('active')
})


// Se eliminan al scrollear
window.onscroll = () =>{
    login.classList.remove('active');
    bar_search.classList.remove('active');
    nav.classList.remove('active')
    // carrito_compras.classList.remove('active');
}

// Swiper Review
var swiper = new Swiper(".mySwiperReview", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      // when window width is >= 480px
      420: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  });

// Swiper adds
var swiper = new Swiper(".mySwiperAdds", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    420: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});  



// const btn_menu = documento.querySelector('btn_menu')
