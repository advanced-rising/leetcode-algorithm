/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let numsArr = nums;
  const index = nums.indexOf(target);

  if (index === -1) {
    numsArr.push(target);
  }
  numsArr.sort((a, b) => a - b);
  return numsArr.indexOf(target);
};