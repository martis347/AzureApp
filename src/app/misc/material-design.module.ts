import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdListModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdSlideToggleModule, MdChipsModule, MdAutocompleteModule, MdInputModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdCardModule, MdCheckboxModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule,
  MdSnackBarModule, MdSliderModule
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
  MdSliderModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MDModule {
}
