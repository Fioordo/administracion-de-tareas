import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Catalogo } from './Catalogo';



@Injectable()
export class CatalogoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private catalogosUrl = 'http://localhost:8080/catalogo';  // URL to web api

  constructor(private http: Http) { }

  getCatalogos(): Promise<Catalogo[]> {
    return this.http.get(this.catalogosUrl)
               .toPromise()
               .then(response => response.json() as Catalogo[])
               .catch(this.handleError);
  }
  getCatalogo(id: number): Promise<Catalogo> {

    const url = `${this.catalogosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Catalogo)
      .catch(this.handleError);
  }

  deleteCatalogo(id: number): Promise<void> {
    const url = `${this.catalogosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createCatalogo(nombre: string, apellido: string): Promise<Catalogo> {
    const url = `${this.catalogosUrl}`;
    return this.http
      .post(url, JSON.stringify({nombre: nombre, apellido: apellido }), { headers: this.headers })
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  updateCatalogo(catalogo: Catalogo): Promise<Catalogo> {
    const url = `${this.catalogosUrl}/${catalogo.id}`;
    return this.http
      .put(url, JSON.stringify(catalogo), {headers: this.headers})
      .toPromise()
      .then(() => catalogo)
      .catch(this.handleError);
  }

  // Manejo de errores
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
