const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

// var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
// let output = mergeSort(a);
// console.log(output);

let list = [];
for (let i = 1000000; i > 0; i--) {
  list.push(i);
}

let output = mergeSort(list);
console.log(output)