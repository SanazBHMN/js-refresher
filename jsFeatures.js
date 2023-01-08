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

// spread in array literals
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollusca = ["garden slug", ...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];

// spread in object literals
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
  legs: 4,
};

const dog = { ...canine, isPet: true, adorable: true };

const houseCat = { ...feline, isGrumpy: true, personality: "unpredictable" };

const catDog = { ...canine, ...feline };

const tripod = { ...canine, legs: 3 };

// the order does matter
const tripodTheOtherWay = { legs: 3, ...canine };

const catDogClone = { ...catDog };

// the argument object
function sum() {
  // console.log(arguments);
  const argsArr = [...arguments];

  return argsArr.reduce((total, currentVal) => {
    return total + currentVal;
  });
}

// rest parameter
function sum1(...nums) {
  // console.log(nums);
  return nums.reduce((total, currentVal) => {
    return total + currentVal;
  });
}

function fullName(firstName, lastName, ...titles) {
  console.log("first", firstName);
  console.log("last", lastName);
  console.log("titles", titles);
}

// fullName("Tom", "Jones", "III", "order of the phoenix");

const multiplyArrow = (...nums) =>
  nums.reduce((total, currentVal) => total * currentVal);

// destructuring arrays
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [gold, silver, bronze] = raceResults;
const [first, , , fourth] = raceResults;
const [winner, ...others] = raceResults;
