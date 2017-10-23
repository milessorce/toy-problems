const rankScores = (unsortedScores, highestPossibleScore) => {
  let rankedScores = [];
  let maxScore = Math.max.apply(null, unsortedScores);
  while (unsortedScores.length) {
    for (let i = unsortedScores.length - 1; i >= 0; i--) {
      if (unsortedScores[i] === maxScore) {
        rankedScores.push(maxScore);
        unsortedScores.splice(i, 1);
      }
    }
    maxScore--;
  }
  return rankedScores;
};








var unsortedScores = [37, 89, 41, 65, 91, 53, 53];
var highestPossibleScore = 100;

let output = rankScores(unsortedScores, highestPossibleScore);
console.log(output); // [91, 89, 65, 53, 53, 41, 37]
