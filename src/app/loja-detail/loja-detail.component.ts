import { Component, OnInit } from '@angular/core';
import { Loja } from '../lojas/loja/loja.model';
import { LojaService } from '../lojas/loja.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loja-detail',
  templateUrl: './loja-detail.component.html',
})
export class LojaDetailComponent implements OnInit {

  loja: Loja;

  constructor(private lojaService: LojaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.lojaService.lojaById(this.route.snapshot.params.id)
    .subscribe(loja => this.loja = loja)
  }

}
