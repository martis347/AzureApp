import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Hammer} from "hammerjs";
import {MdSidenav} from "@angular/material";
import {ContentComponent} from "app/containers/main/content/content.component";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  @ViewChild(MdSidenav) sidenav : MdSidenav;
  @ViewChild(ContentComponent) content : ContentComponent;

  onCheckClick: Function = () => {
    this.content.onConfirmClick();
  };

  onSwipeLeft(){
    this.sidenav.close();
  }
}
