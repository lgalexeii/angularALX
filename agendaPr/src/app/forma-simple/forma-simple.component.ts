import { Component, OnInit,AfterViewChecked,ChangeDetectorRef } from '@angular/core';
import {Persona} from '../app.component';
@Component({
  selector: 'app-forma-simple',
  templateUrl: './forma-simple.component.html',
  styleUrls: ['./forma-simple.component.css']
})
export class FormaSimpleComponent implements OnInit,AfterViewChecked {

  dClass = "default";
  dStyle ={
      bgColor : "gray",
      color : "",
      bdColor :'#ccc'
    };

  isPrimary:boolean;
  isSuccess:boolean;
  isDefault:boolean;

  ngAfterViewChecked(){
    var arrDClass = {'primary':false,'success':false,'default':false};
    var arrDStyle = {
      'primary':{  bgColor : "#337ab7",
        color : "#fff",
        bdColor :'#2e6da4'},
      'success':{  bgColor : "#5cb85c",
        color : "#fff",
        bdColor :"#4cae4c"},
      'default':{  bgColor : '#fff',
        color : "#333",
        bdColor :'#ccc'}};

    arrDClass[this.dClass] = true;
    this.isPrimary=arrDClass['primary'];
    this.isSuccess = arrDClass['success'];
    this.isDefault=arrDClass['default'];

    this.dStyle = arrDStyle[this.dClass];

    this.dc.detectChanges();
  }
  constructor(private dc:ChangeDetectorRef) {
  }

  ngOnInit() {
  }

}
