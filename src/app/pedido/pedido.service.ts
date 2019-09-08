import {Injectable} from '@angular/core';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/internal/Observable';
import 'rxjs/add/operator/map';

import {CarrinhoService} from '../loja-detail/carrinho/carrinho.service';
import {CarrinhoItem} from '../loja-detail/carrinho/carrinho-item.model';
import {Pedido, PedidoItem} from './pedido.model';

import {MEAT_API} from '../app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class PedidoService {

  constructor(private carrinhoService: CarrinhoService,
              private http: Http) {}

  itemsValue(): number {
    return this.carrinhoService.total()
  }

  carrinhoItems(): CarrinhoItem[]{
    return this.carrinhoService.items;
  }

  increaseQty(item: CarrinhoItem){
    this.carrinhoService.increaseQty(item)
  }

  decreaseQty(item: CarrinhoItem){
    this.carrinhoService.decreaseQty(item)
  }

  remove(item: CarrinhoItem){
    this.carrinhoService.removeItem(item)
  }

  clear(){
    this.carrinhoService.clear()
  }

  checkPedido(pedido: Pedido): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/pedidos`,
                          JSON.stringify(Pedido),
                          new RequestOptions({headers}))
                          .map(response => response.json())
                          .map(pedido => pedido.id)
                        }}
