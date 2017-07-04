import {Component} from '@angular/core';
import {StorageService} from "../../../../services/storage.service";

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

  getUserName(){
    return this.storage.GetItem('user');
  }

  constructor(private storage: StorageService) {
  }


}
