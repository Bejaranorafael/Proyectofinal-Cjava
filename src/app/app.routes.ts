import { Routes } from '@angular/router';
import { CitasListaComponent } from './citas/citas-lista/citas-lista.component';
import { MascotasListaComponent } from './mascotas/mascotas-lista/mascotas-lista.component';
import { ServiciosListaComponent } from './servicios/servicios-lista/servicios-lista.component';

export const appRoutes: Routes = [
  { path: 'citas', component: CitasListaComponent },
  { path: 'mascotas', component: MascotasListaComponent },
  { path: 'servicios', component: ServiciosListaComponent },
  { path: '', redirectTo: '/citas', pathMatch: 'full' }, // Página por defecto
];
