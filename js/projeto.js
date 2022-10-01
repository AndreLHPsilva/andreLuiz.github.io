export default function girar(){
  const card = document.querySelectorAll('.card__giratorio');
  function vira(Touch){
    const pegarTouch = Touch.target.offsetParent;
    pegarTouch.classList.toggle('view');
  }

  if (window.matchMedia("(max-width:600px)").matches) {
    card.forEach((card) =>{
      card.classList.toggle('card-mobile');
      card.addEventListener('touchstart', vira);
    })
  } 
}