const dbconection = require('../database/database'); //trayendo la coneccion 
const conection = dbconection(); //Igualar coneccion
const users = {};

//funcion que trae todos los usuarios
users.getUsers = (request, response) => {
    var consulta = 'select * from usuario';

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json(results);
        console.log('Done lista usuarios');
    });
};

//Crear usuario 
users.postUser = (request, response) => {
    var nombre = request.body.Nombre_Usuario;
    var clave = request.body.Clave_Usuario;
    var email = request.body.Correo_Usuario;
    var cedula = request.body.Cedula_Usuario;
    var usuario = request.body.Usuario_Usuario;
    var apellido = request.body.Apellido_Usuario;
    var idRol = request.body.id_Rol;

    var consulta = `insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (null, '${nombre}', '${clave}', '${email}', '${cedula}', '${usuario}', '${apellido}', ${idRol})`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Usuario creado exitosamente'});
        console.log('Usuario creado correctamente');
    });
}

//funcion que actuaiza un usuario

users.udapteUser = (request, response) => {
    var nombre = request.body.Nombre_Usuario;
    var clave = request.body.Clave_Usuario;
    var email = request.body.Correo_Usuario;
    var cedula = request.body.Cedula_Usuario;
    var usuario = request.body.Usuario_Usuario;
    var apellido = request.body.Apellido_Usuario;
    var idRol = request.body.id_Rol;
    var idUsuario = request.body.id_Usuario;

    var consulta = `update usuario set Nombre_Usuario = '${nombre}', Clave_Usuario = '${clave}', Correo_Usuario = '${email}', Cedula_Usuario = '${cedula}', Usuario_Usuario = '${usuario}', Apellido_Usuario = '${apellido}', id_Rol = '${idRol}' where id_Usuario = ${idUsuario}`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Usuario actualizado exitosamente'});
        console.log('Usuario actualizado correctamente');
    });
}

//funcion que elimina un usuario

users.deleteUser = (request, response) => {
    var idUsuario = request.params.id_Usuario;

    var consulta = `delete from usuario where id_Usuario = ${idUsuario}`;

     //la conexion ejecute esa consulta
     conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json({results:'Usuario eliminado exitosamente'});
        console.log('Usuario eliminado correctamente');
    });
}

module.exports = users;