/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let new_arr = [];

    let addNext = false;
    let idx = 0;
    while (addNext || digits.length > 0) {
        if (idx === 0)
            addNext = true;

        let val = digits.pop();
        if (!!val === false)
            val = 0;
        
        let new_val = addNext ? val+1 : val;
        if (new_val >= 10) {
            new_val -= 10;
            addNext = true;
        } else addNext = false;

        new_arr.unshift(new_val);
        idx++;
    }

    return new_arr;
};


console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));