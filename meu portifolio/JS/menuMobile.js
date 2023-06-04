export default function MenuMobile() {
  const menuBurger = document.querySelector('.menu-plugin');
  const displayMobile = document.querySelector('.links-container-mobile')

  function showMenuMobile() {
    displayMobile.classList.toggle('active');
  }

  menuBurger.addEventListener('click', showMenuMobile)
}