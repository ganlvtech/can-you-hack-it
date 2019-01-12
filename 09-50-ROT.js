/**
 * ROT
 *
 * Rotation cipher challenge.
 *
 * a se tay! al'k lzw haulmjwk lzsl ygl kesdd.
 *
 * Submit the decrypted message.
 */

/**
 * @link http://stackoverflow.com/a/617685/987044
 */
function rot(s, i) {
  return s.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
  });
}

function tryRot(encrypted) {
  for (let i = 0; i < 26; i++) {
    console.log(i, rot(encrypted, i));
  }
}

tryRot('a se tay! al\'k lzw haulmjwk lzsl ygl kesdd.');

// Find the answer from the 26 results by yourself
