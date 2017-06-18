import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'menu-items',
  templateUrl: 'menu-items.component.html',
  styleUrls: ['menu-items.component.css']
})

export class MenuItemsComponent {
  @Input() showingSettings: boolean;
  @Output() onDayClick: EventEmitter<string> = new EventEmitter();

  days: Object[] = [
    {'id': 'monday', 'displayName': 'Pirmadienis'},
    {'id': 'tuesday', 'displayName': 'Antradienis'},
    {'id': 'wednesday', 'displayName': 'Trečiadienis'},
    {'id': 'thursday', 'displayName': 'Ketvirtadienis'},
    {'id': 'friday', 'displayName': 'Penktadienis'}
  ];

  onClick(day): void {
    this.onDayClick.emit(day);
  }

  constructor() {

  }
}
