//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItens = document.querySelectorAll('.nav-items');
//set Initial State of Menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuBtn.classList.add('show');
        menuBtn.classList.add('show');
        menuBtn.classList.add('show');
        navItens.forEach(item => item.classList.add('show'));
        // set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuBtn.classList.remove('show');
        menuBtn.classList.remove('show');
        menuBtn.classList.remove('show');
        navItens.forEach(item => item.classList.remove('show'));
        // set Menu State
        showMenu = false;
    }
}