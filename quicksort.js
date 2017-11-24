const quicksort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[Math.floor(arr.length / 2)];
  let right = [];
  let left = [];
  arr.forEach(int => {
    if (int < pivot) {
      left.push(int);
    } else if (int > pivot) {
      right.push(int);
    }
  });
  return quicksort(left).concat(pivot).concat(quicksort(right));
};

let list = [];
for (let i = 10000; i > 0; i--) {
  list.push(i);
}
let output = quicksort(list);
console.log(output);