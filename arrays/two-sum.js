class Solution {
    /**
     * Problem: Two Sum
     * Difficulty: Easy
     * URL: https://neetcode.io/problems/two-sum
     * 
     * Description:
     * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
     * You may assume that each input would have exactly one solution, and you may not use the same element twice.
     * You can return the answer in any order.
     * 
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - for the hash map
     * 
     * @param {number[]} nums - Array of integers
     * @param {number} target - Target sum
     * @return {number[]} - Array containing the two indices
     */
    twoSum(nums, target) {
        let map = {}
        for(let i = 0;i < nums.length; i++){
            let difference = target - nums[i]
            if(difference in map){
               return [map[difference], i] 
            }
            map[nums[i]] = i
        }
    }
}
