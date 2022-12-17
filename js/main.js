//variables
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

//set bar to deactive by deault
navbar.classList.toggle('active')

//when clicked on the three bars(on mobile), activate the navbar
menu.onclick = () => {
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        320: {
         slidesPerView: 2,
         spaceBetween: 20
        },
        580: {
         slidesPerView: 3,
         spaceBetween: 30
        },
        740: {
         slidesPerView: 4,
         spaceBetween: 40
        }
       },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
});

var swiper = new Swiper(".season-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        320: {
         slidesPerView: 2,
         spaceBetween: 20
        },
        580: {
         slidesPerView: 3,
         spaceBetween: 30
        },
        740: {
         slidesPerView: 4,
         spaceBetween: 40
        }
       },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
});

var swiper = new Swiper(".recommendation-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        320: {
         slidesPerView: 2,
         spaceBetween: 20
        },
        580: {
         slidesPerView: 3,
         spaceBetween: 30
        },
        740: {
         slidesPerView: 4,
         spaceBetween: 40
        }
       },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
});
