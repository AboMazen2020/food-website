
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

// Start login form

let form = document.querySelector("#login-user");

    form.onclick =  () => {
        document.querySelector("#login-form").classList.toggle("active");
 }

 let closed = document.querySelector("#close-form");

 closed.onclick = () => {

    document.querySelector("#login-form").classList.remove("active");
 }




// End login form


// Start scroll top
let span = document.querySelector(".up");

window.onscroll = function () {

     if (this.scrollY >= 1000) {
      span.classList.add("show");
     }else {
         span.classList.remove("show");
     }

   // this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
}

span.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};