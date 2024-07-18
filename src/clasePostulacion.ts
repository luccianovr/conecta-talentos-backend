import { Estudiante } from "./claseEstudiante";

export class Postulacion {
    id: number;
    fechaPostulacion: Date;
    estudiante: Estudiante;
    estado: string;

    constructor(id: number, fechaPostulacion: Date, estudiante: Estudiante, estado: string) {
        this.id = id;
        this.fechaPostulacion = fechaPostulacion;
        this.estudiante = estudiante;
        this.estado = estado;
    }
}