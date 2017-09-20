import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})

export class StepperComponent {
  percentLoaded = 0;
  showStepper = false;
  constructor(private activatedRoute: ActivatedRoute) {
    const intervalValue = this.activatedRoute.snapshot.queryParams['q'] ? 2 : 0.05;

    setInterval(() => this.percentLoaded += intervalValue, 10);
  }

  start = () => {
    this.showStepper = true;
  }

}
