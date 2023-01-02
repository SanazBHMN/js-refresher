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

// Functions as Objects
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide];

// operations[1](100, 4);
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

// Higher Order Functions
function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

// repeatNTimes(rage, 13);

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

// pickOne(rage, cry);

// Functions as Return Values
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiply(3);
const double = multiply(2);
const halve = multiplyBy(0.5);

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);

const isNiceWeather = makeBetweenFunc(65, 80);
