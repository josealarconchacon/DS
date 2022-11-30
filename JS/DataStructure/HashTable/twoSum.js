"use strict";

/*
Given an array of integers, find a pair of integers that sums to a number Target.
    For e.g, if A = [6,3,5,2,1,7]. X = 4, Result= [3,1]
 */

// HashTable/HashSet O(n) time
const findPairUsingHash = (array, target) => {
  if (array == null) {
    return null;
  }
  // initialize empty hash map
  const hashMap = {};

  for (let n = 0; n < array.length; n++) {
    // get the current number.
    const num = array[n];
    if (hashMap[target - num]) {
      return [num, target - num];
    }
    hashMap[num] = n;
  }
  return null;
};

const N = [6, 3, 5, 2, 1, 7];
const T = 4;
console.log(findPairUsingHash(N, T));

// Brute Force O(n​2​)
const findPair = (numArray, target) => {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] == target) {
        // return pair
        return [numArray[i], numArray[j]];
      }
    }
  }
  // return null if not pain was found
  return null;
};

const arr = [6, 3, 5, 2, 1, 7];
console.log(findPair(arr, 4));
