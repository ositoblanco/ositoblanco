const dbconection = require('../database/database'); //trayendo la coneccion 
const conection = dbconection(); //Igualar coneccion
const asigns = {};

//funcion que trae todos las asignaciones
asigns.getAsigns = (request, response) => {
    var consulta = 'select * from Asignacion_Unidad';

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json(results);
        console.log('Done lista Asignacion Unidad');
    });
};

//Crear nueva asignacion
asigns.postAsign = (request, response) => {
    var avance = request.body.Porcentaje_Avance;
    var idUsuario = request.body.id_Usuario;
    var idUnidad = request.body.id_Unidad;
    var consulta = `insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values ('${idUsuario}', '${idUnidad}', '${avance}')`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Asignacion creada exitosamente'});
        console.log('Asignacion creada correctamente');
    });
}

//funcion que actualiza una unidad

asigns.udapteAsign = (request, response) => {
    var avance = request.body.Porcentaje_Avance;
    var idUsuario = request.body.id_Usuario;
    var idUnidad = request.body.id_Unidad;
    
    var consulta = `update Asignacion_Unidad set Porcentaje_Avance = '${avance}' where id_Unidad = ${idUnidad} and id_Usuario = ${idUsuario}`;
    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Asignacion actualizada exitosamente'});
        console.log('Asignacion actualizada correctamente');
    });
}

//funcion que elimina una unidad

asigns.deleteAsign = (request, response) => {
    var idUnidad = request.params.id_Unidad;
    var idUsuario = request.params.id_Usuario;

    var consulta = `delete from Asignacion_Unidad where id_Unidad = ${idUnidad} and id_Usuario = ${idUsuario}`;

     //la conexion ejecute esa consulta
     conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Asignacion eliminada exitosamente'});
        console.log('Asignacion eliminada correctamente');
    });
}

module.exports = asigns;




