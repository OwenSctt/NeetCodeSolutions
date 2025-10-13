/**
 * Daily Temperatures - LeetCode 739
 * https://leetcode.com/problems/daily-temperatures/
 * 
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that 
 * answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
 * Time Complexity: O(n) where n is the length of temperatures array
 * Space Complexity: O(1) - only using the result array (not counting input)
 */

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);

        for (let i = n - 2; i >= 0; i--) {
            let j = i + 1;
            while (j < n && temperatures[j] <= temperatures[i]) {
                if (res[j] === 0) {
                    j = n;
                    break;
                }
                j += res[j];
            }

            if (j < n) {
                res[i] = j - i;
            }
        }
        return res;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(solution.dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(solution.dailyTemperatures([30, 60, 90])); // [1, 1, 0]
