function zeroPlentiful(arr){
  let zeroCount = 0;
  let sequenceCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[arr.length - 1] === 0 && sequenceCount > 0 && zeroCount === 0) {
          return 0;
    } else if (arr[i] === 0) {
      zeroCount++;
      if (zeroCount === 4) {
        sequenceCount++;
      }
    } else if (arr[i] !== 0 && zeroCount > 0 && zeroCount < 4) {
      return 0;
    } else if (arr[i] !== 0) {
      zeroCount = 0;
    } 
  }
  return sequenceCount;
}

let output = zeroPlentiful([0, 0, 0, 0, 1, 0]);
console.log(output)