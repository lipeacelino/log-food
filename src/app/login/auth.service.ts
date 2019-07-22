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
    if (usuario.email == "felipe@gmail.com" && 
        usuario.senha == "12345") {
      //o método deve redirecionar para a tela de lojas (padarias/lanchonetes)
      setTimeout(() => {this.router.navigate(['/lojas/lojas.component.html']);}, 1500);
      sessionStorage.setItem('username', 'Felipe'); 
      console.log("método invocado no service")
      this.usuarioStatusAutenticacao = true;
    } 
  }

  usuarioEstaAutenticado() {
    if (sessionStorage.getItem('username') !== null){
      return this.usuarioStatusAutenticacao;
    }
    return this.usuarioStatusAutenticacao;
  }

  fazerLogout() {
    sessionStorage.setItem('username', null);
    setTimeout(() => {this.router.navigate(['/home']);}, 1500);
  }
}
