"strict";

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]; // this.data refers to the data in the constructor
  }
  // push element to the end of an array
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  // delete last element on the array
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }
  // delete
  delete(index) {
    const element = this.data[index];

    this.shiftElement(index);
  }
  shiftElement(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr1 = new MyArray();
arr1.push("Hello");
arr1.push(",");
arr1.push("there");
arr1.push("!");
arr1.delete(1); // delete at index 2
console.log(arr1);
arr1.push("I am");
arr1.push("here");
arr1.delete(2); // delete at index 2
console.log(arr1);

console.log("---------------------------------------------------");
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
// console.log(myArr);
