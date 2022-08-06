const hamburger = document.querySelector('[data-button]');
const nav = document.querySelector('[data-nav]');
const closeBtn = document.querySelector('[data-close]');


hamburger.addEventListener('click', () => {
    nav.classList.add('baby');
})
closeBtn.addEventListener('click', () => {
    nav.classList.remove('baby');
})