// node google-10000-english-txt-to-json.js

const fs = require('fs');

fs.readFile('google-10000-english.txt', function read(err, data) {
  if (err) {
    throw err;
  }
  let words = data.toString().split('\n')
    .map(word => {
      return word.replace(/\W/, '');
    })
    .filter(word => {
      return word.length > 0;
    });
  fs.writeFile('google-10000-english.json', JSON.stringify(words), function (err) {
    if (err) {
      throw err;
    }
  });
});
