// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// loop on array
// sum numbers and divide by its count

function findAverage(array) {
  if (array.length == 0) return 0;
  return array.reduce((acc, ele) => acc + ele) / array.length;
}
function findAverage2(array) {
  let sum = 0;
  if (array.length == 0) return 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

console.log(findAverage([]));
console.log(findAverage([2, 2, 2]));
console.log(findAverage2([]));
console.log(findAverage2([2, 2, 2]));
