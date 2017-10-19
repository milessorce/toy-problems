function ascii_deletion_distance(str1, str2) {
  if (str1 === str2) {
    return 0;
  }
  let letterMap1 = str1.split('').reduce((map, char) => {
    map[char] = map[char] ? map[char] + 1 : 1;
    return map;
  }, {});
  let letterMap2 = str2.split('').reduce((map, char) => {
    map[char] = map[char] ? map[char] + 1 : 1;
    return map;
  }, {});
  let distance = 0;
  for (let char in letterMap1) {
    if (letterMap1[char] && letterMap2[char] && letterMap1[char] !== letterMap2[char]) {
      let num = Math.abs(letterMap1[char] - letterMap2[char]);
      distance += (char.charCodeAt(0) * num);
    } else if (letterMap1[char] && !letterMap2[char]) {
      let num = letterMap1[char];
      distance += (char.charCodeAt(0) * num);
    }
  }
  for (let char in letterMap2) {
    if (letterMap2[char] && !letterMap1[char]) {
      let num = letterMap2[char];
      distance += (char.charCodeAt(0) * num);
    }
  }
  return distance;
}

console.assert(ascii_deletion_distance('at', 'cat') === 99);
console.assert(ascii_deletion_distance('boat', 'got') === 298);
console.assert(ascii_deletion_distance('thought', 'sloughs') === 674);
