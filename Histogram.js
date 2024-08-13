// Stack based solution O(n) runtime

// STEPS



// GET A STACK TOP 
// (1) Push the current bar into the stack BUT if it is higher in value then STOP
// (2) Pop all other bars of greater height

const getMaxAreaRectangle = (arr) => {
    //(i) how much left to right we can go
    for (let i = 0; i < arr.length; i++){
        let left = 0
        let right = 0
        // While we get bigger element than left - CONTINUE
        while(arr[left] >= arr[i]){
            left --
        }
        // While we get bigger element than right - CONTINUE
        while(arr[right] >= arr[i]){
            right++
        }
        console.log(left, ' : ', right)
        let area = (right - left -1) *arr[i] 
        console.log('Area : ', area)
    }
    
}

getMaxAreaRectangle([[3, 2, 1, 1, 1, 1, 4]])
