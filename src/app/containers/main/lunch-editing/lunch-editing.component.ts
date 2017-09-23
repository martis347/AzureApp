import {Component} from '@angular/core';

@Component({
  selector: 'app-lunch-editing',
  templateUrl: './lunch-editing.component.html',
  styleUrls: ['./lunch-editing.component.css']
})
export class LunchEditingComponent {
  orderDetails: OrderDetails = {
    providers: [{
      name: '',
      categories: [{
        name: '',
        dishes: [{
          sideDishes: [''],
          mainDishes: [''],
          price: 0
        }]
      }]
    }],
    orderUntil: '10:00',
    freeOfChange: false,
    comment: ''
  };
  step = 0;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  addProvider() {
    console.log(this.orderDetails);
    this.orderDetails.providers.push({
      name: '',
      categories: [{
        name: '',
        dishes: [{
          sideDishes: [''],
          mainDishes: [''],
          price: 0
        }]
      }]
    });
  }

  deleteProvider(provider) {
    this.orderDetails.providers.splice(this.orderDetails.providers.indexOf(provider), 1);
  }
}

export class OrderDetails {
  providers: Provider[];
  orderUntil: string;
  freeOfChange: boolean;
  comment: string;
}

export class Provider {
  name: string;
  categories: Category[];
}

export class Category {
  name: string;
  dishes: Dish[];
}

export class Dish {
  sideDishes: string[];
  mainDishes: string[];
  price: number;
}
