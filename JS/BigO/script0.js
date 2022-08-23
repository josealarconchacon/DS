"strict";
// require performance
const { performance } = require("perf_hooks");
// define and array
const cars = [
  "honda",
  "toyota",
  "audi",
  "tesla",
  "porsche",
  "bmw",
  "nissan",
  "mazda",
];

const newArray = new Array(20).fill("honda");

// function that receive an array
function findCar(array) {
  for (let i = 0; i < array.length; i++) {
    // check if the array have the name honda
    if (array[i] === "honda") {
      console.log("Honda was found");
    }
  }
}

console.log(findCar(cars));
findCar(newArray); // O(n) - linear time
