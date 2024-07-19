import { Injectable, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Estudiante } from 'src/claseEstudiante';
@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];


    obtenerEstudianteporId(@Param('id') id: number): Estudiante {
        for (let i of this.estudiantes) {
            console.log(id);
            if (i.id == id) {
                return this.estudiantes[id - 1];
            }
        }
    }


    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }


    registrarEstudiante(@Body() estudiante: Estudiante): Estudiante {
        this.estudiantes.push(estudiante);
        estudiante.id = this.estudiantes.length;
        return estudiante;
    }

    eliminarEstudiante(@Param('id') id: number): void {
        for (let i of this.estudiantes) {
            let index: number = this.estudiantes.findIndex(i => i.id == id);
            if (index != -1) {
                this.estudiantes.splice(index, 1);
            }
        }
    }
}
