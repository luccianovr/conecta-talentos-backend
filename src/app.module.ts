import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';
import { EmpresasController } from './empresas/empresas.controller';
import { OfertalaboralController } from './ofertalaboral/ofertalaboral.controller';
import { PostulacionesController } from './postulaciones/postulaciones.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController, EmpresasController, OfertalaboralController, PostulacionesController],
  providers: [AppService],
})
export class AppModule {}
