export default function menuMobile() {
  const menuMobile = document.querySelector('.menu-mobile');
  const menuBurger = document.querySelector('.menu-burger');
  const contents = document.querySelector('section');
  
  function showMenu(event) {
    menuMobile.classList.toggle('show');
    contents.classList.toggle('hide');
  }

  menuBurger.addEventListener('click', showMenu);
  menuBurger.addEventListener('change', changeButtonBurger);
  AOS.init();
}