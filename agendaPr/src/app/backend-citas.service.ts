import { Injectable } from '@angular/core';

@Injectable()
export class BackendCitasService {

  definePriority():boolean{
    return Math.floor((Math.random() * 10) + 1) % 2==0;
  }

  constructor() { }

}
