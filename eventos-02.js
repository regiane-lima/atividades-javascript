const imgs = document.querySelectorAll("img");
function handleImg(event) {
console.log(event.target.getAttribute('src'))

}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
  console.log(img);
});

