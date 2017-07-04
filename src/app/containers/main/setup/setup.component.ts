import {AfterViewInit, Component, NgZone} from '@angular/core';
import {Hammer} from "hammerjs";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {Utilities} from "../../../misc/utilities";

@Component({
  selector: 'setup',
  templateUrl: 'setup.component.html',
  styleUrls: ['setup.component.css']
})

export class SetupComponent {
  hideStepper: boolean = true;
  value: number = 0;
  interval;

  constructor(private storage: StorageService, private router: Router) {
    if(this.storage.GetItem('user')) {
      this.interval = setInterval(() => {
        this.value += 0.2;
        if(this.value > 100) {
          this.redirect();
        }
      }, 5);
    } else {
      this.hideStepper = false;
    }
  }

  redirect() {
    clearInterval(this.interval);
    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
  }
}
