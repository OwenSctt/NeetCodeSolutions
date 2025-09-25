class Solution {
    /**
     * Problem: Valid Palindrome
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/valid-palindrome
     * 
     * Description:
     * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
     * and removing all non-alphanumeric characters, it reads the same forward and backward.
     * Alphanumeric characters include letters and numbers.
     * 
     * Time Complexity: O(n) - where n is the length of the string
     * Space Complexity: O(n) - due to creating reversed string
     * 
     * @param {string} s - Input string to check
     * @return {boolean} - True if s is a palindrome, false otherwise
     */
    isPalindrome(s) {
        let pal = s.split("").reverse().join("")
        
        if(s === pal){
            return true
        }
        return false
    }
}
