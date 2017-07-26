import {Component, Inject} from "@angular/core";
import {FormControl, ValidatorFn, Validators, AbstractControl} from "@angular/forms";
import {PeopleService} from "../../../../services/api/people.service";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {StorageService} from "../../../../services/storage.service";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'name-changing',
  templateUrl: 'name-changing.component.html',
  styleUrls: ['name-changing.component.css']
})
export class NameChangingComponent {
  loadingPeople: boolean = false;
  options = [];
  myControl = new FormControl();
  filteredOptions;

  constructor(private peopleService: PeopleService, private storage: StorageService, @Inject(MD_DIALOG_DATA) public data: any) {
    this.myControl.setValidators(this.emailMatcher.bind(this));

    this.loadingPeople = true;
    this.peopleService.GetPeople()
      .subscribe(people => {
        this.options = people.json().map(p => p.displayName);
        this.filteredOptions = this.myControl.valueChanges
          .startWith(null)
          .map(name => name ? this.filter(name) : this.options);
      }, null, () => {
        this.loadingPeople = false;
      });
  }

  filter(name: string): string[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option));
  }

  emailMatcher (control: AbstractControl): {[key: string]: boolean} {
    return this.options.indexOf(control.value) === -1 && control.dirty ? {'value': true} : null;
  };

  onSubmit() {
    this.storage.AddItem('user', this.myControl.value);
  }
}

