// Given an org chart and and employee, return an array containing every employee who reports up to the given employee.
// e.g. getSubordinates(org, c); // returns ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
// const org = {
//   a: ['b', 'c', 'd'],
//   c: ['e', 'f', 'g'],
//   e: ['h', 'i', 'j'],
//   f: ['k', 'l', 'm'],
//   g: ['n', 'o', 'p']
// };

const org = {
  a: ['b', 'c', 'd'],
  b: ['y'],
  c: ['e', 'f', 'g'],
  e: ['h', 'i', 'j'],
  g: ['k', 'l', 'm'],
  h: ['n', 'o', 'p'],
  y: ['z']
};

const getSubordinates = (org, employee) => {
  let results = [];
  let employeeQueue = [employee];
  while (employeeQueue.length) {
    let currentEmployee = employeeQueue.shift();
    if (org[currentEmployee]) {
      results = results.concat(org[currentEmployee]);
      employeeQueue = employeeQueue.concat(org[currentEmployee]);
    }
  }
  return results;
};

console.assert(getSubordinates(org, 'a').join('') === 'bcdyefgzhijklmnop');
console.assert(getSubordinates(org, 'c').join('') === 'efghijklmnop');
console.assert(getSubordinates(org, 'b').join('') === 'yz');
console.assert(getSubordinates(org, 'e').join('') === 'hijnop');

