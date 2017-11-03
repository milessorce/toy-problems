const findHighestProductOf3 = arrayOfInts => {
  let high = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let low = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  for (let i = 2; i < arrayOfInts.length; i++) {
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * arrayOfInts[i], lowestProductOf2 * arrayOfInts[i]);
    highestProductOf2 = Math.max(highestProductOf2, high * arrayOfInts[i], low * arrayOfInts[i]);
    lowestProductOf2 = Math.min(lowestProductOf2, high * arrayOfInts[i], low * arrayOfInts[i]);
    high = Math.max(high, arrayOfInts[i]);
    low = Math.min(low, arrayOfInts[i]);
  }
  return highestProductOf3;
};

let output = findHighestProductOf3([1, 10, -5, 1, -100]);
console.log(output);