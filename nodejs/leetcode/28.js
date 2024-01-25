/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};



let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack, needle));

haystack = "leetcode", needle = "leeto";
console.log(strStr(haystack, needle));