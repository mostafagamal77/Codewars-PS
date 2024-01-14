/* Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers. */

// function evenOdd(number) {
//   if (number % 2 === 0) {
//     return "Even"
//   } else {
//     return "Odd"
//   }
// }

// console.log(evenOdd(10))

function evenOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOdd(10));
