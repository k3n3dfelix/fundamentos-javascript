const luzesCirculo = document.querySelectorAll('.luzes-circulo');

let  contadordeLuz = 0;

const mostrarLuz = () => {
  luzesCirculo[contadordeLuz].className = 'luzes-circulo';
  contadordeLuz++;

  if(contadordeLuz > 2) contadordeLuz = 0;

  const luzAtual = luzesCirculo[contadordeLuz];
  luzAtual.classList.add(luzAtual.getAttribute('color'))

}

setInterval(mostrarLuz, 1000)