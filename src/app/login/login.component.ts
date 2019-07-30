import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, public headerService: HeaderService) { 

  }

  ngOnInit() {
    this.headerService.ocultarLinkPadarias()
    this.headerService.ocultarPerfil()
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    //console.log("método invocado")
  }

}
