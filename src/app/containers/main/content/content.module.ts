import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {
  MdCheckboxModule, MdCardModule, MdInputModule, MdProgressSpinnerModule,
  MdProgressBarModule, MdListModule, MdMenuModule, MdButtonModule, MdAutocompleteModule, MdChipsModule,
  MdSlideToggleModule
} from '@angular/material';
import {CommonModule} from "@angular/common";
import {StepperComponent} from "./setup/stepper/stepper.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ItemsListComponent} from "./items-list/items-list.component";
import {SelectedChipsComponent} from "./selected-chips/selected-chips.component";

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
    MdButtonModule,
    MdChipsModule,
    MdSlideToggleModule
  ],
  declarations: [
    ContentComponent,
    StepperComponent,
    ItemsListComponent,
    SelectedChipsComponent
  ],
  providers: [],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
