/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let startRange = -1;
  let endRange = array.length;
  while (endRange - startRange > 1) {
    const center = Math.floor((startRange + endRange) / 2);
    if (array[center] === value) return center;

    if (array[center] > value) {
      endRange = center;
    } else {
      startRange = center;
    }
  }

  return -1;
}

module.exports = findIndex;
