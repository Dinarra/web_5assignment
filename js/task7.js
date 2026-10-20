const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Введите оба числа";
    return;
  }

  let answer;

  if (operation === "+") {
    answer = a + b;
  } else if (operation === "-") {
    answer = a - b;
  } else if (operation === "*") {
    answer = a * b;
  } else if (operation === "/") {
    if (b === 0) {
      result.textContent = "Делить на ноль нельзя";
      return;
    }
    answer = a / b;
  }

  result.textContent = answer;
}

document.getElementById("addBtn").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subBtn").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("mulBtn").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divBtn").addEventListener("click", function () {
  calculate("/");
});