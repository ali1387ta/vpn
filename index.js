const childProcess = require("child_process");
const http = require("http")

http.createServer((req,res)=>{
    res.write("alive")
    res.end()
}).listen(3000)
setInterval(()=>{
    fetch("https://vpn-bkyy.onrender.com")
},10000)

const res = childProcess.execSync("sudo wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh | bash").toString()
console.log(res)
