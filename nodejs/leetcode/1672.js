/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sum = 0;
    for (let i in accounts) {
        let _sum = accounts[i].reduce((a,b) => a+b);
        if (_sum > sum)
            sum = _sum;
    }
    return sum;
};


console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));