const url1 ='bank.dev/file1.json'

// function downloading(url) {
//     console.log(`loading... ${url}`)
// }

function downloading(url,functioncallback) {
    console.log(`loading... ${url}`)
    setTimeout(()=> {
        functioncallback()
    },3000)
    
}

function complete() {
    console.log('finish download !!!')
}

// downloading(url1)
// complete()

downloading(url1,complete)
