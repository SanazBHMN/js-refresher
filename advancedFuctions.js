// Block Scope
function doubleArr(arr) {
  const result = [];
  for (const num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}
