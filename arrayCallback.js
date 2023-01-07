// forEach
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num * 2);
});

numbers.forEach(function (num, idx) {
  console.log(idx, num);
});

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

// map
const doubles = numbers.map(function (num) {
  return num * 2;
});

// const words = ["asap", "byob", "rsvp", "diy"];
// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const titles = books.map(function (b) {
  return b.title;
});

// arrow functions
// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

const isNumEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

const greet = () => {
  console.log("HI!");
};

// implicit return
const square = (n) => n * n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles1 = nums.map(function (n) {
  return n * 2;
});

const doubles2 = nums.map((n) => {
  return n * 2;
});

const doubles3 = nums.map((n) => n * 2);

const parityList1 = nums.map(function (n) {
  if (n % 2 === 0) return "even";
  return "odd";
});

const parityList2 = nums.map((n) => {
  return n % 2 === 0 ? "even" : "odd";
});

const parityList3 = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// Array.find
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

const includesMrs = movies.find((movie) => {
  return movie.includes("Mrs");
});

const startsWithMrs = movies.find((movie) => movie.indexOf("Mrs") === 0);

const goodBook = books.find((book) => book.rating >= 4.3);
const neilBook = books.find((book) => book.authors.includes("Neil Gaiman"));

// filter
const odds = numbers.filter((num) => num % 2 === 1);

const evens = numbers.filter((num) => num % 2 === 0);

const bigNums = numbers.filter((num) => num > 50);

const goodBooks = books.filter((book) => {
  return book.rating > 4.3;
});

const fantasyBooks = books.filter((book) => {
  return book.genres.includes("fantasy");
});

const shortForm = books.filter((book) => {
  return (
    book.genres.includes("short stories") || book.genres.includes("essays")
  );
});

const query = "The";
const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});

// some & every
const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every((word) => word.length === 3);

const allEndInG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});

const someStartsWithD = words.some((word) => word[0] === "d");

const allGoodBooks = books.every((book) => book.rating > 3.5);

const any2Authors = books.some((book) => book.authors.length === 2);

// revisiting sort!
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

books.sort((a, b) => a.rating - b.rating);

// reduce
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
});
