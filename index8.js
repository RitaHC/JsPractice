// ROTATE ARRAY

var rotate = function (nums, k) {
    for (let i = 0; i <k;i++){
        // retrieve the numbers from the last
        let lastElem = nums.at(-1)
        // console.log(lastElem)
        // then unshift() the number in the array
        nums.unshift(lastElem)
        
        // then pop() them from the array
        nums.pop(lastElem)
        
    }
    console.log(nums)
}

rotate([1,2,3,4,5,6,7], 3)
console.log('--------------')
rotate([-1,-100,3,99], 2)