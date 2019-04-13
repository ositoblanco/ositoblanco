const dbconection = require('../database/database'); //trayendo la coneccion 
const conection = dbconection(); //Igualar coneccion
const unidades = {};

//funcion que trae todos las unidades
unidades.getUnidades = (request, response) => {
    var consulta = 'select * from unidad';

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json(results);
        console.log('Done lista unidades');
    });
};

//Crear nueva unidad
unidades.postUnidad = (request, response) => {
    var nomUnidad = request.body.Nombre_Unidad;
    var desUnidad = request.body.Des_Unidad;
    
    var consulta = `insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, '${nomUnidad}', '${desUnidad}')`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Unidad creada exitosamente'});
        console.log('Unidad creada correctamente');
    });
}

//funcion que actualiza una unidad

unidades.udapteUnidad = (request, response) => {
    var nomUnidad = request.body.Nombre_Unidad;
    var desUnidad = request.body.Des_Unidad;
    var idUnidad = request.body.id_Unidad;

    var consulta = `update unidad set Nombre_Unidad = '${nomUnidad}', des_Unidad = '${desUnidad}' where id_Unidad = ${idUnidad}`;
    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Unidad actualizada exitosamente'});
        console.log('Unidad actualizada correctamente');
    });
}

//funcion que elimina una unidad

unidades.deleteUnidad = (request, response) => {
    var idUnidad = request.params.id_Unidad;

    var consulta = `delete from unidad where id_Unidad = ${idUnidad}`;

     //la conexion ejecute esa consulta
     conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Unidad eliminada exitosamente'});
        console.log('Unidad eliminada correctamente');
    });
}

module.exports = unidades;