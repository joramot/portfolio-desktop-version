// Hamburger menu
const btn = document.querySelector('#icon-hmenu');
const nav = document.querySelector('.navigator nav');
const openNav = document.querySelector('.compactMenu');
const closeBtn = document.querySelector('.xicon');
const menuOpt = document.querySelectorAll('#menu-options a');

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
