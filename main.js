const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelector('.site-navbar a');

allEventListener();

function allEventListener() {
    navToggler.addEventListener('click', togglerClick);

    //=>: This is an arrow function notation, which is a concise way to define a function. 
    //It's used here to define an anonymous function that will be executed for each element in the navLinks collection.

    //element.addEventListener('click', navLinkClick): This line of code is the body of the anonymous function. 
    //It attaches an event listener to each elem (navigation link) by calling the addEventListener method on it. 
    //The event being listened for is the "click" event, and the event listener is a function named navLinkClick 
    //(presumably defined elsewhere in your code).
    navLinks.forEach( element => element.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}
function navLinkClick() {
    if(navMenu.classList.contain('open')) {
        navToggler.click();
    }
}