"strict";
// Logging all pairs of an array
const items = ["a", "b", "c", "d", "e"];

function logAllPairs(item) {
  for (let i = 0; i < item.length; i++) {
    for (let j = 0; j < item.length; j++) {
      console.log(item[i], item[j]);
    }
  }
}

console.log(logAllPairs(items)); // O(n^2)

// ---------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

function printAllPairSum(n) {
  console.log("Sum of all pairs");
  n.forEach(function (firstN) {
    n.forEach(function (secondN) {
      console.log(firstN + secondN);
    });
  });
}

printAllPairSum(numbers);
// ---------------------------------------------------------
// Different Terms for inputs
function compressTwoItems(container, container2) {
  // this loop will depend how big the first container input is
  container.forEach(function (container) {
    console.log(container);
  });
  // this loop will depend how big the first container2 input is
  container2.forEach(function (container) {
    console.log(container);
  });
}
