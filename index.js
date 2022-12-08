const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const rutaActividades = require('./rutas/actividades.rutas')
const rutaUsuarios = require('./rutas/usuarios.rutas')

//middleware
app.use(express.json())
app.use('/apirest/', rutaActividades)
app.use('/apirest/', rutaUsuarios)

//Escucha
app.listen(port, ()=>{
    console.log('Escuchando por el puerto: ' + port)
})

//Conexión mongodb
mongoose.connect("mongodb://127.0.0.1:27017/prueba1", {useNewUrlparser: true})
.then(()=> console.log("conectado"))
.catch(()=> console.log("No conectado"))



/*
var actividades=[
    {id:0, titulo:'Chakra'},
    {id:1, titulo:'Yoga'},
    {id:2, titulo:'Mind'},
]

app.get('/', function (req, res) {
  res.send('Hola')
})

app.get('/api/actividades', (req,res)=>{
    res.send(actividades)
})

app.get('/api/actividades/:id', (req,res)=>{
    const actividad = actividades.find(actividad => actividad.id == req.params.id)
    if(!actividad){
        res.status(404).send('No existe')
    }else{
        res.send(actividad)
    }
    
})
*/
