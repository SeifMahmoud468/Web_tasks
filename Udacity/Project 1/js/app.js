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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
let addList = document.createDocumentFragment();
const navMain = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * function that reture boolean to determin if the element is
 * in view port or not.
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -25 &&
        rect.bottom <= 1200
    );
}

/**
 * function for buildup the navbar by looping on all the 
 * section that detected by the sections variable that use 
 * querySelectorAll() method.
*/
function buildNav() {
    for (let i = 0; i < sections.length; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = sections[i].getAttribute('data-nav');
        addList.appendChild(newItem);
    }
    navBar.appendChild(addList);
}

/**
 * Function that is used for removing active class from the 
 * give element to is  attribute.  
 */
function removeSelection(anchors) {
    anchors.forEach(element => {
        element.classList.remove("active");
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
buildNav();

// Add class 'active' to section when near top of viewport
/**
 * function for adding and removing the class 
 * "your-active-class" from the given element in the attibute 
 * that is pass to it. 
 */
function addActive(section) {
    section.classList.add("your-active-class");
}
function removeActive(section) {
    section.classList.remove("your-active-class");
}

// Scroll to anchor ID using scrollTO event
function scrollTO(event, i) {
    event.preventDefault();
    sections[i].scrollIntoView({
        behavior: 'smooth'
    });
    removeSelection(anchors);
    anchors[i].classList.add("active");
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
const anchors = document.querySelectorAll("#navbar__list li");
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
        scrollTO(event, i)
    });
}

// Set sections as active
document.addEventListener("scroll", function () {
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i])) {
            addActive(sections[i]);
            anchors[i].classList.add("active");
        } else {
            removeActive(sections[i]);
            anchors[i].classList.remove("active");
        }
    }
});
