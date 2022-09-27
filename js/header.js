export default function header(){
  const btnMobile = document.querySelector('.btnMobile');

  function menuMobile(event){
    const navMenu = document.querySelector('.header-container');
    navMenu.classList.toggle('active');
  }
  const linkMenu = document.querySelectorAll('a[href^="#"');
  function fecharMenu(event){
    const navMenu = document.querySelector('.header-container');
    navMenu.classList.remove('active');
  }
  linkMenu.forEach(link => {
    link.addEventListener('click', fecharMenu);
  })
  btnMobile.addEventListener('click', menuMobile);
}
