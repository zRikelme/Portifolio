AOS.init();
export default function MenuMobile() {
  const btnMenu = document.querySelector('.menu-hamburguer')
  const menuMobile = document.querySelector('.links-container-mobile')

  function showMenuMobile() {
    menuMobile.classList.toggle('disable')
  }

  btnMenu.addEventListener('click', showMenuMobile)

}
