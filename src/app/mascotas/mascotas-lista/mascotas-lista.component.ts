// mascotas-lista.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mascotas-lista',
  template: `
    <div class="vet-section">
      <h2>Mascotas</h2>
      <p>Listado de mascotas registradas.</p>
     
    </div>
  `,
  styles: [`
    
    .vet-section {
      background-color: #f0f0f0;
      padding: 20px;
      border: 1px solid #ddd;
      margin: 10px;
    }
  `],
})
export class MascotasListaComponent {}
