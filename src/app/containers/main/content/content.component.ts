import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SelectedChipsComponent} from "./selected-chips/selected-chips.component";
import {MdSnackBar} from "@angular/material";
import {ProvidersService} from "app/services/api/providers.service";
import * as moment from 'moment';
import {Provider} from "../../../models/Provider";

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})

export class ContentComponent {
  @ViewChild('chips') chips: SelectedChipsComponent;

  currentDay: string = 'monday';
  selection: any = {price: 0, items: []};
  loadingProviders: boolean = false;
  providerA: Provider;
  providerB: Provider;

  constructor(private activatedRoute: ActivatedRoute, private snackBar: MdSnackBar, private providersService: ProvidersService) {
    this.activatedRoute.params.subscribe(params => {
      this.currentDay = params['date'];
      this.updateProviders();
    });
  }

  private updateProviders() {
    this.providerA = null;
    this.providerB = null;
    this.loadingProviders = true;
    this.providersService.GetProviders(moment(this.currentDay).format('dddd') )
      .finally(() => this.loadingProviders = false)
      .subscribe(
        response => {
          let providers: any[] = response.json();
          this.providerA = providers[0];
          this.providerB = providers[1];
        },
        error => {
          this.snackBar.open(error.message, 'OK');
        });
  }
  onSelectionChange(newSelection){
    this.selection = newSelection;
  }

  public onConfirmClick() {
    this.snackBar.open('Successfully Ordered ' + this.selection.items[0].name + (this.selection.items[1] ? ' & ' + this.selection.items[1].name : '') + ' for ' + this.selection.price + '€', 'OK', {duration: 10000} );
  }
}
