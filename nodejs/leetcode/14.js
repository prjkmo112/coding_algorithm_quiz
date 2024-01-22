/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = '';
    
    strs = strs.sort((a,b) => b.length - a.length);
    let max_str_len = strs[0].length;
    let idx = 0;
    do {
        let _common;
        let pass = false;
        for (let i in strs) {
            if (_common === undefined) {
                if (strs[i] === "")
                    _common = "";
                else
                    _common = strs[i][idx];
                pass = true;
            } else if (_common !== strs[i][idx])
                pass = false;

            if (!pass)
                break;
        }

        if (pass)
            common += _common;
        else
            break;
        idx++;
    } while (idx < max_str_len);

    return common;
};


console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["c","acc","ccc"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a","ac"]));