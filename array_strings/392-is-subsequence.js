// https://leetcode.com/problems/is-subsequence/description/

// *********************************************************************************************************** */
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by 
// deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//*********************************************************************************************************** */

// APPROACH
// Two pointers. Tried using a extra loop at first but then changed it and 
// did it in one


// Time Complexity
// o(n)
// Space Complexity
// o(1)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var j = 0;
    var i = 0;
    
    while(i < s.length && j < t.length) {
        if(s[i] === t[j])
            i++;
        j++;
    }

    return i === s.length;
};