import { Injectable } from '@angular/core';

@Injectable()
export class BackendChequesService {

  constructor() { }

  consultarCheque(clave:number):string{
    return clave + "-CH331"
  }

}
