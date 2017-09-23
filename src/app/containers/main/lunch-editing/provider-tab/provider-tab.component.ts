import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Provider} from '../../../../models/Provider';

@Component({
  selector: 'provider-tab',
  templateUrl: './provider-tab.component.html',
  styleUrls: ['./provider-tab.component.css']
})
export class ProviderTabComponent {
  @Input() provider: Provider;
  @Input() index: number;
  @Input() step: number;
  @Output() stepChange: EventEmitter<number> = new EventEmitter();
  categories = [{
    name: '',
    dishes: [{
      name: '',
      price: ''
    }]
  }];
  constructor() { }

  nextStep() {
    this.stepChange.emit(this.step + 1);
  }

  prevStep() {
    this.stepChange.emit(this.step - 1);
  }

  setStep() {
    this.stepChange.emit(this.index);
  }

  addCategory() {
    this.categories.push({
      name: '',
      dishes: [{
        name: '',
        price: ''
      }]
    });
  }

  onCategoryDelete(category) {
    this.categories.splice(this.categories.indexOf(category), 1) ;
  }

}
