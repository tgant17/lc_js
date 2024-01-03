// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
// *********************************************************************************************************** */
// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
//
// Return the merged string.
//*********************************************************************************************************** */

// APPROACH
// Two pointers 

// Time Complexity
// o(n)
// Space Complexity
// o(1)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var merged = word1[0] + word2[0];
    var totalLength = word1.length + word2.length;
    var w1ptr = 1;
    var w2ptr = 1;

    while(merged.length !== totalLength) {
        if(w1ptr !== word1.length) {
            merged += word1[w1ptr];
            w1ptr++;
        }
        if(w2ptr !== word2.length) {
            merged += word2[w2ptr];
            w2ptr++;
        }
    }
    return merged;
};