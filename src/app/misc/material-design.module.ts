import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdListModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdSlideToggleModule, MdChipsModule, MdAutocompleteModule, MdInputModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdCardModule, MdCheckboxModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule,
  MdSnackBarModule, MdSliderModule, MdAccordion, MdExpansionModule, MdIconModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

const modules: any[] = [
  ReactiveFormsModule,
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdListModule,
  MdCheckboxModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdInputModule,
  MdMenuModule,
  MdAutocompleteModule,
  MdChipsModule,
  MdSlideToggleModule,
  MdDialogModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdNativeDateModule,
  MdSnackBarModule,
  MdSliderModule,
  MdExpansionModule,
  MdIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MDModule {
}
