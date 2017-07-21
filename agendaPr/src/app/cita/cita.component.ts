import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  @Input() fecha;
  @Input() asunto;
  @Input("hp") isImportant:boolean;

  constructor() { }

  ngOnInit() {
  }

}
