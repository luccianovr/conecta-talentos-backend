import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { Empresa } from 'src/claseEmpresa';
import { EmpresasService } from './empresas.service';
@Controller('empresas')
export class EmpresasController {
    constructor(private readonly servicio: EmpresasService) {

    }

    @Get(':id')
    obtenerEmpresaporId(@Param('id') id: number): Empresa {
        return this.servicio.obtenerEmpresaporId(id);
    }

    @Get()
    obtenerEmpresas(): Empresa[] {
        return this.servicio.obtenerEmpresas();
    }

    @Post()
    registrarEmpresa(@Body() empresa: Empresa): Empresa {
        return this.servicio.registrarEmpresa(empresa);
    }
    @Delete(':id')
    eliminarEmpresa(@Param('id') id: number): void {
        this.servicio.eliminarEmpresa(id);
    }
};