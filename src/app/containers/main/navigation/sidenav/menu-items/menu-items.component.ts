import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as moment from 'moment';
import {Constants} from '../../../../../misc/constants';
import {MdDialog} from '@angular/material';
import {NameChangingComponent} from '../../../modals/name-changing/name-changing.component';
import {DayChangingComponent} from '../../../modals/day-changing/day-changing.component';
import {HelperService} from "../../../../../services/helper.service";

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent implements OnInit {
  @Input() showingSettings: boolean;
  days: Object[] = [
    {'id': 0, 'displayName': 'Monday'},
    {'id': 1, 'displayName': 'Tuesday'},
    {'id': 2, 'displayName': 'Wednesday'},
    {'id': 3, 'displayName': 'Thursday'},
    {'id': 4, 'displayName': 'Friday'}
  ];

  onClick(day): void {
    this.router.navigate(['/lunch', moment(this.helperService.getDateFromRoute('date'), Constants.DATE_FORMAT).startOf('isoWeek').add(day.id, 'days').format(Constants.DATE_FORMAT)]);
  }

  onMenuChange() {
    const dialogRef = this.dialog.open(DayChangingComponent, {disableClose: false, data: {cancellable: true}, width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.router.navigate(['/edit', result]) ;
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const day = params['day'];
    });
  }

  onNameChange() {
    this.dialog.open(NameChangingComponent, {disableClose: false, data: {cancellable: true}, width: '400px', height: '210px'});
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dialog: MdDialog, private helperService: HelperService) {
  }
}
