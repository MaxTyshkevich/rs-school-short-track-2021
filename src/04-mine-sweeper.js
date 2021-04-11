/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new Error('Not implemented');
  /*
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) {
      let cell = matrix[i][j]; // true/false

      let top = matrix[i - 1][j];
      let bottom = matrix[i + 1][j];
      let left = matrix[i][j - 1];
      let right = matrix[i][j + 1];

    }
  } */
}

module.exports = minesweeper;
