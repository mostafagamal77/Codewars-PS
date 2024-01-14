// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Basic solution
function digitize(num) {
  let arr = [];
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    arr.unshift(Number(str.charAt(i)));
  }
  return arr;
}

console.log(digitize(35231));

//Built in functions
function digit(n) {
  return n
    .toString()
    .split("")
    .map((ele) => Number(ele))
    .reverse();
}

console.log(digit(35231));
