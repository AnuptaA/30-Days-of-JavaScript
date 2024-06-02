/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtered = [];
    arr.forEach((element, index) => {
        if (Boolean(fn(element, index)) == true) filtered.push(element);
    });
    return filtered;
};