/* An array is defined to be odd-heavy if it contains at least one odd element and 
every element whose value is odd is greater than every even-valued element.
Write a function called isOddHeavy that accepts an integer array and returns true 
if the array is odd-heavy else return false. */

const isOddHeavy = arr => {
  let intMap = arr.reduce((map, int) => {
    if (int % 2 === 0) {
      map.even.push(int);
    } else {
      map.odd.push(int);
    }
    return map;
  }, {even: [], odd: []});
  if (intMap.odd.length < 1) {
    return false;
  }
  return Math.min.apply(null, intMap.odd) > Math.max.apply(null, intMap.even);
};

console.assert(isOddHeavy([0,2,19,4,4]) === true);
console.assert(isOddHeavy([1,-2,-1,2]) === false);