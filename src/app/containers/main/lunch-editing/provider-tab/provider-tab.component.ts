import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Provider} from '../../../../models/Provider';

@Component({
  selector: 'provider-tab',
  templateUrl: './provider-tab.component.html',
  styleUrls: ['./provider-tab.component.css']
})
export class ProviderTabComponent {
  @Input() provider: any;
  @Output() providerChange: EventEmitter<number> = new EventEmitter();
  @Input() index: number;
  @Input() step: number;
  @Output() stepChange: EventEmitter<number> = new EventEmitter();
  @Input() isLastProvider: boolean;
  @Input() isOnlyProvider: boolean;
  @Output() onAddProvider: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteProvider: EventEmitter<any> = new EventEmitter();
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
    this.provider.categories.push({
      name: '',
      dishes: [{
        name: '',
        price: ''
      }]
    });

    this.providerChange.emit(this.provider);
  }

  onCategoryDelete(category) {
    this.provider.categories.splice(this.provider.categories.indexOf(category), 1) ;
    this.providerChange.emit(this.provider);
  }

  addProvider() {
    this.onAddProvider.emit({});
    this.nextStep();
  }

  deleteProvider() {
    this.onDeleteProvider.emit();
  }

}
