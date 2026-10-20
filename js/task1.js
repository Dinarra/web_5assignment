// 1. Переменные разных типов
let firstName = "Dinara";   // string
let age = 19;               // number
let isStudent = true;       // boolean

console.log("Тип firstName:", typeof firstName);
console.log("Тип age:", typeof age);
console.log("Тип isStudent:", typeof isStudent);

// 2. Арифметические операции
let a = 10;
let b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);    // остаток от деления
console.log("a ** b =", a ** b);  // возведение в степень

// 3. Конкатенация строк
let lastName = "Nurzhaubay";
let fullName = firstName + " " + lastName;
console.log("Полное имя: " + fullName);
console.log(`Меня зовут ${fullName}, мне ${age} лет.`); // шаблонная строка