// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

// *********************************************************************************************************** */
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
//*********************************************************************************************************** */

// APPROACH
// Two pointers. 

// NOTE
// First solution
// Time - o(nlog(n))
// Space - o(1)

// Second Solution 
// Time - o(n)
// Space - o(1)


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length === 1) {
        return nums;
    }
    var ptr1 = 0;
    var ptr2 = 0;

    while(ptr1 < nums.length) {
        if(nums[ptr1] === 0) {
            ptr2 = ptr1;
            while(ptr2 < nums.length) {
                if(nums[ptr2] !== 0) {
                    let temp = nums[ptr1];
                    nums[ptr1] = nums[ptr2];
                    nums[ptr2] = temp;
                    break;
                }
                ptr2++; 
            }
        }
        ptr1++;
    }
    return nums;
};


// Solution 2
// Follow up: Could you minimize the total number of operations done?
// var moveZeroes = function(nums) {
//     var l = 0;
//     for(let r=0; r<nums.length; r++) {
//         if(nums[r] !== 0) {
//             let temp = nums[r];
//             nums[r] = nums[l];
//             nums[l] = temp;
//             l++;
//         }
//     }
//     return nums;
// };