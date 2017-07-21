import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  salida = "";

  saludar(){
    this.salida = "Hola Mundo";
  }

  limpiar(){
    this.salida = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
