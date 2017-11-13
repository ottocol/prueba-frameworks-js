import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonajeComponent implements OnInit {
  @Input() personaje;
  @Output() onChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  cambiarStatus() {
    this.onChange.emit(this.personaje.id)
  }

}
