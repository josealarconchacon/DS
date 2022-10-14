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

  printLinkedList() {
    const array = [];
    let currentNode = this.head;
    // as long there is a currentNode, add it to the array
    while (currentNode !== null) {
      array.push(currentNode.value);
      // update the currentNode to equal currentNode.next
      currentNode = currentNode.next;
    }
    return array;
  }

  // insert element at specific index
  insert(atIndex, value) {
    // first check the params
    // As long  atIndex is greater or equal to the this.length
    if (atIndex >= this.length) {
      // add the value to the end of the List
      return this.append(value);
    }
    // create a new node
    const node = new NodeClass(value);
    const firstNode = this.traverseToIndex(atIndex - 1);
    const pointer = firstNode.next;
    firstNode.next = node;
    node.next = pointer;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // remove
  remove(atIndex) {
    // get a reference of the first node
    const firstNode = this.traverseToIndex(atIndex - 1);
    const deleteNode = firstNode.next;
    firstNode.next = deleteNode.next;
    this.length--;
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
// insert: grapefruits at index 2
linkedList.insert(2, "grapefruits");
// remove: orange at index 3
linkedList.remove(3);
console.log(linkedList.printLinkedList());
