https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

// *********************************************************************************************************** */
// You have a long flowerbed in which some of the plots are planted, 
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, 
// where 0 means empty and 1 means not empty, and an integer n, 
// return true if n new flowers can be planted in the flowerbed 
// without violating the no-adjacent-flowers rule and false otherwise.
//*********************************************************************************************************** */

// APPROACH
// Step through the array and "plant flowers" as you go. when you plant one you
// decrement the count and then when the count reaches 0 that means all flowers have 
// been planted.

// NOTE
// Didn't read carefully enough at first I was confused on what the max value was to be

// Time Complexity
// o(n)
// Space Complexity
// o(1)

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = n;

    for(let i=0; i<flowerbed.length; i++) {
        if(count === 0) {
            return true;
        }
        let prev = i > 0 ? flowerbed[i-1] : 0;
        let next = i < flowerbed.length - 1 ? flowerbed[i+1] : 0;

        if(prev != 1 && next != 1 && flowerbed[i] != 1) {
            flowerbed[i] = 1;
            count--;
        }
    }
    return count <= 0;
};