const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCaloriesBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  45: "forty five",
};

const numbers = {
  100: "one hundred",
  16: "sixteen",
  "76 trombones": "great song!",
};

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

let mysteryColor = "yellow";
palette[mysteryColor];

const userReviews = {};

userReviews["queenBee49"] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews.colt = "5";
userReviews.colt = 5;

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: "Jenga Classic",
    price: 6.88,
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: 29.99,
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: 39.99,
    quantity: 2,
  },
];

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

// They 'look' the same, but refer to different arrays
console.log(nums === mystery); // false

// These two arrays referrence the exact same array so we get true
console.log(nums === moreNums); // true

const user = {
  username: "CherryGarcia8",
  email: "garcia@gmail.com",
  notifications: [],
};

if (!user.notifications.length) {
  console.log("NO NEW NOTIFICATIONS!");
}
