const quicksort = arr => {
  if (arr.length === 0) {
    return [];
  }
  let pivot = arr[0];
  let right = [];
  let left = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
};

let a = [22, 44, 11, 13, 1, 141, 12, 1, 99, 53];
let output = quicksort(a);
console.log(output);