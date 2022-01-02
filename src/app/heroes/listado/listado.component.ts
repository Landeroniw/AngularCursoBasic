import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spidi', 'Superman', 'Batman', 'Daredevil'];
  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    
  }
}
