// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickt(event) {
  console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle('textoMaior');
  }
}

//colocar isso no css:
// html.textoMaior {
//   font-size: 30px;
// }
