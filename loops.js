// for loop

for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num}`);
}

for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}

const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
}

const myStudents = [
  {
    firstName: "Zeus",
    grade: 86,
  },
  {
    firstName: "Artemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apollo",
    grade: 90,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored ${student.grade}`);
}

let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}
console.log(total / myStudents.length);

const word = "stressed";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord);

for (let i = 1; i <= 10; i++) {
  console.log("OUTER LOOP", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("   INNER LOOP", j);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
console.log(totalScore);

// while loop
let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target}, Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);
console.log("CONGRATS YOU WIN!");

while (true) {
  if (target === guess) break;
  console.log(`Target: ${target}, Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);
console.log("CONGRATS YOU WIN!");

// for...of
let subreddits = ["soccer", "popheads", "cringe", "books"];

for (let subreddit of subreddits) {
  console.log(subreddit);
}

for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}

// Comparing FOR and FOR...OF
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

for (const row of magicSquare) {
  let sum = 0;
  for (const num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  console.log(words1[i], words2[i]);
}

// for...of with objects
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Anelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let totalReview = 0;
for (let r of ratings) {
  totalReview += r;
}
let avg = totalReview / ratings.length;

// for...in
const jeoperdyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

for (let prop in jeoperdyWinnings) {
  console.log(prop);
  console.log(jeoperdyWinnings[prop]);
}
