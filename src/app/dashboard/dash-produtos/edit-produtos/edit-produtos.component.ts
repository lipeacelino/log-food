import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-edit-produtos',
  templateUrl: './edit-produtos.component.html'
})
export class EditProdutosComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.ocultarLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
