/*Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).*/

//check if empty value return zero
//Find the highest number
//Find the lowest number
//Filter the array
//Sum all the numbers

let arr = [1, 1, 3, 5, 15, 9];

function sumArray(array) {
  // higher order function solution
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, cur) => acc + cur, 0);

    // return Array.isArray(array) && array.length > 1
    // ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    // : 0
  // Normal Solution
  // array = array.sort((a, b) => a - b).slice(1, -1);
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum;

  // return array
  //   .filter((ele) => ele !== Math.max(...array) && ele !== Math.min(...array))
  //   .reduce((acc, cur) => acc + cur, 0);
}

console.log(sumArray(arr));
