const box = document.getElementById("box");
const boxText = document.getElementById("boxText");
const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");

const colors = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe"];
let colorIndex = 0;

colorBtn.addEventListener("click", function () {
  box.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

let fontSize = 16;

sizeBtn.addEventListener("click", function () {
  fontSize += 4;
  if (fontSize > 40) {
    fontSize = 16;
  }
  boxText.style.fontSize = fontSize + "px";
});