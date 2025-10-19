class Solution {
    /**
     * Problem: Koko Eating Bananas
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/koko-eating-bananas
     * 
     * Description:
     * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
     * The guards have gone and will come back in h hours.
     * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile.
     * If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
     * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
     * Return the minimum integer k such that she can eat all the bananas within h hours.
     * 
     * Time Complexity: O(n * log(max(piles))) - binary search approach
     * Space Complexity: O(1) - constant extra space
     * 
     * @param {number[]} piles - Array of banana piles
     * @param {number} h - Hours available
     * @return {number} - Minimum eating speed k
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (this.canEatAll(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    /**
     * Helper function to check if Koko can eat all bananas with given speed
     * @param {number[]} piles - Array of banana piles
     * @param {number} h - Hours available
     * @param {number} speed - Eating speed
     * @return {boolean} - True if can eat all bananas within h hours
     */
    canEatAll(piles, h, speed) {
        let totalTime = 0;
        for (const pile of piles) {
            totalTime += Math.ceil(pile / speed);
        }
        return totalTime <= h;
    }
    
    /**
     * Alternative linear search approach (less efficient)
     * Time Complexity: O(n * max(piles)) - linear search through all possible speeds
     * Space Complexity: O(1) - constant extra space
     */
    minEatingSpeedLinear(piles, h) {
        let speed = 1;
        while (true) {
            let totalTime = 0;
            for (let pile of piles) {
                totalTime += Math.ceil(pile / speed);
            }

            if (totalTime <= h) {
                return speed;
            }
            speed++;
        }
    }
}

// Example usage:
// const solution = new Solution();
// const piles1 = [3, 6, 7, 11];
// const piles2 = [30, 11, 23, 4, 20];
// const piles3 = [30, 11, 23, 4, 20];
// console.log(solution.minEatingSpeed(piles1, 8)); // 4
// console.log(solution.minEatingSpeed(piles2, 5)); // 30
// console.log(solution.minEatingSpeed(piles3, 6)); // 23
