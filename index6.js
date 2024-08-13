// REMOVE DUPLICATES FROM SORTED ARRAY

var removeDuplicates = function(nums) {
    let k = 2

    for (let i = 2; i <nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i]
            k++
        }
    }
    console.log(k)
    return k
};

removeDuplicates([1,1,1,2,2,3])
console.log('--------------')
removeDuplicates([0,0,1,1,1,1,2,3,3])
console.log('--------------')
removeDuplicates([1,1,1,2,2,2,3,3])
