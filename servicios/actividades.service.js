const actividad = require('../modelos/actividad.modelo')

class ActividadService{
    constructor(){}
    //metodos

    //listar todas las actividades
    async findAll(){
        return await actividad.find()
    }

    //listar una actividad en particular
    async findById(id){
        return await actividad.findById(id);
    }

    //obtener una actividad por el titulo
    async findByTitulo(titulo){
        return await actividad.find({titulo: titulo});
    }

    //registrar una actividad
    async altaActividad(actividad){
        try{
            const actividadNueva = new actividad(actividad)
            const actividadInsertada = actividadNueva.save()
            return actividadInsertada
        }catch(err){
            return null
        }
    }

    //modificar una actividad
    async modificarActividad(actividad, id){   
        try{
            const actividadNueva = new actividad(actividad)
            actividad.findById(id) = actividadNueva.save()
            return actividad.findById(id)
        }catch(err){
            return null
        }
    }

    //borrar una actividad
    async borrarActividad(id){
        try{
            actividad.findById(id).drop()
            return 'actividad borrada'
        }catch(err){
            return null
        }
    }
}

module.exports = ActividadService