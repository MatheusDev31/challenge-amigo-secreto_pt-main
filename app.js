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