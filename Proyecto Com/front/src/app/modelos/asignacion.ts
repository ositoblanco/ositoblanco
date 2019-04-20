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
