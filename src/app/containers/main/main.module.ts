import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MdButtonModule, MdListModule, MdMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentModule} from './content/content.module';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MdButtonModule,

    ContentModule,
    MdListModule,
    MdMenuModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
