import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sidenav-content',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SidenavComponent {
  @Output() onDayClick: EventEmitter<Object> = new EventEmitter();

  onDayClickEvent(event): void {
    this.onDayClick.emit(event);
  }

  showingSettings: boolean = false;

  toggleDropdown(): void{
    this.showingSettings = !this.showingSettings;
  }

  constructor() {
  }


}
