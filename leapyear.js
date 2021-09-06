function leapyear(x, y){
    const yearStart = x
    const yearEnd = y
    const range = 4
    let result = yearStart
    while (result < yearEnd) {
        result += range
        console.log(result);
    }
}

leapyear(1900,2020)