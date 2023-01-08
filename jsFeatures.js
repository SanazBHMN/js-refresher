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

// spread for function calls
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];
// giveMeFour(colors);
giveMeFour(...colors);

const str = "GOAT";
giveMeFour(...str);
