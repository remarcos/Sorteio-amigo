let amigos = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value.trim();

    if (amigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(amigo);
    exibirAmigos();
    amigoInput.value = '';
}

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (sorteioRealizado) {
        alert('O sorteio já foi realizado. Atualize a página para realizar um novo sorteio.');
        return;
    }

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Lógica de sorteio
    let indexSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indexSorteado];
    
    // Exibe o nome sorteado na tela
    let p = document.createElement('p');
    p.textContent = `O amigo sorteado é: ${amigoSorteado}!`;
    resultado.appendChild(p);

    // Define a flag como verdadeira para evitar novos sorteios
    sorteioRealizado = true;
}