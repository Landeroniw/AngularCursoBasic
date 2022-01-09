import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder : 0
  }
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  //Llamar al servicio
  constructor(private dbzService : DbzService){}
  agregar( ){
    console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);
  //Llamar al servicio
    this.dbzService.agregarPersonaje( this.nuevo);
    this.nuevo = {
      nombre: '',
      poder : 0
    }
  }

}
