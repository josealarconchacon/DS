"strict";
// This interview question comes straight from Google

/*
Given an array, find the first Recurring Character

array [2,5,1,2,3,5,1,2,4]
Should return 2

array [2,1,1,2,3,5,1,2,4]
Should return 1

array [2,3,4,5]
Should return undefined
 */

// Using Hash Table
function recurringCharacter(input) {
  // create an empty map as the keys will be unique
  let hashMap = {};
  // loop through the array
  for (let i = 0; i < input.length; i++) {
    // if keys exist, return
    if (hashMap[input[i]] !== undefined) {
      return input[i];
    } else {
      // if keys doesn't exist, add it to the map
      hashMap[input[i]] = i;
    }
    // console.log(hashMap);
  }
  return undefined;
}

console.log(recurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringCharacter([2, 3, 4, 5]));

// --------------------------------------------------------

/*
Using nested loop
    const recurringChar = (input) => {
    // loop through the array
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
        if (input[i] === input[j]) {
            return input[i];
        }
        }
    }
    return undefined;
    };
    console.log(recurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
 */
