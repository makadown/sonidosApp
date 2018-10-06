import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ANIMALES} from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];

  constructor() {
    /* Crea un clon de los datos en ANIMALES porque 
    si lo asigno directamente, todo cambio en this.animales 
    afectará a ANIMALES. */
      this.animales = ANIMALES.slice(0);
  }

}
