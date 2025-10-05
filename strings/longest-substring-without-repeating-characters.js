
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                const substring = s.slice(i, j + 1);
                const set = new Set(substring);

                if (set.size === substring.length) {
                    maxLength = Math.max(maxLength, substring.length);
                }
            }
        }

        return maxLength;
    }
}
