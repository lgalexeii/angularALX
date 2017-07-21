import { Http, URLSearchParams } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-web',
  templateUrl: './test-web.component.html',
  styleUrls: ['./test-web.component.css']
})
export class TestWebComponent implements OnInit {
  salida="";
  constructor(private http:Http) { }

  ngOnInit() {
  }
 hacerPeticion()
  {
    let url="http://localhost:8080/articulos";
    /*  let parametros=new URLSearchParams();
    parametros.set("","")*/
    this.http.get(url)
     .subscribe(valor =>
       {
         this.salida=valor.json();
         console.log("Salida:"+this.salida);
       },error => console.log(error))

    }
  }
