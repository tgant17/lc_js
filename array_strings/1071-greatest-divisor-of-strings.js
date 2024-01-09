// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

// *********************************************************************************************************** */
// For two strings s and t, we say "t divides s" if and only 
// if s = t + ... + t (i.e., t is concatenated with itself one 
// or more times).
//
// Given two strings str1 and str2, return the largest string 
// x such that x divides both str1 and str2.
//*********************************************************************************************************** */

// APPROACH
// Noticed it seemed like a recusion problem but had trouble 
// using recursion to solve it and had to do a recursion refresher


// Time Complexity
// o(n)
// Space Complexity



/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // base case
    if(str1 + str2 != str2 + str1) {
        return '';
    }
    else if(str1 == str2) {
        return str1;
    }
    else if(str1.length > str2.length) {
        return gcdOfStrings(str1.substring(str2.length), str2);
    }
    else {
        return gcdOfStrings(str2.substring(str1.length), str1);
    }
};