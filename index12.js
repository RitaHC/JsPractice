// SUBSEQUENCE

var isSubsequence = function(s, t) {
    let i = 0; // Pointer for string `s`

    for (let char of t) {
        if (s[i] === char) i++; // Move to the next character in `s` if there's a match
    }

    if (i === s.length) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
};

isSubsequence("abc","ahbgdc")
console.log('________________')
isSubsequence("axc", "ahbgdc")