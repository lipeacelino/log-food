import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/header.service';
import { CarrinhoService } from './carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(public headerService: HeaderService,
              private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.headerService.exibirPerfil();
    this.headerService.exibirLinkPadarias();
  }
  items(): any[] {
    return this.carrinhoService.items;

  }
  total(): number {
    return this.carrinhoService.total();
  }
  clear() {
    this.carrinhoService.clear();
  }
  removeItem(item: any) {
    this.carrinhoService.removeItem(item);
  }
  addItem(item: any) {
    this.carrinhoService.addItem(item);
  }

}
