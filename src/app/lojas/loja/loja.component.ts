import { Component, OnInit, Input } from '@angular/core';
import {Loja} from './loja.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',

})
export class LojaComponent implements OnInit {

  @Input () loja: Loja;
  constructor() { }

  ngOnInit() {
  }

}
