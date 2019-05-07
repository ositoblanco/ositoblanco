export class Asignacion {

    constructor(id_Usuario = 0, id_Unidad = 0, Porcentaje_Avance = 0){
        this.id_Usuario = id_Usuario;
        this.id_Unidad = id_Unidad;
        this.Porcentaje_Avance = Porcentaje_Avance;
    }

    id_Usuario: number;
    id_Unidad: number;
    Porcentaje_Avance: number;
}

export class AsignacionFull {

    constructor(id_Usuario = 0, id_Unidad = 0, Porcentaje_Avance = 0, Nombre_Unidad = "", Des_Unidad = ""){
        this.id_Usuario = id_Usuario;
        this.id_Unidad = id_Unidad;
        this.Porcentaje_Avance = Porcentaje_Avance;
        this.Nombre_Unidad = Nombre_Unidad;
        this.Des_Unidad = Des_Unidad;
    }

    id_Usuario: number;
    id_Unidad: number;
    Porcentaje_Avance: number;
    Nombre_Unidad: string;
    Des_Unidad: string;
}
