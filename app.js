const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log("FIRST REQUEST WORKED!");
  const data = JSON.parse(xhr.responseText);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", () => {
    console.log("SECOND REQUEST WORKED!");
    const filmData = JSON.parse(filmReq.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", (e) => {
    console.log("ERROR!", e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();

  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
});

xhr.addEventListener("error", () => {
  console.log("ERROR!!");
});

xhr.open("GET", "https://swapi.dev/api/planets/");

xhr.send();

console.log("Request Sent!");
