const hasPalindromicPermutation = str => {
  let letterMap = str.split('').reduce((map, char) => {
    map[char] = map[char] ? map[char] + 1 : 1;
    return map;
  }, {});
  let oddCharacterCount = 0;
  for (let char in letterMap) {
    if (letterMap[char] % 2 !== 0) {
      oddCharacterCount++;
    }
  }
  if (str.length % 2 === 0) {
    return oddCharacterCount > 0 ? false : true;
  } else {
    return oddCharacterCount === 1 ? true: false;
  }
};

let test1 = hasPalindromicPermutation('aabbccef');
let test2 = hasPalindromicPermutation('aabbcce');
let test3 = hasPalindromicPermutation('aabbccee');
console.assert(test1 === false, 'two singles');
console.assert(test2 === true, 'one single');
console.assert(test3 === true, 'all doubles');
