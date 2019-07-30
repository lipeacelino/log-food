import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-detalhes-pedidos',
  templateUrl: './detalhes-pedidos.component.html'
})
export class DetalhesPedidosComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.ocultarLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
