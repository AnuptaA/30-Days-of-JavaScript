/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let num = init;
  nums.forEach((element) => (num = fn(num, element)));
  return num;
};
