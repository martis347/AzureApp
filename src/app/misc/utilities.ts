import * as moment from 'moment';
import {Constants} from "./constants";
import { environment } from '../../environments/environment';

export class Utilities {
  public static GetTodaysDate() {
    return moment().format(Constants.DATE_FORMAT);
  }

  public static GetDisplayFormat(date?){
    let today = (date ? moment(date, Constants.DATE_FORMAT) : moment()).isoWeekday() - 1;

    return Constants.DAYS_OF_WEEK[today];
  }

  public static GetApiUrl() {
    if(environment.production) {
      return 'http://besmart1-api.azurewebsites.net/api/';
    } else {
      return 'http://localhost:15338/api/';
    }
  }
}
