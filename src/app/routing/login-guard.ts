import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment';
import {Constants} from "../misc/constants";
import {Utilities} from "../misc/utilities";
import {StorageService} from "../services/storage.service";

declare let gapi: any;

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storage.GetItem('access_token')) {
      return true;
    }

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
    return false;
  }
}
