import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';
import { HeaderService } from '../header/header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
 
  constructor(private authService: AuthService, public headerService: HeaderService,
    private fb: FormBuilder) {}

  private usuario: Usuario = new Usuario();

  formulario: FormGroup

  ngOnInit() {
    this.formulario = this.fb.group({
      email: [null, Validators.compose([Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/), Validators.required])],
      senha: [null, Validators.compose([Validators.minLength(8), Validators.required])],
    })
    this.headerService.ocultarLinkPadarias()
    this.headerService.ocultarPerfil()
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
    //console.log("método invocado")
  }

}
