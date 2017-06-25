import {Component, Input} from '@angular/core';
import {MdSidenav} from '@angular/material';
import {Utilities} from "../../../../misc/utilities";
import {ActivatedRoute} from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  @Input() sidenav: MdSidenav;
  @Input() text: string;
  weeksAhead: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    if (!this.text) {
      this.activatedRoute.params.subscribe(params => {
        this.text = Utilities.GetDisplayFormat(params['date']);
        this.weeksAhead = moment(params['date']).diff(moment().startOf('isoWeek'), 'weeks');

        if(this.weeksAhead !== 0) {
          if(Math.abs(this.weeksAhead) === 1){
            this.text += ' (' + Math.abs(this.weeksAhead) + ' week ' + (this.weeksAhead > 0 ? 'ahead' : 'behind') + ')';
          } else {
            this.text += ' (' + Math.abs(this.weeksAhead) + ' weeks ' + (this.weeksAhead > 0 ? 'ahead' : 'behind') + ')';
          }
        }
      });
    }
  }
}
