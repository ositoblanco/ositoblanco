export class Usuario {

    constructor(id_Usuario=0, Nombre_Usuario = "", Clave_Usuario = "", Correo_Usuario = "", Cedula_Usuario = "", Usuario_Usuario = "",
        Apellido_Usuario = "", id_Rol = 0, ConfirmaCedula_Usuario=""){
        
            this.id_Usuario = id_Usuario;
            this.Nombre_Usuario = Nombre_Usuario;
            this.Clave_Usuario = Clave_Usuario;
            this.Correo_Usuario = Correo_Usuario;
            this.Cedula_Usuario = Cedula_Usuario;
            this.ConfirmaCedula_Usuario = ConfirmaCedula_Usuario;
            this.Usuario_Usuario = Usuario_Usuario;
            this.Apellido_Usuario = Apellido_Usuario;
            this.id_Rol = id_Rol;
    }

    id_Usuario: number;
    Nombre_Usuario: string;
    Clave_Usuario: string;
    Correo_Usuario: string;
    Cedula_Usuario: string;
    ConfirmaCedula_Usuario: string;
    Usuario_Usuario: string;
    Apellido_Usuario: string;
    id_Rol: number;
    
}
