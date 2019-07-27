import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html'
})
export class LojasComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.exibirItemParaUsuario()
  }

}
