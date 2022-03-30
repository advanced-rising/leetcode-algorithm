/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let numsArr = nums;
  const index = nums.indexOf(target);
  if (index === -1) numsArr.push(target);
  return numsArr.sort((a, b) => a - b).indexOf(target);
};