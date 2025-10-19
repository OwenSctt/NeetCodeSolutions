class Solution {
    /**
     * Problem: Find Minimum in Rotated Sorted Array
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/find-minimum-in-rotated-sorted-array
     * 
     * Description:
     * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
     * For example, the array nums = [0,1,2,4,5,6,7] might become:
     * - [4,5,6,7,0,1,2] if it was rotated 4 times.
     * - [0,1,2,4,5,6,7] if it was rotated 7 times.
     * Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
     * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
     * You must write an algorithm that runs in O(log n) time.
     * 
     * Time Complexity: O(log n) - binary search approach
     * Space Complexity: O(1) - constant extra space
     * 
     * @param {number[]} nums - Rotated sorted array with unique elements
     * @return {number} - Minimum element in the array
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        while (l <= r) {
            // If the current subarray is sorted, the leftmost element is the minimum
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            let m = l + Math.floor((r - l) / 2);
            res = Math.min(res, nums[m]);
            
            // Determine which half contains the minimum
            if (nums[m] >= nums[l]) {
                // Left half is sorted, minimum is in right half
                l = m + 1;
            } else {
                // Right half is sorted, minimum is in left half
                r = m - 1;
            }
        }
        return res;
    }
    
    /**
     * Alternative approach using linear search (less efficient)
     * Time Complexity: O(n) - linear search through array
     * Space Complexity: O(1) - constant extra space
     */
    findMinLinear(nums) {
        let min = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
    }
}

// Example usage:
// const solution = new Solution();
// const nums1 = [3, 4, 5, 1, 2];
// const nums2 = [4, 5, 6, 7, 0, 1, 2];
// const nums3 = [11, 13, 15, 17];
// const nums4 = [2, 1];
// console.log(solution.findMin(nums1)); // 1
// console.log(solution.findMin(nums2)); // 0
// console.log(solution.findMin(nums3)); // 11
// console.log(solution.findMin(nums4)); // 1
