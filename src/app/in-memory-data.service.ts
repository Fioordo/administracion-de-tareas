import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Persona } from './persona';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const catalogos = [
      { id: 0,  name: 'Ignacio', color: 'verde' },
      { id: 11, name: 'EDGARDO', color: 'azul'},
      { id: 12, name: 'Marcos', color: 'amarillo' },
      { id: 13, name: 'Adrian', color: 'morado' },
      { id: 14, name: 'Elisa', color: 'gris' },
      { id: 15, name: 'Vision', color: 'blanco' },
      { id: 16, name: 'Scarlet', color: 'rojo' },
      { id: 17, name: 'Dayanna', color: 'negro' },
      { id: 18, name: 'Agustin', color: 'morado' },
      { id: 19, name: 'Ismael', color: 'amarillo' },
      { id: 20, name: 'confucio', color: 'verde' }
    ];
    const personas = [
      { id: 0,  name: 'Zero', correo: 'ignaci@gmail.com' },
      { id: 11, name: 'Mr. Nice', correo: 'azul'},
      { id: 12, name: 'Narco', correo: 'amarillo' },
      { id: 13, name: 'Bombasto', correo: 'morado' },
      { id: 14, name: 'Celeritas', correo: 'gris' },
      { id: 15, name: 'Magneta', correo: 'blanco' },
      { id: 16, name: 'RubberMan', correo: 'rojo' },
      { id: 17, name: 'Dynama', correo: 'negro' },
      { id: 18, name: 'Dr IQ', correo: 'morado' },
      { id: 19, name: 'Magma', correo: 'amarillo' },
      { id: 20, name: 'Tornado', correo: 'verde' }
    ];
    return {catalogos, personas};
  }
}
