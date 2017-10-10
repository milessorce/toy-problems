const isValid = str => {
  let storage = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      storage.push(')');
    } else if (str[i] === '[') {
      storage.push(']');
    } else if (str[i] === '{') {
      storage.push('}');
    } else if (str[i] !== storage[storage.length - 1]) {
      return false;
    } else if (str[i] === storage[storage.length - 1]) {
      storage.pop();
    }
  }
  if (storage.length > 0) {
    return false;
  }
  return true;
};

console.log(output);