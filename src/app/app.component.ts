import {Component, AfterViewChecked, ViewChild, Input} from '@angular/core';
import {MdSidenav} from "@angular/material";
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild(MdSidenav) sidenav : MdSidenav;


  ngAfterViewChecked() {
    if (componentHandler) {
      componentHandler.upgradeAllRegistered();
    }
  }

  onSwipeLeft(){
    this.sidenav.close();
  }

  @Input() currentDay: Object;
  showLoader: boolean = false;

  ngOnChanges(changes: any){
    if(changes.currentDay.currentValue){
      this.currentDay = changes.currentDay.currentValue.id;
      this.showLoader = true;
    }

    setTimeout(() => this.showLoader = false, 1200)
  }
}
