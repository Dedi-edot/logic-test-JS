function reverseWord(words){
    let reverseWord = words
    reverseWord = reverseWord.split(" ")
    wordToReverse = []
    for (let i = 0; i < reverseWord.length; i++){
        reverseWord[i] = reverseWord[i].split("")
        wordToReverse.push(reverseWord[i])
    }

    for (let i = 0; i < wordToReverse.length; i++){
        wordToReverse[i] = wordToReverse[i].reverse()
        wordToReverse[i] = wordToReverse[i].join("")
    }

    let result = wordToReverse.join(" ")
    return result;
}

console.log(reverseWord("I am A Great human"));