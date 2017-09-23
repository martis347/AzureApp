import {Component, AfterViewChecked, ViewChild} from '@angular/core';
import {StorageService} from './services/storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MdSidenav, MdSnackBar} from '@angular/material';
import {Utilities} from './misc/utilities';
import {ContentComponent} from "./containers/main/content/content.component";
import * as moment from 'moment';
import {OrderStateService} from "./services/order-state.service";
import {HelperService} from "./services/helper.service";
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewChecked {
  @ViewChild(MdSidenav) sidenav:  MdSidenav;
  @ViewChild(ContentComponent) content: ContentComponent;
  isSavingOrder: boolean;
  canOrder: Function;

  constructor(
    private helperService: HelperService,
    private snackBar: MdSnackBar,
    private storage: StorageService,
    private router: Router,
    private orderStateService: OrderStateService) {

    if (!Utilities.IsSignedIn(storage)) {
      this.storage.RemoveItem('access_token');
      this.router.navigate(['/login']);
    }

    this.canOrder = () => {
      return orderStateService.canOrder(moment(helperService.getDateFromRoute('date')).format('dddd'));
    };
  }

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

  onCheckClick: Function = () => {
    this.isSavingOrder = true;

    const onDone = () => {
      this.isSavingOrder = false;
    };

    const onError = error => {
      this.snackBar.open(error.message || 'An error has occurred while processing your order.', 'OK');
      this.isSavingOrder = false;
    };

    this.content.onConfirmClick(onDone, onError);
  }

  onSwipeLeft() {
    this.sidenav.close();
  }
}
