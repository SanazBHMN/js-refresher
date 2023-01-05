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
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

// map
const doubles = numbers.map(function (num) {
  return num * 2;
});

const words = ["asap", "byob", "rsvp", "diy"];
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

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

const square = (x) => {
  return x * x;
};

const isNumEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

const greet = () => {
  console.log("HI!");
};
