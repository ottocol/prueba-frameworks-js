import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PuestoService } from '../puesto.service'

@Component({
  selector: 'app-tarjeta-visita',
  templateUrl: './tarjeta-visita.component.html',
  styleUrls: ['./tarjeta-visita.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaVisitaComponent implements OnInit {

  nombre = "Pepe"
  apellidos = "Pérez Marín"

  constructor(private puestoService : PuestoService ) {
    
  }

  get nombreCompleto() {
    return this.nombre + " " + this.apellidos
  }

  generarPuesto() {
    console.log(this.puestoService.generarPuesto())
  }

  ngOnInit() {
  }

}
