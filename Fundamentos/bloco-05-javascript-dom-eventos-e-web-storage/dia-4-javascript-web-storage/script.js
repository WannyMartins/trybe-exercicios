window.onload {}

function colorBackground(cor) {

    document.body.style.colorBackground = cor;


}

function botaoCorFundo(nomeBotao) {
    let criaBotao = document.createElement('button');
    let localDoBotao = docuement.body.createElement('div');
    localDoBotao = nomeBotao;
    localDoBotao.id = 'botaoCor';
    localDoBotao.innerHTML = 'Cor de Fundo'
}