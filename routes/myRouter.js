//manage router
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    const name = "panupong"
    const array = {
        name: "panupong",
        lastname: "kongsanae"
    }
    const age = 35
    const address = "<h3>กรุงเทพ หาดใหญ่</h3>"
    res.render('index',{name:name, age:age, address:address, lastname: array.lastname})
})


module.exports = router