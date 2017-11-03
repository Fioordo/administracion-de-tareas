import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav class="navbar navbar-light bg-faded">
    <a class="nav1" routerLink="/persona" routerLinkActive="active">Personas</a>
    <a class="nav2" routerLink="/catalogos" routerLinkActive="active">Catalogos</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo con Mysql';
}
