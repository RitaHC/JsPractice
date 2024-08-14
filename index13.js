// TWO SUM ||

var twoSum = function(numbers, target) {

    let result = []
    for (let i = 0; i <numbers.length; i++){
            // now check if num and num + numbers[num+1] = target
            for (let j = 0; j<numbers.length; j++){
                if (numbers[i] + numbers[j] === target){
                    result.push(i+1)
                    result.push(j+1)
                    console.log("Result ARRAY : ",result)
                    return result
                }

            }        
    }
   
};

twoSum([2,7,11,15], 9)
console.log('------------')
twoSum([2,3,4], 6)
console.log('------------')
twoSum([-1,0], -1)
console.log('------------')
twoSum([-1,0], -1)