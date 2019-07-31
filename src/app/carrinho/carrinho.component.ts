import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import {CarrinhoService} from '../service/carrinho.service';
import {ProdutoService} from '../service/produto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  providers: [ProdutoService]
})
export class CarrinhoComponent implements OnInit {
  public idPedidoCompra: number;
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  constructor(
    public headerService: HeaderService,
    private carrinhoService: CarrinhoService) { }
    ngOnInit() {
    this.headerService.exibirPerfil(),
    this.headerService.exibirLinkPadarias(),
    console.log('Carrinho Array de Itens', this.carrinhoService.exibirItens());
  }

}
