// Given an unsorted array of integers, find a pair with a given sum in it

const findPair = (integers, sum) => {
  let seen = {};
  for (let i = 0; i < integers.length; i++) {
    const diff = sum - integers[i];
    if (seen[diff] >= 0) {
      return String(seen[diff]) + String(i);
    }
    seen[integers[i]] = i;
  }
  return -1;
};

console.assert(findPair([8, 7, 2, 5, 3, 1], 10) === '02');
console.assert(findPair([8, 7, 2, 5, 3, 1], 7) === '23');
console.assert(findPair([8, 7, 2, 5, 3, 1], 100) === -1);