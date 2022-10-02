//  AQUI SE GUARDAN LAS RUTAS, Y SE USA EL ARCHI CONTROLADOR, QUE EJECUTA
//  LA FUNCIÓN DE RESPONSE Y REQUIRE


const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller')

router.get('/', controller.index);

module.exports = router;