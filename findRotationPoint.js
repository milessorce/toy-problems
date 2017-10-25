const findRotationPoint = arr => {
  let middle = Math.floor(arr.length - 1);
  let start = 0;
  let end = arr.length - 1;
  while (Math.abs(start - end) > 1) {
    if (arr[middle] < arr[start]) {
      end = middle;
    } else if (arr[middle] > arr[end]) {
      start = middle;
    }
    middle = Math.floor((start + end) / 2);
  }
  return end;
};

var words = [
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

var nums = [6, 7, 1, 2, 3, 4, 5]

console.assert(findRotationPoint(words) === 7);
console.assert(findRotationPoint(nums) === 2);