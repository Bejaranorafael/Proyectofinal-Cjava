// citas-lista.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-citas-lista',
  template: `
    <div class="vet-section">
      <h2>Citas</h2>
      <p>Listado de citas programadas.</p>
      
    </div>
  `,
  styles: [`
    
    .vet-section {
      background-color: #f7f7f7;
      padding: 20px;
      border: 1px solid #ddd;
      margin: 10px;
    }
  `],
})
export class CitasListaComponent {}
