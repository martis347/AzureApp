import * as moment from 'moment';
import {Constants} from "./constants";

export class Utilities {
  public static GetTodaysDate() {
    return moment().format(Constants.DATE_FORMAT);
  }
}
