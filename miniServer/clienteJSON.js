//------------clienteJSON.js-------------
var http = require('http');

// Options to be used by request 
var articulo = {};

process.argv.forEach(function(valor,indice)
{
 if(indice > 1)
   {
   console.log(valor);
   var pos = valor.indexOf('=');
   if(pos >= 0)
     {
      var llave=valor.substr(0,pos);
      articulo[llave]=valor.substr(pos+1);
     }
   }
});



var options = {
   host: 'localhost',
   port: '8080',
   path: '/agregarArticulo',
   method: 'POST',
   headers: 
    {
      'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Length': JSON.stringify(articulo).length
    }  
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.write(JSON.stringify(articulo));
req.end();
