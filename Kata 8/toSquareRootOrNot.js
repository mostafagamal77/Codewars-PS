// To square(root) or not to square(root)

/*Write a method, that will get an integer array as parameter and will
process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number */

// loop in array
// compare the index of array with its square root and its power of 2
// if equal square root then turn it to power2 and vice versa

function squareOrSquareRoot(array) {
  return array.map((ele) =>
    Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : Math.pow(ele, 2)
  );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
