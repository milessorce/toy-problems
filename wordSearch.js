/* Write a function that determines whether you can write a word using only consecutive 
(adjacent horizontal or vertical) characters in a grid. */

const grid = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

const doesWordExist = (board, word) => {
  let visitedCells = [];
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    visitedCells[rowIndex] = [];
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      visitedCells[rowIndex][colIndex] = false;
    }
  }   
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      if (nextChar(board, rowIndex, colIndex, visitedCells, word)) {
        return 'True';
      }
    }
  }
  return 'False';
};

const nextChar = (board, rowIndex, colIndex, visitedCells, word) => {
    if (visitedCells[rowIndex][colIndex] === false && board[rowIndex][colIndex] === word.charAt(0)) {
    word = word.slice(1);
    if (word.length < 1) {
      return true;
    }
    visitedCells[rowIndex][colIndex] = true;
    if (rowIndex > 0) {
      if (nextChar(board, rowIndex - 1, colIndex, visitedCells, word)) {
        return true; 
      }
    }
    if (rowIndex + 1 < board.length) {
      if (nextChar(board, rowIndex + 1, colIndex, visitedCells, word)) {
        return true;    
      }
    }
    if (colIndex > 0) {
      if (nextChar(board, rowIndex, colIndex - 1, visitedCells, word)) {
        return true; 
      }
    }
    if (colIndex + 1 < board[rowIndex].length) {
      if (nextChar(board, rowIndex, colIndex + 1, visitedCells, word)) {
        return true; 
      }
    }
    visitedCells[rowIndex][colIndex] = false;
  }
  return false;
};