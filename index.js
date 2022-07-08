const { getCurrentTime, add, formatNumber } = require('./modules/mymodules')
console.log(getCurrentTime())
console.log(add(5,6))


const utill = require('./modules/mymodules')

console.log(utill.getCurrentTime())
console.log(utill.add(6,6))

const num = 5000000000

console.log(formatNumber(num));
