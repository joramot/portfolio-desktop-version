// Hamburger menu
const btn = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.topnav nav');
const openNav = document.querySelector('.menu-display');
const closeBtn = document.querySelector('.xicon');
const menuOpt = document.querySelectorAll('#menu-options a');

// // Hamburger menu
// const btn = document.querySelector('#icon-hmenu');
// const nav = document.querySelector('.navigator nav');
// const openNav = document.querySelector('.compactMenu');
// const closeBtn = document.querySelector('.xicon');
// const menuOpt = document.querySelectorAll('#menu-options a');

// const toggleMenuDisplay = () => {
//   if (nav.style.display !== 'none') {
//     nav.style.display = 'none';
//     openNav.style.display = 'flex';
//   } else {
//     nav.style.display = 'grid';
//     openNav.style.display = 'none';
//   }
// };

// btn.addEventListener('click', toggleMenuDisplay);
// closeBtn.addEventListener('click', toggleMenuDisplay);
// menuOpt.forEach((link) => {
//   link.addEventListener('click', toggleMenuDisplay);
// });

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
const xBtn = document.querySelector('.xicon');
const navLinks = document.querySelectorAll('.mobile-menu-link');

function openMenu() {
  menu.style.opacity = '100%';
}

function closeMenu() {
  menu.style.display = '0%';
}

menuBtn.addEventListener('click', openMenu);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeMenu);
}

xBtn.addEventListener('click', closeMenu);
