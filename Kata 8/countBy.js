// Create a function with two arguments that will
//return an array of the first n multiples of x.

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
function countBy2(x, n) {
  let arr = Array.from(
    Array(n + 1)
      .keys()
      .slice(1)
      .map((number) => number * x)
  );
  return arr;
}

console.log(countBy(2, 10));
