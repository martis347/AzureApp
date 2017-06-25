import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import * as moment from 'moment';
import {Constants} from "../../../misc/constants";
import {Utilities} from "../../../misc/utilities";

@Injectable()
export class WeekdayGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const date = moment(route.params.date, Constants.DATE_FORMAT, true);
    let result = true;
    if (!date.isValid()) {
      this.router.navigate(['/lunch', Utilities.GetTodaysDate()])
      result = false;
    } else if ([6, 7].indexOf(date.isoWeekday()) !== -1) {
      this.router.navigate(['/lunch', moment().startOf('isoWeek').format(Constants.DATE_FORMAT)])
      result = false;
    }

    return result;
  }
}
