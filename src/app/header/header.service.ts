import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  visibPerfil = false;
  visibPadarias = false;

  exibirPerfil() {
    this.visibPerfil = true;
  }

  ocultarPerfil() {
    this.visibPerfil = false;
  }

  exibirLinkPadarias() {
    this.visibPadarias = true;
  }

  ocultarLinkPadarias() {
    this.visibPadarias = false;
  }

  verifSeUsuarioIsComprador(): boolean {
    if (sessionStorage.getItem('tipoUsuario') === 'comp') {
      return true;
    }
    return false;
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }

}
