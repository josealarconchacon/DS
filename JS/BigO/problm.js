"strict";
/*
Given two arrays, create a function the check whether the two array contain common items
input: [1,2,3,6,8]
input: [4,5,8,10]
return false

input: [2,4,6,8]
input: [3,5,9,4]
return true
 */

const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5, 8];

function hasCommonItems(itemArray1, itemArray2) {
  // loop over array1, and create an object where properties match the items of the array
  let mapOjt = {};
  for (let i = 0; i < itemArray1.length; i++) {
    // it property doesn't exist, add it to it
    if (!mapOjt[arr1[i]]) {
      const item = itemArray1[i];
      mapOjt[item] = true;
    }
  }
  // console.log(mapOjt);

  // loop over array2, and check if array2 items exist on created object
  for (let j = 0; j < itemArray2.length; j++) {
    if (mapOjt[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(hasCommonItems(arr1, arr2));
