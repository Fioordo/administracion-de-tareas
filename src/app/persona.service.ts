import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Persona } from './persona';
import { Catalogo } from './catalogo';

@Injectable()
export class PersonaService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private PersonasUrl = 'http://localhost:8080/usuario';  // URL to web api

  constructor(private http: Http) { }

  getPersona(): Promise<Persona[]> {
    return this.http.get(this.PersonasUrl)
               .toPromise()
               .then(response => response.json() as Persona[])
               .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
