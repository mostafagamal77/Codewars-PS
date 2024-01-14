function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
  // return arr.slice(arr.length - 10).reverse();
}

function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let swap = arr[j];
        arr[j] = arr[i];
        arr[i] = swap;
      }
    }
  }
  return arr;
  // return arr.slice(0, 11);
}


// function bubbleSort2(arr) {
//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       if (arr[j + 1] > arr[j]) {
//         let swap = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = swap;
//       }
//     }
//   }
//   return arr.slice();
// }

// slice()

console.log(
  bubbleSort([
    10, 5, 3, 9, 15, 19, 1, 20, 25, 30, 55, 13, 17, 7, 7, 32, 60, 54, 44, 46, 66
  ])
);
console.log(
  bubbleSort1([
    10, 5, 3, 9, 15, 19, 1, 20, 25, 30, 55, 13, 17, 7, 7, 32, 60, 54, 44, 46, 66
  ])
);
// console.log(
//   bubbleSort2([
//     10, 5, 3, 9, 15, 19, 1, 20, 25, 30, 55, 13, 17, 7, 7, 32, 60, 54, 44, 46, 66
//   ])
// );
