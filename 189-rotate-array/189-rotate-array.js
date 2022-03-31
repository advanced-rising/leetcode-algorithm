/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   if(nums.length === 1) return;
    
    k = k % nums.length;
    let remove = nums.length-k;
    
    nums.splice(0,0, ...nums.splice(remove));
};