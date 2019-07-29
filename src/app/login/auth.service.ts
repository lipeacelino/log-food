import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioStatusAutenticacao: boolean;

  fazerLogin(usuario: Usuario) {
    if (usuario.email == "joao@gmail.com" && usuario.senha == "12345") {
      //o método deve redirecionar para a tela de lojas (padarias/lanchonetes)
      setTimeout(() => {this.router.navigate(['/lojas']);}, 1500);
      sessionStorage.setItem('username', 'joão');
      sessionStorage.setItem('tipoUsuario', 'comp');
      console.log("método invocado no service")
      this.usuarioStatusAutenticacao = true;
    } 
    else if (usuario.email == "padaria@gmail.com" && usuario.senha == "12345") {
      setTimeout(() => {this.router.navigate(['/p/home']);}, 1500);
      sessionStorage.setItem('username', 'padaria');
      sessionStorage.setItem('tipoUsuario', 'prop');
      this.usuarioStatusAutenticacao = true;
    } 
  }

  usuarioEstaAutenticado() {
    if (sessionStorage.getItem('username') !== null){
      console.log("usuário autenticado")
      return this.usuarioStatusAutenticacao;
    }
    console.log("usuário não está autenticado")
    return this.usuarioStatusAutenticacao;
  }

  fazerLogout() {
    sessionStorage.setItem('username', null);
    setTimeout(() => {this.router.navigate(['/home']);}, 1500);
  }
}
