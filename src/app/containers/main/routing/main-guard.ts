import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class MainGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    debugger;

    if (localStorage.getItem('user')) {
      return true;
    }

    this.router.navigate(['/setup']);
    return false;
  }
}
