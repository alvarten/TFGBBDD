const usuario = require('../modelos/usuario.modelo')

class UsuarioService{
    constructor(){}
    //metodos

    //listar un usuario en particular
    async findById(id){
        return await usuario.findById(id);
    }

    //registrar un usuario
    async altaActividad(usuario){
        try{
            const usuarioNuevo = new usuario(usuario)
            const usuarioInsertado = usuarioNuevo.save()
            return usuarioInsertado
        }catch(err){
            return null
        }
    }

    //modificar un usuario
    async modificarUsuario(usuario, id){   
        try{
            const usuarioNuevo = new usuario(usuario)
            usuario.findById(id) = usuarioNuevo.save()
            return usuario.findById(id)
        }catch(err){
            return null
        }
    }
}

module.exports = UsuarioService