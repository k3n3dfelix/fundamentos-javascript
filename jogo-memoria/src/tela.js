const ID_CONTEUDO = "conteudo";
class Tela {
  static obterCodigoHtml(item){
    return`
      <div class="col-md-3">
        <div class="card" style="width: 50%;">
          <img src="${item.img}" name="${item.nome}"class="card-img-top" alt="...">
        </div>
        <br/ >
      </div>
    `
  }

  static alterarConteudoHtml (codigoHtml){
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }
}