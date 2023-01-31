let navbar = document.querySelector('.all-navbar');
let menuClr = document.querySelector('a')

window.onscroll = () => {

    if (window.scrollY > 50) {
        navbar.classList.add("fixed-nav");
        menuClr.classList.add("links-clr")
    }
    else {
       navbar.classList.remove("fixed-nav");
       menuClr.classList.remove("links-clr")
    }
}

// const menuClr = document.querySelector('.links');

// window.addEventListener("scroll", function () {
//     menuClr.classList.add("links-clr", window.scrollY > 50);
// });
