
const controller = {}
const connection = require('../dbConnection/database')
const Users = require('../../modelos/users')

controller.index = async (req, res) => {
    try {
        //const title = 'INDEX DESDE EL SERVIDOR MONGODB'
        await connection();
        const consultaUsers = await Users.find();
        console.log(consultaUsers);
        console.log('Connection Established to MongoDB correctly')
        //res.render('index', { title })
    }catch(err){
        console.error(err);
    }
    };

    module.exports = controller;
