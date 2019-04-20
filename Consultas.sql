show databases;

use programa;
create database programa;

-- ======================= USUARIO ===============================

-- Consulta que trae los usuarios de la tabla usuarios 
select * from usuario;
desc usuario;
select * from usuario where id_Usuario = 4;

-- Insercion de un usuario en la tabla usuario
insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (null, 'Andrea', 'andrea123', 'andrea@com', '00000', 'Andy', 'Cruz', 1);
insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (null, 'Miriam', 'miriam123', 'miriam@com', '00002', 'Miriam', 'Garcia', 2);

-- Actualizacion de un usuario
update usuario set Nombre_Usuario = 'Pepe', Clave_Usuario = 'pepe123', Correo_Usuario = 'pepe@com', Cedula_Usuario = '0001', Usuario_Usuario = 'pepe', Apellido_Usuario = 'Robles', id_Rol = 1 where id_Usuario = 3;

-- Eliminacion de un usuario 
delete from usuario where id_Usuario = 3;

-- ======================= ROL ===============================

-- Consulta que trae los roles de la tabla rol
select * from rol;
desc rol;
select * from usuario where id_Usuario = 1;

-- Insercion de un rol en la tabla rol
insert into rol (id_Rol, Nombre_Rol) values (null, 'Administrador');
insert into rol (id_Rol, Nombre_Rol) values (null, 'Estudiante');
insert into rol (id_Rol, Nombre_Rol) values (null, 'Invitado');

-- Actualizacion de un rol
update rol set Nombre_Rol = 'Familiar', id_Rol = 3 where id_Rol = 3;

-- Eliminacion de un rol
delete from rol where id_Rol = 3;

-- ======================= UNIDAD ===============================

-- Consulta que trae las unidades de la tabla unidad
select * from unidad;
desc unidad;
select * from unidad where id_Unidad = 1;

-- Insercion de un rol en la tabla unidad
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 1', 'Conceptos y fundamentos de programacion');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 2', 'Concepto de algoritmo y tus tecnicas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 3', 'Diagramas de flujo');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 4', 'Pseudocodigo');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 5', 'Estructuras de control');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 6', 'Estructuras de control repetitivas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 7', 'Estructuras anidadas');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 8', 'Arreglos');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 9', 'Manejo de funciones');
insert into unidad (id_Unidad, Nombre_Unidad, Des_Unidad) values (null, 'Unidad 10', 'Registros');

-- Actualizacion de una unidad
update unidad set id_Unidad = 1, Nombre_Unidad = 'Unidad 1' where id_Unidad = 14;

-- Eliminacion de una unidad
delete from unidad where id_Unidad = 12;
delete from unidad where id_Unidad;

-- ======================= ASIGNACION ===============================

-- Consulta que trae las asignaciones de la tabla asignacion
select * from Asignacion_Unidad;
desc Asignacion_Unidad;

-- Insercion de una asignacion en la tabla asignacion
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (4, 1, 20);
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (4, 2, 35);
insert into Asignacion_Unidad (id_Usuario, id_Unidad, Porcentaje_Avance) values (4, 3, 50);

-- Actualizar una asignacion en la tabla asignacion
update Asignacion_Unidad set Porcentaje_Avance = 10 where id_Unidad = 3 and id_Usuario = 4;

-- Eliminar una asignacion en la tabla asignacion
delete from Asignacion_Unidad where id_Unidad = 3 and id_Usuario = 4;



