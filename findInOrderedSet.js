/* Suppose we had an array of n integers sorted in ascending order. 
How quickly could we check if a given integer is in the array? */

const isIntInArr = (arr, target) => {
  let middle = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length - 1;
  while (arr[middle] !== target && start < end) {
    if (target < arr[middle]) {
      end = middle - 1;
    } else if (target > arr[middle]) {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === target ? true : false;
};


let arr = [1, 2, 4, 6, 7, 9];
for (let i = 0; i <= 10; i++) {
  console.log(i, isIntInArr(arr, i));
}