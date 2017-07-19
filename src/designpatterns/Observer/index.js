const fs=require("fs");
const server= require("http").createServer();

server.on("request",(req,res)=>{
    switch(req.url){
    case ("/topsObs.js"):
    console.log("handling request.....topsObs.js");
    res.writeHead(200,{"Content-Type":"text/javascript"}); //type=""
    res.end(fs.readFileSync("./topsObs.js"));
     break;
    default:    
    console.log("handling request.....");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync("./index.html"));
    }
});
console.log("starting server.....");
server.listen(4001);