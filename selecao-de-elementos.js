// Retorne no console todas as imagens do site
// Seletor para encontrar todas as imagens dentro dos elementos com a classe 'animais-lista'
const imagem = document.querySelectorAll("img");

console.log(imagem);

// Retorne no console apenas as imagens que começaram com a palavra imagem
// Seletor para encontrar todas as imagens cujo atributo src começa com a palavra "imagem"
const imagens = document.querySelectorAll('.animais-lista img[src^="imagem"]');

// Exibir as URLs das imagens no console
imagens.forEach((imagem) => {
  console.log(imagem.src);
});

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao");
console.log(h2Animais);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[24]);
