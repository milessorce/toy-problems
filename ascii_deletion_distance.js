const ascii_deletion_distance =(str1, str2) => {
    if (str1 === str2) {
        return 0;
    }
    const letterMap1 = str1.split('').reduce((map, char) => {
        map[char] = map[char] ? map[char] + 1 : 1;
        return map;
    }, {});
    const letterMap2 = str2.split('').reduce((map, char) => {
        map[char] = map[char] ? map[char] + 1 : 1;
        return map;
    }, {});
    let distance = 0;
    for (let char in letterMap1) {
        if (letterMap1[char] && letterMap2[char] && letterMap1[char] !== letterMap2[char]) {
            distance += (char.charCodeAt(0) * Math.abs(letterMap1[char] - letterMap2[char]));
        } else if (letterMap1[char] && !letterMap2[char]) {
            distance += (char.charCodeAt(0) * letterMap1[char]);
        }
    }
    for (let char in letterMap2) {
        if (letterMap2[char] && !letterMap1[char]) {
            distance += (char.charCodeAt(0) * letterMap2[char]);
        }
    }
    return distance;
}

console.assert(ascii_deletion_distance('at', 'at') === 0);
console.assert(ascii_deletion_distance('at', 'cat') === 99);
console.assert(ascii_deletion_distance('boat', 'got') === 298);
console.assert(ascii_deletion_distance('thought', 'sloughs') === 674);
