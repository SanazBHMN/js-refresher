// String.prototype.yell = function () {
//   // console.log(this);
//   return `OMG!!! ${this.toUpperCase()}!!! AGHGHGHGH!`;
// };

// Array.prototype.pop = function () {
//   return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
// };

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     // console.log(this);
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;

  // console.log(this);
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);

document.body.style.background = color1.rgb();
document.body.style.background = color1.rgba(0.3);
