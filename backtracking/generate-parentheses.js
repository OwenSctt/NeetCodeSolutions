/**
 * Generate Parentheses - LeetCode 22
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 * Time Complexity: O(4^n / sqrt(n)) - Catalan number
 * Space Complexity: O(4^n / sqrt(n)) - to store all valid combinations
 */

class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = Array.from({ length: n + 1 }, () => []);
        res[0] = [''];

        for (let k = 0; k <= n; k++) {
            for (let i = 0; i < k; i++) {
                for (const left of res[i]) {
                    for (const right of res[k - i - 1]) {
                        res[k].push('(' + left + ')' + right);
                    }
                }
            }
        }

        return res[n];
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.generateParenthesis(1)); // ["()"]
console.log(solution.generateParenthesis(2)); // ["(())","()()"]
console.log(solution.generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
