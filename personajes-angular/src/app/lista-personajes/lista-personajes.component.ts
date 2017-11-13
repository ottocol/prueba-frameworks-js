import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ListaPersonajesComponent implements OnInit {
  personajes = [
    {id:1, nombre:"Cersei Lannister", vivo:true},
    {id:2, nombre:"Jon Nieve", vivo:true},
    {id:3, nombre:"Eddard Stark", vivo: true}
  ]
  
  constructor() { }

  ngOnInit() {
  }

  onChange(id) {
    var pos = this.personajes.findIndex(elemento=>elemento.id==id)
    if (pos>-1) {
      this.personajes[pos].vivo = !this.personajes[pos].vivo
    }
  }
}
