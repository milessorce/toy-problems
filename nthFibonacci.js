const nthFibonacci = n => {
  let a = 1;
  let b = 1
  let fibN = 2;
  while (fibN < n) {
    let temp = b;
    b = (a + b);
    a = temp;
    fibN++;
  }
  return b;
};

let output = nthFibonacci(7);
console.log(output); // 1, 1, 2, 3, 5, 8