//window.alert("Bem vindo ao dev week!");

/*
OBJETIVO 1 - quando clicar na seta de avançar temos
que mostrar o próximo cartão;
*/

// - passo 1: pegar o elemento html da seta e avançar;
const btnAvancar = document.getElementById('btn-avancar');
const cards = document.querySelectorAll('main ul li');
let cardAdt = 0;

function esconderCartaoSeleecionado() {
    // - passo 4: buscar o cartão selecionado e esconder;
    const cardSelect = document.querySelector('.selecionado');
    cardSelect.classList.remove('selecionado');
}

function mostarCartao (indexCartao) {
    cards[indexCartao].classList.add('selecionado');
}

// - passo 2: identificar o clique do usuario;
btnAvancar.addEventListener('click', () => {

    if (cardAdt === cards.length - 1) return;
    
    esconderCartaoSeleecionado();

    // - passo 3: mostar o próximo cartão;- passo 3: mostar o próximo cartão;
    cardAdt++;
    mostarCartao(cardAdt);

});



// ------- Voltar --------

const btnVoltar = document.getElementById('btn-voltar');
btnVoltar.addEventListener('click', () => {
    if (cardAdt === 0) return;

    esconderCartaoSeleecionado();

    cardAdt--;
    mostarCartao(cardAdt);

});


