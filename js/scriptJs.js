
// Start header

let menu = document.querySelector("#menu-bars");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    nav.classList.remove("active");
}

// End header

// Start Search
let search = document.querySelector("#search-icon");

    search.onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
}

let close = document.querySelector("#close");

    close.onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}

// End Search

// Start slider

    

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
    loop:true,
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  


// End slider