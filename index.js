//Agregar las dependencias
var serverConn = require('./app/dbConnection/database')
const express = require('express');
const app = require('express')();
const port = 8000;
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
const { dirname } = require('path');
global._ = require('lodash');


app.set('view engine','pug');
app.set('views', path.join(__dirname,'/app/views'));


// otras librerías
//app.use('helmet');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('combined'));

//RUTAS DE CONEXIÓN EN OTRO ARCHIVO
app.use(require('./app/routes/index.routes'));

//SATIC FILES ROUTES
app.use(express.static(path.join(__dirname,'./public'))); 



app.use((req, res) => {
    res.sendFile(path.join(__dirname,'./public/404.html'))
})

// CONEXIÓN por EXPRESS
app.listen(port,() =>{ 
     console.log('Estamos en vivo');    
 });


serverConn = (req, res) => {
    try{
        const saludo = 'Conexion desde el servidor con éxito';
        serverConn();        
        res.render('index',{saludo})
    }catch(err){
        console.error(err);
    }
};
