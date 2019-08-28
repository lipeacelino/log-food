import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CarrinhoItem } from 'src/app/carrinho/carrinho-item.model';

@Component({
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
})
export class PedidoItemsComponent implements OnInit {

  @Input() items: CarrinhoItem [];

  @Output() increaseQty = new EventEmitter<CarrinhoItem>();
  @Output() decreaseQty = new EventEmitter<CarrinhoItem>();
  @Output() remove = new EventEmitter<CarrinhoItem>();
  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CarrinhoItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CarrinhoItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CarrinhoItem) {
    this.remove.emit(item);
  }

}
