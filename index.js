require('dotenv').config();


const express = require('express')
const app = express()
const router = express.Router()

// path
const path = require('path')
const indexPage = path.join(__dirname,'templates/index.html')

router.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'templates/index.html'))
})

// router.get('/products',(req,res)=> {
//     const data = {
//         message: 'success fetch',
//         success: '200',
//         data: [
//             {
//                 product_id: 1,
//                 product_name: "ฮิปโป้",
//                 product_price: 12456,
//             },
//             {
//                 product_id: 2,
//                 product_name: "ฮิป",
//                 product_price: 456,
//             },
//             {
//                 product_id: 3,
//                 product_name: "โยว",
//                 product_price: 2456,
//             }
//         ],
//     }
//     res.status(200)
//     res.send(data)
// })

router.get('/product', (req,res)=> {
    res.sendFile(path.join(__dirname,'templates/product1.html'))
})

app.use(router)
app.listen(process.env.port,process.env.domain,()=>{
    console.log(`start server in port: ${process.env.domain}:${process.env.port}`)
})