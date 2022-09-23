export default function efeitoMaquinaEscrever(){
  function typeWrite(txt){
    const textoArray = txt.innerHTML.match(/((<|<\/)([\w]+)>)|(\D)/gi);
    txt.innerText = '';
    textoArray.forEach((letra,i) => {
      setTimeout(function(){
        txt.innerHTML += letra;
      }, 85 * i)
      console.log(letra,i);
    })
  }
  const h1 = document.querySelector('.apresentacao-texto');
  typeWrite(h1);
}