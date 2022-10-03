"strict";

class HashTable {
  // constructor that receive a size
  constructor(size) {
    this.data = new Array(size); // create a new array that will hold the size
  }

  // private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // set method
  set(key, value) {
    let storeInfo = this._hash(key);
    if (!this.data[storeInfo]) {
      this.data[storeInfo] = [];
    }
    this.data[storeInfo].push([key, value]);
    return this.data;
  }

  // get method
  get(key) {
    let storeInfo = this._hash(key);
    const current = this.data[storeInfo];
    console.log(current);
    // check if current has something in it
    if (current) {
      for (let i = 0; i < current.length; i++) {
        if (current[i][0] === key) {
          return current[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHash = new HashTable(50);
myHash.set("apple", 10000);
myHash.set("bananas", 10);
myHash.set("tomatoes", 40);
myHash.set("oranges", 35);
myHash.get("bananas");
myHash.keys();
