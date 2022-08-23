"strict";

const items = [0, 1, 2, 3, 4, 5, 6, 7];

function getFirstTwoItem(items) {
  console.log(items[0]); // O(1)
  console.log(items[1]); // O(1)
}
getFirstTwoItem(items); // O(2)
