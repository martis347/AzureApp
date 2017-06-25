import {Component, Input} from '@angular/core';
import {MdSidenav} from '@angular/material';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  @Input() sidenav: MdSidenav;
  @Input() text: string;

  constructor() {
    this.text = this.text ? this.text : 'Material UI';
  }

}
