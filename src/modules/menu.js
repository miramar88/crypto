const headerNavBtn = document.querySelector('.header__menu-button');
const navigationMenu = document.querySelector('.header__nav');

headerNavBtn.addEventListener('click', () => {
  navigationMenu.classList.toggle('header__nav--open');
})