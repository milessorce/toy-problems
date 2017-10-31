const pickTwoMovies = (flightLength, movieLengths) => {
  let lengthMap = movieLengths.reduce((map, length) => {
    map[length] = map[length] ? map[length] + 1 : 1;
    return map;
  }, {});
  for (i = 0; i < movieLengths.length; i++) {
    let firstMovieLength = movieLengths[i];
    let secondMovieLength = flightLength - firstMovieLength;
    if (firstMovieLength === secondMovieLength && lengthMap[secondMovieLength] > 1) {
      return true;
    } else if (lengthMap[secondMovieLength] && firstMovieLength !== secondMovieLength) {
      return true;
    }
  }
  return false;
};


let movieLengths = [5, 7, 3, 4, 2, 3];

console.assert(pickTwoMovies(10, movieLengths) === true);
console.assert(pickTwoMovies(12, movieLengths) === true);
console.assert(pickTwoMovies(5, movieLengths) === true);
console.assert(pickTwoMovies(4, movieLengths) === false, 'cannot watch same movie twice');