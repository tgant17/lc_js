// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

// *********************************************************************************************************** */
// There are n kids with candies. You are given an integer array candies, 
// where each candies[i] represents the number of candies the ith kid has, 
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, 
// where result[i] is true if, after giving the ith kid all the extraCandies, 
// they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.
//*********************************************************************************************************** */

// APPROACH
// Find max value in the array. Then compare the rest of the array to this value with
// the extraCandies being accounted for.

// NOTE
// Didn't read carefully enough at first I was confused on what the max value was to be

// Time Complexity
// o(n)
// Space Complexity
// o(n)


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = 0; 
    for(candy of candies) {
        max = candy > max ? candy : max;
    }
    return candies.map((candy) => {
        if(candy + extraCandies >= max) {
            return true;
        }
        return false;
    });
};