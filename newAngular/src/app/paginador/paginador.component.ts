import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {
  paginaActual=0
  @Output("cambioPagina") emisorEventos=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  avanzar()
  {
    this.paginaActual++;
    this.emisorEventos.emit("Avanzo");
  }
  retroceder()
  {
    this.paginaActual--;
    this.emisorEventos.emit("Retrocedio");
  }
}
