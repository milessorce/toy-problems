const findDuplicate = arr => {
  let charMap = {};
  arr.forEach(char => {
    if (charMap[char]) {
      charMap = char;
    } else {
      charMap[char] = true;
    }
  });
  return charMap;
};

console.assert(findDuplicate([5, 8, 2, 4, 1, 5]) === 5, '5 is repeated int');
console.assert(findDuplicate([5, 2, 8, 2, 4, 1, 5]) === 2, '2 is repeated first');