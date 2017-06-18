import {Component} from '@angular/core';

@Component({
  selector: 'sidenav-content',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SidenavComponent {
  showingSettings: boolean = false;
  toggleDropdown(): void{
    this.showingSettings = !this.showingSettings;
  }

  constructor() {
  }


}
