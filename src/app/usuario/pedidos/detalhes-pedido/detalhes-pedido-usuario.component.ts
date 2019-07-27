import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido-usuario.component.html',
})
export class DetalhesPedidoUsuarioComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.exibirItemParaUsuario()
  }

}
