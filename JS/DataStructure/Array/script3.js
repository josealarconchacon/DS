"strict";

/*
Given two arrays that are sorted, merge the two arrays to get an array 
*/

const mergeTwoSortedArrays = (arr1, arr2) => {
  const mergeArrays = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // check arrays input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2 === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    // console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergeArrays.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergeArrays.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergeArrays;
};

console.log(mergeTwoSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]));
console.log(mergeTwoSortedArrays([1, 2, 3, 4], []));
