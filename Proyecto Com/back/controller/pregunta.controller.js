const dbconection = require('../database/database'); //trayendo la coneccion 
const conection = dbconection(); //Igualar coneccion
const preguntas = {};

//funcion que trae todos los rol
preguntas.getPreguntas = (request, response) => {
    var unidad = request.params.unidad;

    var consulta = `select * from pregunta`;

    //la conexion ejecute esa consulta
    conection.query(consulta, function (error, results) {
        if (error) throw response.json({ errorinfo: error });
        else response.json(results);
        console.log('Done lista preguntas');
    });
};

module.exports = preguntas;