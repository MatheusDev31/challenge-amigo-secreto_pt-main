let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo);
    }

    limparCampo();  
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function sortearAmigo() {
    if (amigos == '') {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[parseInt(Math.random() * amigos.length)]}`;
    }
}