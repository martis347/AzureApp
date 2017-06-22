import {Component, Input, OnInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'items-list',
  templateUrl: 'items-list.component.html',
  styleUrls: ['items-list.component.css']
})

export class ItemsListComponent implements AfterViewChecked {
  @Input() public items: any[] = [];

  ngAfterViewChecked(): void {
    this.isCategorized = !!this.items[0].category;
    if(this.isCategorized){
      this.categories = this.items.map(item => {return item.category}).filter(this.onlyUnique);
      this.displayedCategories = [this.categories[0], 'zalieji']
    }
  }

  isCategorized: boolean;

  categories: string[];
  displayedCategories: string[];

  getItemImage(item){
    let result;
    if(item.dishType === 'side'){
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/side-dish.png';
    } else if(item.dishType === 'main'){
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/main-dish.png';
    } else {
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/combined-dish.png';
    }
    return result;
  }

  getDropdownImage(category){
    let result;
    if(this.displayedCategories.indexOf(category) !== -1){
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/arrow-down2.png';
    } else {
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/arrow-up2.png';
    }
    return result;
  }

  onToggle(event, item){
    if(event.checked){
      this.displayedCategories.push(item);
    } else {
      this.displayedCategories.splice(this.displayedCategories.indexOf(item), 1);
    }
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  itemsByCategory(category){
    return this.items.filter(item => {return item.category === category});
  }

  ngOnInit(){

  }

  constructor(){

  }
}
