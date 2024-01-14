/*Write a function that accepts an integer n and a string s as 
parameters, and returns a string of s repeated exactly n times. */

function stringRepeat(n, s) {
  //Built-in function
  return s.repeat(n)

  // Basic Sol.
  // let str = ""
  // for (let i = 0; i < n; i++) {
  //   str += s
  // }
  // return str
}

console.log(stringRepeat(10, "m "))