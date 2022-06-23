// term callback function
function calculate(x,y,callback) {
    console.log('calculate ...')
    setTimeout(()=> {
        const sum = x+y
        callback(sum)
    }, 3000)
}

 function display(result) {
    console.log(`ผลบวก = ${result}`)
 }

//  intitil
//  const sum = calculate(100,50)
//  display(sum)

// callback function

calculate(100,50,display)