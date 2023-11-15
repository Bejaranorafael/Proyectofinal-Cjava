import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';  // Ajusta la ruta según la estructura de tu proyecto

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppComponent, {
  imports: [RouterModule.forRoot(appRoutes)],
})
  .catch(err => console.error(err));
