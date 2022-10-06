const mongoose = require('mongoose');
const user= 'IvanCESUN7mo';
const password = 'raFCuHRZZwHOm0sE';
const dbname = 'proyecto_final'

const uri = (`mongodb+srv://${user}:${password}@cluster0.chtmmou.mongodb.net/${dbname}?retryWrites=true&w=majority`);


module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });