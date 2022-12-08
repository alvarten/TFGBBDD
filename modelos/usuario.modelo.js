const mongoose = require('mongoose')

//Se crea el modelo
const usuarioSchema = new mongoose.Schema({
    nombre: {type:String},
    constraseña:{type:String, required:true},
    apellido:{type:String},
    email:{type:String , required:true},
    telefono:{type:Number,maxlength: 11},
    edad: Number,
    rol:{type:String}
},
{versionKey:false})

//Se exporta el modelo
module.exports = mongoose.model('usuarios', usuarioSchema)