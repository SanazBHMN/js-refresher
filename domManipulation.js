// getElementsByTagName
let inputs = document.getElementsByTagName("input");

for (let input of inputs) {
  // returns an array-like object
  console.log(input);
}

// trun that array-lilke object into an actual array
const arr = [...inputs];
