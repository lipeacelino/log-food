import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html'
})
export class AddProdutosComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.exibirItemParaUsuario()
  }

}
