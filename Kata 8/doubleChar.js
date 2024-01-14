// Double Char
// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str
    .split("")
    .map((ele) => ele.repeat(2))
    .join("");
}

console.log(doubleChar("String"));
