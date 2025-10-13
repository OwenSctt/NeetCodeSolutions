class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        const len1 = s1.length;
        const len2 = s2.length;

        if (len1 > len2) return false;

        const sortString = str => str.split('').sort().join('');

        const sortedS1 = sortString(s1);

        for (let i = 0; i <= len2 - len1; i++) {
            const substring = s2.slice(i, i + len1);
            if (sortString(substring) === sortedS1) {
                return true;
            }
        }

        return false;
    }
}

