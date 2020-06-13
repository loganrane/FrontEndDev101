/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let headings = document.getElementsByTagName("section");
let navbarList = document.querySelector("#navbar__list");
let mainSection = document.querySelectorAll("main section");
let mainNavLinks = document.querySelectorAll(".menu__link a");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let temp of headings) {
    let list = document.createElement("li");
    let anchorTag = document.createElement("a");

    anchorTag.textContent = temp.dataset.nav;
    anchorTag.setAttribute("href", "#" + temp.id);
    anchorTag.setAttribute("class", "menu__link");
    anchorTag.setAttribute("id", temp.id + "__nav");

    list.appendChild(anchorTag);
    navbarList.insertAdjacentElement("beforeend", list);
}

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let heigthOfSection = mainSection[0].offsetHeight;

    for (let i = 0; i < mainSection.length; i++) {
        mainSection[i].classList.remove("your-active-class");
    }

    let addActiveTo = Math.floor(scrollPos / heigthOfSection);
    mainSection[addActiveTo].classList.add("your-active-class");
});

// Scroll to anchor ID using scrollTO event

// function smoothScroll(targ, duration) {
//     let target = document.querySelector(targ);
//     let targetPosition = target.getBoundingClientRect().top;
//     let startPosition = window.pageYOffset;
//     let distance = targetPosition - startPosition;
//     let startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         let timeElapsed = currentTime - startTime;
//         let run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return (c / 2) * t * t * t * t + b;
//         t -= 2;
//         return (-c / 2) * (t * t * t * t - 2) + b;
//     }
//     requestAnimationFrame(animation);
// }

// // let clickedOn = window.addEventListener("click", function (e) {
// //     this.console.log(e);
// // });
// // console.log(clickedOn);

// let sec3 = document.querySelector("#section3__nav");
// sec3.addEventListener("click", function () {
//     smoothScroll("#section3", 1000);
// });

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
