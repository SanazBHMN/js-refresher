// getElementsByTagName
let inputs = document.getElementsByTagName("input"); // HTMLCollection

// for (let input of inputs) {
// returns an array-like object
// console.log(input);
// }

// trun that array-lilke object into an actual array
const arr = [...inputs];

// getElementsByClassName
const special = document.getElementsByClassName("special");

const ul = document.getElementsByTagName("ul")[0];
// console.log(ul.getElementsByClassName("special"));

// querySelector & querySelectorAll
// main1 and main2 are both HTMLParagraphElement
const main1 = document.querySelector("#main");
const main2 = document.getElementsByTagName("main");

// console.dir(document.querySelector("section ul li.special"));
// console.dir(document.querySelector("input[type='password']"));

const allInputs = document.querySelectorAll("input"); // NodeList

// innerText & textContent
const h1 = document.querySelector("h1");
// console.log(h1.innerText);

const firstUl = document.querySelector("ul");
// console.log(firstUl.innerText);

const p = document.querySelector("#main");
// console.log(p.textContent);
// console.log(p.innerText);

// innerHTML
const form = document.querySelector("form");
// console.log(form.innerHTML);
// form.innerHTML = "<b>I am a bold tag!</b>";

// value
// inputs[0].value;
// inputs[2].checked;
// inputs[3].value;

// const a = document.querySelector("a");
// a.href;

// getting and setting attributes
// const range = document.querySelector("input[type='range']");
// range.getAttribute("min");
// range.getAttribute("type");
// range.setAttribute("min", "-350");

// finding parent/children/siblings
const firstLI = document.querySelector("li");
// console.dir(firstLI.parentElement.parentElement);
// console.dir(firstUl.children[0].innerText);

// console.log(firstLI.nextElementSibling);

const thirdLI = firstLI.nextElementSibling.nextElementSibling;
// console.log(thirdLI.previousElementSibling);

// changing multiple elements
// const allLIs = document.querySelectorAll("li");
// for (let li of allLIs) {
//   li.innerHTML = "WE ARE <b>CHAMPIONS</b>!";
// }

// altering styles
// p.style.backgroundColor = "orchid";

// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// allLIs.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

// getComputedStyle
const styles = getComputedStyle(firstLI);
// console.log(styles.color);

// manipulation classes
const todo = document.querySelector("#todos .todo");

// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

// completely overwrote the previous class
todo.setAttribute("class", "done");

// todo.classList.remove("done");
// todo.classList.add("done");
todo.classList.toggle("done");
