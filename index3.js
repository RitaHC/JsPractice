// MERGE SORTED ARRAconst 

merge = (nums1, m, nums2, n) => {
    // remove 0
    let mergedArray = []
    // delete the number 0 from the array
    for (let i = 0; i < nums1.length; i++){
        // console.log(nums1[i])
        if (nums1[i] != 0){
            mergedArray.push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++){
        // console.log(nums1[i])
        if (nums2[i] != 0){
            mergedArray.push(nums2[i])
        }
    }
    
    return mergedArray.sort()
    

    // sort the merges array
}

nums1 = [1,2,3,0,0,0]
m = 3 
nums2 = [2,5,6]
n = 3

console.log(merge(nums1, m, nums2, n))
console.log('------------')

nums3 = [1]
o = 1
nums4 = []
p = 0

console.log(merge(nums3, o, nums4, p))
console.log('------------')

nums5 = [0]
q = 0
nums6 = [1]
r = 1

console.log(merge(nums5, q, nums6, r))
console.log('------------')