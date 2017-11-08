import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TarjetaVisitaComponent } from './tarjeta-visita/tarjeta-visita.component';
import { PuestoService } from './puesto.service'


@NgModule({
  declarations: [
    AppComponent,
    TarjetaVisitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
