import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class OrderStateService {
  public canOrder(date): boolean {
    const today = moment(date, 'ddd').add(11, 'hours');

    return today.diff(moment()) < 0;
  }
}
