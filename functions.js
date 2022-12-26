function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

function greet(name) {
  console.log(`Hi ${name}!`);
}

function square(num) {
  return num * num;
  console.log("ALL DONE!");
}

// version 1
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   } else {
//     return false;
//   }
// }

// version 2
// function isPurple(color) {
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false;
// }

// version 3
function isPurple(color) {
  return color.toLowerCase() === "purple";
}

function containsPurple(arr) {
  for (const color of arr) {
    if (color === "purple" || color === "magenta") {
      return true;
    }
  }
  return false;
}
