const childProcess = require("child_process");
const http = require("http")

http.createServer((req,res)=>{
    res.write("alive")
    res.end()
}).listen(3000)
setInterval(()=>{
    fetch("https://vpn-bkyy.onrender.com")
},10000)

const res1 = childProcess.execSync("curl -sS https://get.docker.com/ | sh").toString()
const res2 = childProcess.execSync("sudo wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh | bash").toString()
console.log(res1)
console.log(res2)
