// Hamburger menu
const btn = document.querySelector('#hamburger');
const nav = document.querySelector('.nav nav');
const openNav = document.querySelector('.menu-display');
const closeBtn = document.querySelector('.xicon');
const menuOpt = document.querySelectorAll('#items-menus li a');

const toggleMenuDisplay = () => {
  if (nav.style.display !== 'none') {
    nav.style.display = 'none';
    openNav.style.display = 'flex';
  } else {
    nav.style.display = 'grid';
    openNav.style.display = 'none';
  }
};

btn.addEventListener('click', toggleMenuDisplay);
closeBtn.addEventListener('click', toggleMenuDisplay);
menuOpt.forEach((link) => {
  link.addEventListener('click', toggleMenuDisplay);
});
