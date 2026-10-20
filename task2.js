const text = document.getElementById("text");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
  text.textContent = "Текст изменился! JavaScript работает.";
});