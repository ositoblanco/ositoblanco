use programa;

-- ======================= ROL ===============================
insert into rol (id_Rol, Nombre_Rol) values (1, 'Administrador');
insert into rol (id_Rol, Nombre_Rol) values (2, 'Estudiante');
insert into rol (id_Rol, Nombre_Rol) values (3, 'Invitado');

-- ======================= USUARIO ===============================
insert into usuario (id_Usuario, Nombre_Usuario, Clave_Usuario, Correo_Usuario, Cedula_Usuario, Usuario_Usuario, Apellido_Usuario, id_Rol) values (1, 'Admin', 'admin', 'admin@admin.com', '11111', 'admin', 'admin', 1);

-- ======================= UNIDAD ===============================
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