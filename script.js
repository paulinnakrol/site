
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('nav li a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')

    navLinks.forEach((item) => item.addEventListener('click', () => {
        nav.classList.remove('active')
    }))
})

