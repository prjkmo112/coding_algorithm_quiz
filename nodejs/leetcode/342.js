/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let n_binary = n.toString(2);
    return /^1(00)*$/.test(n_binary);
};


console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));