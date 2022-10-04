const controller = {}
const title = 'INDEX DESDE EL SERVIDOR MONGODB'

controller.index = (req, res) => {
    res.render('index', {title:title})
};

module.exports = controller;
