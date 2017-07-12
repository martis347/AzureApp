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

export class StepperComponent implements OnInit{
  @ViewChild('stepper') stepper: ElementRef;
  @ViewChild('nameInput') input: ElementRef;
  googleProfile;
  loadingPeople: boolean = false;
  options: any[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {

  }

  filter(name: string): string[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option));
  }

  constructor(ngZone: NgZone, private router: Router, private storage: StorageService, private peopleService: PeopleService, private notificationsService: NotificationsService) {
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

  onDone(){
    this.stepper.nativeElement.MaterialStepper.next();

    this.router.navigate(['/lunch', Utilities.GetTodaysDate()]);
  }

  onBack(){
    this.stepper.nativeElement.MaterialStepper.back();
  }

  onSignIn(googleUser){
    this.googleProfile = googleUser;
    if(this.storage.GetItem('user')) {
      this.onSessionExpired(googleUser);
    } else {
      this.stepper.nativeElement.MaterialStepper.next();
    }
  }

  public onAccessGrant() {
    const loadPeople = () => {
      this.loadingPeople = true;
      this.peopleService.GetPeople()
        .finally(() => {
          this.loadingPeople = false;
        })
        .subscribe(people => {
          this.options = people.json().map(p => p.displayName);
          const name = this.googleProfile.getBasicProfile().getGivenName();
          this.myControl.setValue(name, {emitEvent: true});
          this.filteredOptions = this.myControl.valueChanges
            .startWith(name)
            .map(name => name ? this.filter(name) : this.options.slice());
        });
    };

    if(this.googleProfile.getGrantedScopes().indexOf('spreadsheets') === -1) {
      let options = new gapi.auth2.SigninOptionsBuilder(
        {'scope': 'email https://www.googleapis.com/auth/spreadsheets'});

        this.googleProfile.grant(options).then(() => {
            this.storage.AddItem('access_token', this.googleProfile.Zi.access_token);
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
        this.stepper.nativeElement.MaterialStepper.next();
        loadPeople();
    }
  }

  private onSessionExpired(googleUser){
    this.storage.AddItem('access_token', googleUser.Zi.access_token);
  }
}
