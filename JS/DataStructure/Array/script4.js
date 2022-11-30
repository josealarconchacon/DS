"strict";

// #1 Turn this array into a new array: [1,2,3,[4],[5]].
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
console.log(array.flat(2)); // [ 1, 2, 3, [ 4 ], [ 5 ] ]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
console.log(greeting.flatMap((str) => str.join(" ")));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flatMap((str) => str.join(" ")).join(" "));

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

//#5 Clean up this email to have no whitespace. Make the answer be in a single line (return a new string):
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
console.log(userEmail3.trimEnd().trimStart());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const setUsers = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(setUsers);
console.log(usersArray);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);
console.log(updatedUsersArray);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers);

// flat() method create a new array with all subarray elements
const arr1 = [0, 1, 2, [3, 4, 5]];
console.log(arr1.flat()); // [ 0, 1, 2, 3, 4, 5 ]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2)); // [0, 1, 2, [3, 4]]

// flatMap() method returns a new array formed by applying a given callback function
// to each element of the array, and then flattening the result by one level.
const arr = [1, 2, [3], [4, 5], 6, []];
const flattened = arr.flatMap((num) => num);
console.log(flattened); // [ 1, 2, 3, 4, 5, 6 ]

const str = "       remove space in from";
const str1 = "remove space in the back           ";
console.log(`${str.trimStart()} \n${str1.trimEnd()}`);

const users = [
  ["tom", 90],
  ["peter", 87],
  ["sally", 78],
];
// Object.fromEntries() method transforms a list of key-value pairs into an object.
const obj = Object.fromEntries(users);
console.log(obj);
