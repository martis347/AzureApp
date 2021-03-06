import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {StorageService} from '../services/storage.service';
import {Utilities} from '../misc/utilities';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storage.GetItem('access_token') && this.storage.GetItem('user')) {
      return true ;
    }

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
    return false;
  }
}
