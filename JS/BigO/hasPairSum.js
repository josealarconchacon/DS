"strict";

/*
Given an array of integers, find two integers which sum is equal to 8
 */

const hasPairSum = (numArray, sum) => {
  const set = new Set();
  for (let n = 0; n < numArray.length; n++) {
    if (set.has(numArray[n])) {
      return true;
    }
    set.add(sum - numArray[n]);
  }
  return false;
};

console.log(hasPairSum([2, 3, 7, 5], 8)); // true
console.log(hasPairSum([1, 2, 3, 9], 8)); // false
console.log(hasPairSum([1, 2, 4, 4], 8)); // true
