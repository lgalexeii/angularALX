import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.css']
})
export class DemoObservableComponent implements OnInit {

  constructor() { }

  testObservable(){
    Observable.interval(1000).subscribe((elemento)=>{
      console.log(elemento);
    });
  }

  ngOnInit() {
  }

}
