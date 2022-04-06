/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = -Infinity;
  let sum = 0;

  for (const num of nums) {
    sum += num;

    if (sum > result) {
      result = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return result;
};