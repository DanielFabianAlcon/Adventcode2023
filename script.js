var fs = require('fs');

// Code Day 1

function lookForNumbers (string) {
    const nums = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    const numberExpresion = /(?:one|two|three|four|five|six|seven|eight|nine)/g

    const newString =  string.replace(numberExpresion, match => nums[match])

    return newString
}


try {
    const data = fs.readFileSync('file.txt', 'utf8').toString().split("\n")
    let sum = 0

    data.map((x) => {

        const line = lookForNumbers(x.trim())
        console.log(line)

        const lineSplit = line.split('')
        const numsArr = []

        lineSplit.map((y) => {
            if (!isNaN(y)){
                numsArr.push(y)
            }
        })

        let number = "" + numsArr[0] + numsArr[numsArr.length-1]
        sum = sum + parseInt(number)
    })

    console.log(sum)

} catch(e) {
    console.log('Error:', e.stack);
}