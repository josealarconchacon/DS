"strict";

const myArr = ["a", "b", "c", "d"]; // 4*4 = 16 bytes of storage

// access element in an array
myArr[1];

//push: -add element to the end of an array
myArr.push("t"); //O(1)

//pop: -remove last element of an array
myArr.pop("t"); //O(1)

// unshift: -add element to the beginning of an array
myArr.unshift("t"); //O(n)
// [ 't', 'a', 'b', 'c', 'd' ]

// splice: -add element to the middle of an array
myArr.splice(2, 0, "there"); //O(n)
// [ 't', 'a', 'there', 'b', 'c', 'd' ]
console.log(myArr);
