var express = require('express');
var app = express();
var fs = require("fs");
var articulos = [];
var bodyParser = require('body-parser');
var jSONBodyParser =  bodyParser.json();

app.use(function timeLog(req, res,next)
{
   console.log('Hora:',Date.now());
   next();
});
app.use(express.static(__dirname + '/www'));
app.get('/articulos', function (req, res) {
     res.end(JSON.stringify(articulos))
    });

app.post('/agregarArticulo',jSONBodyParser,function(req,res)
{
     articulos.push(req.body);
     res.end("Agregado");
});
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})