const mongoose = require('mongoose');

const uri = ('mongodb://localhost:27017/Proyecto_Final');

module.exports = () => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connection Established to MongoDB correctly')
