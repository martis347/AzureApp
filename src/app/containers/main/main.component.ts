import {Component, ViewChild} from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {MdSidenav} from "@angular/material";
import {Hammer} from "hammerjs";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  @ViewChild(ContentComponent) appElement : ContentComponent;
  @ViewChild(MdSidenav) sidenav : MdSidenav;
  onDayClick(newDay): void {
    this.selectedDay = newDay;
  }

  onSwipeLeft(){
    this.sidenav.close();
  }

  selectedDay;

  constructor() {
  }
}
