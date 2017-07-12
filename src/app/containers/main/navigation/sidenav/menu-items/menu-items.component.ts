import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';
import {Constants} from "../../../../../misc/constants";
import Moment = moment.Moment;
import {MdDialog} from "@angular/material";
import {WeekChangingModal} from "../../../modals/week-changing/week-changing.component";

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent implements OnInit{
  @Input() showingSettings: boolean;
  startingWeek: Moment;
  days: Object[] = [
    {'id': 0, 'displayName': 'Monday'},
    {'id': 1, 'displayName': 'Tuesday'},
    {'id': 2, 'displayName': 'Wednesday'},
    {'id': 3, 'displayName': 'Thursday'},
    {'id': 4, 'displayName': 'Friday'}
  ];

  onClick(day): void {
    this.router.navigate(['/lunch', moment(this.startingWeek).add(day.id, 'days').format(Constants.DATE_FORMAT)]);
  }

  onWeekChange() {
    let dialogRef = this.dialog.open(WeekChangingModal);
    dialogRef.afterClosed().subscribe(result => {
      if(moment(result, Constants.DATE_FORMAT).isValid()){
        this.router.navigate(['/lunch', result]);
      }
    });
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let day = params['day'];
    });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MdDialog) {
    this.activatedRoute.params.subscribe(params => {
      this.startingWeek = moment(params['date'], Constants.DATE_FORMAT).startOf('isoWeek');
    });
  }
}
