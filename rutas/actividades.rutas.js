const express = require('express')
const ruta = express.Router()
const ActividadService = require('../servicios/actividades.service')
const aDao = new ActividadService

//RUTAS

//ruta de busqueda de una actividad por id
ruta.get('/findById/:id', async (req,res) =>{

    const Actividad = await aDao.findById(req.params.id)

    res.send(Actividad)
})

//ruta de busqueda de todas las actividaes
ruta.get('/todas', async (req,res) =>{

    const Actividades = await aDao.findAll()

    res.send(Actividades)
})

//ruta de busqueda por titulo
ruta.get('/titulo/:titulo', async (req,res) =>{

    const Actividades = await aDao.findByTitulo(req.params.titulo)

    res.send(Actividades)
})

//ruta de alta
ruta.post('/alta/:actividad', async (req,res) =>{

    const Actividade = await aDao.altaActividad(req.params.actividad)

    res.send(Actividade)
})

//ruta de modificar
ruta.put('/modificar/:actividad:id', async (req,res) =>{

    const Actividad = await aDao.altaActividad(req.params.actividad,req.params.id)

    res.send(Actividad)
})

//ruta de borrado
ruta.delete('/borrar/:id', async (req,res) =>{

    const Actividad = await aDao.borrarActividad(req.params.id)

    res.send(Actividad)
})

module.exports = ruta