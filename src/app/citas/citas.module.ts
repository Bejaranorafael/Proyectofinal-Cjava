// citas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasListaComponent } from './citas-lista/citas-lista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CitasListaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'citas',
        component: CitasListaComponent,
        loadChildren: () => import('./citas-lista/citas-lista.component').then((m) => m.CitasListaComponent),
      },
    ]),
  ],
})
export class CitasModule {}
