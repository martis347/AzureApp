import {Component, ViewChild, ElementRef, NgZone} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {Utilities} from "../../../../misc/utilities";
import {StorageService} from "app/services/storage.service";
import {PeopleService} from "../../../../services/api/people.service";
import {NotificationsService} from "../../../../services/notifications.service";
import {MdDialog} from "@angular/material";
import {SignInComponent} from "../sign-in/sign-in.component";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

declare const gapi: any;

@Component({
  selector: 'stepper-content',
  templateUrl: 'stepper-content.component.html',
  styleUrls: ['stepper-content.component.css']
})

export class StepperContentComponent {
  @ViewChild('stepper') stepper: ElementRef;
  @ViewChild('nameInput') input: ElementRef;
  googleProfile;
  loadingPeople: boolean = false;
  options: any[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  filter(name: string): string[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option));
  }

  constructor(ngZone: NgZone, private router: Router, private storage: StorageService, private peopleService: PeopleService, private notificationsService: NotificationsService, private dialog: MdDialog) {
    window['onSignIn'] = (googleUser) => ngZone.run(() => this.onSignIn(googleUser));
  }

  onNext(){
    if(this.myControl.value){
      if(this.options.indexOf(this.myControl.value) !== -1){
        this.storage.AddItem('user', this.myControl.value);
        this.stepper.nativeElement.MaterialStepper.next();
      } else {
        this.stepper.nativeElement.MaterialStepper.error('Your name must be from the list.');
      }
    } else {
      this.stepper.nativeElement.MaterialStepper.error('You Must Select Your Name');
    }
  }

  public onDone(){
    this.stepper.nativeElement.MaterialStepper.next();

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
  }

  onBack(){
    this.stepper.nativeElement.MaterialStepper.back();
  }

  onSignIn(googleUser){
    this.googleProfile = googleUser;
    this.stepper.nativeElement.MaterialStepper.next();
  }

  public onAccessGrant() {
    const loadPeople = () => {
      this.loadingPeople = true;
      this.peopleService.GetPeople()
        .subscribe(people => {
          this.options = people.json().map(p => p.displayName);
          const name = this.googleProfile.getBasicProfile().getGivenName();
          this.myControl.setValue(name, {emitEvent: true});
          this.filteredOptions = this.myControl.valueChanges
            .startWith(name)
            .map(name => name ? this.filter(name) : this.options.slice());
        }, null, () => {
          this.loadingPeople = false;
        });
    };

    if(this.googleProfile.getGrantedScopes().indexOf('spreadsheets') === -1) {
      let options = new gapi.auth2.SigninOptionsBuilder(
        {'scope': 'email https://www.googleapis.com/auth/spreadsheets'});

      this.googleProfile.grant(options).then(() => {
          this.storage.AddItem('access_token', this.googleProfile.Zi.access_token);
          this.storage.AddItem('authenticated', Date.now().toString());
          this.stepper.nativeElement.MaterialStepper.next();
          loadPeople();
        },
        fail => {
          if(fail.error === 'popup_blocked_by_browser') {
            this.notificationsService.Notify('An authorization pop-up has been blocked. Please allow pop-ups for this site.');
          } else {
            this.notificationsService.Notify(fail.error);
          }
        });
    } else {
      this.storage.AddItem('access_token', this.googleProfile.Zi.access_token);
      this.storage.AddItem('authenticated', Date.now().toString());
      this.stepper.nativeElement.MaterialStepper.next();
      loadPeople();
    }
  }
}
