const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

let counter = 2;

addBtn.addEventListener("click", function () {
  counter++;
  const li = document.createElement("li");
  li.textContent = "Item " + counter;
  list.appendChild(li);
});

removeBtn.addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
    counter--;
  }
});