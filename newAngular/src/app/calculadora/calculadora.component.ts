import { Component, OnInit,Input,Output,EventEmitter,ContentChild ,ElementRef,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit ,AfterContentInit{

  msgCientifica = "";
  boxValue = 0;
  showSct = false;

  @Input("ver") version = "0.0.0";
  @Input() autor = "";
  @Input("modo")  set Cientifica(modo){
    console.log("Valor calculadora: "+ modo);
    this.msgCientifica = modo?"Esta calculadora es cientifica":"";
    this.showSct = modo;
  }

  @Input("inCalValue")  set inCalValue(inCalValue){
    console.log("Valor externo: "+ inCalValue);
    this.boxValue = inCalValue;
  }

  @Output("igualClicked") emisorEventos=new EventEmitter();

  @ContentChild("palabra") span:ElementRef;

  concatNum(num){
    this.boxValue = this.boxValue > 0 ? (this.boxValue * 10)+num : num;
    console.log(this.boxValue);

  }



  cleanBox(){
    this.boxValue = 0;
  }

  btnIgualA()
  {
    this.emisorEventos.emit(new EventoCalc(this.boxValue,"igual"));
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit()
 {

   if(this.span)
     {
       console.log("Contenido del span:"+this.span.nativeElement.innerHTML);
     }
 }

}


class EventoCalc
{

   constructor(public value:number,
        public nombre:String)
     {

     }
}
