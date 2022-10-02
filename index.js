//Agregar las dependencias
const app = require('express')();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
global._ = require('lodash');

//otras librerías
app.use('helmet');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('combined'));

//coneccion por mongoose
