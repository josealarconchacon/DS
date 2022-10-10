"strict";

// setup a node class
class NodeClass {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linkedList class
class LinkedList {
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
    // create a new node
    const node = new NodeClass(value);
    // add the new node to tail
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  // prepend element to beginning of LinkedList
  prepend(value) {
    // create a new node
    const node = new NodeClass(value);
    // add the new node to head
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
}

const linkedList = new LinkedList("apple");
// append :  orange --> banana to LinkedList
linkedList.append("orange");
linkedList.append("banana");

// prepend (blueberries) to the beginning of linkedList
// blueberries --> apple --> orange --> banana
linkedList.prepend("blueberries");
console.log(linkedList);
