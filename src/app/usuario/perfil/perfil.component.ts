import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.exibirItemParaUsuario()
  }

}
