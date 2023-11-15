// servicios.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosListaComponent } from './servicios-lista/servicios-lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServiciosListaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'servicios',
        component: ServiciosListaComponent,
        loadChildren: () => import('./servicios-lista/servicios-lista.component').then((m) => m.ServiciosListaComponent),
      },
    ]),
  ],
})
export class ServiciosModule {}
