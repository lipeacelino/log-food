import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrinhoItem } from '../carrinho/carrinho-item.model';
import { PedidoItem, Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  pedidoForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  delivery = 8;
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];
  constructor(private pedidoService: PedidoService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {this.pedidoForm = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
    email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
    emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
    address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
    number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
    optionalAddress: this.formBuilder.control(''),
    paymentOption: this.formBuilder.control('', [Validators.required])});
}
  itemsValue(): number {
    return this.pedidoService.itemsValue();
  }

  carrinhoItems(): CarrinhoItem[] {
    return this.pedidoService.carrinhoItems();
  }

  increaseQty(item: CarrinhoItem) {
    this.pedidoService.increaseQty(item);
  }

  decreaseQty(item: CarrinhoItem) {
    this.pedidoService.decreaseQty(item);
  }

  remove(item: CarrinhoItem) {
    this.pedidoService.remove(item);
  }
  heckOrder(pedido: Pedido) {
    pedido.pedidoItems = this.carrinhoItems()
      .map((item: CarrinhoItem) => new PedidoItem(item.quantity, item.menuItem.id));
    this.pedidoService.checkPedido(pedido)
      .subscribe( (pedidoId: string) => {
        this.router.navigate(['/confirmacao']);
        this.pedidoService.clear();
    });
    console.log(pedido);
  }

}
