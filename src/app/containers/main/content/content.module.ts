import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {
  MdCheckboxModule, MdCardModule, MdInputModule, MdProgressSpinnerModule,
  MdProgressBarModule, MdListModule
} from '@angular/material';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdListModule,
    MdInputModule,
  ],
  declarations: [
    ContentComponent
  ],
  providers: [],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
