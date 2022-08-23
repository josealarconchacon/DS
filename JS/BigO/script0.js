"strict";
// require performance
const { performance } = require("perf_hooks");
// define and array
const honda = ["honda"];
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
    console.log("running");
    if (array[i] === "honda") {
      console.log("Honda was found");
      break;
    }
  }
}

// console.log(findCar(cars));
findCar(cars); // O(n) - linear time
