/**
 * Paid Content
 *
 * Pay for things you want!
 *
 * You must be a paid user to proceed.
 */

window.sec_func_name_paid_content = function (tag) {
  let promise = $.Deferred();
  tag.challenge.paid = true;
  return promise.resolve(JSON.stringify(tag.challenge));
};
