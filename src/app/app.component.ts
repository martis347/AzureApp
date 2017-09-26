import {Component, AfterViewChecked, ViewChild} from '@angular/core';
import {StorageService} from './services/storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MdSidenav, MdSnackBar} from '@angular/material';
import {Utilities} from './misc/utilities';
import {ContentComponent} from "./containers/main/content/content.component";
import * as moment from 'moment';
import {OrderStateService} from "./services/order-state.service";
import {HelperService} from "./services/helper.service";
import {SubscribeService} from "./services/subscribe.service";
import {SubscribeAction} from "./models/SubscribeAction";
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
    private orderStateService: OrderStateService,
    private subscribeService: SubscribeService) {

    if (!Utilities.IsSignedIn(storage)) {
      this.storage.RemoveItem('access_token');
      this.router.navigate(['/login']);
    }

    this.canOrder = () => {
      return orderStateService.canOrder(moment(helperService.getDateFromRoute('date')).format('dddd'));
    };

    this.subscribeService.Subscribe(SubscribeAction.ON_ORDER_SAVING_START).subscribe(() => {
      this.isSavingOrder = true;
    });
    this.subscribeService.Subscribe(SubscribeAction.ON_ORDER_SAVING_END).subscribe(() => {
      this.onDone();
    });
    this.subscribeService.Subscribe(SubscribeAction.ON_ORDER_SAVING_ERROR).subscribe(params => {
      this.onError(params);
    });
  }

  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

  onCheckClick() {
    this.subscribeService.DoAction(SubscribeAction.ON_SUBMIT_ORDER);
  }

  private onDone() {
    this.isSavingOrder = false;
  }

  onError(params) {
    this.snackBar.open(params.error.message || 'An error has occurred while processing your order.', 'OK');
    this.isSavingOrder = false;
  };

  onSwipeLeft() {
    this.sidenav.close();
  }
}
