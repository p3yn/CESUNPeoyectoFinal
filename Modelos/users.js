//Basic Auth   jasonwebtoken o token web
//Info base del usuario



//CRUD listado, detalle, creacion,, actualizar

//const { roleSchema } = require('./roles.js');

var mongoose = require('mongoose');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, lowercase: true, index: true },
    password: String,
    salt: String,
    //rol: {roleSchema},
}, { timestamps: true });

mongoose.model('users', UserSchema);

// userSchema.pre('save', function (next) {
//     if (this.password) {
//         this.salt = new Buffer(
//             crypto.randomBytes(16).toString('base64'),
//             'base64'
//         )
//     }
// });

module.exports = Users = mongoose.model('users', UserSchema);