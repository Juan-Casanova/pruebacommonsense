var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var index = require('./routes/index');
var consult=require('./routes/cosult');


// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

// rutas
app.use('/', index);
app.use('/',consult);

// Crear servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
})


// exportar
module.exports = app;
