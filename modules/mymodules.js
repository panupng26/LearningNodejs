
function getCurrentTime() {
    return new Date()
}

function add(x,y) {
    return x+y
}

function formatNumber(Number){
    return Number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// ส่งออกคำสั่งไปใช้
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber