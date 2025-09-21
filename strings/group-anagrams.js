class Solution {
    /**
     * Problem: Group Anagrams
     * Difficulty: Medium
     * URL: https://neetcode.io/problems/group-anagrams
     * 
     * Description:
     * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
     * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
     * typically using all the original letters exactly once.
     * 
     * Time Complexity: O(n * m log m) - where n is the number of strings and m is the average length of strings
     * Space Complexity: O(n * m) - for storing the map and result
     * 
     * @param {string[]} strs - Array of strings to group
     * @return {string[][]} - Array of arrays containing grouped anagrams
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let i=0;i<strs.length;i++){
            let word = strs[i]
            let key = word.split("").sort().join("")

            if(!map.has(key)){
            map.set(key, [])
        }
        
        map.get(key).push(word)
    }
    return Array.from(map.values())
}
}
