//Agregar las dependencias
var serverConn = require('../TareaCuatro/Modelos/database')
const app = require('express')();
const port = 8000;
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
const database = require('../TareaCuatro/Modelos/database');
global._ = require('lodash');


// otras librerías
//app.use('helmet');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('combined'));

//RUTAS DE CONEXIÓN EN OTRO ARCHIVO
app.use(require('./app/routes/index.routes'));

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
