export default function girar(){
  const card = document.querySelectorAll('.card__giratorio');
  // Quando clica no link veja mais entra nessa função e vira o card.
  function vira(Touch){
    const pegarTouch = Touch.path[2];
    const cardTraseiro = document.querySelectorAll('.card__giratorio-conteudo--traseira');
    cardTraseiro.forEach((cardTraseiro) =>{
      //aqui é para quando clicar dentro do conteudo da traseira, desvirar o card
      cardTraseiro.addEventListener('touchstart', function(Touch){
        pegarTouch.classList.remove('view');
      });
    })
    pegarTouch.classList.add('view');

  }
  if (window.matchMedia("(max-width:600px)").matches) {
    card.forEach((card) =>{
      card.classList.toggle('card-mobile');
      const linkCard = document.querySelectorAll('.card__giratorio button');
      linkCard.forEach((linkCard)=>{
        linkCard.addEventListener('touchstart', vira);
      })
    })
  } 
}