// const btn = document.querySelector("button");

// btn.addEventListener("mouseover", function () {
//   console.log("MOUSED OVER ME!");
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);

//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });

// btn.addEventListener("click", function () {
//   btn.innerText = "YOU GOT ME!";
//   document.body.style.backgroundColor = "green";
// });

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const printColor = function (box) {
  console.log(this);
  console.log(this.style.backgroundColor);
};

const changeColor = function (evt) {
  console.log(evt);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);

  // box.addEventListener("click", function () {
  //   printColor(box);
  // });

  // box.addEventListener("click", printColor);

  box.addEventListener("click", changeColor);
}

document.body.addEventListener("keypress", function (evt) {
  console.log(evt);
});
