"strict";

/*
Given an array of numbers, replace each even number with two of
the same number. e.g, [1,2,5,6,8] -> [1,2,2,5,6,6,8,8]. 
Assume that the array has enough space to accommodate the result.
 */

/*
suppose empty numbers is -1
    [1,2,5,6,8,_,_,_]
             \       \
             start   end
*/
const cloneEvenNumbers = (num) => {
  // //If it's not an array, return array.
  if (num === null || num.length === 0) {
    return num;
  }
  // Initialize two-pointer start and end
  // end-(will be at the end of the array)
  // start-(will be the last valid number in the array, it doesn't include the empty numbers)
  let endArray = num.length;
  // helper function
  let startArray = getLastNumber(num);
  // loop through startArray
  while (startArray >= 0) {
    // check if startArray is even, add two instance of the number
    if (num[startArray] % 2 == 0) {
      endArray--;
      num[endArray] = num[startArray];
      endArray--;
      num[endArray] = num[startArray];
    } else {
      num[endArray] = num[startArray];
    }
    startArray--;
  }
  return num;
};

const getLastNumber = (num) => {
  let n = num.length - 1;
  while (n >= 0 && num[n] === -1) {
    n--;
  }
  return n;
};

const array = [2, 4, 1, 0, 3, -1];
console.log(cloneEvenNumbers(array));
