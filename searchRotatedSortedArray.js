const rotatedArraySearch = (array, target) => {
  if (array.length === 1 && array[0] === target) {
    return 0;
  }
  let pivotIndex;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      pivotIndex = i + 1;
    }
  }
  let start;
  let end;
  let middle;
  if (target <= array[pivotIndex - 1] && target >= array[0]) {
    start = 0;
    end = pivotIndex - 1;
    middle = Math.floor((start + end) / 2);
  } else if (target >= array[pivotIndex] && target <= array[array.length - 1]) {
    start = pivotIndex;
    end = array.length - 1;
    middle = Math.floor((start + end) / 2);
  } else {
    return -1;
  }
  while (array[middle] !== target && start < end) {
    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return middle;
};

let output = rotatedArraySearch([5, 6, 1, 2, 3, 4], 1);
console.log(output);