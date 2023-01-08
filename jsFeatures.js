// default parameter
// function multiply(a, b) {
//   b = typeof b === "undefined" ? 1 : b;

//   return a * b;
// }

function multiply(a, b = 1) {
  return a * b;
}

const greet = (person, greeting = "Hi") => {
  console.log(`${greeting}, ${person}!`);
};
