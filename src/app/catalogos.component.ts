import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';

@Component({
  selector: 'my-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: [ './catalogos.component.css' ]
})
export class CatalogosComponent implements OnInit {
  catalogos: Catalogo[];
  selectedCatalogo: Catalogo;

  constructor(
    private catalogoService: CatalogoService,
    private router: Router) { }

    getCatalogos(): void {
      this.catalogoService
          .getCatalogos()
          .then(catalogos => this.catalogos = catalogos);
    }

    add(nombre: string, apellido: string): void {
      this.catalogoService.createCatalogo(nombre, apellido )

        .then(catalogo => {
          this.catalogos.push(catalogo);
          this.getCatalogos();
          this.selectedCatalogo = null;
        });
    }
    delete(catalogo: Catalogo): void {
      this.catalogoService
          .deleteCatalogo(catalogo.id)
          .then(() => {
            this.catalogos = this.catalogos.filter(h => h !== catalogo);
            if (this.selectedCatalogo === catalogo) { this.selectedCatalogo = null; }
          });
    }
    ngOnInit(): void {
      this.getCatalogos();

    }
    onSelect(catalogo: Catalogo): void {
      this.selectedCatalogo = catalogo;
    }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedCatalogo.id]);
    }
  }
