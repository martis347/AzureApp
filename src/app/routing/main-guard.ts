import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {StorageService} from "../services/storage.service";

@Injectable()
export class MainGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storage.GetItem('user') && this.storage.GetItem('access_token')) {
        return true;
    }

    if(this.storage.GetItem('user') && !this.storage.GetItem('access_token')) {
      this.router.navigate(['/login']);
    }
    else if(!this.storage.GetItem('user')) {
      this.router.navigate(['/setup']);
    }

    return false;
  }
}
