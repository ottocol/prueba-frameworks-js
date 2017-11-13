import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
