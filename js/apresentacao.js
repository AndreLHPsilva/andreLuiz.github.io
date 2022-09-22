export default function efeitoMaquinaEscrever(){


  function typeWrite(txt){
    
    const textoArray = txt.innerHTML.split('');
    txt.innerHTML = '';
    
    textoArray.forEach((letra,i) => {
      setTimeout(function(){
        txt.innerHTML += letra;
      }, 75 * i)
    })
  }
  const h1 = document.querySelector('.apresentacao-texto');
  typeWrite(h1);

  console.log(h1);

}