import {Component} from '@angular/core';

@Component({
  selector: 'app-lunch-editing',
  templateUrl: './lunch-editing.component.html',
  styleUrls: ['./lunch-editing.component.css']
})
export class LunchEditingComponent {
  providers: object[] = [{
    name: '',
    categories: [{
      name: '',
      dishes: [{
        name: '',
        price: ''
      }]
    }]
  }];
  step = 0;

  details: object = {
    orderUntil: '10:00',
    freeOfChange: false,
    comment: ''
  };

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  addProvider() {
    this.providers.push({
      name: '',
      categories: [{
        name: '',
        dishes: [{
          name: '',
          price: ''
        }]
      }]
    });
  }

  deleteProvider(provider) {
    this.providers.splice(this.providers.indexOf(provider), 1);
  }
}
