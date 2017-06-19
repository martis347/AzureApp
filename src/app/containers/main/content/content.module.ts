import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {
  MdCheckboxModule, MdCardModule, MdInputModule, MdProgressSpinnerModule,
  MdProgressBarModule, MdListModule, MdMenuModule, MdButtonModule, MdAutocompleteModule
} from '@angular/material';
import {CommonModule} from "@angular/common";
import {StepperComponent} from "./setup/stepper/stepper.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdListModule,
    MdInputModule,
    MdMenuModule,
    MdAutocompleteModule,
    MdButtonModule
  ],
  declarations: [
    ContentComponent,
    StepperComponent
  ],
  providers: [],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
