const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/ventascochesdb", {useNewUrlparser: true})
.then(()=> console.log("conectado"))
.catch(()=> console.log("No conectado"))


const actividadSchema = new mongoose.Schema({
    titulo: {type:String, required:true},
    numeros: Number,
    fecha: {type:Date, default: Date.now}
})


const actividadDao = mongoose.model('actividad', actividadSchema)

const actividadesLista =[
    {titulo:"Prueba", numeros: 6},
    {titulo:"Prueb", numeros: 5},
    {titulo:"Prue", numeros: 4},
    {titulo:"Pru", numeros: 3},
    {titulo:"Pr", numeros: 2}
]


//funciones

async function crearActividades(){
    const resultado = await actividadDao.insertMany(actividadesLista)
    console.log(resultado)
}
//crearActividades()

findActividad("Prue")
async function findActividad(titulo){
    const resultado = await (actividadDao.find({titulo: titulo}))
    console.log(resultado)
}
