import { Component,ElementRef, OnInit,ContentChildren,QueryList,AfterViewInit,ChangeDetectorRef,ViewChild } from '@angular/core';
import {CitaComponent} from '../cita/cita.component';
import {BackendCitasService} from '../backend-citas.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit, AfterViewInit {

  numCitas = 0;

  @ContentChildren(CitaComponent) citas:QueryList<CitaComponent>

  citasN:Cita[]=[];
  cita = new Cita("","",false);

  constructor(private cd:ChangeDetectorRef,private citasService:BackendCitasService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.citas);
    /*for(let c of this.citas.toArray()){
      this.citasN.push( new Cita(c.fecha,c.asunto,c.isImportant ));
    }*/
    this.citasN = this.citas.map((c)=>{return new Cita( c.fecha,c.asunto,c.isImportant)}) ;
    console.log(this.citasN);
    this.numCitas = this.citas.length;
    this.cd.detectChanges();
  }

  addCita(){
    console.log("Adding new cita");
    this.cita. isImportant =  this.citasService.definePriority();
    this.citasN.push(this.cita);
    this.cita = new Cita("","",false);
  }
}

export class Cita{
  constructor(public fecha:string,
  public asunto:string,
  public isImportant:boolean){}
  clear(){
    this.asunto = "";
    this.fecha = "";
  }
}
