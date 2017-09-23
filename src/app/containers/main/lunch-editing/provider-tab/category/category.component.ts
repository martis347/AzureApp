import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryData;
  @Output() categoryDataChange = new EventEmitter<object>();
  @Output() deleteCategory = new EventEmitter<any>();
  expanded = true;
  constructor() { }

  ngOnInit() {
  }

  addDish() {
    this.categoryData.dishes.push({
      name: '',
      price: ''
    });

    this.categoryDataChange.emit(this.categoryData);
  }

  removeDish(dish) {
    this.categoryData.dishes.splice(this.categoryData.dishes.indexOf(dish), 1);

    this.categoryDataChange.emit(this.categoryData);
  }

  removeCategory() {
    this.deleteCategory.emit({});
  }

}
