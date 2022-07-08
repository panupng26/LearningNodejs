const fs = require('fs')

// readfile input.txt
const respone = fs.readFileSync('./myfile/input.txt','utf-8')
console.log('respone: ', respone)

const arrayget = respone.split(' ')
console.log('arrayget: ', arrayget)

// เขียนไฟล์
const outputText = `Hello Node.js\n${respone}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`

fs.writeFileSync('./myfile/output.txt',outputText)
console.log('finish write files')