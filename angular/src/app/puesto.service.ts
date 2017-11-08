import { Injectable } from '@angular/core';

@Injectable()
export class PuestoService {

  constructor() { }

  puestos = ["Community manager", "Whattefucker in-Chief", "Director of Myselfiness"]
  
  generarPuesto() {
    return this.puestos[Math.floor(Math.random()*this.puestos.length)]
  }

}
