//variables
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

//set bar to deactive by deault
navbar.classList.toggle('active')
list = [];

function applyComment(){
    let element = document.getElementById("commentsArea");
    let commentValue = document.getElementById("comment").value;
    let nameValue = document.getElementById("name-anime").value;
    let i;
    let node;
    let elementCreated;
    list.push(commentValue);
    element.innerHTML = "";
    for(i = 0; i < list.length; i++){
        elementCreated = document.createElement("h2");
        node = document.createTextNode("Comment from the user " + nameValue);
        elementCreated.appendChild(node);
        element.appendChild(elementCreated);

        elementCreated = document.createElement("h3");
        node = document.createTextNode("Comment: " + list[i]);
        elementCreated.appendChild(node);
        element.appendChild(elementCreated);
    }
}

function saveData() {
    /*var data = "data to save";
    var blob = new Blob([data], {type: "text/plain"});
    saveAs(blob, "../data/filename.txt");*/
}


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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

var swiper = new Swiper('.season-slider', {
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

var nextButton = swiper.navigation.nextEl;
var prevButton = swiper.navigation.prevEl;

nextButton.addEventListener('click', function() {
    swiper.slideNext();
});

prevButton.addEventListener('click', function() {
    swiper.slidePrev();
});
