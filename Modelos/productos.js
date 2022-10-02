//nombre
//sku
///=orecio
//stock
//sucursal
var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    nombre: {String, lowercase: true, index: true},
    sku: {String, uppercase: true},
    precio: Number,
    stock: Number,
    sucursal: String,
    status: String,
},{ timestamps: true });

mongoose.model('Product', productSchema);

module.exports = productos = mongoose.model('Product', productSchema);