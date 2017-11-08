import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tarjeta-visita',
  templateUrl: './tarjeta-visita.component.html',
  styleUrls: ['./tarjeta-visita.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaVisitaComponent implements OnInit {

  nombre = "Pepe"
  apellidos = "Pérez Marín"

  constructor() {
    
  }

  get nombreCompleto() {
    return this.nombre + " " + this.apellidos
  }

  generarPuesto() {
    console.log("generar puesto")
  }

  ngOnInit() {
  }

}
