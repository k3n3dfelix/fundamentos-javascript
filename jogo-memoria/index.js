function onLoad(){
  //console.log(`Carregou a tela!!`, Tela, JogoDaMemoria)
  const heroi = {
    img: './arquivos/batman.png',
    nome: 'batman'
  }

  const codigoHtml = Tela.obterCodigoHtml(heroi)
  Tela.alterarConteudoHtml(codigoHtml);
}
window.onload = onLoad