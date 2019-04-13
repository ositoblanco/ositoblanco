const dbconection = require('../database/database'); //trayendo la coneccion 
const conection = dbconection(); //Igualar coneccion
const rols = {};

//funcion que trae todos los rol
rols.getRols = (request, response) => {
    var consulta = 'select * from rol';

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json(results);
        console.log('Done lista rols');
    });
};

//Crear nuevo rol
rols.postRol = (request, response) => {
    var nomRol = request.body.Nombre_Rol;

    var consulta = `insert into rol (id_Rol, Nombre_Rol) values (null, '${nomRol}')`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Rol creado exitosamente'});
        console.log('Rol creado correctamente');
    });
}

//funcion que actuaiza un rol

rols.udapteRol = (request, response) => {
    var nomRol = request.body.Nombre_Rol;
    var idRol = request.body.id_Rol;

    var consulta = `update rol set Nombre_Rol = '${nomRol}', where id_Rol = ${idRol}`;
    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Rol actualizado exitosamente'});
        console.log('Rol actualizado correctamente');
    });
}

//funcion que elimina un rol

rols.deleteRol = (request, response) => {
    var idRol = request.params.id_Rol;

    var consulta = `delete from rol where id_Rol = ${idRol}`;

     //la conexion ejecute esa consulta
     conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Rol eliminado exitosamente'});
        console.log('Rol eliminado correctamente');
    });
}

module.exports = rols;