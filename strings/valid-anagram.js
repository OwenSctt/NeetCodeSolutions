class Solution {
    /**
     * Problem: Valid Anagram
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/valid-anagram
     * 
     * Description:
     * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
     * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
     * typically using all the original letters exactly once.
     * 
     * Time Complexity: O(n log n) - due to sorting
     * Space Complexity: O(1) - if we don't count the space used for sorting
     * 
     * @param {string} s - First string
     * @param {string} t - Second string
     * @return {boolean} - True if t is an anagram of s, false otherwise
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        return s.split("").sort().join("") === t.split("").sort().join("")
    }
}
