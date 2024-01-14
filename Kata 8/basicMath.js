// Basic Mathematical Operations



function basicOp(operation, value1, value2)
{
  // if (operation == '+') {
  //   return value1 + value2;
  // } else if (operation == '-') {
  //   return value1 - value2;
  // } else if (operation == '*') {
  //   return value1 * value2;
  // } else if (operation == '/') {
  //   return value1 / value2;
  // }

  return eval(value1 + operation + value2);
}


function basicOp2(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      break;
    case '-':
      return value1 - value2;
      break;
    case '*':
      return value1 * value2;
      break;
    case '/':
      return value1 / value2;
      break;
  }
}


function basicOp3(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}



console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))
console.log(basicOp2('+', 4, 7))
console.log(basicOp2('-', 15, 18))
console.log(basicOp2('*', 5, 5))
console.log(basicOp2('/', 49, 7))