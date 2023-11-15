// servicios-lista.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-lista',
  template: `
    <div class="vet-section">
      <h2>Servicios</h2>
      <p>Listado de servicios ofrecidos.</p>
     
    </div>
  `,
  styles: [`
    
    .vet-section {
      background-color: #e7f7e7;
      padding: 20px;
      border: 1px solid #ddd;
      margin: 10px;
    }
  `],
})
export class ServiciosListaComponent {}
