import { Component, OnInit } from '@angular/core';

import { Persona } from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'my-persona',
  templateUrl: './persona.component.html',
  styleUrls: [ './persona.component.css' ]
})

export class PersonaComponent implements OnInit {
  persona: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona()
      .then(persona => this.persona = persona);
  }
}

