"strict";

// reference type
var obj1 = { val: 10 };
var obj2 = obj1;
var obj3 = { val: 10 };

obj1.val = 15;
console.log(obj2.val);

console.log(obj1 === obj2); //true
console.log(obj1 === obj3); //false

// context vs scope
console.log(this);
const obj4 = {
  myFun: function () {
    console.log(this);
  },
};
console.log(obj4.myFun);

// instantiation
class Menu {
  constructor(foodName, price) {
    this.foodName = foodName;
    this.price = price;
  }
  introduce() {
    console.log(`We have ${this.foodName}, and it cost $${this.price} dollars`);
  }
}

// class Restaurant that extends the Menu class
class Restaurant extends Menu {
  constructor(name, price) {
    super(name, price);
  }
  holydays() {
    console.log(`We are closed!!!!`);
  }
}

const pizza1 = new Restaurant("Classic Peperoni", 20);
const pizza2 = new Restaurant("Classic Margarita", 18);

console.log(pizza1.foodName);
console.log(pizza2.introduce());
