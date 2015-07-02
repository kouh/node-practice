var os = require('os');


var getIP = function (){
  
  var ip = null;
  var interfaces = os.networkInterfaces();
  for(var dev in interfaces){
    interfaces[dev].forEach(function(info){
      if(info.family === 'IPv4' &&
          ! info.internal){
        ip = info.address;
      }
    });
  }
  return ip;
}

console.log(getIP());
