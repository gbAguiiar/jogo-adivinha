let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um número de 1 a 10');
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Digite um número de 1 a 10');

function verificarChute() {
    
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; 
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', `${mensagemTentativa}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;

    if (quantidadeElementos == 3) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function reiniciarJogo() {
    limparCampo()
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1; 
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
} 