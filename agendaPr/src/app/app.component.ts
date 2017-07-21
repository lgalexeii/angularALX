import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    aPerson = new Persona();
}

//----------Pipe rfc-------------
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPersona'
})
export class FormatPersonaPipe implements PipeTransform {

  /*transform(value: any, args?: any): any {
    return null;
  }*/
  transform(value: Persona, format:string="N P"): string {
    return format.split(" ").map((el)=>
      {

        var newValue = "";
        switch(el){
          case 'N': newValue =value.nombre; break;
          case 'P': newValue = value.apellidoPaterno;break;
          case 'M': newValue = value.apellidoMaterno;break;
          case 'F': newValue = value.fechaNac.toString();break;
          default: newValue = "";break;
        }
        return newValue;
      }
    ).reduce((inValue,el)=>{
        return inValue += (" " + el);
    }) ;

  }

}

export class Persona
{
  nombre="Juanito";
  apellidoPaterno = "Perez";
  apellidoMaterno = "De Leon";
  fechaNac=new Date();
  domicilio="Callejón de los milagros";
}
