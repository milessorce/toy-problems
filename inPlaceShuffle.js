const getRandom = (floor, ceiling) => {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

const shuffle = arr => {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let randomIndex = getRandom(i, arr.length - 1);
    if (randomIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  }
  return arr;
};

console.assert(shuffle([1, 2, 3, 4, 5] !== [1, 2, 3, 4, 5]));

let output = shuffle([1, 2, 3, 4, 5]);
console.log(output);

