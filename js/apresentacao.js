export default function efeitoMaquinaEscrever(){
  const typed = new Typed('.apresentacao-texto', {
    // Waits 1000ms after typing "First"
    strings: ['Olá, bem vindo(a) ao meu portfólio. Me chamo <strong>André Luiz</strong> e almejo o cargo de <strong>Estagiário Desenvolvimento Web.</strong>'],
    typeSpeed: 45,
    showCursor: false
  });
}