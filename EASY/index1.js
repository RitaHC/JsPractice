// RANSOME NOTE

var canConstruct = function (ransomNote, magazine){
// Create an object of letters in magzine
let letterCount = {}

// Iterate over the magzine
for (let char of magazine){
    // console.log("Key", )
    // Not existing
    if(!letterCount[char]){
        letterCount[char] = 1
    } else {
        // existing
        letterCount[char] ++
    }

}
console.log(letterCount)
// Now iterate over the ransomeNote and check against magazine
for (let char of ransomNote){
    // check if the char exist in the letter note ransomNote[]
    if (letterCount[char]){
        letterCount[char] --
    } else {
        console.log(false)
        return false
    }
    // console.log(ransomNote[i])
    
}
console.log(true)
return true

}

canConstruct("a", "b")
console.log('----------')
canConstruct("aa", "ab")
console.log('----------')
canConstruct("aa", "aab")