/* You have an array of numbers. Your task is to sort ascending odd numbers and descending even numbers.
Even and odd digits must maintain their indices. Note that zero is even number. If you have an empty array, return it. 

e.g. sortArray([5, 3, 2, 8, 1, 4]) === [1, 3, 8, 4, 5, 2]) */

const sortArray = arr => {
  let odds = arr.filter(int => int % 2).sort((a, b) => a - b);
  let evens = arr.filter(int => !(int % 2)).sort((a, b) => b - a);
  return arr.map(int => int % 2 ? odds.shift() : evens.shift());
};

console.assert(JSON.stringify(sortArray([5, 3, 2, 8, 1, 4, 11])) === JSON.stringify([1, 3, 8, 4, 5, 2, 11]));
console.assert(JSON.stringify(sortArray([2, 22, 37, 11, 4, 1, 5, 0])) === JSON.stringify([22, 4, 1, 5, 2, 11, 37, 0]));
console.assert(JSON.stringify(sortArray([1, 111, 11, 11, 2, 1, 5, 0])) === JSON.stringify([1, 1, 5, 11, 2, 11, 111, 0]));