import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../lunch-editing.component';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categoryData: Category;
  @Input() isLastCategory: boolean;
  @Output() categoryDataChange = new EventEmitter<Category>();
  @Output() deleteCategory = new EventEmitter<any>();
  expanded = true;
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: any) {
    return index;
  }

  addDish() {
    this.categoryData.dishes.push({
      sideDishes: [''],
      mainDishes: [''],
      price: 0
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

  onDishValueChange(newValue, dishes) {
    if (newValue.key === '+') {
      if (dishes.length < 3) {
        dishes.push('');
      }
      newValue.preventDefault();
    } else if (newValue.key === '-') {
      if (dishes.length > 1) {
        dishes.pop();
      }
      newValue.preventDefault();
    }
  }

}
