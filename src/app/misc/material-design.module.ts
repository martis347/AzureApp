import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdListModule, MdMenuModule, MdToolbarModule, MdSidenavModule,
  MdSlideToggleModule, MdChipsModule, MdAutocompleteModule, MdInputModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdCardModule, MdCheckboxModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule,
  MdSnackBarModule, MdSliderModule, MdExpansionModule, MdIconModule, MdTooltipModule, MdFormFieldModule,
  MdButtonToggleModule, MdGridListModule, MdPaginatorModule, MdRadioModule, MdRippleModule, MdSelectModule,
  MdSortModule, MdTableModule, MdTabsModule, MdCommonModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

const modules: any[] = [
  ReactiveFormsModule,
  CdkTableModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule ,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdFormFieldModule,
  MdCommonModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MDModule {
}
