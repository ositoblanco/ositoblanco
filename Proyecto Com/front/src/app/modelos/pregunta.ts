export class Pregunta {
    constructor(id_Pregunta=0, Desc_Pregunta='', opc1_pregunta='', Opc2_Pregunta='',  Opc3_Pregunta='', Respuesta_Pregunt='', id_Unidad=0){
        this.id_Pregunta= id_Pregunta;
        this.Desc_Pregunta= Desc_Pregunta;
        this.opc1_pregunta= opc1_pregunta;
        this.Opc2_Pregunta= Opc2_Pregunta;
        this.Opc3_Pregunta= Opc3_Pregunta;
        this.Respuesta_Pregunta= Respuesta_Pregunt;
        this.id_Unidad= id_Unidad;
    }
    id_Pregunta: number;
    Desc_Pregunta: string;
    opc1_pregunta: string;
    Opc2_Pregunta: string;
    Opc3_Pregunta: string;
    Respuesta_Pregunta: string;
    id_Unidad: number;

}