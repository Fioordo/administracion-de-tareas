import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard.component';
import { CatalogosComponent } from './catalogos.component';
 import { CatalogoDetailComponent } from './catalogo-detail.component';
import { CatalogoService } from './catalogo.service';
// import { HeroSearchComponent } from './hero-search.component';
import { PersonaComponent } from './persona.component';
import { PersonaService } from './persona.service';



@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    PersonaComponent,
    CatalogoDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CatalogoService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
