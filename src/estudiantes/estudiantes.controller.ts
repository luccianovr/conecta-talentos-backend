import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Estudiante } from 'src/claseEstudiante';
import { EstudiantesService } from './estudiantes.service';
@Controller('estudiantes')
export class EstudiantesController {

    constructor(private readonly servicio: EstudiantesService) {

    }
    @Get(':id')
    obtenerEstudianteporId(@Param('id') id: number): Estudiante {
        return this.servicio.obtenerEstudianteporId(id);
    }

    @Get()
    obtenerEstudiantes(): Estudiante[] {
        return this.servicio.obtenerEstudiantes();
    }

    @Post()
    registrarEstudiante(@Body() estudiante: Estudiante): Estudiante {
        return this.servicio.registrarEstudiante(estudiante);
    }

    @Delete(':id')
    eliminarEstudiante(@Param('id') id: number): void {
        this.servicio.eliminarEstudiante(id);
    }
}
