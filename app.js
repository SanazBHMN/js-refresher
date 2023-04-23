const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log("IT WORKED!");
  const data = JSON.parse(xhr.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});

xhr.addEventListener("error", () => {
  console.log("ERROR!!");
});

xhr.open("GET", "https://swapi.dev/api/planets/");

xhr.send();

console.log("Request Sent!");
