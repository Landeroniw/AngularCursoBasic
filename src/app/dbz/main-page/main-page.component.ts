import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 12345
    }
  ];

  nuevo: Personaje = {
    nombre: 'Pepito',
    poder: 100800
  }
}
