const findRotationPoint = arr => {
  let middle = Math.floor(arr.length - 1);
  let start = 0;
  let end = arr.length - 1;
  while (Math.abs(start - end) > 1) {
    if (arr[middle] < arr[start]) {
      end = middle;
    } else if (arr[middle] > arr[end]) {
      start = middle;
    } else {
      return 0;
    }
    middle = Math.floor((start + end) / 2);
  }
  return end;
};

const words = [
  'karpatka',
  'othellolagkage',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender'
];

const rotatedNums = [6, 7, 1, 2, 3, 4, 5]
const orderedNums = [1, 2, 3, 4, 5];

console.assert(findRotationPoint(words) === 7);
console.assert(findRotationPoint(rotatedNums) === 2);
console.assert(findRotationPoint(orderedNums) === 0)