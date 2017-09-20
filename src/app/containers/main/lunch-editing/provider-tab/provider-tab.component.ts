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

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
