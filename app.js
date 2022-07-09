require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/myRouter')

app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.port,process.env.domain,()=>{
    console.log(`start server in port: ${process.env.domain}:${process.env.port}`)
})