// const xhr = new XMLHttpRequest();

// xhr.addEventListener("load", () => {
//   console.log("FIRST REQUEST WORKED!");
//   const data = JSON.parse(xhr.responseText);
//   const filmURL = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", () => {
//     console.log("SECOND REQUEST WORKED!");
//     const filmData = JSON.parse(filmReq.responseText);
//     console.log(filmData);
//   });
//   filmReq.addEventListener("error", (e) => {
//     console.log("ERROR!", e);
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
// });

// xhr.addEventListener("error", () => {
//   console.log("ERROR!!");
// });

// xhr.open("GET", "https://swapi.dev/api/planets/");

// xhr.send();

// console.log("Request Sent!");

// fetch("https://swapi.dev/api/planets/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Status Code Error: ${response.status}`);
//     } else {
//       response.json().then((data) => {
//         for (let planet of data.results) {
//           console.log(planet);
//         }
//       });
//     }
//   })
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH");
//     console.log(err);
//   });

// const checkStatusAndParse = (response) => {
//   if (!response.ok) {
//     throw new Error(`Status Code: ${respnse.status}`);
//   }
//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log("Loaded 10 more plants...");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url) => {
//   return fetch(url);
// };

// fetch("https://swapi.dev/api/planets/")
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log(err);
//   });

axios
  .get("https://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
