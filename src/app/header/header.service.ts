import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  visibUsuario: boolean = false;
  visibProprietario: boolean = false;

  constructor() { this.visibProprietario=false, this.visibUsuario=false}

  exibirItemParaUsuario () {
    this.visibUsuario = true;
  }

  ocultarItemDoUsuario () {
    this.visibUsuario = false;
  }
  
  exibirItemParaProprietario () {
    this.visibProprietario = true
  }

  ocultarItemProrietario () {
    this.visibProprietario = false
  }


}
