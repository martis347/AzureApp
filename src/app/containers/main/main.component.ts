import {Component, ViewChild} from '@angular/core';
import {Hammer} from "hammerjs";
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'main-component',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  @ViewChild(MdSidenav) sidenav : MdSidenav;

  onSwipeLeft(){
    this.sidenav.close();
  }
}
