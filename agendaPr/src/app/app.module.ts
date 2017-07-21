import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';

import { AppComponent,Persona ,FormatPersonaPipe} from './app.component';
import { CitaComponent } from './cita/cita.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FormaSimpleComponent } from './forma-simple/forma-simple.component';
import {BackendChequesService} from './backend-cheques.service';
import {BackendCitasService} from './backend-citas.service';
import { AyudaDirective } from './ayuda.directive';
import { DemoObservableComponent } from './demo-observable/demo-observable.component';
import { TestWebComponent } from './test-web/test-web.component';
import {HttpModule} from '@angular/http';
import { ViajeComponent } from './viaje/viaje.component';

const routes:Routes=[
  {path:'agenda',component: AgendaComponent},
  {path:'calculadora',component: TestWebComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CitaComponent,
    AgendaComponent,
    FormaSimpleComponent,
    FormatPersonaPipe,
    AyudaDirective,
    DemoObservableComponent,
    TestWebComponent,
    ViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [BackendChequesService,BackendCitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
