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

// async function getTodos() {
//   try {
//     const res = await axios.get(
//       "https://jsonplaceholderasdfa.typicode.com/todos/1"
//     );
//     console.log(res.data);
//   } catch (e) {
//     console.log("IN CATCH!", e);
//   }
// }

// getTodos();

// SEQUENTIAL REQUESTS
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// PARALLEL REQUESTS
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();

// function changeBodyColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("pink", 1000);
//   await changeBodyColor("indigo", 1000);
//   await changeBodyColor("violet", 1000);
// }

// async function lightShow() {
//   const p1 = changeBodyColor("teal", 1000);
//   const p2 = changeBodyColor("pink", 1000);
//   const p3 = changeBodyColor("indigo", 1000);
//   const p4 = changeBodyColor("violet", 1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;
// }

// lightShow();
