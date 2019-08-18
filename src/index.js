
const dictionary = {
  3: 'my',
  5: 'theresa',
  7: 'clothes'
};

/**
 * return sentence if the provided number is divisible by provided number
 * @param {number} number input
 * @returns {string|number} returns sentence or number
 */
function getMyWord(number) {
  let sentence = '';
  for (const key in dictionary) {
    if (isDivisible(number, key)) {
      sentence += dictionary[key];
    }
  }
  if (!sentence.length) return number;
  return sentence;
}

/**
 * update dictionary if the provided key is unique
 * @param {number} key dictionary key
 * @param {string} value dictionary key value
 * @returns {boolean} status
 */
function updateDictionary(key, value) {
  if (!dictionary.hasOwnProperty(key)) {
    dictionary[key] = value;
    return true;
  }
  return false;
}

/**
 * check if number is divisible
 * @param {number} first first number
 * @param {number} second second number
 * @returns {boolean} status
 */
function isDivisible(first, second) {
  return first % second === 0;
}

export default { getMyWord, updateDictionary };
