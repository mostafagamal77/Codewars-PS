

let arr = [46, 415, 91, 62];
let sum = 0;
let temp = 0;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 10; j++) {
      sum = arr[i] % 10;
      temp = (arr[i] - sum) /10;
    }
    if (sum == 10) {
      newArr.push(arr[i])
    }
  // console.log(arr[i]);
  console.log([temp,sum]);
  console.log(newArr)
}



