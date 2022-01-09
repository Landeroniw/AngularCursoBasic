import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 12345
        }
      ]; 

    get personajes(): Personaje[]{
          return [...this._personajes];
    }
    constructor(){
        console.log('servicio inicializado');
    }

    agregarPersonaje ( personaje: Personaje)    {
        this._personajes.push(personaje);
    }
}