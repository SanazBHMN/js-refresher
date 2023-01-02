// Block Scope
function doubleArr(arr) {
  const result = [];
  for (const num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}

// Lexical Scope
function outer() {
  let movie = "amadeus";

  function inner() {
    // let movie = "The Shining";
    console.log(movie.toLocaleUpperCase());
  }

  inner();
}

// Function Statement
function add(x, y) {
  return x + y;
}
// console.dir(add);

// Function Expression
const sum = function (x, y) {
  return x + y;
};
// console.dir(sum);

const product = function multiply(x, y) {
  return x * y;
};
// console.dir(product);

// Higher Order Functions
