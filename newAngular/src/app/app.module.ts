import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PaginadorComponent } from './paginador/paginador.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    CalculadoraComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
