import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import * as moment from 'moment';
import {Constants} from "../misc/constants";
import {Utilities} from "../misc/utilities";

@Injectable()
export class WeekdayGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const date = moment(route.params.date, Constants.DATE_FORMAT, true);
    let result = true;
    if (!date.isValid() || this.isNotValidDate(date)) //belongs to other week
    {
      if(this.isNotValidDate(moment(Utilities.GetTodaysDate(), Constants.DATE_FORMAT, true))) {
        this.router.navigate(['/lunch', moment().startOf('isoWeek').format(Constants.DATE_FORMAT)]);
      } else {
        this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
      }
      result = false;
    }
    return result;
  }

  private isNotValidDate(date) {
    return [0, 1, 2, 3, 4].indexOf(date.diff(moment().startOf('isoWeek'), 'days')) === -1;
  }
}
