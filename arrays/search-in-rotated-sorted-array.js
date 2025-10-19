class Solution {
    /**
     * Problem: Search in Rotated Sorted Array
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/search-in-rotated-sorted-array
     * 
     * Description:
     * There is an integer array nums sorted in ascending order (with distinct values).
     * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.
     * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
     * You must write an algorithm with O(log n) runtime complexity.
     * 
     * Time Complexity: O(log n) - binary search approach
     * Space Complexity: O(1) - constant extra space
     * 
     * @param {number[]} nums - Rotated sorted array with distinct values
     * @param {number} target - Value to search for
     * @return {number} - Index of target if found, -1 otherwise
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                return mid;
            }
            
            // Check which half is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
    
    /**
     * Alternative approach using indexOf (less efficient)
     * Time Complexity: O(n) - linear search
     * Space Complexity: O(1) - constant extra space
     */
    searchLinear(nums, target) {
        return nums.indexOf(target);
    }
}

// Example usage:
// const solution = new Solution();
// const nums1 = [4, 5, 6, 7, 0, 1, 2];
// const nums2 = [1];
// const nums3 = [1, 3];
// console.log(solution.search(nums1, 0)); // 4
// console.log(solution.search(nums1, 3)); // -1
// console.log(solution.search(nums2, 0)); // -1
// console.log(solution.search(nums3, 3)); // 1
