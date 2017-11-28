/* Given an array arr that contains some integers(positive, negative or 0), 
and a range list such as [[start1,end1],[start2,end2],...], start and end 
are the index of arr and start always less than end. Your task is to 
calculate the sum value of each range (start index and end index are both 
inclusive), and return the maximum sum value. */

const maxSum = (arr, ranges) => {
  let results = ranges.map(range => {
    return arr.slice(range[0], range[1] + 1).reduce((a, b) => a + b);
  });
  return Math.max.apply(null, results);
};

console.assert(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6);
console.assert(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5);
console.assert(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0);