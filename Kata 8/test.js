


function x(num) {
  let mul = 1;
  let newNum = num.toString()
  for (let i = 0; i < newNum.length; i++) {
    mul *= newNum[i];
  }
  return mul;
}

console.log(x(5123))