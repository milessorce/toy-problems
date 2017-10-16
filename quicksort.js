const quicksort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let right = [];
  let left = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot).concat(quicksort(right));
};

let list = [];
for (let i = 10000; i > 0; i--) {
  list.push(i);
}
let output = quicksort(list);
console.log(output);