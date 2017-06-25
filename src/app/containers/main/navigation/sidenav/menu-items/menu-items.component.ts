import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import * as moment from 'moment';
import {Constants} from "../../../../../misc/constants";

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent implements OnInit{
  @Input() showingSettings: boolean;

  days: Object[] = [
    {'id': 0, 'displayName': 'Pirmadienis'},
    {'id': 1, 'displayName': 'Antradienis'},
    {'id': 2, 'displayName': 'Trečiadienis'},
    {'id': 3, 'displayName': 'Ketvirtadienis'},
    {'id': 4, 'displayName': 'Penktadienis'}
  ];

  onClick(day): void {
    this.router.navigate(['/lunch', moment().startOf('isoWeek').add(day.id, 'days').format(Constants.DATE_FORMAT)]);
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let day = params['day'];
      console.log(day);
    });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
}
