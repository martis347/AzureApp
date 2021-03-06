import {Component, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SelectedChipsComponent} from './selected-chips/selected-chips.component';
import {MdDialog, MdSnackBar} from '@angular/material';
import {ProvidersService} from 'app/services/api/providers.service';
import * as moment from 'moment';
import {DishesService} from '../../../services/api/dishes.service';
import {DishType} from '../../../models/DishType.enum';
import {StorageService} from '../../../services/storage.service';
import {OrderStateService} from '../../../services/order-state.service';
import {TotalOrdersComponent} from '../modals/total-orders/total-orders.component' ;
import {SubscribeService} from 'app/services/subscribe.service';
import {SubscribeAction} from '../../../models/SubscribeAction';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})

export class ContentComponent implements OnDestroy{
  @ViewChild('chips') chips: SelectedChipsComponent;

  currentDay: string;
  selection: any = {price: 0, items: []};
  loadingProviders = false;
  loadingCurrentOrder = false;
  currentOrder;
  providerA: any;
  providerB: any;
  canOrder: Function;
  loadingOrderTotals = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MdSnackBar,
    private orderStateService: OrderStateService,
    public dialog: MdDialog,
    private providersService: ProvidersService,
    private dishesService: DishesService,
    private storageService: StorageService,
    private subscribeService: SubscribeService) {
    this.activatedRoute.params.subscribe(params => {
      this.currentDay = moment(params['date']).format('dddd');
      this.updateProviders();
      this.updateCurrentOrder();
      if (this.chips) {
        this.chips.reset();
        this.selection.price = 0;
        this.selection.items = [];
      }
      this.canOrder = () => {
        return orderStateService.canOrder(this.currentDay);
      };
    });

    this.subscribeService.Subscribe(SubscribeAction.ON_SUBMIT_ORDER)
      .subscribe(() => {
        this.onConfirmClick();
      }) ;
  }

  ngOnDestroy() {
    this.subscribeService.Unsubscribe(SubscribeAction.ON_SUBMIT_ORDER);
  }

  private updateProviders() {
    this.providerA = null;
    this.providerB = null;
    this.loadingProviders = true;
    this.providersService.GetProviders(this.currentDay).subscribe(
      response => {
        const providers: any[] = response.json();
        this.providerA = providers[0];
        this.providerB = providers[1];
      },
      error => {
        if (!this.snackBar._openedSnackBarRef) {
          this.snackBar.open(error.json().message, 'OK');
        }
        this.loadingProviders = false;
      },
      () => {
        this.loadingProviders = false;
      });
  }

  private updateCurrentOrder() {
    this.loadingCurrentOrder = true;
    this.dishesService.GetOrderedDishes(this.currentDay, this.storageService.GetItem('user'))
      .subscribe(result => {
        this.currentOrder = result.json();
      }, error => {
        if (!this.snackBar._openedSnackBarRef) {
          this.snackBar.open(error.json().message, 'OK');
        }
        this.loadingCurrentOrder = false;
        this.currentOrder = null;
      }, () => {
        this.loadingCurrentOrder = false;
      });
  }

  onSelectionChange(newSelection) {
    this.selection = newSelection;
  }

  private onConfirmClick() {
    this.subscribeService.DoAction(SubscribeAction.ON_ORDER_SAVING_START);

    const mainDish = this.selection.items.find(i => i.dishType === DishType.Main);
    const sideDish = this.selection.items.find(i => i.dishType === DishType.Side);
    const mainDishObject = mainDish ? {
      name: mainDish.name,
      provider: mainDish.providerName
    } : null;

    const sideDishObject = sideDish ? {
      name: sideDish.name,
      provider: sideDish.providerName
    } : null;

    const orderObservable = this.dishesService.OrderDish(this.currentDay, {
      price: this.selection.price,
      mainDish: mainDishObject,
      sideDish: sideDishObject,
      username: this.storageService.GetItem('user')
    });

    orderObservable.subscribe(() => {
      if (this.selection.items.length === 0) {
        this.snackBar.open('Successfully cleared your order.', 'OK', {duration: 10000} );

      } else {
        this.snackBar.open(
          'Successfully Ordered ' +
          this.selection.items[0].name +
          (this.selection.items[1] ? ' & ' + this.selection.items[1].name : '') +
          ' for ' + this.selection.price + '€', 'OK',
          {duration: 10000} );
      }
      this.updateCurrentOrder();
      this.chips.reset();
      this.selection.price = 0;
      this.selection.items = [];
    }, this.onError.bind(this), this.onDone.bind(this));

    return orderObservable;
  }

  private onDone() {
    this.subscribeService.DoAction(SubscribeAction.ON_ORDER_SAVING_END);
  }

  private onError(error) {
    this.subscribeService.DoAction(SubscribeAction.ON_ORDER_SAVING_ERROR, {error: error}) ;
  }

  onViewTotalOrders() {
    this.loadingOrderTotals = true;
    const orderTotals = this.dishesService.GetOrdersCount(this.currentDay);
    orderTotals.subscribe(() => {

      this.dialog.open(TotalOrdersComponent, {disableClose: false, data: orderTotals});
      this.loadingOrderTotals = false;
    });
  }
}
