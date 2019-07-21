import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioStatusAutenticacao: boolean = false;

  fazerLogin(usuario: Usuario) {
    if (usuario.email == "usuario@gmail.com" && 
        usuario.senha == "12345") {
      //o método deve redirecionar para a tela de lojas (padarias/lanchonetes)
      setTimeout(() => {this.router.navigate(['/home']);}, 2000); 
      console.log("método invocado no service")
      this.usuarioStatusAutenticacao = true;
    } 
  }

  usuarioEstaAutenticado() {
    return this.usuarioStatusAutenticacao
  }
}
