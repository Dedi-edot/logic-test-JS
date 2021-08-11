function palindrome(word){
    let inputWord = word
    let testWord = inputWord.toLowerCase()
    testWord = testWord.replace(/[^a-z]/g, "")
    testWord = testWord.split("")
    testWord = testWord.reverse()
    testWord = testWord.join("")

    let result
    if (inputWord == testWord){
        result = "palindrome"
        return result
    } else {
        result = "not palindrome"
        return result
    }
    
}

console.log(palindrome("sasasas"));