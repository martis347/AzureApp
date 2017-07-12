import {Component, ViewChild, ElementRef, NgZone, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {Utilities} from "../../../../misc/utilities";
import {StorageService} from "app/services/storage.service";
import {PeopleService} from "../../../../services/api/people.service";
import {NotificationsService} from "../../../../services/notifications.service";

declare const gapi: any;

@Component({
  selector: 'stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})

export class StepperComponent {
  percentLoaded: number = 0;
  showStepper: boolean = false;
  constructor() {
    setInterval(() => this.percentLoaded += 0.05, 10);
  }

  start = () => {
    this.showStepper = true;
  }

}
