/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = '';
    let _common = '';
    
    let useBreak = false;
    let idx = 0;
    do {
        _common += strs[0][idx];
        if (_common === undefined)
            break;
        
        let suc = true;
        for (let i in strs) {
            suc = true;
            if (strs[i].indexOf(_common) < 0)
                suc = false;
            if (strs[i][idx] === undefined)
                useBreak = true;
        }

        if (useBreak)
            break;
        
        if (suc) {
            common += strs[0][idx];
        }
        idx++
    } while (!useBreak);

    return common;
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["c","acc","ccc"]));