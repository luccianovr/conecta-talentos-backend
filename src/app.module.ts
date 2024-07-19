import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { OfertalaboralController } from './ofertalaboral/ofertalaboral.controller';
import { PostulacionesController } from './postulaciones/postulaciones.controller';
import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EmpresasService } from './empresas/empresas.service';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController, EmpresasController, OfertalaboralController, PostulacionesController],
  providers: [AppService, EstudiantesService, EmpresasService],
})
export class AppModule {}
