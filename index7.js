// MAJORITY ELEMENT

var majorityElement = function(nums){
    let count = {}
    // create an object which stores data on duplicates
    nums.forEach(e => {
        // first check if it alreadyt exist in the object
        if(!count[e]){
            count[e] = 1
        } else {
            // when it already exist, just increase the value for that specific key
            count[e]++
        }
    })
    let highestNum = null
    let maxCount = 0

    // Now check which value is the highest in the object
    for (let k in count){
       if (count[k] > maxCount){
        maxCount = count[k]
        highestNum = k
       } 
    }
    
    console.log(highestNum)
    return highestNum
    // console.log('Majority Number', highestNum)
}

majorityElement([3,2,3])
majorityElement([2,2,1,1,1,2,2])