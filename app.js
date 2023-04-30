// function getData() {
//   const data = axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => console.log(data));
//   console.log(data);
// }

// async function greet() {
//   return "HELLO";
// }
// greet().then((val) => {
//   console.log("PROMISE RESOLVED WITH: ", val);
// });

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers.";
//   }
//   return x + y;
// }

// add("e", "r")
//   .then((val) => {
//     console.log("PROMISE RESOLVED WITH: ", val);
//   })
//   .catch((err) => {
//     console.log("PROMISE REJECTED WITH: ", err);
//   });

// function getTodos() {
//   return axios.get("https://jsonplaceholder.typicode.com/todos/1");
// }

// getTodos().then((res) => {
//   console.log(res.data);
// });

// async function getTodos() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(res);
// }

// getTodos();

async function getTodos() {
  try {
    const res = await axios.get(
      "https://jsonplaceholderasdfa.typicode.com/todos/1"
    );
    console.log(res.data);
  } catch (e) {
    console.log("IN CATCH!", e);
  }
}

getTodos();
