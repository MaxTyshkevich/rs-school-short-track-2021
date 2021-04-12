/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let main = domains.map((elem) => elem.split('.').reverse().map((str, index, arr) => `.${arr.slice(0, index + 1).join('.')}`));
  main = [].concat(...main);
  const result = {};
  for (let i = 0; i < main.length; i++) {
    if (main[i] in result) {
      result[main[i]]++;
    } else {
      result[main[i]] = 1;
    }
  }
  return result;
}

module.exports = getDNSStats;
