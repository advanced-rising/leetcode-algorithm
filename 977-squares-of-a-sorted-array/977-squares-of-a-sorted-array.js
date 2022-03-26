/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let numsArr = [];
  for (let k = 0; k < nums.length; k++) {
    let mutilple = nums[k]* nums[k];
    numsArr.push(mutilple);
  }
  let noswap = true;
  for (let i = numsArr.length; i > 0; i++) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (numsArr[j] > numsArr[j + 1]) {
        let temp = numsArr[j];
        numsArr[j] = numsArr[j + 1];
        numsArr[j + 1] = temp;
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return numsArr;
};