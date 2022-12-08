const mongoose = require('mongoose')

//Se crea el modelo
const actividadSchema = new mongoose.Schema({
    titulo: {type:String, required:true},
    instructor:{type:String , required:true},
    descripcion:{type:String , required:true},
    inicio:{type:Date},
    duracion:{},
    categoria:{type:String},
    activa:{type:String},
    alt_img:{type:String},
    link:{type:String}

    /*
    numeros: Number,
    fecha: {type:Date, default: Date.now},
    año:{type: Number, maxlength:4, min:2000}*/
},
{versionKey:false})

//Se exporta el modelo
module.exports = mongoose.model('actividades', actividadSchema)