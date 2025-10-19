class Solution {
    /**
     * Problem: Search 2D Matrix
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/search-2d-matrix
     * 
     * Description:
     * Write an efficient algorithm that searches for a value target in an m x n integer matrix.
     * This matrix has the following properties:
     * - Integers in each row are sorted from left to right
     * - The first integer of each row is greater than the last integer of the previous row
     * 
     * Time Complexity: O(log(m*n)) - binary search on flattened matrix
     * Space Complexity: O(1) - constant extra space
     * 
     * @param {number[][]} matrix - 2D matrix with sorted rows and columns
     * @param {number} target - Value to search for
     * @return {boolean} - True if target exists, false otherwise
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
            return false;
        }
        
        const rows = matrix.length;
        const cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midValue = matrix[Math.floor(mid / cols)][mid % cols];
            
            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
    
    /**
     * Alternative brute force approach (less efficient)
     * Time Complexity: O(m*n) - check every element
     * Space Complexity: O(1) - constant extra space
     */
    searchMatrixBruteForce(matrix, target) {
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] === target) {
                    return true;
                }
            }
        }
        return false;
    }
}

// Example usage:
// const solution = new Solution();
// const matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17]
// ];
// console.log(solution.searchMatrix(matrix, 5)); // true
// console.log(solution.searchMatrix(matrix, 15)); // false
