const controller = {}

controller.index = (req, res) => {
    res.send('Servidor corriendo correctamente desde index.routes, y controlador en index.controller')
};

module.exports = controller;
