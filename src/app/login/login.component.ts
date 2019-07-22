import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { 

  }

  ngOnInit() {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    //console.log("método invocado")
  }

}
