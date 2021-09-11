// https://leetcode.com/problems/find-peak-element
var findPeakElement = function(nums) {
    nums = nums.concat(Array(8).fill(-10000000000))
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return 0;
};