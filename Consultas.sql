show databases;

use programa;
show tables;
create database programa;

-- ======================= USUARIO ===============================

-- Consulta que trae los usuarios de la tabla usuarios 
select * from usuario;
select * from usuario
where Usuario_Usuario = 'cazb999'
or Correo_Usuario = ''
or Cedula_Usuario = 1234;

update usuario set id_Rol = 2 where id_Usuario = 1;

show tables;
desc usuario;
select * from usuario where id_Usuario = 4;
desc usuario;

select * from usuario as u
inner join asignacion_unidad as au on u.id_Usuario = au.id_Usuario
inner join unidad as un on au.id_Unidad = un.id_Unidad
where u.id_Rol = 2;

-- Insercion de un usuario en la tabla usuario
insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (1, 'Carlos', '12345', 'carlos@com', '123', 'cazb', 'zambrano', 2);
insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (null, 'Miriam', 'miriam123', 'miriam@com', '00002', 'Miriam', 'Garcia', 2);

-- Actualizacion de un usuario
update usuario set id_Usuario = 1 where id_Usuario = 5;

-- Eliminacion de un usuario 
delete from usuario where id_Usuario = 3;

-- ======================= ROL ===============================

-- Consulta que trae los roles de la tabla rol
select * from rol;
desc rol;
select * from usuario where id_Usuario = 1;

-- Insercion de un rol en la tabla rol
insert into rol (id_Rol, Nombre_Rol) values (1, 'Administrador');
insert into rol (id_Rol, Nombre_Rol) values (2, 'Estudiante');
insert into rol (id_Rol, Nombre_Rol) values (3, 'Invitado');

-- Actualizacion de un rol
update rol set id_Rol = 3 where id_Rol = 5;

-- Eliminacion de un rol
delete from rol where id_Rol = 3;

-- ======================= UNIDAD ===============================

-- Consulta que trae las unidades de la tabla unidad
select * from unidad;
desc unidad;
select * from unidad where id_Unidad = 1;

-- Insercion de un rol en la tabla unidad
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (1, 'Unidad 1', 'Conceptos y fundamentos de programacion');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (2, 'Unidad 2', 'Concepto de algoritmo y tus tecnicas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (3, 'Unidad 3', 'Diagramas de flujo');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (4, 'Unidad 4', 'Pseudocodigo');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (5, 'Unidad 5', 'Estructuras de control');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (6, 'Unidad 6', 'Estructuras de control repetitivas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (7, 'Unidad 7', 'Estructuras anidadas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (8, 'Unidad 8', 'Arreglos');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (9, 'Unidad 9', 'Manejo de funciones');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (10, 'Unidad 10', 'Registros');

-- Actualizacion de una unidad
update unidad set id_Unidad = 10 where id_Unidad = 20;

-- Eliminacion de una unidad
delete from unidad where id_Unidad = 12;
delete from unidad where id_Unidad;

-- ======================= ASIGNACION ===============================

-- Consulta que trae las asignaciones de la tabla asignacion
select * from Asignacion_Unidad;
desc Asignacion_Unidad;

-- Insercion de una asignacion en la tabla asignacion
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (1, 1, 20);
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (1, 2, 35);
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (1, 3, 50);

-- Actualizar una asignacion en la tabla asignacion
update Asignacion_Unidad set Porcentaje_Avance = 25 where id_Unidad = 1 and id_Usuario = 1;

-- Eliminar una asignacion en la tabla asignacion
select * from Asignacion_Unidad where id_Usuario = 2;

delete from Asignacion_Unidad where id_Usuario=2;

select au.id_Usuario, au.id_Unidad, au.Porcentaje_Avance, u.Nombre_Unidad, u.Des_Unidad
    from Asignacion_Unidad as au
    inner join unidad as u on au.id_Unidad = u.id_Unidad;
    
    
-- Agregar preguntas a unidades
desc pregunta;
-- PREGUNTAS PARA LA UNIDAD 1
insert into pregunta values(null,
"LA PROGRAMACION ESTRUCTURADA ELABORA PROGRAMAS Y CONSTA DE 3 ESTRUCTURAS CUALES SON",
"SECUENCIA, SELECCIÓN Y REPETICION",
"VARIABLES, METODOS Y FUNCIONES",
"INICIO, CLIMAX Y DESENLACE",
1, 1);

insert into pregunta values(null,
"QUE ES JAVA",
"UN JUEGO",
"UN LENGUAJE",
"UN ALGORITMO",
2, 1);

insert into pregunta values(null,
"QUIERO DECLARAR UN DATO CON LA CANTIDAD DE 3.54 QUE TIPO DE DATO
PUEDE SER",
"FLOAT",
"INT",
"CHAR",
1, 1);

insert into pregunta values(null,
"ES UNA CLASE QUE SIRVE PARA LEER VALORES DE ENTRADA, CUAL ES LA
BIBLIOTECA QUE SE NECESITA",
"JAVA.UTIL. *",
"JAVA.IO. *",
"JAVA.UTIL. SCANNER",
3, 1);

select * from pregunta where id_Unidad = 1;

