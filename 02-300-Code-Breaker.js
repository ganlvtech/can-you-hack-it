/**
 * Break the alpha-numeric code like in spy movies.
 * Each guess returns a score.
 * The higher the score the more characters you have correct and in the correct position.
 *
 * Submit your guesses (code is 7 alpha-numeric characters long).
 *
 * Console message:
 * To submit here, use the CodeBreaker_submit(code) function.
 * It will return a promise that will resolve with the score of the submission.
 */

function findUsedChars(chars, index = 0, usedChars = []) {
  if (typeof chars === 'undefined') {
    chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  }
  if (index >= chars.length) {
    console.log(usedChars);
    return Promise.resolve(usedChars);
  }
  let ch = chars[index];
  let code = ch.repeat(7);
  return new Promise(resolve => {
    CodeBreaker_submit(code)
      .then(score => {
        console.log(code, score);
        if (score > 0) {
          usedChars.push(ch);
        }
        findUsedChars(chars, index + 1, usedChars).then(resolve);
      });
  });
}

function findCharsPos(usedChars = [], index = 0, pos = 0, result = []) {
  if (index >= usedChars.length) {
    console.log(result);
    return Promise.resolve(result);
  }
  if (pos >= 7) {
    return findCharsPos(usedChars, index + 1, 0, result);
  }
  let ch = usedChars[index];
  let code = '-'.repeat(pos) + ch + '-'.repeat(6 - pos);
  return new Promise(resolve => {
    CodeBreaker_submit(code)
      .then(score => {
        console.log(code, score);
        if (score > 0) {
          result[pos] = ch;
        }
        findCharsPos(usedChars, index, pos + 1, result).then(resolve);
      });
  });
}

function solveCodeBreaker() {
  findUsedChars()
    .then(usedChars => {
      return findCharsPos(usedChars);
    })
    .then(result => {
      let code = result.join('');
      console.log(code);
      CodeBreaker_submit(code);
    });
}

solveCodeBreaker()
