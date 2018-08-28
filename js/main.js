let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-visible');


});