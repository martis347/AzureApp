import { Component } from '@angular/core';
import {Constants} from '../../../../misc/constants';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'day-changing',
  templateUrl: './day-changing.component.html',
  styleUrls: ['./day-changing.component.css']
})
export class DayChangingComponent {
  days = Constants.DAYS_OF_WEEK;

  constructor(public dialogRef: MdDialogRef<DayChangingComponent>) {
  }

  onDayClick(day) {
    this.dialogRef.close(day);
  }
}
