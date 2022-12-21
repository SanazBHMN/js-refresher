let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];

console.log(ingredients.includes("corn"));
console.log(ingredients.includes("water", 3));

if (ingredients.includes("flour")) {
  console.log("I am gluten free, I cannot eat that :)");
}

console.log(ingredients.indexOf("eel"));
console.log(ingredients.indexOf("maple syrup"));
console.log(ingredients.indexOf("cheese", 5));
console.log(ingredients.indexOf("cheese", 2));

let letters = ["T", "C", "E", "P", "S", "E", "R"];

letters.join();
console.log(letters.reverse().join("-"));

// Slice
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

// let reptiles = animals.slice(4, 6);
let reptiles = animals.slice(4);

let quadruped = animals.slice(-3);

/* make a copy of an array
 it doesn't impact the original array
*/
let copy = animals.slice();

// Splice
animals.splice(1, 0, "octopus");
animals.splice(3, 2);
animals.splice(3, 0, "snake", "frog");
animals.splice(0, 2, "SHARK", "OCTOPUS");

// Using Const with Arrays
const foods = ["milk"];
foods.push("chocolate");
foods.unshift("tortillas");
