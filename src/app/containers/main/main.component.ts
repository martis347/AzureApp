import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Hammer} from "hammerjs";
import {MdSidenav, MdSnackBar} from "@angular/material";
import {ContentComponent} from "app/containers/main/content/content.component";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  constructor(private snackBar: MdSnackBar) {}
  @ViewChild(MdSidenav) sidenav : MdSidenav;
  @ViewChild(ContentComponent) content : ContentComponent;
  isSavingOrder: boolean;

  onCheckClick: Function = () => {
    this.isSavingOrder = true;

    const onDone = () => {
      this.isSavingOrder = false;
    };

    const onError = () => {
      this.snackBar.open('An error has occurred while processing your order.', 'OK');
    };

    this.content.onConfirmClick(onDone, onError);
  };

  onSwipeLeft(){
    this.sidenav.close();
  }
}
