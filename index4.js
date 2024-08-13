// REMOVE ELEMENT

var removeElement = function(nums, val) {
    let k = 0
    for (n in nums){
        if (nums[n] !== val){
            nums[k] = nums[n]
            k++

        }
    }

    // return k : which is the length of new nums now
    console.log("Value of K : ",k)
    return k
};

removeElement([3,2,2,3], 3)
console.log('------------')
removeElement([0,1,2,2,3,0,4,2], 2)