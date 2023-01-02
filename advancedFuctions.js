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
