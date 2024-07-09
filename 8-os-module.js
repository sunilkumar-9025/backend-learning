const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


//methods returns system uptime in seconds
console.log(`system uptime is ${os.uptime()} seconds`)


const currentOS={
    name: os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)