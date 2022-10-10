"strict";

// Linked List implementation
// 12 --> 5 --> 2

// let linkedList = {
//   head: {
//     value: 12,
//     next: {
//       value: 5,
//       next: {
//         value: 2,
//         next: null,
//       },
//     },
//   },
// };

// linkedList class
class LinkedList {
  // constructor that take a value to create the first LinkedList node
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append element to LinkedList
  append(value) {
    // create a new node object with the value
    const node = {
      value: value,
      next: null,
    };
    // add the new node to tail
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }
}

const linkedList = new LinkedList(12);
linkedList.append(5);
linkedList.append(2);
console.log(linkedList);
