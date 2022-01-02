document.querySelector(".button").addEventListener("click", ()=>{
    document.querySelector(".nav-menu").classList.toggle("show")
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.event-cards', {delay: 500});
ScrollReveal().reveal('.banner-one', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});
