let amigos = [];
let campoAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
const btnSortear = document.querySelector('.button-draw');
let nomeSorteado = document.createElement('li');
let sorteio = Math.floor(Math.random() * amigos.length);

function adicionarAmigo() {
    nomeSorteado.innerHTML = "";
    if (campoAmigos.value === '') {
        alert('Por favor, insira um nome válido.');
    }
    else if (amigos.includes(campoAmigos.value)){
        alert('Esse amigo já está na lista');
    }
    else {
        amigos.push(campoAmigos.value);
        mostrarAmigoNaLista(campoAmigos.value);
        if (amigos.length == 2) {
            btnSortear.removeAttribute('disabled');
        }
    }
    limparCampo();
    console.log(amigos);
}


function sortearAmigo() {
    let mensagemAmigoSorteado = `O amigo(a) sorteado foi: ${amigos[sorteio]}`;
    nomeSorteado.innerHTML = mensagemAmigoSorteado;
    amigoSorteado.append(nomeSorteado);
    amigos = [];
    limparListaDeAmigos();
    btnSortear.setAttribute('disabled',true)
}

function limparCampo() {
    campoAmigos.value = '';
}

function limparListaDeAmigos() {
    listaAmigos.innerHTML = '';
}

function mostrarAmigoNaLista(amigo) {
    let item = document.createElement('li');
    item.innerHTML = amigo;
    listaAmigos.append(item);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        btn = document.querySelector('.button-add');
        btn.click();
    }
}); 

campoAmigos.addEventListener('keypress', function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if ((keyCode > 32 && keyCode < 65) || (keyCode > 90 && keyCode < 97) || (keyCode > 122 && keyCode < 126)) {
        e.preventDefault();
    }
});