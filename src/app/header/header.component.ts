import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, public headerService: HeaderService) { }

  ngOnInit() {
  }

  fazerLogout() {
    this.authService.fazerLogout();
  }
}
