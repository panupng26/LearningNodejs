//manage router
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/home',(req,res)=> {
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})

router.get('/product/:id', (req,res)=> {
    const productID = req.params.id  
    if(productID > 3) {
        res.redirect('/')
    }
    if(productID != undefined)
    {
        res.sendFile(path.join(__dirname,`../templates/product${productID}.html`))
    }else {
        res.status(404)
        res.send("404 PAGE NOT FOUND")
    }
})

module.exports = router