// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.




// Input: heights = [2,1,5,6,2,3]

// Output: 10

// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.


// Calculate the largest area (presumne x)
// work with indexes : left index and right index at the max height

// function getMaxArea(arr){
//     // console.log(arr.length -1)
//     // first find 'n' : which is the hightest length in the array
//     let max = Math.max(...arr)
//     console.log('Tallest length in histogram: ',max)
//     // get the index of max
//     const indexMax = arr.indexOf(max)
//     console.log("Index of Max: ", indexMax)
//     // now check the height of the two bars near the max length
//     // i.e. indexMax -1 and indexMax +1
//     let length
//     let width
//     let max2
//     let area
//     let indexMax2

//     // CASE 1: if lower index has second largest length
//     console.log('Index max ',arr[indexMax])
//     if(arr[indexMax-1] > arr[indexMax+1]){
//         max2 = arr[indexMax-1]
//         console.log('Max2 Value: ', max2)
//         // find index of max2
//         indexMax2 = arr.indexOf(max2)
//         // Check if the index next to max2 has same value as max2
//         for (let i = 0; i <arr.length; i ++){
//             if (arr[i] === arr[i-1]){
//                 len
//             }
//         }
//         // if (max2 == arr[])
//         /////////// Find duplicates if any of max2 ///////////
//         // const duplicate = arr.filter((item, index)=> arr.indexOf(item) !== index) 
//         // // Find index of the duplicates in js

//         // console.log('/// DUPLICATES ///', duplicate)
//         area = 2 * max2

//     // CASE 2: Indexes on both side have same value
//     } else if (arr[indexMax-1] === arr[indexMax+1]) {
//         max2 = arr[indexMax-1]
        
//         indexMax2 = arr.indexOf(max2)
//         console.log('Max2 INDEX: ', indexMax2)
//         // Check if the index next to max2 is equal to max2
//         // console.log('Index of Max 2',indexMax2, '\nValue of max2 :', max2)
//         area = 3 * max2
//     // CASE 3: If max is 1st element in the array
//     } else if (indexMax == 0){
//         max2 = arr[indexMax+1]

//         indexMax2 = arr.indexOf(max2)
//         console.log('Max2 INDEX: ', indexMax2)
//         // Check if the index next to max2 is equal to max2
//         // console.log('Index of Max 2',indexMax2, '\nValue of max2 :', max2)
//         area = 2 * max2
//     // CASE 4: If max is the last element in the array 
//     } else if(indexMax == arr.length -1){
//         max2 = arr[indexMax-1]
//         indexMax2 = arr.indexOf(max2)
//         console.log('Max2 INDEX: ', indexMax2)
//         // Check if the index next to max2 is equal to max2
//         // console.log('Index of Max 2',indexMax2, '\nValue of max2 :', max2)
//     // CASE 5: if higher index has second largest length
//     } else {
//         max2 = arr[indexMax+1]
//         indexMax2 = arr.indexOf(max2)
//         console.log('Max2 INDEX: ', indexMax2)
//         // Check if the index next to max2 is equal to max2
//         // console.log('Index of Max 2',indexMax2, '\nValue of max2 :', max2)
//         area = 2 * max2
//     }

//     /////////// Find duplicates of the max2 ///////////
//     // Check if the duplicates are consecutive
//     // compare and save the heigher length in the variable x
//     console.log('2nd Tallest bar: ', max2)
//     // now calculate teh area
//     console.log('Max area in the histogram: ->', area)

// }


function getMaxArea(arr){
    // need length and breadth to calculate the area
    let len = arr.length
    console.log(len)

}


// let arr1 = [2,1,5,6,2,3] 
let arr2 = [2,1,5,6,5,3] 
let arr3 = [3, 1, 1, 1, 1, 1, 4]
// let arr4 = [3, 1, 1, 1, 1, 1, 4, 9, 4]
// let arr5 = [3, 1, 1, 1, 1, 1, 4, 9, 2]
// getMaxArea(arr1)
// console.log('------------------')
getMaxArea(arr2)
console.log('------------------')
getMaxArea(arr3)
console.log('------------------')
// getMaxArea(arr4)
// console.log('------------------')
// getMaxArea(arr5)

