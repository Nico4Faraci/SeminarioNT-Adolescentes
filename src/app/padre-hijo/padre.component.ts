import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo',
  templateUrl: './padre.component.html'
})

export class PadreComponent {
nombrePadre: String;

  verNombre(nombre: String){
    this.nombrePadre = nombre;
  }
}
