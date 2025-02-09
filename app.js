// Array para armazenar lista de amigos.
let amigos = [];

// Função para adicionar amigos a lista.
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
    }

    limparCampo();
    listaDeAmigos();
}

// Função para limpar campo após adicionar um amigo.
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

// Função para sortear amigo de forma aleatória.
function sortearAmigo() {
    if (amigos == '') {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[parseInt(Math.random() * amigos.length)]}`;
    }

    limparLista();
}

// Função para mostrar lista de amigos.
function listaDeAmigos() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
            
        for (let index = 0; index < amigos.length; index++) {
            let li = document.createElement('li');
            li.textContent = `${amigos[index]}`;
            lista.appendChild(li);
        }
}

// Função pra limpar lista de amigos após o sorteio.
function limparLista() {
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';      
}
