import {Component, ViewChild} from '@angular/core';
import {Hammer} from 'hammerjs';
import {MdSnackBar} from '@angular/material';
import {ContentComponent} from 'app/containers/main/content/content.component';
import {OrderStateService} from 'app/services/order-state.service';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  @ViewChild(ContentComponent) content: ContentComponent;
  isSavingOrder: boolean;
  canOrder: Function;
  currentDay: string;

  constructor(private snackBar: MdSnackBar, orderStateService: OrderStateService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.currentDay = moment(params['date']).format('dddd');
    });
    this.canOrder = () => {
      return orderStateService.canOrder(this.currentDay);
    };
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


}
