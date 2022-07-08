// Non-blocking
const fs = require('fs')

//read file input.txt
fs.readFile('./myfile/input.txt','utf8',(err,data)=>{
    if(err) return console.log('have problem', err);
    console.log(data)
    const outputText = `Hello Node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อวันที่ ${new Date()}`
    fs.writeFile("myfile/output.txt",outputText,err=> {
        if(err) return console.log('err',err);
    })

})

// const outputText = `Hello Node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อวันที่ ${new Date()}`
// fs.writeFileSync('myfile/output.txt',outputText)
// console.log('finish write files');