import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment';
import {Constants} from "../misc/constants";
import {Utilities} from "../misc/utilities";


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!localStorage.getItem('user')) {
      return true;
    }

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
    return false;
  }
}
