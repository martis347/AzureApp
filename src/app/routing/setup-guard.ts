import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Utilities} from '../misc/utilities';
import {StorageService} from '../services/storage.service';

@Injectable()
export class SetupGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storage.GetItem('user')) {
      return true;
    }

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
    return false;
  }
}
