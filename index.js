const childProcess = require("child_process");
const http = require("http")

http.createServer((req,res)=>{
    res.write("alive")
    res.end()
}).listen(3000)
setInterval(()=>{
    fetch("https://vpn-bkyy.onrender.com")
},10000)

const res = childProcess.execSync("apt install -y docker.io").toString()
console.log(res)
