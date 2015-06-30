var 
  http = require('http'),
  fs   = require('fs');


http.createServer(function(req, res){
  fs.readFile(__dirname + '/public/hello.txt', 'utf-8', function (err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end(fileContents);
      return;
    }
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
    
  });
}).listen(3000);

console.log('Server running at localhost:3000');
