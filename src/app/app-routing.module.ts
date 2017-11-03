import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonaComponent } from './persona.component';
import { CatalogosComponent } from './catalogos.component';
import { CatalogoDetailComponent } from './catalogo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/persona', pathMatch: 'full' },
   { path: 'persona',  component: PersonaComponent },
   { path: 'detail/:id', component: CatalogoDetailComponent },
  { path: 'catalogos',     component: CatalogosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
