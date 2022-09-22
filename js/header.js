export default function header(){
  const btnMobile = document.querySelector('.btnMobile');

  function menuMobile(event){
    const navMenu = document.querySelector('.header-container');
    navMenu.classList.toggle('active');
  }
  btnMobile.addEventListener('click', menuMobile);
}