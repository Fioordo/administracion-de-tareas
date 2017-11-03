import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';
import { PersonaComponent } from './persona.component';


@Component({
  selector: 'catalogo-detail',
  templateUrl: './catalogo-detail.component.html',
  styleUrls: [ './catalogo-detail.component.css' ]
})

export class CatalogoDetailComponent implements OnInit {
  catalogo: Catalogo;

  constructor(
    private catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      /*.switchMap((params: ParamMap) => this.catalogoService.getCatalogo(+params.get('id')))*/
      /*Arriba con solo get modifica el id asignado, abajo con getall modifica todos los parametros */
      .switchMap((param: ParamMap) => this.catalogoService.getCatalogo(+param.getAll('id')))
      .subscribe(catalogo => this.catalogo = catalogo);
  }
  save(): void {
    this.catalogoService.updateCatalogo(this.catalogo)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
