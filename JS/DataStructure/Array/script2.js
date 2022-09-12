"strict";

/*
Create a method that reverse a string
 */

const reverseString = (st) => {
  // check input first
  if (!st || st.length < 2 || typeof st !== "string") {
    return "Something is wrong";
  }

  const backwardsItems = [];
  for (let i = st.length - 1; i >= 0; i--) {
    backwardsItems.push(st[i]);
  }
  console.log(backwardsItems);
  return backwardsItems.join(" ");
};

reverseString("Jose Carlos");

console.log("------------------------------------------");
const reverseSt = (s) => s.split("").reverse().join("");
console.log(reverseSt("Jose"));
