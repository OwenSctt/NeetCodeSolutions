class Solution {
    /**
     * Problem: Top K Frequent Elements
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/top-k-frequent-elements
     * 
     * Description:
     * Given an integer array nums and an integer k, return the k most frequent elements.
     * You may return the answer in any order.
     * 
     * Time Complexity: O(n) - where n is the length of nums
     * Space Complexity: O(n) - for the frequency map and buckets array
     * 
     * @param {number[]} nums - Array of integers
     * @param {number} k - Number of most frequent elements to return
     * @return {number[]} - Array containing the k most frequent elements
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        }

  const buckets = Array(nums.length + 1).fill().map(() => []);
  for (let [num, count] of freq.entries()) {
    buckets[count].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}}
