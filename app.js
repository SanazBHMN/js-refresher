// function getData() {
//   const data = axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => console.log(data));
//   console.log(data);
// }

async function greet() {
  return "HELLO";
}
greet().then((val) => {
  console.log("PROMISE RESOLVED WITH: ", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers.";
  }
  return x + y;
}

add("e", "r")
  .then((val) => {
    console.log("PROMISE RESOLVED WITH: ", val);
  })
  .catch((err) => {
    console.log("PROMISE REJECTED WITH: ", err);
  });
