import {Component, Input, ViewChild} from '@angular/core';
import {UsersService} from "../../../services/api/users.service";

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})

export class ContentComponent {
  @Input() currentDay: Object;
  showLoader: boolean = false;

  ngOnChanges(changes: any){
    if(changes.currentDay.currentValue){
      this.currentDay = changes.currentDay.currentValue.id;
      this.showLoader = true;
    }

    setTimeout(() => this.showLoader = false, 1200)
  }
  constructor(usersService: UsersService) { }

  

}
