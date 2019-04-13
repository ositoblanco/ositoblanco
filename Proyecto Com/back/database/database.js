var mysql = require('mysql'); //requieres mysql

var dbconnection =()=>{ //crea una funcion que conecta con la base de datos
    return mysql.createConnection({

    host :'localhost',
    user : 'root',
    password : '',
    database : 'programa',
    port:'3307'

    });
}

const connection = dbconnection(); //crea una constante conecion y la iguala a la conecion creada

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields){
    if(error) throw error;
    console.log('Se conecto a la DB!!!.. -->', results[0].solution);
});
connection.end();

module.exports = dbconnection; //exporta la conecion para poder usarla en otros archivos js