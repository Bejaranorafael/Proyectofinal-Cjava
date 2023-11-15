// mascotas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasListaComponent } from './mascotas-lista/mascotas-lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MascotasListaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'mascotas',
        component: MascotasListaComponent,
        loadChildren: () => import('./mascotas-lista/mascotas-lista.component').then((m) => m.MascotasListaComponent),
      },
    ]),
  ],
})
export class MascotasModule {}
