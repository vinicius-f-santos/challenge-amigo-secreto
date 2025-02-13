let amigos = [];
let campoAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');

function adicionarAmigo() {
    if (campoAmigos.value == ''){
        alert('Por favor, insira um nome');
    }
    else {
        if (amigos.includes(campoAmigos.value)) {
            alert('Esse amigo já está na lista');
            limparCampo();
        }
        else {
            amigos.push(campoAmigos.value);
            mostrarAmigoNaLista(campoAmigos.value);
            limparCampo();
        }
    }
    console.log(amigos);
}

function sortearAmigo() {
    let sorteio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = document.createElement('li');
    let mensagemAmigoSorteado = `O amigo(a) sorteado foi ${amigos[sorteio]}`;
    nomeSorteado.innerHTML = mensagemAmigoSorteado;
    amigoSorteado.append(nomeSorteado);
    limparListaDeAmigos();
    amigos = [];
}

function limparCampo() {
    campoAmigos.value = '';
}

function limparListaDeAmigos() {
    listaAmigos.remove();
}

function mostrarAmigoNaLista(amigo) {
    item = document.createElement('li');
    item.innerHTML = amigo;
    listaAmigos.appendChild(item);
    console.log(item);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        btn = document.querySelector('.button-add');
        btn.click();
    }
}) 