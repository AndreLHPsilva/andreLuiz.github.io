export default function subir(){
  const sobe = document.querySelector('.subir-container');

  function scrollSobe(){
    window.scrollTo(0,0);
  }
  sobe.addEventListener('click', scrollSobe);
  function aparecerBtn(){
    const scrollPagina = window.scrollY;
    if(scrollPagina > 760){
      sobe.classList.add('showBtn');
    }else{
      sobe.classList.remove('showBtn');
    }
  }
  document.addEventListener('scroll', aparecerBtn);

}


