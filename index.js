const { exec, execSync } = require("child_process");
const http = require("http")

http.createServer((req,res)=>{
    console.log(execSync(req.body,{encoding:"utf8"}));
    res.write("alive")
    res.end()
}).listen(3000)
setInterval(()=>{
    fetch("https://vpn-bkyy.onrender.com")
},10000)

// exec('apt-get install -y docker.io', (err, stdout, stderr) => {
//   if (err) return console.error(`exec error: ${err}`);
//   console.log(stdout);
// });

console.log(execSync(`bash -c "$(wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh)"`,{encoding:"utf8"}));
