/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        let num = nums[i];
        let pair = nums.indexOf(target-num);
        if (pair >= 0 && i != pair)
            return [i, pair];
    }
};


console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,3],6));