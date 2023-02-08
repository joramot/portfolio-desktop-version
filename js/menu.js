// Dropdown Menu
const btncls = document.querySelector('#closeOnClick');
const btnopn = document.querySelector('#openOnClick');
const menuOpt = document.querySelector('.overlay-content a')

const btnOpnNav = () => {
  document.getElementById("myNav").style.height = "100%";
}

const btncloseNav = () => {
  document.getElementById("myNav").style.height = "0%";
}

btnopn.addEventListener('click', btnOpnNav);
btncls.addEventListener('click', btncloseNav);
menuOpt.forEach((link) => {
  link.addEventListener('click', btncloseNav);
});