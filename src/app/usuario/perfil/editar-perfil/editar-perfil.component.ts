import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html'
})
export class EditarPerfilComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.exibirItemParaUsuario()
  }

}
