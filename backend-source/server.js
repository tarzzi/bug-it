const http = require('http'),
      url = require('url'),
 
makeServer = function (request,response){
   let path = url.parse(request.url).pathname;
   console.log(path);
   if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Hello maailma');
   }
   else if(path === '/issues'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Issue sivusto');
   }
   else if(path === '/projects'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Projektisivu');
   }
   else{
     response.writeHead(404,{'Content-Type':'text/plain'});
     response.write('Virhesivu');
   }
   response.end();
 },
server = http.createServer(makeServer);
server.listen(3000,()=>{
 console.log('Node server luotu porttiin 3000');
});