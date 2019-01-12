/**
 * Super ROT
 *
 * Solve all rotated strings in under 180 seconds.
 * You're not going to be able to do this by hand.
 * Also don't get any wrong or you have to start over.
 * Answered: 0/50
 *
 * Time Remaining: 179
 *
 * gtuznkx oy got'z noy
 *
 * Submit the decrypted message.
 *
 * Console message:
 *
 * To submit here, use the SuperRot_submit(answer) function.
 * It will return a promise that will resolve with a bool for whether or not the answer was correct.
 * Use the function SuperRot_getEncryptedMessage() to retrieve the current message to solve.
 */

/**
 * @link http://stackoverflow.com/a/617685/987044
 */
function rot(s, i) {
  return s.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
  });
}

function testIsEnglish(sentence) {
  let sanitizedSentence = sentence.toLowerCase()
    .replace('\'s', ' ')
    .replace('\'re', ' ')
    .replace('\'d', ' ')
    .replace('n\'t', ' ')
    .replace(/\W/g, ' ')
    .replace(/ +/g, ' ');
  let words = sanitizedSentence.split(' ');
  let matchedWords = 0;
  let matchedLength = 0;
  words.forEach((word) => {
    let matched = false;
    if (englishCommonWords.indexOf(word) >= 0) {
      matched = true;
    } else if (word.endsWith('s')) {
      if (englishCommonWords.indexOf(word.replace(/s$/, '')) >= 0) {
        matched = true;
      } else if (word.endsWith('es')) {
        if (englishCommonWords.indexOf(word.replace(/es$/, '')) >= 0) {
          matched = true;
        } else if (word.endsWith('ies') && englishCommonWords.indexOf(word.replace(/ies$/, 'y')) >= 0) {
          matched = true;
        }
      }
    } else if (word.endsWith('d')) {
      if (englishCommonWords.indexOf(word.replace(/d$/, '')) >= 0) {
        matched = true;
      } else if (word.endsWith('ed')) {
        if (englishCommonWords.indexOf(word.replace(/ed$/, '')) >= 0) {
          matched = true;
        } else if (word.endsWith('ied') && englishCommonWords.indexOf(word.replace(/ied$/, 'y')) >= 0) {
          matched = true;
        }
      }
    } else if (word.endsWith('ing')) {
      if (englishCommonWords.indexOf(word.replace(/ing$/, '')) >= 0) {
        matched = true;
      }
    }
    if (matched) {
      matchedWords++;
      matchedLength += word.length;
    }
  });
  return (matchedWords + matchedLength / sentence.replace(/\W/g, '').length) / (words.length + 1);
}

function tryRot(encrypted) {
  let max = 0;
  let result = '';
  for (let i = 0; i < 26; i++) {
    let sentence = rot(encrypted, i);
    let similarity = testIsEnglish(sentence);
    if (similarity > max) {
      console.log(sentence, similarity);
      max = similarity;
      result = sentence;
    }
  }
  return result;
}

function solveSuperRot(result = true) {
  if (result) {
    let encrypted = SuperRot_getEncryptedMessage();
    console.log(encrypted);
    let decrypted = tryRot(encrypted);
    SuperRot_submit(decrypted).then(solveSuperRot);
  }
}

solveSuperRot();
