// String.prototype.yell = function () {
//   // console.log(this);
//   return `OMG!!! ${this.toUpperCase()}!!! AGHGHGHGH!`;
// };

// Array.prototype.pop = function () {
//   return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
// };

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    // console.log(this);
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
