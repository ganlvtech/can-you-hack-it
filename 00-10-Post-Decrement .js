/**
 * Post Decrement
 *
 * int i = 5;
 * while (i-- > 0) {
 *     printf("%d,", i);
 * }
 *
 * What's the output for the code snippet above?
 *
 * 4,3,2,1,0,
 */

function getAnswer() {
  let result = '';
  let i = 5;
  while (i-- > 0) {
    result += `${i},`;
  }
  return result;
}

console.log(getAnswer());
