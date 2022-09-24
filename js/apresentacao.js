export default function efeitoMaquinaEscrever(){
  const typed = new Typed('.apresentacao-texto', {
    // Waits 1000ms after typing "First"
    strings: ['Olá, bem vindo ao meu portfólio.<br>Me chamo <strong>André Luiz</strong> e almejo o<br>cargo de <strong>Estágio Desenvolvedor<br>Web.</strong>'],
    typeSpeed: 75,
    showCursor: false
  });
}