// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// loop on array
// check numbers, if positive convert to negative and if negative convert to positive

function invert(array) {
  return array.map((ele) => -ele);
}
function invert2(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = -array[i];
  }
  return array;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert2([1, 2, 3, 4, 5]));
console.log(invert2([1, -2, 3, -4, 5]));
console.log(invert2([]));
