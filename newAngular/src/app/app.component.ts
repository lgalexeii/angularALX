import { Component,ViewChildren,QueryList,AfterViewInit, OnChanges,OnInit,
DoCheck,
OnDestroy,
AfterViewChecked,
AfterContentInit,
AfterContentChecked } from '@angular/core';
import {CalculadoraComponent} from './calculadora/calculadora.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnChanges,OnInit,
DoCheck,
OnDestroy,
AfterViewChecked,
AfterContentInit,
AfterContentChecked {
  title = '.:ALX:.';
  calcValor = 0;
  extValue = 0;

  resultados:string="";

  @ViewChildren(CalculadoraComponent) calculadoras:QueryList<CalculadoraComponent>

  reportarCambio(valor)
   {
      this.title=valor;
   }


   catchCalcEvent(calEvent)
    {
       this.calcValor = calEvent.value ;
       console.log(calEvent.nombre );
    }
    otherValueCalEvent(calEvent)
     {
        this.extValue = calEvent.value ;
        console.log(calEvent.nombre );
        for(let calc of this.calculadoras.toArray()){
           console.log(calc.boxValue);
           this.resultados += calc.boxValue;
        }
     }

     ngAfterViewInit(){
       console.log(this.calculadoras);
       for(let calc of this.calculadoras.toArray()){
          console.log(calc.boxValue);
        //  this.resultados += calc.boxValue;
       }
     }

     ngOnChanges(){
       for(let calc of this.calculadoras.toArray()){
          console.log(calc.boxValue);
          this.resultados += calc.boxValue;
       }
     }


     /*Los eventos*/
ngOnInit(){console.log("este es ngOnInit");}
ngDoCheck(){console.log("este es ngDoCheck");}
ngOnDestroy(){console.log("este es ngOnDestroy");}
ngAfterViewChecked(){console.log("este es ngAfterViewChecked");}
ngAfterContentInit(){console.log("este es ngAfterContentInit");}
ngAfterContentChecked(){console.log("este es ngAfterContentChecked");}

}
