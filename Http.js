var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write("Salman Software Engineer");
    res.end("Thank You");
}).listen(8080);