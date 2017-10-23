const getMaxProfit = arr => {
  let minPrice = arr[0];
  let maxProfit = arr[1] - arr[0];
  let potentialProfit;
  for (let i = 1; i < arr.length; i++) {
    potentialProfit = arr[i] - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, arr[i]);
  }
  return maxProfit;
};

let output = getMaxProfit([10, 8, 7, 6, 5, 1]);
console.log(output);
console.assert(getMaxProfit([10, 8, 7, 6, 5, 1]) === -1, '7 - 8 = -1');
console.assert(getMaxProfit([10, 7, 5, 8, 11, 9]) === 6, '11 - 5 = 6');