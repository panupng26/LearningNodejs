require('dotenv').config();


const express = require('express')
const app = express()
const router = require('./routes/myRouter')


app.use(router)
app.listen(process.env.port,process.env.domain,()=>{
    console.log(`start server in port: ${process.env.domain}:${process.env.port}`)
})