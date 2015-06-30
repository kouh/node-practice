var 
  http = require('http'),
  fs   = require('fs');


http.createServer(function(req, res){
  var fileContents = fs.readFileSync(__dirname + '/public/hello.txt');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(fileContents);
}).listen(3000);

console.log('Server running at localhost:3000');
