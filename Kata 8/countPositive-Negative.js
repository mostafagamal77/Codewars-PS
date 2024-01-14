// Count of positives / sum of negatives

// Return an array, where the first element is the count of
// positives numbers and the second element is sum
// of negative numbers. 0 is neither positive nor negative.

/*
1- declare counter for positive ans sum for negative and initial value is 0
2- loop for the input array
3- check if the index is positive or negative
4- if positive increase the positive counter by one 
and if negative add the index to the negative sum
 */

// Basic Solution
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
  }
  return [positiveNums , negativeNums];
}


// higher order function
function countPositivesSumNegatives2(input) {
  let positiveCount = input.filter((ele) => ele > 0).length;
  let negativeSum = input
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele);
  return [positiveCount, negativeSum];
}


console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
  ])
);
console.log(
  countPositivesSumNegatives2([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
  ])
);
