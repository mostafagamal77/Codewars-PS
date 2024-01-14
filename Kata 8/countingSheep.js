// Consider an array/list of sheep where some sheep may be missing from 
// their place. We need a function that counts the number 
// of sheep present in the array (true means present).

// Initial value of 0
// loop through the array
// check if sheep === true . increase initial value + 1 


function countSheeps(arrayOfSheep) {
  let counter = 0;
  return arrayOfSheep.map((ele) => ele === true ? counter++ : '');
}