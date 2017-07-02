import {Component, Output, EventEmitter} from '@angular/core';
import {DishType} from "../../../../models/DishType.enum";

@Component({
  selector: 'selected-chips',
  templateUrl: 'selected-chips.component.html',
  styleUrls: ['selected-chips.component.css']
})

export class SelectedChipsComponent {
  @Output() price: EventEmitter <number> = new EventEmitter();

  private items: any[] = [];
  private combinedSelected: boolean = false;
  dishTypes: any = DishType;

  public modifyItems(item) {
    if (item.dishType === DishType.Combined) {
      this.items = [];
      this.combinedSelected = true;
      this.items.push({name: item.mainDishes, dishType: DishType.Main});
      this.items.push({name: item.sideDishes, dishType: DishType.Side});

      this.price.emit(item.price);
    } else {
      if (this.combinedSelected) {
        this.items = [];
        this.combinedSelected = false;
      }
      if (item.dishType === DishType.Main) {
        this.items = this.items.filter(item => {
          return item.dishType !== DishType.Main;
        });
        this.items.push(item);
      } else {
        this.items = this.items.filter(item => {
          return item.dishType !== DishType.Side;
        });
        this.items.push(item);
      }

      this.price.emit((this.items[0] ? +this.items[0].price : 0) + (this.items[1] ? +this.items[1].price : 0));
    }
  }

  removeChip(item) {
    if(this.combinedSelected){
      this.items = [];
      this.price.emit(0);
      this.combinedSelected = false;
    }
    this.items.splice(this.items.indexOf(item), 1);
    this.price.emit((this.items[0] ? +this.items[0].price : 0) + (this.items[1] ? +this.items[1].price : 0));
  }

  stripDescription(text){
    const regex = text.match('(^.*)\\(.*\\)$');
    let result = text;
    if(regex && regex[1]){
      result = regex[1];
    }
    return result;
  }

  constructor() {

  }
}
