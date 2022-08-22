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

const newArray = new Array(50).fill("tesla");

// function that receive an array
function findCar(array) {
  let timeStart = performance.now();
  for (let i = 0; i < array.length; i++) {
    // check if the array have the name honda
    if (array[i] === "honda") {
      console.log("Honda was found");
    }
  }
  let timeEnd = performance.now();
  console.log(
    `The call to find the car took ${timeEnd - timeStart} milliseconds`
  );
}

console.log(findCar(cars));
findCar(newArray);
