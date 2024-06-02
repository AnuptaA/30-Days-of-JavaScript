/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let returnedArray = [];
  for (var x = 0; x < arr.length; x++) returnedArray.push(fn(arr[x], x));
  return returnedArray;
};
