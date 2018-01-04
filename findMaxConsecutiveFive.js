const findMaxConsecutiveFive = arr => {
  let maxIndex;
  let maxSum = 0;
  for (let i = 0; i < arr.length - 4; i++) {
    let currentSum = arr.slice(i, i + 5).reduce((a, b) => a + b);
    if (currentSum > maxSum) {
      maxIndex = i;
      maxSum = currentSum;
    }
  }
  return arr.slice(maxIndex, maxIndex + 5);
};

let a = [4, 3, 2, 7, 1, 2, 9, 3, 4, 5, 6, 8];
console.assert(JSON.stringify(findMaxConsecutiveFive(a)) === JSON.stringify([ 9, 3, 4, 5, 6 ]));

