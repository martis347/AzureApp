import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdListModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdSlideToggleModule, MdChipsModule, MdAutocompleteModule, MdInputModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdCardModule, MdCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
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
    MdSlideToggleModule
  ],
  exports: [
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
    MdSlideToggleModule
  ]
})
export class MDModule {
}
