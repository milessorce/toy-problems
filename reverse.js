const reverse = num => {
  num = num.toString();
  num = num[0] === '-' ? Number(num.slice(1).split('').reverse().join('')) * -1 : Number(num.split('').reverse().join(''));
  if (num < -2147483648 || num > 2147483647) {
    return 0;
  } else {
    return num;
  }
};