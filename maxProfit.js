const stockPricesYesterday = [10, 7, 8, 9];

const getMaxProfit = arr => {
  let minPrice = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentPrice = arr[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
};

let output = getMaxProfit(stockPricesYesterday);
console.log(output);