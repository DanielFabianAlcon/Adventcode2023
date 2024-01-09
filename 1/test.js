var fs = require('fs');

const matchRgx = new RegExp(/\d/)

try {
    const data = fs.readFileSync('file.txt', 'utf8').toString().split("\n")

    let sum = 0;

    data.map((line) => {
        const lineArr = line.trim().split('')
        const numbers = lineArr.filter((el) => matchRgx.test(el))
        const n0 = numbers[0];
        const n1 = numbers[numbers.length - 1];
        sum += parseInt(n0 + n1);  
    })
    console.log(sum)
} catch(e) {
    console.log('Error:', e.stack);
}