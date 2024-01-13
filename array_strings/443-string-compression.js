// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

// *********************************************************************************************************** */
// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.
//*********************************************************************************************************** */

// APPROACH
// Two pointers

// NOTE
// Did not realize the array had to be updated in place for the solution at first.
// After that, I had a hard time updating the array in cases where a group was longer than 10.
// This was solved by converting the count array to a string and the appending each value of the string.

// Time Complexity
// o(nlog(n))
// Space Complexity
// o(1)


/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if(chars.length < 2) {
        return chars.length;
    }

    var i = 0;
    var j = 0;

    while(i < chars.length) {
        count = 1;
        while(i < chars.length -1 && chars[i] === chars[i+1]) {
            count++;
            i++;
        }

        chars[j] = chars[i];
        j++;
        if(count > 1) {
            for(val of String(count)) {
                chars[j] = val; 
                j++;
            }
        }
        i++;
    }
    return j;
};