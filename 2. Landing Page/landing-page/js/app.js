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
let mainNavLinks = document.querySelector("nav ul li a");
let heigthOfSection = 0;
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

    list.appendChild(anchorTag);
    navbarList.insertAdjacentElement("beforeend", list);
}

// Add class 'active' to section when near top of viewport

let scrollPos = window.scrollY;
const addClassOnScroll = function () {};

window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;
    heigthOfSection = mainSection[0].offsetHeight;

    for (let i = 0; i < mainSection.length; i++) {
        mainSection[i].classList.remove("your-active-class");
    }

    let addActiveTo = Math.floor(scrollPos / heigthOfSection);
    mainSection[addActiveTo].classList.add("your-active-class");
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
