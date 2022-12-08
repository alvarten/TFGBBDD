const express = require('express')
const ruta = express.Router()
const UsuarioService = require('../servicios/usuarios.service')
const uDao = new UsuarioService

//RUTAS

//ruta de busqueda de un usuario por id
ruta.get('/findByIdU/:id', async (req,res) =>{

    const Usuario = await uDao.findById(req.params.id)

    res.send(Usuario)
})


//ruta de alta
ruta.post('/altaU/:usuario', async (req,res) =>{

    const Usuario = await uDao.altaUsuario(req.params.usuario)

    res.send(Usuario)
})

//ruta de modificar
ruta.put('/modificarU/:usuario:id', async (req,res) =>{

    const Usuario = await aDao.altaAUsuario(req.params.usuario,req.params.id)

    res.send(Usuario)
})


module.exports = ruta