"strict";

const items = [0, 1, 2, 3, 4, 5, 6, 7];

function getFirstTwoItem(items) {
  console.log(items[0]); // O(1)
  console.log(items[1]); // O(1)
}
getFirstTwoItem(items); // O(2)

// ----------------------------------------

function funChallenge(input) {
  let num = 10; // O(1)
  num = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    Function(); // O(n)
    let value = true; // O(n)
    num++; // O(n)
  }
  return num; // O(1)
}

funChallenge(); // Big O(3 + 4n)
