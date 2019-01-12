/**
 * Timer
 * Wait until the timer completes to press the submit button.
 *
 * How much time is left?
 *
 * Time Remaining: 3155759
 */

window.Timer_submit = function (tag) {
  let promise = $.Deferred();
  return promise.resolve(localStorage.getItem('hackerchallenge.timer.resp'));
};
