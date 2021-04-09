/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let chair = '';
  let result = '';
  for (let i = 0; i <= str.length; i++) {
    if (chair.includes(str[i])) {
      chair += str[i];
    } else {
      if (chair.length > 1) {
        result += chair.length + chair[0];
      } else if (chair.length === 1) {
        result += chair[0];
      }
      chair = str[i];
    }
  }
  return result;
}

module.exports = encodeLine;
