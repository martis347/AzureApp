import {Component, AfterViewChecked} from '@angular/core';
import {StorageService} from './services/storage.service';
import {Constants} from './misc/constants';
import {Router} from '@angular/router';
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewChecked {

  constructor(private storage: StorageService, private router: Router) {
    const timestamp = +this.storage.GetItem('authenticated');

    if (timestamp && Date.now() - timestamp >= Constants.HALF_HOUR_IN_MILISECONDS) {
      this.storage.RemoveItem('access_token');
      this.router.navigate(['/login']);
    }
  }

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }
}
