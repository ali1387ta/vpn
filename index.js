const childProcess = require("child_process");
const http = require("http")

http.createServer((req,res)=>{
    res.write("alive")
    res.end()
}).listen(3000)
setInterval(()=>{
    fetch("https://vpn-bkyy.onrender.com")
},10000)

// const res = childProcess.execSync("wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh").toString()
// console.log(res)

const os = require("os")

console.log(os.platform())
console.log(os.release())
console.log(os.hostname())
console.log(os.version())
