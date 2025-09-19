class Solution {
    /**
     * Problem: Contains Duplicate
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/contains-duplicate
     * 
     * Description:
     * Given an integer array nums, return true if any value appears at least twice in the array,
     * and return false if every element is distinct.
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     * 
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            }
            seen.add(nums[i]);
        }
        return false;
    }
}

// Alternative solution using sorting (O(n log n) time, O(1) space)
class SolutionAlternative {
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return true;
            }
        }
        return false;
    }
}
