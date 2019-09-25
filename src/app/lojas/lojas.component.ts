import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import {LojaService} from './loja.service';
import {Loja} from './loja/loja.model';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html'
})
export class LojasComponent implements OnInit {
  lojas: Loja [];
  constructor(public headerService: HeaderService,
              private lojaService: LojaService) { }

  ngOnInit() {
    this.headerService.exibirLinkPadarias(),
    this.headerService.exibirPerfil(),
    this.lojaService.lojas()
    .subscribe(lojas => this.lojas = lojas);
  }

}
