import {Component, AfterViewChecked, ViewChild} from '@angular/core';
import {StorageService} from './services/storage.service';
import {Router} from '@angular/router';
import {MdSidenav} from '@angular/material';
import {Utilities} from './misc/utilities';
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewChecked {
  @ViewChild(MdSidenav) sidenav:  MdSidenav;

  constructor(private storage: StorageService, private router: Router) {

    if (!Utilities.IsSignedIn(storage)) {
      this.storage.RemoveItem('access_token');
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

  onSwipeLeft() {
    this.sidenav.close();
  }
}
