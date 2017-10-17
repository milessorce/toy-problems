const bestMatch = (a, z) => {
  if (z.length === 1) {
    return 0;
  }
  let minimumDifference = a[0] - z[0];
  let matchIndex = 0;
  let maxGoals = z[0];
  for (let i = 1; i < z.length; i++) {
    let currentDifference = a[i] - z[i];
    let currentGoals = z[i];
    if (currentDifference < minimumDifference) {
      matchIndex = i;
      maxGoals = currentGoals;
      minimumDifference = currentDifference;
    } else if (currentDifference === minimumDifference && currentGoals > maxGoals) {
      matchIndex = i;
      maxGoals = currentGoals;
    }
  }
  return matchIndex;
};

let output = bestMatch([7,19,19,8,5,11,7,13,13,6,2,10], [6,10,10,6,4,6,0,4,6,1,0,6]);
console.log(output);