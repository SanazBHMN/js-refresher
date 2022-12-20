// Example 1

// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

let rating = 0;

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meet expectations.");
} else if (rating === 1) {
  console.log("Need improvement.");
} else {
  console.log("Invalid rating, wtf?");
}

// Example 2
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}

// Example 3
let password = "chickeGal ";

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid password");
} else {
  console.log("Invalid password");
}

// Example 4
let mystery = NaN;

if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}

// Example 5
let num = 30;

if (num >= 1 && num <= 10) {
  console.log("Valid guess between 1 and 10");
} else {
  console.log("Please guess a number between 1 and 10");
}

// Example 6
let age = 78;

if (age < 6 || age >= 65) {
  console.log("You get in for free.");
} else {
  console.log("That will be $10 please.");
}

// Example 7
let color = "violet";

if (color === "purple" || color === "lilac" || color === "violet") {
  console.log("Greate Choice!");
}

// Example 8
let loggedInUser;

if (!loggedInUser) {
  console.log("GET OUT OF HERE!");
}

// Example 9
let flavor = "watermelon";

if (flavor !== "grape" && flavor !== "cherry") {
  console.log("We don't have that flavor.");
}

if (!(flavor === "grape" || flavor === "cherry")) {
  console.log("Only grape and cherry!!");
}

// Example 10
let x = 7;
console.log(x == 7 || (x === 3 && x > 10));

// Example 11
let day = 3;

switch (day) {
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THR");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
  case 7:
    console.log("SUN");
    break;
  default:
    console.log("Invalid day!");
}

// Example 12
let emoji = "heart";

switch (emoji) {
  case "sad face":
  case "happy face":
    console.log("yellow");
    break;
  case "eggplant":
    console.log("purple");
    break;
  case "lips":
  case "heart":
    console.log("red");
    break;
}

// Example 13
let number = 2;

console.log(number === 7 ? "lucky!" : "bad!");

// Example 14
let status = "offline";

let statusColor = status === "offline" ? "red" : "green";

console.log(statusColor);
