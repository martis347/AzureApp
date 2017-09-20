import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch-editing',
  templateUrl: './lunch-editing.component.html',
  styleUrls: ['./lunch-editing.component.css']
})
export class LunchEditingComponent implements OnInit {

  providers: object = [{
    name: ''
  }];
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
