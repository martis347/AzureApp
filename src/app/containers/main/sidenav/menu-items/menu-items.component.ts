import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent {
  @Input() showingSettings: boolean;
  constructor() {

  }
}
