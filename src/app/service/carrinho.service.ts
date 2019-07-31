import { Injectable } from '@angular/core';
import { ItemCarrinho } from './item-carrinho';
import { ProdutoComponent } from '../produto/produto.component';
import { Produto } from '../produto/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  // Array de itens do carrinho
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
}
  public incluirItem(produto: Produto): void {
    const itemCarrinho: ItemCarrinho = new ItemCarrinho(
      produto.id,
      produto.valor,
      1
    );
    this.itens.push(itemCarrinho);
  }
}
