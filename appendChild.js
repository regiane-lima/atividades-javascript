const h1 = document.querySelector("h1");
h1.outerHTML = "<p>teste</p>";

const lista = document.querySelector(".animais-lista");
console.log(lista.children[lista.children.length - 1]);

const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");
const animais = document.querySelector(".animais");

animais.appendChild(titulo);
animais.insertBefore(animais, mapa);

const novoH1 = document.createElement("h1");
console.log("novoH1");
novoH1.innerText = "novo titulo";
novoH1.classList.add("titulo");
mapa.appendChild(novoH1);
console.log(novoH1);
