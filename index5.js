// REMOVE DUPLICATES FROM SORTED ARRAY

var removeDuplicates = function(nums) {
    let k = 1
    for (let i = 1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){ // Check for present value with the next value
            nums[k] = nums[i]
            k++
        }
    }
    console.log(nums, '\n',k)
    return k
};

removeDuplicates([1,1,2])
console.log('-------------')
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
