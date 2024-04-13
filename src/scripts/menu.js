window.onload = function () {

    const mobileMenu = document.querySelector('.mobile-menu');
    const navigationMenu = document.querySelector('.nav');

    mobileMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle("show-nav");
});

}


   