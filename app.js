require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')

app.set('views',path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.port,process.env.domain,()=>{
    console.log(`start server in port: ${process.env.domain}:${process.env.port}`)
})