import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {MdCheckboxModule, MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    MdCheckboxModule,
    MdCardModule,
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
