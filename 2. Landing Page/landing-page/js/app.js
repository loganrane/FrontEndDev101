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
let headings = document.getElementsByTagName("section");
let navbarList = document.querySelector("#navbar__list");
for (let temp of headings) {
    let list = document.createElement("li");
    list.setAttribute("class", "menu__link");
    let anchorTag = document.createElement("a");
    anchorTag.textContent = temp.dataset.nav;
    anchorTag.setAttribute("href", "#" + temp.id);
    list.appendChild(anchorTag);
    // let appendToNavbar;

    navbarList.insertAdjacentElement("beforeend", list);
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
