//You get an array of numbers, return the sum of all of the positives ones.
// initialValue = 0
//Array Loop
//Check if the value is positive
//Add the number to initialValue

let array = [1, -4, 7, 12];

//Normal Solution
function positiveNumSum(arr) {
  let initialValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      initialValue += arr[i];
    }
  }
  return initialValue;
}

console.log(positiveNumSum(array));

//Higher Order Function Solution
function positiveSum(arr) {
  return arr.filter((ele) => ele > 0).reduce((acc, cur) => acc + cur, 0);
}

console.log(positiveSum(array));

// function positiveSum(arr) {
//   let sum = 0;
//   if (arr.length != 0) {
//     return (sum = arr.filter((ele) => ele > 0).reduce((acc, cur) => acc + cur));
//   } else {
//     return sum;
//   }
// }