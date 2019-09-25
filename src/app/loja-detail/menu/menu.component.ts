import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs';
import { LojaService } from 'src/app/lojas/loja.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private lojaService: LojaService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.lojaService.menuOfLoja(this.route.parent.snapshot.params.id);
  }

    addMenuItem(item: MenuItem) {
      console.log(item);
    }

}
