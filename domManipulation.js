// getElementsByTagName
let inputs = document.getElementsByTagName("input"); // HTMLCollection

for (let input of inputs) {
  // returns an array-like object
  console.log(input);
}

// trun that array-lilke object into an actual array
const arr = [...inputs];

// getElementsByClassName
const special = document.getElementsByClassName("special");

const ul = document.getElementsByTagName("ul")[0];
console.log(ul.getElementsByClassName("special"));

// querySelector & querySelectorAll
// main1 and main2 are both HTMLParagraphElement
const main1 = document.querySelector("#main");
const main2 = document.getElementsByTagName("main");

console.dir(document.querySelector("section ul li.special"));
console.dir(document.querySelector("input[type='password']"));

const allInputs = document.querySelectorAll("input"); // NodeList