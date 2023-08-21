const ESTANTE = [];
const IMAGENS = [];

function cadastrar(titulo, autor, ano) {
    let livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        anoPub: ano
    }
    ESTANTE.push(livro);
}

let addButton = document.getElementById('add');
let showButton = document.getElementById('show');
let anteButton = document.getElementById('ante');
let proxButton = document.getElementById('prox');
let indice = 0;
let info = document.getElementById('information');


addButton.addEventListener("click", () => {
    let titulo = document.querySelector('#nome').value;
    let autor = document.querySelector('#autor').value;
    let ano = document.querySelector('#ano').value;
    cadastrar(titulo, autor, ano);
    let imgsGuardadas = ['img/img1.png', 'img/img2.png', 'img/img3.png'];
    IMAGENS.push(imgsGuardadas[indice]);
    img.src = IMAGENS[indice];
    ++indice;
    info.innerHTML = `${IMAGENS.length} Livro(s) cadastrado(s)`;
})

let livros=document.getElementById('livros');

showButton.addEventListener("click", () => {
    for(let item of ESTANTE){
        livros.textContent=`${item.tituloLivro}, ${item.autorLivro}, ${item.anoPub}`
    }
})

let i = 0
let img = document.getElementById('img');

anteButton.addEventListener('click', () => {
    if (i > 0) {
        img.src = IMAGENS[--i];
    }
})
proxButton.addEventListener('click', () => {
    if (i < IMAGENS.length - 1) {
        img.src = IMAGENS[++i];
    }
})
