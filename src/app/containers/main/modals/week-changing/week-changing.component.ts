import {MdDatepicker, DateAdapter} from "@angular/material";
import {Component, ViewChild, Input} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {Constants} from "../../../../misc/constants";

@Component({
  selector: 'week-changing',
  templateUrl: 'week-changing.component.html',
  styleUrls: ['week-changing.component.css']
})
export class WeekChangingModal {
  @ViewChild('picker') picker: MdDatepicker<any>;
  @ViewChild('input') input: Input;
  dateForm: FormGroup = new FormGroup({
    date: new FormControl(moment().toDate(), this.isDateValid)
  });


  filterDays(date: Date){
    return date.getDay() !== 0 && date.getDay() !== 6
  }

  isDateValid() {
    let element: Element = window.document.getElementsByClassName('time-input')[0];
    if(!element){
      return null;
    }
    const date = moment(element['value'], Constants.DATE_FORMAT, true);
    if (date.isValid() && date.day() !== 0 && date.day() !== 6) {
      return null;
    }

    return {
      date: true
    }
  }

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('lt');
  }
}
