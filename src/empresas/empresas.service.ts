import { Injectable, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { Empresa } from 'src/claseEmpresa';
@Injectable()
export class EmpresasService {

    private empresas: Empresa[] = [];

    obtenerEmpresaporId(@Param('id') id: number): any {
        for (let i of this.empresas) {
            if (i.id == id) {
                return this.empresas[i.id - 1];
            }
            else {
                return 'no está';
            }
        }
    }

    obtenerEmpresas(): Empresa[] {
        return this.empresas;
    }

    registrarEmpresa(@Body() empresa: Empresa): Empresa {
        this.empresas.push(empresa);
        empresa.id = this.empresas.length;
        return empresa;
    }

    eliminarEmpresa(@Param('id') id: number): void {
        for (let i of this.empresas) {
            let index: number = this.empresas.findIndex(i => i.id == id);
            if (index != -1) {
                this.empresas.splice(index, 1);
            }
        }
    }
}
