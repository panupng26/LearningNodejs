const { fstat } = require('fs');
const http = require('http')
require('dotenv').config();
const fs = require('fs')
const url = require('url')

// import file
const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`,'utf-8')
const productpage1 = fs.readFileSync(`${__dirname}/templates/product1.html`,'utf-8')
const productpage2 = fs.readFileSync(`${__dirname}/templates/product2.html`,'utf-8')
const productpage3 = fs.readFileSync(`${__dirname}/templates/product3.html`,'utf-8')


// server
const server = http.createServer((req,res)=>{

    const { pathname, query } = url.parse(req.url,true)
    if(pathname === '/' || pathname === '/home') {
        res.end(indexpage)
    } else if(pathname === '/product') {
        if(query.id === '1') {
            res.end(productpage1)
        }else if(query.id === '2') {
            res.end(productpage2)
        }else if(query.id === '3') {
            res.end(productpage3)
        }
        
    }else {
        res.end('Not Found')
    }
}).listen(process.env.port,process.env.domain,()=> {
    console.log(`start server in port: ${process.env.domain}:${process.env.port}`)
})