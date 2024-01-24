/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracket_info = [];

    for (let i in s) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            bracket_info.unshift(s[i]);
        } else {
            if ((s[i] === ")" && bracket_info[0] === "(") || (s[i] === "}" && bracket_info[0] === "{") || (s[i] === "]" && bracket_info[0] === "["))
                bracket_info.shift();
            else
                return false;
        }
    }

    return bracket_info.length === 0;
};



console.log(isValid("()"));     // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("([]{})"));   // true
console.log(isValid("([{}])"));   // true