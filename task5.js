const hoverBox = document.getElementById("hoverBox");

const originalColor = "#74b9ff";
const hoverColor = "#e17055";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = hoverColor;
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
});