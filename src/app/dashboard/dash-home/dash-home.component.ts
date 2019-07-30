import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html'
})
export class DashHomeComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.ocultarLinkPadarias()
    this.headerService.exibirPerfil()
  }

}
