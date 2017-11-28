const quicksort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let middle = [];
  let right = [];
  arr.forEach(int => {
    if (int < pivot) {
      left.push(int);
    } else if (int > pivot) {
      right.push(int);
    } else {
      middle.push(int)
    }
  });
  return quicksort(left).concat(middle).concat(quicksort(right));
};

let list = [];
for (let i = 10000; i > 0; i--) {
  list.push(i);
}
let output = quicksort(list);
console.log(output);

console.assert(quicksort([9, 1, 3, 5, 4, 6, 6, 6, 8, 9, 1]), [ 1, 1, 3, 4, 5, 6, 6, 6, 8, 9, 9 ]);