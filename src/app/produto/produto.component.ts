import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import {CarrinhoService} from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';
import {Produto} from '../produto/produto';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  providers: [ProdutoService, CarrinhoService]

})
export class ProdutoComponent implements OnInit {

  public produto: Produto;

  constructor(
    private route: ActivatedRoute,
    public headerService: HeaderService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.headerService.exibirLinkPadarias(),
    this.headerService.exibirPerfil(),

    console.log('Produto Array de Itens', this.carrinhoService.exibirItens());
  }
  public adicionarItemCarrinho(produto: Produto): void {
    this.carrinhoService.incluirItem(this.produto),
    console.log(this.carrinhoService.exibirItens());
  }
}
