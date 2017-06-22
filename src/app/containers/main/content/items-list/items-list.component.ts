import {Component, Input, OnInit, AfterViewChecked, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'items-list',
  templateUrl: 'items-list.component.html',
  styleUrls: ['items-list.component.css']
})

export class ItemsListComponent implements OnInit{
  @Input() public items: any[] = [];
  @Output() public onSelect: EventEmitter<any> = new EventEmitter();

  isCategorized: boolean;

  categories: string[];
  displayedCategories: string[];
  subItems: any[] = [];
  selectedItem: any;

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
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/arrow-up2.png';
    } else {
      result = 'https://raw.githubusercontent.com/martis347/AzureApp/master/src/resources/arrow-down2.png';
    }
    return result;
  }

  onToggle(item){
    if(this.displayedCategories.indexOf(item) == -1){
      this.displayedCategories.push(item);
    } else {
      this.displayedCategories.splice(this.displayedCategories.indexOf(item), 1);
    }
  }

  onItemClick(item) {
    this.subItems = item.side;
    if(item.dishType !== 'combined'){
      this.onSelect.emit(item);
    }
    else if(this.subItems && this.subItems.length > 1){
      this.selectedItem = item;
    } else {
      this.onSelect.emit(Object.assign({}, item, {
        side: this.subItems ? this.subItems[0] : undefined,
        main: item.main ? item.main[0] : undefined
      }));
    }
  }

  onSubItemClick(subitem) {
    this.onSelect.emit(Object.assign({}, this.selectedItem, {
      side: subitem,
      main: this.selectedItem.main[0]
    }));
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  itemsByCategory(category){
    let result;
    if(this.isCategorized){
      result = this.items.filter(item => {return item.category === category});
    } else {
      result = this.items;
    }


    return result;
  }

  ngOnInit(){
    this.isCategorized = !!this.items[0].category;
    if(this.isCategorized){
      this.categories = this.items.map(item => {return item.category}).filter(this.onlyUnique);
      this.displayedCategories = [this.categories[0]]
    } else {
      this.categories = ['Žalieji'];
      this.displayedCategories = [this.categories[0]]
    }
  }

  constructor(){

  }
}
