// PALINDROME

let isPalindrome = function(s){
    let lowerCase = s.toLowerCase()
    let removeSpace = lowerCase.split(" ").join("")   
    let result =  removeSpace.replace(/[^a-zA-Z0-9]/g, '')
    console.log(result)
    // now reverse the string and check
    let splitString = result.split("")
    let reverseArray = splitString.reverse()
    let result2 = reverseArray.join("")
    console.log(result2)
    // check for palindrome
    if (result === result2){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
    
}

isPalindrome("A man, a plan, a canal: Panama")
console.log('-----------')
isPalindrome("ab_a")

