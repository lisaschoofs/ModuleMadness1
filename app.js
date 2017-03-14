var http = require('http');
var three = require('m3.js');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write(three.verbage() + three.fun() ); // change to concatenate the results from third module, but formatted as a dollar amount
  response.end();
  // console.log("listening");
}).listen(3000);
