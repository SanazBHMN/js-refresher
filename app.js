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

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];

// const printColor = function (box) {
//   console.log(this);
//   console.log(this.style.backgroundColor);
// };

// const changeColor = function (evt) {
//   console.log(evt);
//   const h1 = document.querySelector("h1");
//   h1.style.color = this.style.backgroundColor;
// };

// const container = document.querySelector("#boxes");

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);

//   // box.addEventListener("click", function () {
//   //   printColor(box);
//   // });

//   // box.addEventListener("click", printColor);

//   box.addEventListener("click", changeColor);
// }

// document.body.addEventListener("keypress", function (evt) {
//   console.log(evt);
// });

// const input = document.querySelector("#username");

// input.addEventListener("keydown", function (e) {
//   console.log("KEY DOWN");
// });

// input.addEventListener("keyup", function (e) {
//   console.log("KEY UP");
// });

// input.addEventListener("keypress", function (e) {
//   console.log("KEY PRESS");
// });

// const addItemInput = document.querySelector("#addItem");
// const itemsUL = document.querySelector("#items");

// addItemInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     if (!this.value) return;
//     // console.log(this.value);

//     const newItemText = this.value;
//     const newItem = document.createElement("li");
//     newItem.innerText = newItemText;
//     itemsUL.appendChild(newItem);
//     this.value = "";
//   }
// });

// Coin Game
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keyup", function (e) {
  // console.log(e.key);
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px`;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    const currentLeft = extractPosition(avatar.style.left);
    avatar.style.left = `${currentLeft + 50}px`;
    avatar.style.transform = "scale(1, 1)";
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    const currentLeft = extractPosition(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
    avatar.style.transform = "scale(-1, 1)";
  }
  if (isTouching(avatar, coin)) moveCoin();
});

const extractPosition = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
