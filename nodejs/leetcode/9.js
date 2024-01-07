/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return `${x}` == `${x}`.split("").reverse().join("");
};


/**
 * Follow up: Could you solve it without converting the integer to a string?
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    if (x<0 || (x!=0 && x%10 == 0)) return false;
    
    let reverse = 0;
    for (let i=x; i>=1; i=parseInt(i/10)) {
        reverse = reverse*10 + i%10;
    }
    return reverse == x;
};


console.log(isPalindrome2(121));
console.log(isPalindrome2(-121));
console.log(isPalindrome2(10));
console.log(isPalindrome2(212));