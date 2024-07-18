import { Empresa } from "./claseEmpresa";
import { Postulacion } from "./clasePostulacion";

export class OfertaLaboral {
    id: number;
    fechaCreacion: Date;
    descripcion: string;
    cargo: string;
    region: string;
    tipo: string;
    estado: string;
    empresa: Empresa;
    postulaciones: Postulacion;

    constructor(id: number, fechaCreacion: Date, descripcion: string, cargo: string, region: string, tipo: string, estado: string, empresa: Empresa, postulaciones: Postulacion) {
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.descripcion = descripcion;
        this.cargo = cargo;
        this.region = region;
        this.tipo = tipo;
        this.estado = estado;
        this.empresa = empresa;
        this.postulaciones = postulaciones;
    }

}