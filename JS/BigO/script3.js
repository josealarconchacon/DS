"strict";

function colorsArray(c) {
  let c_array = []; // create new array
  for (let i = 0; i < c; i++) {
    // fill array with color name as we looping
    c_array[i] = "red";
  }
  return c_array;
}
// Space Complexity of O(n)
console.log(colorsArray(3));
