
const controller = {}
const connection = require('../dbConnection/database')

controller.index = async (req, res) => {
    try {
        const title = 'INDEX DESDE EL SERVIDOR MONGODB, usando pug'
        await connection();
        console.log('Connection Established to MongoDB correctly')
        res.render('index', { title })
    }catch(err){
        console.error(err);
    }
    };

    module.exports = controller;
