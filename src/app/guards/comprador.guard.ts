import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompradorGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | boolean {
    if (sessionStorage.getItem('tipoUsuario') === 'comp') {
      return true;
    } else if (sessionStorage.getItem('tipoUsuario') === 'prop') {
      this.router.navigate(['/p/home']);
      return false;
    }
    this.router.navigate(['/home']);
    return false;
  }
}

