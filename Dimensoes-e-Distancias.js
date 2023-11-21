//exercicios 
const ListaAnimais = document.querySelector(".animais-lista");
const height = ListaAnimais.scrollHeight;
const animaisTop = ListaAnimais.offsetTop;
const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;
const rect = primeiroH2.getBoundingClientRect();
console.log(rect.top);
console.log(
window.innerWidth,
window.outerWidth,
window.innerHeight,
window.outerHeight,
window.scrollX,
);

if(small){
 console.log('Usuário Mobile')

 } else{
    console.log('Usuário Desktop')
 }

const small = window.matchMedia('(max-width:600px)').matches;
console.log(small);
