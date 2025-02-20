/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s2Array = [...s2];
  for (let i = 0; i < s1.length; i++) {
    const target = s2Array.indexOf(s1[i]);
    if (target !== -1) {
      result++;
      s2Array.splice(target, 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
