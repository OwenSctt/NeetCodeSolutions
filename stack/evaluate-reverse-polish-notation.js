/**
 * Evaluate Reverse Polish Notation - LeetCode 150
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 * 
 * Time Complexity: O(n) where n is the number of tokens
 * Space Complexity: O(1) - modifies input array in place
 */

class Solution {
    evalRPN(tokens) {
        while (tokens.length > 1) {
            for (let i = 0; i < tokens.length; i++) {
                if ('+-*/'.includes(tokens[i])) {
                    const a = parseInt(tokens[i - 2]);
                    const b = parseInt(tokens[i - 1]);
                    let result;
                    if (tokens[i] === '+') result = a + b;
                    else if (tokens[i] === '-') result = a - b;
                    else if (tokens[i] === '*') result = a * b;
                    else if (tokens[i] === '/') result = Math.trunc(a / b);

                    tokens.splice(i - 2, 3, result.toString());
                    break;
                }
            }
        }
        return parseInt(tokens[0]);
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(solution.evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(solution.evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
