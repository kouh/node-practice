var 
  http = require('http'),
  fs   = require('fs'),
  contentTypeTable = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'js'   : 'text/javascript'
  }
  ;


http.createServer(function(req, res){
  console.log('request url: ' + req.url);
  var filePath = req.url;
  var fileName = filePath.match(/.*\/([^\/]*$)/)[1];
  if(fileName === '') {
    filePath += 'index.html';
  }
  fs.readFile(__dirname + '/public' + filePath, 'utf-8', function (err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('not found...');
      return;
    }

    var ext = filePath.match(/.*\.([^.]+$)/)[1];
    var contentType = contentTypeTable[ext];
    if (!contentType) contentType = 'text/plain';
    res.writeHead(200, {'Content-Type': contentType});
    res.end(data);
  });
}).listen(3000);

console.log('Server running at localhost:3000');
