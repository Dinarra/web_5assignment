# Assignment #5. JavaScript Basics (DOM Manipulation & Events)

**Student:** Nurzhaubay Dinara
**Group:** SE-2526

## Description

This project is a set of small web pages that demonstrate the fundamentals of JavaScript: variables and operators, DOM manipulation, event handling, and a mini project (To-Do list). Each task is on a separate page, and all pages are connected with a navigation bar (navbar).

## Links

- **Published website (GitHub Pages):** https://dinarra.github.io/web_5assignment/
- **GitHub repository:** https://github.com/dinarra/web_5assignment

## Project Structure

```
web_5assignment/
├── index.html      # Task 0
├── task1.html
├── task2.html
├── task3.html
├── task4.html
├── task5.html
├── task6.html
├── task7.html
├── task8.html
├── css/
│   └── style.css   # common styles and navbar
├── js/
│   ├── task0.js
│   ├── task1.js
│   ├── ...
│   └── task8.js
└── README.md
```

## Tasks

### Part 1. Introduction to JavaScript
| Page | Task | What it does |
| --- | --- | --- |
| `index.html` | Task 0. First Script | Prints name and group with `console.log()`, shows `alert("Hello, JavaScript World!")` |
| `task1.html` | Task 1. Variables & Operators | Variables of different types (string, number, boolean), arithmetic operations, string concatenation, output in the console |

### Part 2. DOM Manipulation
| Page | Task | What it does |
| --- | --- | --- |
| `task2.html` | Task 2. Changing Content | Button changes the text of a paragraph |
| `task3.html` | Task 3. Changing Styles | One button changes the background color of a `<div>`, another changes the font size of its text |
| `task4.html` | Task 4. Creating & Removing Elements | "Add Item" adds a new `<li>`, "Remove Item" removes the last one |

### Part 3. Events
| Page | Task | What it does |
| --- | --- | --- |
| `task5.html` | Task 5. Mouse Events | Box changes color on `mouseover` and restores it on `mouseout` |
| `task6.html` | Task 6. Keyboard Events | Shows the value of an input field in real time (`keyup`) |
| `task7.html` | Task 7. Calculator | Addition, subtraction, multiplication, division (with checks for empty fields and division by zero) |

### Part 4. Mini Project
| Page | Task | What it does |
| --- | --- | --- |
| `task8.html` | Task 8. To-Do App | Add tasks, delete them, mark as completed (strike-through). Tasks are stored temporarily in an array (no database / local storage) |

## How to Run

**Option 1. Online:** open the published website: https://dinarra.github.io/web_5assignment/

**Option 2. Locally:**
1. Download or clone the repository:
```
   git clone https://github.com/dinarra/web_5assignment.git
```
2. Open the project folder.
3. Open `index.html` in any browser (or use the Live Server extension in VS Code).
4. Use the navbar at the top to switch between tasks.
5. For Tasks 0 and 1, open the browser console (F12 → Console) to see the output.

## Technologies

- HTML5
- CSS3
- JavaScript (vanilla, no libraries)
